import React, {useState} from "react";


import './add-todo-item.scss';

function AddTodoItem({addTodo}: {addTodo: Function}) {
  const [newTodo, setNewTodo] = useState('');
    return (
        <div>
          <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
          <button onClick={() => addTodo(newTodo)}>add</button>
        </div>
    );
}

export default AddTodoItem;
