const http = new easyHTTP;

// Get posts
http.get('https://jsonplacebolder.typicode.com/posts', function(error, posts) {
    if (error) {
        console.log(error);
    } else {
        console.log(posts);
    }
});

// Get single post
http.get('https://jsonplacebolder.typicode.com/posts/1', function(error, post) {
    if (error) {
        console.log(error);
    } else {
        console.log(post);
    }
});

// Create data
const data = {
    title: 'Custom post',
    body: 'This is a custom post.'
};

// Create post
http.post('https://jsonplacebolder.typicode.com/posts', data, function(error, post) {
    if (error) {
        console.log(error);
    } else {
        console.log(post);
    }
});

// Update post
http.put('https://jsonplacebolder.typicode.com/posts/1', data, function(error, post) {
    if (error) {
        console.log(error);
    } else {
        console.log(post);
    }
});

// Delete post
http.delete('https://jsonplacebolder.typicode.com/posts/1', function(error, response) {
    if (error) {
        console.log(error);
    } else {
        console.log(response);
    }
});