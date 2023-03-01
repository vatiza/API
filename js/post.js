function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
    .then(data=>displayPost(data))
}
// 1 get the element where  you want to add the new element



function displayPost(posts) {
    const postContainer = document.getElementById('post-container');
    for (const post of posts) {
        const postDiv = document.createElement('div');
        postDiv.style.backgroundColor= 'yellow';
        postDiv.innerHTML = `
        <h2>User-${post.userId}</h5>
        <h3>Post:${post.title}</h5>
        <p>Post Description ${post.body}</p>  
              `

        postContainer.appendChild(postDiv);
    }
}
loadPosts();

