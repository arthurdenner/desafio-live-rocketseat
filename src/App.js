import React, { Component } from "react";
import Todos from "./todos";

const todos = [
  { id: 1, text: "Watch the live " },
  { id: 2, text: "Do the challenge " }
];

const App = () => (
  <div style={{ padding: "1em" }}>
    <h1>Desafio Live Rocket Seat</h1>
    <Todos todos={todos} />
  </div>
);

export default App;
