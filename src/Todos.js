import React from "react";
import PropTypes from "prop-types";
import { isEmpty } from "lodash/fp";

const Todos = ({ todos }) =>
  isEmpty(todos) ? (
    <div className="emptyTodos">There is no itens in the list</div>
  ) : (
    <ul>{todos.map(todo => <li key={todo.id}>{todo.text}</li>)}</ul>
  );

Todos.propTypes = {
  todos: PropTypes.array.isRequired
};

export default Todos;
