import React from "react";
import { Todo } from "../../modal";
import SingleTodo from "./SingleTodo";
// import { Droppable } from "react-beautiful-dnd";

interface Props {
  todoData: Todo[]
  setTodoData: React.Dispatch<React.SetStateAction<Todo[]>>
  completeTodos: Todo[]
  setCompleteTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

// interface Todo {
//     todo: string,
//     id: number
// }

const TodoList: React.FC<Props> = ({
  todoData,
  setTodoData,
  completeTodos,
  setCompleteTodos,
}) => {
  // return (
  //   <div className='todos'>
  //       {
  //         todoData.map((todo)=>{
  //             return <SingleTodo todo={todo} setTodoData={setTodoData} todoData={todoData} key={todo.id}/>
  //         })
  //       }
  //   </div>
  // )

  return (
    <div className="container">
      <div className="todos">
          <span className="todos-heading">Active tabs</span>
          {todoData.map((todo) => {
            return (
              <SingleTodo
                todo={todo}
                setTodoData={setTodoData}
                todoData={todoData}
                key={todo.id}
                setCompleteTodos={setCompleteTodos}
              />
            )
          })}
        </div>
      
      {/* <Droppable droppableId="completetodoslist">
        {
          (Provided) => (
            <div className="todos remove" ref={"complete"}>
              <span className="todos-heading">Completed tabs</span>
              {completeTodos.map((todo) => {
                return (
                  <SingleTodo
                    todo={todo}
                    setCompleteTodos={setCompleteTodos}
                    todoData={todoData}
                    key={todo.id}
                  />
                )
              })}
            </div>
          )
        }
      </Droppable> */}
    </div>
  );
};

export default TodoList;
