import { useRef } from "react";
import { useState } from "react";

function TodoForm({ onAddTodo }) {
   const [workingTodoTitle, setWorkingTodoTitle] = useState("");

   const todoTitleInput=useRef(null);
//    const todoTitleInput = useRef(null); // null is better than "" for DOM elements

    // function handleAddTodo(event){
    //     event.preventDefault()
    //     //  console.dir(event.target.title.value)
    //     // console.dir(event.target.title)
    //     const title=event.target.title.value // Get the input value
    //     onAddTodo(title); // Call the function passed from parent with the input value
  
    //   event.target.title.value = ""; // Clear the input after submission
    //   todoTitleInput.current.focus();

    // }
    function handleAddTodo(event) {
    event.preventDefault();
    onAddTodo(workingTodoTitle);
    setWorkingTodoTitle("");  // reset input
    todoTitleInput.current.focus();
  }

  return (
    <form 
    onSubmit={handleAddTodo} >
      <label htmlFor="todoTitle">Todo</label>
      <input
        type="text"
        id="todoTitle"
        name="title"
        ref={todoTitleInput}
        value= {workingTodoTitle}
        onChange={(e) => setWorkingTodoTitle(e.target.value)}//controlled input
       
        
      />
      <button type="submit" disabled={!workingTodoTitle.trim()} >Add Todo</button>
    </form>
  );
}

export default TodoForm;
