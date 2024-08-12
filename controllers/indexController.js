const asyncHandler = require('express-async-handler');


const index = asyncHandler(async (req, res) => {
    console.log('Hello World');
    console.log("hii");
    res.send('Hello World');
});


module.exports = {index};