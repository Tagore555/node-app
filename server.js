const express = require('express');
const dotenv = require('dotenv').config();
const app = express();


app.use(express.json());







const server =5000;
app.use('/', require('./routers/index'));

const port = server || 5001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
