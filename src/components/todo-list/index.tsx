import React from 'react';
import './todo-list.scss';

function TodoList({todos, deleteTodo, moveTo}: { todos: string[], deleteTodo: Function, moveTo: Function }) {
  return (
    <div>
      {
        todos.map((todo, i) =>
          <div key={i}>{todo}
            <button onClick={() => moveTo('up', i)} disabled={i === 0}>up</button>
            <button onClick={() => moveTo('down', i)} disabled={i === todos.length - 1}>down</button>
            <button onClick={() => deleteTodo(i)}>x</button>
          </div>)
      }
    </div>
  );
}

export default TodoList;
