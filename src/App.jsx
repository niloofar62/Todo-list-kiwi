import './App.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { useState } from 'react';

function App() {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    const todoObj = {
      id: Date.now(),
      title: newTodo,
    };
    setTodos([...todos, todoObj]);
    setNewTodo('');
  };

  return (
    <div>
      <h1>My Todos</h1>
      <TodoForm newTodo={newTodo} setNewTodo={setNewTodo} onAddTodo={handleAddTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;

