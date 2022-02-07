import React from "react";
import "./App.css";
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from "./Todo";
import FormTodo from "./FormTodo";
import MyHeader from "./MyHeader";
import MyFooter from "./MyFooter";

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
    newTodoList[index].isCompleted = newTodoList[index].isCompleted !== true;
    setTodoList(newTodoList);
  }

  const removeTodo = index => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1)
    setTodoList(newTodoList);
  }

  const handleKeyPress = (e, todo) => {
    if (e.key === "Enter" && todo !== ""){
      addTodo(todo)

    }
  }

  return (
      <body>
        <MyHeader />
        <FormTodo addTodo={addTodo} handleKeyPress={handleKeyPress}/>
        <body className="div-main">
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
        </body>
        <MyFooter/>
      </body>
  )

}

export default App
