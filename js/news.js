async function getPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
        return await response.json()
    }
    catch (error) { console.error(error) };
}
async function render() {
    const news = await getPosts()
    const box = document.querySelector('.newsSection')

    news.forEach((item) => {
        const card = document.createElement('div')
        card.className = 'card'
        card.innerHTML = `
        <h2>${item.title}</h2>
        <p>${item.body}</p>
        `
        box.appendChild(card)
    })
}
render().catch(error => console.error(error))