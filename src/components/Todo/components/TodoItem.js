import { useEffect, useState } from "react";
import { updateTodoItem, deleteTodoItem } from '../../../helper/dataHelper';

const TodoItem = ({content, status, id, getAllTodo}) => {
    const [isChecked,setChecked] = useState(false);
    
    const updateStatus = (updateStatus, id) => {
        updateTodoItem({
            content,
            todoId: id,
            status: updateStatus?'closed' : 'open'
        })
        .then(() => getAllTodo())
        .catch(e => console.error(e));
    }

    const handleOnClick = () => {
        if(window.confirm('Do you want to delete?')){
            deleteTodoItem({
                todoId: id,
            })
            .then(() => getAllTodo())
            .catch(e => console.error(e));
        }
    }

    const handleOnChange = () => {
        updateStatus(!isChecked,id)
    };

    useEffect(()=>setChecked(status==='closed'),[status]);

    return (
        <div className="todo-item">
            <label>
                <input type='checkbox' checked={isChecked} onChange={handleOnChange}/>
                <span className={status==='closed'?'strick':''}>{content}</span>
            </label>
            <button onClick={handleOnClick}>delete</button>
        </div>
    );
}

export default TodoItem;