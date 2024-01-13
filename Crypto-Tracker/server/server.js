const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MySQL connection code
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'crypto_credentials',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
    if (err) {
      console.error('Error querying database:', err);
      return res.json({ success: false, error: 'Internal server error' });
    }

    if (results.length > 0) {
      const user = results[0];

      // Compare the provided password with the hashed password in the database
      bcrypt.compare(password, user.password, (bcryptErr, bcryptResult) => {
        if (bcryptErr) {
          console.error('Error comparing passwords:', bcryptErr);
          return res.json({ success: false, error: 'Internal server error' });
        }

        if (bcryptResult) {
          return res.json({ success: true, message: 'Login successful' });
        } else {
          return res.json({ success: false, error: 'Invalid username or password' });
        }
      });
    } else {
      res.json({ success: false, error: 'Invalid username or password' });
    }
  });
});

// Signup route
app.post('/signup', (req, res) => {
  const { username, password } = req.body;

  // Hash the password
  const saltRounds = 10;
  const hashedPassword = bcrypt.hashSync(password, saltRounds);

  // Insert the new user into the database
  db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword], (err) => {
    if (err) {
      console.error('Error inserting user into database:', err);
      return res.json({ success: false, error: 'Internal server error' });
    }

    res.json({ success: true, message: 'Signup successful' });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
