import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import CreateTodos from './components/CreateTodos';
import TodoItem from './components/TodoItem';
import { getAllTodoSlug, createTodoItem, updateTodoListItem } from '../../helper/dataHelper';

const Todo = () => {
  const [todoData,setTodoData] = useState();
  const [editTitle, setEditTitle] = useState(false);
  const [title, setTitle] = useState('');
  const [showClosed,setShowClosed] = useState(false);

    const { slug } = useParams();
    
    const getAllTodo = () => {
      getAllTodoSlug(slug)
        .then(data => setTodoData(data))
        .catch(e => console.error(e));
    }

    const createTodo = content => {
      createTodoItem({
        content,
        status: 'open',
        todoListId: todoData.id
      })
        .then(() => getAllTodo())
        .catch(e => console.error(e));
    }

    useEffect(()=>{
      getAllTodo(slug);
    },[slug]);

    const handleOnClickSave = (titleData) => {
      updateTodoListItem({
        title: titleData, 
        todoListId: todoData.id
      })
        .then(() => {
          setEditTitle(false);
          getAllTodo();
        })
        .catch(e => console.error(e));
    }

    const handleOnClickEdit = () => {
      setEditTitle(true);
      setTitle(todoData.title);
    };
    
    
    if(!todoData || !todoData.todos){
      return (
        <div>
          <h1>Todo list Not found</h1>
          <Link to='/'>Home</Link>
        </div>
      );
    }

    return (
      <div className="todo-wrp">
        <div className="todo-title">
          {!editTitle ? (
            <>
              <h1>{todoData.title}</h1>
              <button onClick={handleOnClickEdit}>Edit Title</button>
            </>
          ) : (
              <>
                <input value={title} onChange={e=>setTitle(e.target.value)}></input>
                <button onClick={() => handleOnClickSave(title)}>save</button>
              </>
            )}
        </div>
        <div className="todo-top">
          <Link to='/'>{'< back'}</Link>
          <div>
            <label>
              <input type={'checkbox'} checked={showClosed} onChange={()=>setShowClosed(!showClosed)} />
              <span>Show Completed Item</span>
            </label>
          </div>
          </div>
        <div>
        </div>
        {todoData.todos.map(todoItem => (
          showClosed || todoItem.status === 'open' ? (
            <TodoItem {...todoItem} getAllTodo={getAllTodo}/>
          ) : null
        ))}
        <CreateTodos createTodo={createTodo}/>
      </div>
    )
  }
  
  export default Todo;