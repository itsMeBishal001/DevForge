const express = require('express');
const app = express();
const PORT = 3000;

// app.use() - Matches ALL HTTP methods (GET, POST, PUT, DELETE, etc.)
// Runs for every request to this path
app.use('/test', (req, res) => {
  res.send(`app.use() caught ${req.method} request to /test`);
});

// app.get() - Only matches GET requests
app.get('/user', (req, res) => {
  res.send('GET request to /user');
});

// app.post() - Only matches POST requests
app.post('/user', (req, res) => {
  res.send('POST request to /user');
});

// app.put() - Only matches PUT requests (complete update)
app.put('/user/:id', (req, res) => {
  res.send(`PUT request to update user ${req.params.id}`);
});

// app.patch() - Only matches PATCH requests (partial update)
app.patch('/user/:id', (req, res) => {
  res.send(`PATCH request to partially update user ${req.params.id}`);
});

// app.delete() - Only matches DELETE requests
app.delete('/user/:id', (req, res) => {
  res.send(`DELETE request to remove user ${req.params.id}`);
});

// Query parameters example: /search?name=john&age=25
// how to recieve query parameters from the url/route handlebars
app.get('/search', (req, res) => {
  res.send(`Search with query: ${JSON.stringify(req.query)}`);
});

// Route parameters example: /profile/123
app.get('/profile/:userId', (req, res) => {
  res.send(`User profile for ID: ${req.params.userId}`);
});

// Multiple route parameters: /user/123/posts/456
//dynamic route parameters
app.get('/user/:userId/posts/:postId', (req, res) => {
  res.send(`Post ${req.params.postId} from user ${req.params.userId}`);
});

// Wildcard route: /files/anything/here
app.get('/files/*', (req, res) => {
  res.send(`File path: ${req.params[0]}`);
});

// Regular expression route: matches /ab?cd, /abcd, /abbcd, /abbbcd, etc.
// Using "?" to match zero or one occurrence of the preceding element
app.get('/ab?cd', (req, res) => {
  res.send('ab?cd');
});
// Repeating the same letter or pattern using "+" 
app.get('/ab+cd', (req, res) => {
  res.send('ab+cd');
});
// Using "*" to match zero or more occurrences of the preceding element
app.get('/ab*cd', (req, res) => {
  res.send('ab*cd');
});
// Using "?" to indicate that the preceding element is optional
app.get('/ab(cd)?e', (req, res) => {
  res.send('ab(cd)?e');
});

// app.use() for catch-all (must be last)
app.use('/', (req, res) => {
  res.send('Welcome to DevForge!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});