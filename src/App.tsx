import React, {useState} from 'react';
import './App.css';
import AddTodoItem from "./components/add-todo-item";
import TodoList from "./components/todo-list";

// TODO setup Eslint

function App() {
  const [todos, setTodos] = useState(['foo', 'bar']);
  const addTodo = (newTodo: string) => {
    setTodos([...todos, newTodo]);
  }

  const moveTo = (direction: 'up' | 'down', index: number) => {
    const newTodos = [...todos];
    const item = newTodos.splice(index, 1);
    newTodos.splice(direction === 'up' ? index - 1 : index + 1, 0, item[0]);
    setTodos(newTodos);
  };

  const deleteTodo = (index: number) => {
    setTodos(todos.filter(todo => todo !== todos[index]))
  };

  return (
    <div className="App">
      <AddTodoItem addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} moveTo={moveTo} />
    </div>
  );
}

export default App;
