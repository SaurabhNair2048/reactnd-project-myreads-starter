import React from 'react'
import BooksList from './BooksList'
import PropTypes from 'prop-types'

const Shelf = (props) => {

    //render(){

        return (

            
            <div className="bookshelf">
                <h2 className="bookshelf-title">{props.heading}</h2>
                <BooksList books={props.value} updateBook={props.updateBook}/>
            </div>
            
            

        )

    //}

}

Shelf.propTypes = {
    heading : PropTypes.string.isRequired,
    value : PropTypes.array.isRequired,
    updateBook : PropTypes.func.isRequired
};

export default Shelf;