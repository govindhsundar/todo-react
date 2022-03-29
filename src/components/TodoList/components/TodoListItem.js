import { Link } from "react-router-dom";
import { deleteTodoListItem } from '../../../helper/dataHelper'

const TodoListItem = ({id,title,slug,updateTodoList}) => {
  const deleteTodoList = () => {
    if(window.confirm('Do you want to delete?')){
      deleteTodoListItem(id)
        .then(() => updateTodoList())
        .catch(err => console.error(err))
    }
  };
  return (
    <div className="todo-list__item">
      <Link to={`/${slug}`}>{title}</Link>
      <button onClick={deleteTodoList}>delete</button>
    </div>
  );
}

export default TodoListItem;