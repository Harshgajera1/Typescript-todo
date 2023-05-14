import React, {useRef} from 'react'

interface Props {
    todo: string
    setTodo :  React.Dispatch<React.SetStateAction<string>>
    handleAdd : (e: React.FormEvent) => void
}

// const InputField = ({todo,setTodo}: Props) => {
const InputField: React.FC<Props> = ({todo,setTodo,handleAdd}) => {

  const inpurRef = useRef<HTMLInputElement>(null) 


  return (
    <form className='input' 
    onSubmit={(e)=>{
      handleAdd(e)
      inpurRef.current?.blur()
    }}>
        <input 
            type="text" 
            placeholder='Enter a task' 
            className='input_box'
            value={todo}
            ref={inpurRef}
            onChange={({target})=>setTodo(target.value)}

        />
        <button className='input_submit' type='submit'>Go</button>
    </form>
  )
}

export default InputField