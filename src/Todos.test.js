import React from "react";
import { shallow } from "enzyme";
import Todos from "./Todos";

const todos = [
  { id: 1, text: "Watch the live " },
  { id: 2, text: "Do the challenge " }
];

describe("todos component", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<Todos todos={todos} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("should render only one ul element", () => {
    const wrapper = shallow(<Todos todos={todos} />);

    expect(wrapper.find("ul").length).toEqual(1);
  });

  it("should render at least one li element if the todos prop is NOT empty", () => {
    const wrapper = shallow(<Todos todos={todos} />);

    expect(wrapper.find("li").length).toBeGreaterThanOrEqual(1);
  });

  it("should render a div with a className emptyTodos if the todos prop is empty", () => {
    const wrapper = shallow(<Todos todos={[]} />);

    expect(wrapper.find(".emptyTodos").length).toEqual(1);
  });

  it("should render a text saying that there is no itens if the todos prop is empty", () => {
    const wrapper = shallow(<Todos todos={[]} />);
    const emptyTodosDiv = wrapper.find(".emptyTodos").first();

    expect(emptyTodosDiv.text()).toEqual("There is no itens in the list");
  });
});
