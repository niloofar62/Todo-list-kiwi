function TodoForm({ newTodo, setNewTodo, onAddTodo }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onAddTodo();
      }}
    >
      <label htmlFor="todoTitle">Todo</label>
      <input
        type="text"
        id="todoTitle"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;
