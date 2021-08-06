import './Todo.css';
import {useState} from 'react'
import TodoList from '../todo-list/TodoList';
import TodoCreate from '../todo-create/TodoCreate';

const Todo = () => {
    const [getTodos, setTodos] = useState ([
        {
            id: 1,
            title: 'Project Baru',
        },
        {
            id: 2,
            title: 'Landing Page',
        },
        {
            id: 3,
            title: 'Dashboard',
            
        }
    ])

    const eventCreateTodo = (todo) => {
        setTodos(getTodos.concat(todo))
        console.log(getTodos);
    }

    return (
        <div>
            <h3>Halo, this is my To do List</h3>
            <TodoCreate onCreateTodo = {eventCreateTodo} />
            {/* kirim ke file todolist diprops */}
            <TodoList dataTodos = {getTodos} />
        </div>
    )
}

export default Todo
