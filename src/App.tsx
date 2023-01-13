import React, {useState} from 'react';
import './App.css';
import AddTodoItem from "./components/add-todo-item";
import TodoList from "./components/todo-list";

function App() {
  const [todos, setTodos] = useState(['foo', 'bar']);
  const addTodo = (newTodo: string) => {
    setTodos([...todos, newTodo]);
  }

  const deleteTodo = (index: number) => {
    setTodos(todos.filter(todo => todo !== todos[index]))
  }

  return (
    <div className="App">
      <AddTodoItem addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
