const express = require('express');
const app = express()
app.get('/',(req,res)=>res.send('My first one...'));
app.listen(3000, () => { 
    console.log("My REST API as port 3000!");
})
