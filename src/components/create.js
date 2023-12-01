// Importing necessary React hooks and Axios for making HTTP requests
import { useState } from "react";
import axios from "axios";

// Functional component for creating a new book
function Create() {

    // State variables to hold form input values
    const [title, setTitle] = useState('');
    const [cover, setCover] = useState('');
    const [author, setAuthor] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Logging the form input values
        console.log("Title: " + title +
            " Cover: " + cover +
            " Author: " + author);

        // Creating a book object with form input values
        const book = {
            title: title,
            cover: cover,
            author: author
        };

        // Making a POST request to add the book to the server
        axios.post('http://localhost:4000/api/book', book)
            .then(/* Handle success if needed */)
            .catch(/* Handle errors if needed */);
    }

    // Rendered JSX for the Create component
    return (
        <div>
            <h2>Hello from create Component!</h2>
            {/* Form for adding a new book */}
            <form onSubmit={handleSubmit}>
                {/* Input field for book title */}
                <div className="form-group">
                    <label>Add Book Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>
                {/* Input field for book cover */}
                <div className="form-group">
                    <label>Add Book Cover: </label>
                    <input type="text"
                        className="form-control"
                        value={cover}
                        onChange={(e) => { setCover(e.target.value) }}
                    />
                </div>
                {/* Input field for book author */}
                <div className="form-group">
                    <label>Add Book Author: </label>
                    <input type="text"
                        className="form-control"
                        value={author}
                        onChange={(e) => { setAuthor(e.target.value) }}
                    />
                </div>
                {/* Submit button to add the book */}
                <div>
                    <input type="submit" value="Add Book" />
                </div>
            </form>
        </div>
    );

}

// Exporting the Create component as the default export
export default Create;
