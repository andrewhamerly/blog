// WHEN I view the main content,
// THEN I am presented with a list of blog posts that are pulled from localStorage.

let username = document.getElementById('username');
let title = document.getElementById('title');
let content = document.getElementById('content');

const inputValue = JSON.parse(localStorage.getItem('blogContent'));

if (inputValue !== null) {

    inputValue.forEach(blogContent => {
        const articleElement = document.createElement('article')
        const usernameElement = document.createElement('h2');
        const titleElement = document.createElement('h3');
        const contentElement = document.createElement('p');

        usernameElement.textContent = ('Name: ' + blogContent.username);
        titleElement.textContent = ('Title: ' + blogContent.title);
        contentElement.textContent = ('Content: ' + blogContent.content);

        articleElement.appendChild(usernameElement);
        articleElement.appendChild(titleElement);
        articleElement.appendChild(contentElement);

        document.getElementById('blog-posts-area').appendChild(articleElement);
})};


// WHEN I view localStorage,
// THEN I am presented with a JSON array of blog post objects, each including the post author's username, title of the post, and post's content.
console.log(inputValue);



// WHEN I take a closer look at a single blog entry in the list,
// THEN I can see the title, the content, and the author of the post.