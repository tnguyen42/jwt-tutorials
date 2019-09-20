import React from 'react';

function Todo(props) {
    return (
        <div>
            <h3>{props.todo.title}</h3>
            <label>Completed:</label>
            <input
                onChange={() => props.editTodo(props.todo._id, { completed: !props.todo.completed })}
                type="checkbox"
                checked={props.todo.completed}/>
            <button onClick={() => props.deleteTodo(props.todo._id)}>X</button>
        </div>
    )
}

export default Todo;
