// WHEN I submit the form,
// THEN blog post data is stored to localStorage.

const form = document.querySelector('#form');

form.addEventListener('submit', function (event) {
    // Stops the page from reloading on form submit
    event.preventDefault();

    // Selects the form input values
    let username = document.getElementById('username');
    let title = document.getElementById('title');
    let content = document.getElementById('content');

    //Creates an object with the form data
    const blogContent = {
        username: username.value,
        title: title.value,
        content: content.value,
    };

    // WHEN I enter try to submit a form without a username, title, or content,
    // THEN I am presented with a message that prompts me to complete the form.
    //Check to see if form was properly filled out
    if (username.value == '' || title.value == '' || content.value == '') {
        alert('Please enter all the information to complete the form.');
        return;
    }

    // After several hours, I asked chatGPT to assist in creating an array that will hold multiple objects. 
    // It assisted in the following 5 lines of code.
    let storedData = localStorage.getItem('blogContent');
    let blogContentArry = storedData ? JSON.parse(storedData) : [];

    if (!Array.isArray(blogContentArry)) {
        blogContentArry = [];
    }

    blogContentArry.push(blogContent);

    //Adds the form data object to the Browser API Local Storage
    localStorage.setItem('blogContent', JSON.stringify(blogContentArry));

    // WHEN the form submits,
    // THEN I am redirected to the posts page.
    window.location.href = './blog.html'

});