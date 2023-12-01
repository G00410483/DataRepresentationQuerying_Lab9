// Importing the BookItem component from the "bookItem" file
import BookItem from "./bookItem";

// Functional component for displaying a list of books
function Books(props) {

    // Mapping over the array of books and returning a BookItem component for each book
    return props.myBooks.map(
        (book) => {
            // Rendering a BookItem component with the book details and a key for React's list rendering
            return <BookItem myBook={book} key={book._id} reload={() => {props.Reload();}}></BookItem>
        }
    );

}

// Exporting the Books component as the default export
export default Books;
