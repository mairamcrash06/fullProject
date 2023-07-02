const fetchBox = document.querySelector('.fetchBox'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next')

let count = 1

const request = async () => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        return await response.json()
    }
    catch (error) {
        console.error(error)
    }
}

const renderTodos = async () => {
    const data = await request()

    if (data.completed) {
        fetchBox.style.backgroundColor = 'seagreen'
    }
    else {
        fetchBox.style.backgroundColor = 'red'
    }

    fetchBox.innerHTML = `
        <h2>Todo ID: ${data.id}</h2>
        <p><b>User ID:</b> ${data.userId}</p>
        <p><b>Title:</b> ${data.title}</p>
        <p><b>Completed:</b> ${data.completed}</p>
    `
}

renderTodos()

prev.onclick = () => {
    count--;
    renderTodos();
};

next.onclick = () => {
    count++;
    renderTodos();
};

// задание - 2

fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(res => res.json())
    .then(post => console.log(post))