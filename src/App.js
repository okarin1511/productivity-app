import React, { useState } from "react";
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Typography from "@material-ui/core/Typography";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  } 

  function toggleComplete(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;

      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div className="App">
        <Typography style = {{ padding: 16 }} variant = "h1">
          To-Do List
        </Typography>
        <TodoForm addTodo={ addTodo } />
        <TodoList todos={todos} 
        toggleComplete={toggleComplete} 
        removeTodo={removeTodo}
        />
    </div>
  );
}

export default App;
