import React from "react";
import {Form} from "react-bootstrap";

function FormTodo({ addTodo, handleKeyPress }){
    const [value, setValue] = React.useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };

    return (
        <Form onSubmit={handleSubmit} className="div-main">
            <Form.Group>
                <Form.Label><b>
                    Add Todo
                </b></Form.Label>
                <Form.Control type="text" className="input" value={value}
                              onChange={e => setValue(e.target.value)}
                              placeholder="Add new todo. Strike the enter key to add."
                              onKeyPress={() =>
                                  handleKeyPress(value) }/>
            </Form.Group>
        </Form>
    )
}

export default FormTodo