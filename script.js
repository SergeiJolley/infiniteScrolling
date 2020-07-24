const postsContainer = document.getElementById('posts-container');
const loading = document.querySelector('.loader');
const filter = document.getElementById('filter');

let limit = 3;
let page = 1;


async function getPosts() {
    const res = await fetch(`http://jsonplaceholder.typicode.com/posts?_limit=${limit}&page=${page}`);

    const data = await res.json();

    return data;
}

async function showPosts() {
    const posts = await getPosts();


    posts.forEach(post => {
        const postEl = document.createElement('div');
        postEl.classList.add('post');
        postEl.innerHTML = `
        <div class ="number">${posts.id}</div>
        <div class ="posts-info">
        <h2 class="posts-title">${posts.title}</h2>
        <p class="post-body">${post.body}</p>
        </div>
        `;

        postsContainer.appendChild(postEl);
    });
}

showPosts();

// window.addEventListener('scroll', () => {
//     const {
//         scrollTop,
//         scrollHeight,
//         clientHeight
//     } =
//     document.documentElement;

//     if (scrollTop + clientHeight >= scrollHeight - 5) {

//     }
// });