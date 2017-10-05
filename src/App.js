import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Todos from "./Todos";

const App = () => (
  <Provider store={store}>
    <div style={{ padding: "1em" }}>
      <h1>Desafio Live Rocket Seat</h1>
      <Todos />
    </div>
  </Provider>
);

export default App;
