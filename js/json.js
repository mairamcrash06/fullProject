const btn = document.querySelector('.ajax_button'),
    name1 = document.querySelector('.name1'),
    age1 = document.querySelector('.age1'),
    name2 = document.querySelector('.name2'),
    age2 = document.querySelector('.age2'),
    name3 = document.querySelector('.name3'),
    age3 = document.querySelector('.age3')


const getUsers = async () => {
    try {
        const response = await fetch(`../json/data.json`)
        return await response.json()
    }
    catch (error){console.error(error)}
}


const renderUsers = async () => {
    const data = await getUsers()

    console.log(data)

    name1.innerHTML = data[0].name
    age1.innerHTML = data[0].age

    name2.innerHTML = data[1].name
    age2.innerHTML = data[1].age

    name3.innerHTML = data[2].name
    age3.innerHTML = data[2].age
}


btn.onclick = () => {
    renderUsers()
}