import { useState } from "react";

const CreateTodoList = ({createTodo}) => {
    const [value,setValue] = useState('');
    const handleOnChange = e => setValue(e.target.value);
    const handleSubmit = e => {
        e.preventDefault();
        setValue('');
        createTodo(value);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className="input-text" placeholder="Add Todo..." value={value} onChange={handleOnChange}/>
            </form>
        </div>
    );
}

export default CreateTodoList;