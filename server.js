const express = require('express');
// const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');
const connectDB = require('./dbConnection/connection')
const cors = require('cors'); 
const app = express();
const PORT = 4000;
app.use(cors());
app.use(bodyParser.json());
app.use(bookRoutes);

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
