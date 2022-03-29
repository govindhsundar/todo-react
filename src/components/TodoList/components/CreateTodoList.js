import { useState } from "react";

const CreateTodoList = ({createTodoList}) => {
    const [value,setValue] = useState('');
    const handleOnChange = e => setValue(e.target.value);
    const handleSubmit = e => {
        e.preventDefault();
        setValue('');
        createTodoList(value);
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="todo-list__item">
                <input placeholder="Add Todo List..." value={value} onChange={handleOnChange}/>
                <button>Create New List</button>
            </div>
        </form>
    );
}

export default CreateTodoList;