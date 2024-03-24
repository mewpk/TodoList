import React from 'react'

const TodoItem = ({todos , deleteTodo}) => {
  return todos.map((todo) => (
    <div key={todo.id} className='todo-item'>
      <p>ID : {todo.id} , {todo.name}</p>
        <div>
            <button className='edit'>Edit</button>
            <button className='del' onClick={()=>deleteTodo(todo.id)} >Delete</button>
        </div>
    </div>
  )) 
}

export default TodoItem