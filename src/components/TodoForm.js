import React, { useState } from "react";
import {v4 as uuid, v4} from "uuid";
import { Button, TextField } from "@material-ui/core"; 

function TodoForm({ addTodo }) {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    function handleTaskInputChange(e) {
        setTodo({ ...todo, task: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (todo.task.trim()) {
            addTodo({ ...todo, id: v4( ) });
            // reset task input
            setTodo({ ...todo, task: "" });
        }
    }

    return(
        <form className="todo-form" onSubmit={handleSubmit}>
            <TextField
                label="Task" 
                name = "task"
                type = "text"
                value = {todo.task}
                onChange={handleTaskInputChange} 
            />
            <Button type = "submit">Submit</Button>

        </form>
    );

}

export default TodoForm;