import React from 'react'
import BookTile from './BookTile'
import PropTypes from 'prop-types'

const BooksList = (props) => {

    //render(){

        return (

            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.books.map((book) => <BookTile key={book.id} book={book} updateBook={props.updateBook}/>)}
                </ol>
                {/*<BookTile/>*/}
            </div>
            
        )
    //}
}

BooksList.propTypes = {
    books : PropTypes.array.isRequired,
    updateBook : PropTypes.func.isRequired
};

export default BooksList;