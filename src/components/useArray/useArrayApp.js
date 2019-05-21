import React, { useState } from "react";
import useArray from "components/useArray/useArray";
import useInputState from "components/useInputState/useInputState";

const UseArrayApp = () => {
  const todos = useArray(["First word", "Second"]);
  const [newTodo, updateNewTodo, resetNewTodo] = useInputState("");

  const handleSubmit = event => {
    event.preventDefault();
    todos.add(newTodo);
    resetNewTodo();
  };
  return (
    <>
      <h1> Todos </h1>
      <form>
        <input
          type="text"
          placeholder="Add a task"
          value={newTodo}
          onChange={updateNewTodo}
        />
        <button onClick={handleSubmit}> Add </button>
      </form>
      <ul>
        {todos.value.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => todos.removeIndex(index)}> Delete </button>
          </li>
        ))}
      </ul>
      <button onClick={todos.clear}> Clear </button>
    </>
  );
};

export default UseArrayApp;
