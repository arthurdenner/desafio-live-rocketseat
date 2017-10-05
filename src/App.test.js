import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import App from "./App";
import Todos from "./Todos";

describe("app component", () => {
  const wrapper = shallow(<App />);

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });

  it("should contain a h1 element", () => {
    expect(wrapper.find("h1").length).toEqual(1);
  });

  it("should contain a h1 element with the `Desafio Live Rocket Seat` title", () => {
    const h1 = wrapper.find("h1").first();

    expect(h1.text()).toEqual("Desafio Live Rocket Seat");
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should contain a todos component", () => {
    expect(wrapper.find(Todos).length).toEqual(1);
  });
});
