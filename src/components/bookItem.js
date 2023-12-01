// Importing necessary components and libraries
import Card from 'react-bootstrap/Card'; // Importing the Card component from react-bootstrap
import { Link } from 'react-router-dom'; // Importing the Link component from react-router-dom for navigation
import Button from 'react-bootstrap/Button'; // Importing the Button component from react-bootstrap
import axios from 'axios'; // Importing Axios for making HTTP requests

// Functional component definition for displaying a book item
function BookItem(props) {

    return (
        <div>
            {/* Card component from react-bootstrap to display book details */}
            <Card>
                <Card.Header>{props.myBook.title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        {/* Displaying the book cover image */}
                        <img src={props.myBook.cover} alt="Book Cover"></img>
                        <footer>
                            {/* Displaying the author information */}
                            {props.myBook.author}
                        </footer>
                    </blockquote>
                </Card.Body>

                {/* Link to navigate to the edit page for the specific book */}
                <Link to={'/edit/'+props.myBook._id} className='btn btn-primary'>Edit</Link>

                {/* Button for deleting the book */}
                <Button variant='danger' onClick={
                    (e)=>{
                        // Making a DELETE request to the server to delete the book
                        axios.delete('http://localhost:4000/api/book/' + props.myBook._id)
                        .then((res)=>{
                            // Reloading the book list after successful deletion
                            let reload = props.reload();
                        })
                        .catch();
                    }
                }>Delete</Button>
            </Card>

            {/* 
            Commented out section - Possible alternative display of book details
            */}
            {/* 
            <h3>{props.myBook.title}</h3>
            <img src={props.myBook.thumbnailUrl} alt="Book Thumbnail"></img>
            <p>{props.myBook.authors[0]}</p>
            */}
        </div>
    );

}

// Exporting the BookItem component as the default export
export default BookItem;
