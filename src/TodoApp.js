import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";
import "./styles.css";
import logo from "./logo.svg";

export default function TodoApp() {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />

      <div className="container">
        <h1>Todo List</h1>
        <br></br>
        <AddTodo />
        <TodoList />
        <VisibilityFilters />
      </div>
    </div>
  );
}
