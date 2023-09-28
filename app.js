const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
];

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.post('/api/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
  };

  users.push(newUser);

  res.status(201).json(newUser);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
