import React, { useState } from "react";
import InputField from "./assets/components/InputField";
import { Todo } from "./modal";
import TodoList from "./assets/components/TodoList";
// import {DragDropContext } from 'react-beautiful-dnd';

const App: React.FC = () => {
  const[todo,setTodo] = useState<string>("")
  const[todoData,setTodoData] = useState<Todo[]>([])
  const[completeTodos,setCompleteTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) : void =>{
    e.preventDefault()
    if(todo){
      setTodoData([...todoData,{id: Date.now(),todo ,isDone: false}])
      setTodo('')
    }

  }
  return (
    // <DragDropContext onDragEnd={()=>{}}>
      <div className="App">
        <span className="heading">Harsh To-do</span>
        <InputField 
          todo={todo}
          setTodo={setTodo}
          handleAdd={handleAdd}
        />
        {/* {
          todoData.map((data,index)=>{
            return <li key={index}>{data.todo}</li>
          })
        } */}
        <TodoList 
          todoData={todoData}
          setTodoData={setTodoData}
          completeTodos={completeTodos}
          setCompleteTodos={setCompleteTodos}
        />
      </div>
    // </DragDropContext>
  );
}

export default App;
