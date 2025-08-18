node js is a Javascript runtime environment runs on chrome V8 Javascript Engine and execute javascript code outside a web browser(Server).
NodeJs build in 2009 by Rayan Dahl
When launced only for IOS and Linux
NodeJS code run on V8 engine
NodeJS 23% code on C++
Followed ECMA Standard

JavaScript handle synchronous task effectively while we use libuv in NodeJS to handle Async task effectively.

client side javascript use browser for Asynchronous task while on server NodeJs use Libuv

we get module and require in nodeJS using IIFE function argument and parameter

NodeJS passes modules as a parameter to IIFE function

variable and function wrap in IIFE function so they cannot be accessable directly .

NodeJS is non-blocking io because of Libuv.


// ExpressJS

npm init

npm install express

If by mistake we delete node_modules folder then we can restore it by running 'npm install' command in terminal.

'npm i nodemon -g' for global installation of nodemon and now we can run our app using 'nodemon src/app.js' command. 

now we donot need to restart our server manually when we make changes in our code.

app.use(express.json()) // to parse incoming JSON requests

app.use('/', (req, res) => {}) // to handle all incoming requests at the same route.

in app.use if there is one route with '/' and one with '/products' then '/' will be executed first and '/products' will not be executed.

so we should add the smaller route at the end 

next() // to pass control to the next middleware function in the stack