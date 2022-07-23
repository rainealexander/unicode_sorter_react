require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 1337;
const static_path = path.join(__dirname, '../dist');

const cors = require('cors');

app.use(cors());
app.use(express.static(static_path));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200);
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
