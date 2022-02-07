import React from "react";
import "./App.css";
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from "./Todo";
import FormTodo from "./FormTodo";

function App() {
  const [todoList, setTodoList] = React.useState([
    {
      task: "Sample",
      isCompleted: false
    }
  ]);

  const addTodo = task => {
    const newTodoList = [...todoList, { task }];
    setTodoList(newTodoList);
  }

  const markCompleted = index => {
    const newTodoList = [...todoList];
    newTodoList[index].isCompleted = true;
    setTodoList(newTodoList);
  }

  const removeTodo = index => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1)
    setTodoList(newTodoList);
  }

  return (
      <>
      <h1 className="text-center mb-4">Todo List</h1>
        <FormTodo addTodo={addTodo}/>
        <div>
          {todoList.map((todo, index) => (
              <Card>
                <Card.Body>
                  <Todo
                    key={index}
                    index={index}
                    todo={todo}
                    markCompleted={markCompleted}
                    removeTodo={removeTodo}
                    />
                </Card.Body>
              </Card>
          ))}
        </div>
      </>
  )

}

export default App
