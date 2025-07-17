// server.js
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/api/feedback', (req, res) => {
  const { name, email, message } = req.body;
  const feedbackEntry = {
    name,
    email,
    message,
    date: new Date().toISOString()
  };

  // Append feedback to a local file (or use a database)
  fs.appendFile('feedbacks.json', JSON.stringify(feedbackEntry) + '\n', (err) => {
    if (err) {
      return res.status(500).json({ message: 'Error saving feedback' });
    }
    res.status(200).json({ message: 'Thank you for your feedback!' });
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
