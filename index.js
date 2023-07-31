// console.log("Welcome to Nodejs Module");
// console.log(__dirname);  //location where the file is ..global object
// console.log(__filename);
// // require() is a function that allows us to import a module(file with related code e.g js file)
// const path   =require('path')  

// // importing the file
// const add = require('./addition')
// console.log(add.addition(4,9));

// BUILDING OUR OWN WEBSERVER
// const http= require('http')
// const port= ++process.env.PORT || 3000
// // CREATE A WEB SERVER
// http.createServer((req,res)=>{ 
//     res.end('well done')

// }).listen(port,()=>{
//     console.log(`sserver is running on port ${port}`);
// })


const http = require('http')
const port = ++process.env.port || 3000
http.createServer((req, res)=>{
    res.writeHead(200, {'Content-type' : 'text/html'});
    switch(req.url){
        case '/' :
        res.end('You are home')
        break
        case '/about':
        res.end('About page')
        break;
        case '/contact':
            res.end('Contact page')
            break
            default :
            res.end('Page not found')
            break
    }
}).listen(port, () => {
    console.log(`Server is running on port ${port}`);
})