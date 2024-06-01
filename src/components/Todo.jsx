import React, { useState } from "react";

const Todo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);

  function handleTitle(event) {
    setTitle(event.target.value);
  }

  const handleAddTodo = (event) => {
    event.preventDefault();
    if (!title) {
      alert("Please enter title");
      return;
    }
    if (!description) {
      alert("Please enter description");
      return;
    }
    if (isEditing) {
      const updatedTodos = todos.map((todo) =>
        todo === currentTodo
          ? { ...todo, title: title, description: description }
          : todo
      );
      setTodos(updatedTodos);
      setIsEditing(false);
      setCurrentTodo(null);
    } else {
      setTodos([...todos, { title: title, description: description }]);
    }
    setTitle("");
    setDescription("");
  };

  const handleEditTodo = (todo) => {
    setTitle(todo.title);
    setDescription(todo.description);
    setIsEditing(true);
    setCurrentTodo(todo);
  };

  const handleDeleteTodo = (todo) => {
    const updatedTodos = todos.filter((t) => t !== todo);
    setTodos(updatedTodos);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-gray-50 rounded-lg shadow-lg">
      <form onSubmit={handleAddTodo} className="mb-6">
        <input
          type="text"
          placeholder="Title"
          onChange={handleTitle}
          value={title}
          className="border p-2 mr-2 rounded w-full mb-2"
        />
        <input
          type="text"
          placeholder="Description"
          onChange={(event) => setDescription(event.target.value)}
          value={description}
          className="border p-2 mr-2 rounded w-full mb-2"
        />
        <button
          type="submit"
          className="bg-teal-500 text-white p-2 rounded w-full"
        >
          {isEditing ? "Update Todo" : "Add Todo"}
        </button>
      </form>
      <div className="space-y-4">
        {todos.map((item, index) => (
          <div
            key={index}
            className="border p-4 rounded shadow bg-white flex justify-between items-center"
          >
            <div>
              <h1 className="text-xl font-bold text-teal-600">{item.title}</h1>
              <h2 className="text-gray-700">{item.description}</h2>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleEditTodo(item)}
                className="bg-yellow-500 text-white p-2 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteTodo(item)}
                className="bg-red-500 text-white p-2 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
