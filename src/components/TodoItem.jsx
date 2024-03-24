import React from 'react'

const TodoItem = ({todos}) => {
  return todos.map((todo, index) => (
    <div key={index} className='todo-item'>
      <p>{todo}</p>
        <div>
            <button className='edit'>Edit</button>
            <button className='del'>Delete</button>
        </div>
    </div>
  )) 
}

export default TodoItem