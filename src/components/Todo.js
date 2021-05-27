import React from "react";
import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

function Todo({ todo, toggleComplete, removeTodo }) {
    function handleCheckboxClick() {
       toggleComplete(todo.id); 
    }

    function handleRemoveClick() {
        removeTodo(todo.id);
    }

    return ( 

        <div className = "okarin">
            <ListItem class = "taskDone">
                <Checkbox 
                    type="checkbox" 
                    onClick={handleCheckboxClick} 
                />
            
                {todo.task}
            
                <IconButton onClick={handleRemoveClick}>
                    <CloseIcon />
                </IconButton>
            </ListItem>
        </div>
        
    );

}

export default Todo;