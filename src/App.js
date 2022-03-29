import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { TodoList } from './components/TodoList';
import { Todo } from './components/Todo';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/:slug" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
