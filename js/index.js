function loadUsers3() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json()
    )
    .then(data=>displayUsers(data))
}
function displayUsers(data) {
    const ul = document.getElementById('users-list');
    for (const user of data) {
        console.log(user.name)
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}

function deletePost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'Delete',
    });
}
function PathcApost() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PATCH',
        body: JSON.stringify({
            title: 'foo',
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
  .then((json) => console.log(json));
}
function cratePost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}
