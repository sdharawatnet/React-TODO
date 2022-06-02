import React from "react";

const Form = (props) => {
    const inputTextHandler = (event) => {
        props.setInputText(event.target.value)
    }

    const submitTodoHandler = (event) => {
        event.preventDefault();
        if (props.inputText.length > 0) { // Validation
            props.setTodos([
                ...props.todos, { text: props.inputText, completed: false, id: Math.random() * 1000 }
            ]);
            props.setInputText("")
        }

    }

    const statusHandler = (eve) => {
        props.setStatus(eve.target.value)
    }

    return (
        <form>
            <input onChange={inputTextHandler} value={props.inputText} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )


}

export default Form;