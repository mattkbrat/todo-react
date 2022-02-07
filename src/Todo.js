import React from "react";
import {Button} from "react-bootstrap";

function Todo({todo, index, markCompleted, removeTodo}){
    return (
        <div className="todo">
            <span
                style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
                {todo.task}
            </span>
            <div>
                <Button variant="outline-success" onClick={() => markCompleted(index)}>✔</Button>
                <Button variant="outline-danger" onClick={() => removeTodo(index)}>❌</Button>
            </div>
        </div>
    )
}

export default Todo