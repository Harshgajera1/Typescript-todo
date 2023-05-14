import React, { useState, useRef, useEffect, useReducer } from 'react'
import { BiEdit } from 'react-icons/bi'
import { MdDeleteOutline,MdDone } from "react-icons/md";
import { Todo } from '../../modal';

type Props = {
    todo : Todo,
    setTodoData : React.Dispatch<React.SetStateAction<Todo[]>>,
    todoData : Todo[],
    setCompleteTodos : React.Dispatch<React.SetStateAction<Todo[]>>,
}

const SingleTodo = ({todo, todoData, setTodoData, setCompleteTodos}: Props) => {

    const[isEdit,setIsEdit] = useState(false)
    const[editTodo,setEditTodo] = useState(todo.todo)

    const editRef = useRef<HTMLInputElement>(null)

    useEffect(()=>{
        editRef.current?.focus()
    },[isEdit])

 
    const handleEdit = (e : React.FormEvent<HTMLFormElement>,id: number) =>{
        e.preventDefault()
        setTodoData(todoData.map((data)=>data.id === id ? {...data,todo: editTodo}: data))
        setIsEdit(false)
    }

    const handleDelete = (id : number) =>{
        setTodoData(todoData.filter((data,i) => data.id !== id))
    }

    const handleDone = (id: number) =>{
        setTodoData(todoData.map((data,i) => data.id === id ? { ...data, isDone : !data.isDone } : data ))
    }

    // type actions = {type : 'add' , payload: Todo} 

    // const reducer = (state : Todo[],action : actions) => {
    //     const {type, payload} = action
    //     switch(type){
    //         case 'add' :
    //             return {}
    //     }
    // }

    // const [state,dispatch] = useReducer<React.ReducerWithoutAction<any>, Todo[]>(reducer,[])


  return (
    <form className='todo-single' onSubmit={(e)=>handleEdit(e,todo.id)}>
        {
            isEdit ? 
                <input
                    value={editTodo}
                    onChange={({target})=>{setEditTodo(target.value)}}
                    className=''
                    ref={editRef}
                />
            : 
            (
                todo.isDone ?
                    <s className='todo-single-text'>{todo.todo}</s>
                :
                    <span className='todo-single-text'>{todo.todo}</span>
            )
        }
        <div>
            <span className='icon' onClick={ () => setIsEdit(!isEdit)}>
                <BiEdit />
            </span>
            <span className='icon' onClick={ () => handleDelete(todo.id)}>
                <MdDeleteOutline />
            </span>
            <span className='icon' onClick={ () => handleDone(todo.id)}>
                <MdDone />
            </span>
        </div>
    </form>
  )
}


export default SingleTodo