const express = require('express');
const connectDB = require('./mongoDb');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const cookieParser = require("cookie-parser");

dotenv.config();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use('/api/users', userRoutes);

connectDB();
app.get('/', (req, res) => {
    res.send('Hello World!');
}); 

const port = 8800;

app.listen(port, () => {
    connectDB();
    console.log(`Example app listening on port ${port}`)
})