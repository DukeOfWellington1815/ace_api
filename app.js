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

app.get('/api/prime', (req, res) => {
  const limit = parseInt(req.query.limit);

  if (isNaN(limit) || limit < 2) {
    return res.status(400).json({ error: 'Invalid input.' });
  }

  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
      i += 6;
    }
    return true;
  }

  const primes = [];
  for (let i = 2; primes.length < limit; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  res.json({ primes });
});

function fibonacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

app.get('/api/fibonacci', (req, res) => {
  const n = parseInt(req.query.n);

  if (isNaN(n) || n < 0) {
    return res.status(400).json({ error: 'Invalid input.' });
  }

  const result = fibonacci(n);

  res.json({ number: result });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
