import './TodoList.css';
import React from 'react'

const TodoList = (props) => {
    console.log(props.dataTodos);
    return (
        <div>
            <ul>
                {
                    props.dataTodos.map((todo) => {
                        // {id : 1, title : materi}
                        return <ul className="list-item">
                             <li className="list-item" key={todo.id}>{todo.title}</li>
                        </ul>
                    })
                }
            </ul>
        </div>
    )
}

export default TodoList
