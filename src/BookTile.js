import React, {Component} from 'react'
import SelectionDropDown from './SelectionDropDown'
import PropTypes from 'prop-types'

class BookTile extends Component{
    static propTypes = {
        book : PropTypes.object.isRequired,
        updateBook : PropTypes.func.isRequired
    };

    updateBook = (newShelf) => {
        this.props.updateBook(this.props.book, newShelf);
    };

    render(){

        return (
                
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193,
                         backgroundImage: 
                         (this.props.book.hasOwnProperty('thumbnail') && typeof(this.props.book.thumbnail)!=='undefined')?
                         `url(${this.props.book.thumbnail})` : ''}}></div>
                        {/*console.log(this.props.book.id, this.props.book.hasOwnProperty('shelf'))*/
                            //console.log(this.props.book.id, this.props.book.hasOwnProperty('authors'), typeof(this.props.book.authors)==='undefined')
                        }
                        <SelectionDropDown shelf={(this.props.book.hasOwnProperty('shelf')&& typeof(this.props.book.shelf)!=='undefined')? 
                        this.props.book.shelf : 'none'} onUpdate={this.updateBook}/>
                    </div>
                    <div className="book-title">
                        {this.props.book.hasOwnProperty('title') && typeof(this.props.book.title)!=='undefined'? this.props.book.title : ''}
                    </div>
                    {
                        (this.props.book.hasOwnProperty('authors') && typeof(this.props.book.authors)!=='undefined')?
                        this.props.book.authors.map((author, index) => <div className="book-authors" key={index}>{author}</div>):
                        ''
                    }
                    {/*<div className="book-authors">Harper Lee</div>*/}
                </div>
            </li>
        )
    }
}

export default BookTile;