import React, { useState } from "react";

const Todo = (props) => {
    //Events

    // const [deletedItem, setDeletedItem] = useState('');

    const deleteHandler = () => {
        // setDeletedItem(props.todo) // Setting the deleted item.
        props.setTodos(
            props.todos.filter(ele => ele.id !== props.todo.id
            ))
    }

    /* const applyFall = () => {
 
         return props.todos.find(ele =>
             ele.id === deletedItem.id
         )
 
     }
  */

    const completeHandler = () => {
        props.setTodos(props.todos.map(item => {
            if (item.id === props.todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }

    return (
        // <div className={`todo ${applyFall ? "fall" : ''}`}>
        <div className={`todo`}>
            <li className={`todo-item ${props.todo.completed ? "completed" : ''}`}>
                {props.todo.text}
            </li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash">
                </i></button>
        </div>
    )
}

export default Todo;