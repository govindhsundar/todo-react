import { useState, useEffect } from 'react';
import TodoListItem from './components/TodoListItem'
import CreateTodoList from './components/CreateTodoList';
import { getAllTodoList, createTodoListItem } from '../../helper/dataHelper'

const TodoList = () => {
    const [todoListData, setTodoList] = useState([]);
    
    const updateTodoList = () => {
      getAllTodoList()
        .then(data => setTodoList(data))
        .catch(err => console.error(err))
    };

    useEffect(()=> {
        updateTodoList()
    },[]);
    
    const createTodoList = (title) => {
      createTodoListItem(title)
        .then(() => updateTodoList())
        .catch(err => console.error(err))
    };

    return (
        <div className='todo-list'>
            <h1>Todo List</h1>
            {todoListData.map(todoListItem => (
                <TodoListItem {
                    ...todoListItem
                }
                updateTodoList={updateTodoList}
                />
            ))}
            <CreateTodoList createTodoList={createTodoList}/>
        </div>
    )
}

export default TodoList;