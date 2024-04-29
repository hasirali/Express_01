const express = require('express');
const app = express();
const port = 3000;

// Middleware function
app.use((req, res, next) => {
  console.log('Hello from middleware, yeh sabse pehle chalega');
  next(); // Call the next middleware function in the stack
});

// Route handler
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Server initialization
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
