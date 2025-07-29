//Instead of writing props.todo, the todo object is destructured directly in the parameter.
function TodoListItem({todo}){


    return(
        <li>{todo.title}</li>

    )
};
export default TodoListItem;