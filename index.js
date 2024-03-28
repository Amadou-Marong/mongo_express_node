const express = require('express');
const mongoose = require('mongoose');
const app = express();

const studentroutes = require('./Routes/students');
app.use('/students', studentroutes);

const url = 'mongodb+srv://marongamadou6:fnfP8V0qgnqUi042@cluster0.7qy6i4u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

app.use(express.json());

try {
    con.on('open', () => {
        console.log('Connected to the database');
    })
} catch (error) {
    console.log('Error:', error);
}

const port = 9000;
app.listen(port, () => {
    console.log('Server started on port ' + port);
});