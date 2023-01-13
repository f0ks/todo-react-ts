import React from 'react';
import './todo-list.scss';

function TodoList({todos, deleteTodo}: { todos: string[] , deleteTodo: Function}) {
  return (
    <div>
      {
        todos.map((todo, i) =>
        <div key={i}>{todo} <button onClick={() => deleteTodo(i)}>x</button></div>)
      }
    </div>
  );
}

export default TodoList;
