const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());


app.get('/api/temp', (req, res) => {
  const c = parseFloat(req.query.celsius);

  if (isNaN(c)) {
    return res.status(400).json({ error: 'Invalid input.' });
  }

  const k = c + 273.15;

  res.json({ k, c });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
