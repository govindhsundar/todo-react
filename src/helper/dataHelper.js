import { BACKEND_URL, API_ENDPOINT } from "../config"

export const getAllTodoList = () => {
    return fetch(`${BACKEND_URL}${API_ENDPOINT.todoList}`)
        .then(res => res.json())
        .then(json => json)
        .catch(e => console.error(e));
}

export const getAllTodoSlug = (slug) => {
    return fetch(`${BACKEND_URL}${API_ENDPOINT.todoList}${slug}`)
        .then(res => res.json())
        .then(json => json)
        .catch(e => console.error(e));
}

export const createTodoListItem = (title) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title })
    };

    return fetch(`${BACKEND_URL}${API_ENDPOINT.todoList}`,requestOptions)
        .then(res => res.json())
        .then(json => json)
        .catch(e => console.error(e));
}

export const deleteTodoListItem = (id) => {
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    };

    return fetch(`${BACKEND_URL}${API_ENDPOINT.todoList}${id}`,requestOptions)
        .then(res => res.json())
        .then(json => json)
        .catch(e => console.error(e));
}

export const createTodoItem = ({content, status, todoListId }) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            content,
            status,
            todoListId
        })
    };

    return fetch(`${BACKEND_URL}${API_ENDPOINT.todo}`,requestOptions)
        .then(res => res.json())
        .then(json => json)
        .catch(e => console.error(e));
}

export const updateTodoItem = ({content, status, todoId }) => {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            content,
            status,
        })
    };

    return fetch(`${BACKEND_URL}${API_ENDPOINT.todo}${todoId}`,requestOptions)
        .then(res => res.json())
        .then(json => json)
        .catch(e => console.error(e));
}

export const updateTodoListItem = ({title, todoListId }) => {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            title,
        })
    };

    return fetch(`${BACKEND_URL}${API_ENDPOINT.todoList}${todoListId}`,requestOptions)
        .then(res => res.json())
        .then(json => json)
        .catch(e => console.error(e));
}

export const deleteTodoItem = ({todoId }) => {
    const requestOptions = {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' }
    };

    return fetch(`${BACKEND_URL}${API_ENDPOINT.todo}${todoId}`,requestOptions)
        .then(res => res.json())
        .then(json => json)
        .catch(e => console.error(e));
}
