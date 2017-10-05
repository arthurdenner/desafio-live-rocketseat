import React from "react";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";
import Todos from "./Todos";

// configure mock store
const initialState = {
  todos: [
    { id: 1, text: "Watch the live " },
    { id: 2, text: "Do the challenge " }
  ]
};
const mockStore = configureStore();
const store = mockStore(initialState);

// since we are changing props on some tests,
// it's better to initialize the wrapper as a let
// and reinitialize it before each test
let wrapper;

describe("todos component", () => {
  beforeEach(() => {
    wrapper = shallow(<Todos />, { context: { store } }).dive();
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render only one ul element", () => {
    expect(wrapper.find("ul").length).toEqual(1);
  });

  it("should render at least one li element if the todos prop is NOT empty", () => {
    expect(wrapper.find("li").length).toBeGreaterThanOrEqual(1);
  });

  it("should render a div with a className emptyTodos if the todos prop is empty", () => {
    // it's necessary to use setProps to realize the test
    // otherwise, it would consider the prop provided by the connect function
    wrapper.setProps({ todos: [] });

    expect(wrapper.find(".emptyTodos").length).toEqual(1);
  });

  it("should render a text saying that there is no itens if the todos prop is empty", () => {
    // it's necessary to use setProps to realize the test
    // otherwise, it would consider the prop provided by the connect function
    wrapper.setProps({ todos: [] });

    const emptyTodosDiv = wrapper.find(".emptyTodos").first();

    expect(emptyTodosDiv.text()).toEqual("There is no itens in the list");
  });
});
