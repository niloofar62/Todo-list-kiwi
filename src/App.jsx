import './App.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = (title) => {
    const todo = {
      id: Date.now(),
      title: title,
      isCompleted: false,
    };
    setTodoList([...todoList, todo]);
  };

   function completeTodo(id){
    const updateTodos = todoList.map((todo)=>{
      if(todo.id===id){
       return {...todo , isCompleted:true};
      }
      return todo;
    })
    setTodoList(updateTodos);
   }
  
  return (
    <div>
      <h1>My Todos</h1>
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList todoList={todoList} onCompleteTodo={completeTodo} />
    </div>
  );
}

export default App;


