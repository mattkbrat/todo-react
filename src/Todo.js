import React from "react";

function Todo({todo, index, markCompleted, removeTodo}){
    return (
        <div className="todo" onClick={() => markCompleted(index)} onDoubleClick={() => removeTodo(index)}>
            <span
                style={{textDecoration: todo.isCompleted ? "line-through" : "unset"}}>
                {todo.task}
            </span>

        </div>
    )
}

export default Todo