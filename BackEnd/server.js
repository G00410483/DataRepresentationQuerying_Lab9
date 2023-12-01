// Importing necessary modules and packages
const express = require('express'); // Importing Express framework
const app = express(); // Creating an instance of Express
const port = 4000; // Setting the port for the server
const cors = require('cors'); // Importing CORS for cross-origin resource sharing

// Applying CORS middleware to handle cross-origin requests
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Configuring body-parser middleware for handling JSON and URL-encoded data
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connecting to MongoDB using Mongoose
const mongoose = require('mongoose');

main().catch(err => console.log(err));

// Async function to connect to MongoDB
async function main() {
  // Connecting to the MongoDB database using the provided URI
  await mongoose.connect('mongodb+srv://admin:admin@martinscluster.w5rtkz0.mongodb.net/DB14?retryWrites=true&w=majority');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// Defining the schema for the 'book' collection
const bookSchema = new mongoose.Schema({
  title: String,
  cover: String,
  author: String
});

// Creating a model for the 'book' collection
const bookModel = mongoose.model('sdfsdfsdfsdfsdfffffffffffff423', bookSchema);

// Handling DELETE requests to delete a book by ID
app.delete('/api/book/:id', async (req, res) => {
  console.log("Delete: " + req.params.id)

  // Finding and deleting a book by its ID
  let book = await bookModel.findByIdAndDelete(req.params.id);
  res.send(book);
})

// Handling PUT requests to update a book by ID
app.put('/api/book/:id', async(req, res) => {
  console.log("Update: " + req.params.id);

  // Finding and updating a book by its ID with the provided data
  let book = await bookModel.findByIdAndUpdate(req.params.id, req.body, {new:true});
  res.send(book);
})

// Handling POST requests to create a new book
app.post('/api/book', (req, res) => {
  console.log(req.body);

  // Creating a new book using the provided data
  bookModel.create({
    title: req.body.title,
    cover: req.body.cover,
    author: req.body.author
  })
    .then(() => { res.send("Book Created") })
    .catch(() => { res.send("Book NOT Created") });
})

// Handling GET requests to retrieve all books
app.get('/api/books', async(req, res) => {
  // Finding all books in the 'book' collection
  let books = await bookModel.find({});
  res.json(books);
})

// Handling GET requests to retrieve a book by its identifier
app.get('/api/book/:identifier', async (req, res) => {
  console.log(req.params.identifier);

  // Finding a book by its identifier
  let book = await bookModel.findById(req.params.identifier);
  res.send(book);
})

// Handling a basic GET request to the root endpoint
app.get('/', (req, res) => {
  res.send('Hello World!');
})

// Starting the server and listening on the specified port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
