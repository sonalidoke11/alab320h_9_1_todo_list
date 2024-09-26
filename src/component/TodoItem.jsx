import React from 'react';
export default function TodoItem({ task, deleteTask, toggleCompleted }) {
    
    function handleChange() {
        toggleCompleted(task.id);
    }
    
    return (
    <>
        <ul>
            <li>
                <input
                    type="checkbox" 
                    checked={task.completed}
                    onChange={handleChange}
                />
                <p>{task.text}</p>
                <button>Edit</button>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
            </li>          
        </ul>
    </>
    );
}
