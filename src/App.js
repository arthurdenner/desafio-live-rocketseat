import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Todos from "./Todos";

const App = () => (
  <Provider store={store}>
    <div style={{ padding: "0.5em" }}>
      <h1 style={{ marginTop: 0 }}>Live Challenge RocketSeat</h1>
      <Todos />
    </div>
  </Provider>
);

export default App;
