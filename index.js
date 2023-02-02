const express = require('express')
const app = express()

app.get('/', function(request, response){
    response.send('Hi there')
})

app.get("/about", (request, response) => {
    response.send("<h1>About</h1>");
});

app.listen(8000, function(){
    console.log('listening to port 8000...');
})