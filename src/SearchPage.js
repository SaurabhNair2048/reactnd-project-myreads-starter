import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookTile from './BookTile'
import serializeForm from 'form-serialize'
import PropTypes from 'prop-types'

class SearchPage extends Component{

    static propTypes = {
        updateBookShelf : PropTypes.func.isRequired
    };

    state = {
        'books' : [],
        'query' : ''
    }

    updateQuery = (text) => {
        if(text===''){
            this.setState({
                'books': [],
                'query' : ''
            })
        } else {
            this.setState({
                'query' : text
            });
        }
    }

    /*searchBooks = (text) => {
        if(text!==''){
            BooksAPI.search(text)
            .then((books) => this.setState((prevState) => ({
                'books' : books,
                'query' : text.trim()
            })));
        } else {
            this.setState({
                'books' : [],
                'query' : ''
            });
        }
    }*/
    searchBooks = (event) => {
        event.preventDefault();
        let values = serializeForm(event.target, {hash : true});
        // console.log(values.query!=='' && typeof(values.query)!=='undefined');
        if(values.query!=='' && typeof(values.query)!=='undefined'){
            BooksAPI.search(values.query.trim())
            .then((books) => Array.isArray(books)?this.updateBooksAndState(books):'Sorry! No results were found. We are frequently adding new books, so please try again later :)')
            .then((data) => {
                // console.log(data);
                this.setState({
                    'books' : data
                });
            });
            // .then((books) => this.setState({
            //     'books' : books
            // }));
        } else {
            this.setState({
                'books' : []
            });
        }
    }

    updateBooksAndState = (books) => {
        let temp = {};
        for(let key in this.props.shelves){
            for(let book of this.props.shelves[`${key}`]){
                temp[`${book.id}`] = book.shelf;
                
            }
        }
        let data = []
        for(let book of books){
            let updatedBook = {};
            updatedBook['id'] = book['id'];
            updatedBook['title'] = book['title'];
            updatedBook['authors'] = book['authors'];
            updatedBook['thumbnail'] = typeof(book['imageLinks'])==='undefined' ? 'No Image' : book['imageLinks']['thumbnail'];
            if(temp.hasOwnProperty(`${book.id}`)){
                updatedBook['shelf'] = temp[`${book.id}`];
            } else {
                updatedBook['shelf'] = 'none';
            }
            data.push(updatedBook);
        }
        //console.log(data);
        return data;
    };

    componentDidMount(){
        BooksAPI.getAll()
        .then((books) => this.props.fetchShelves(books));
    }
    

    render(){


        return (
            <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to='/'>Close</Link>
              <div className="search-books-input-wrapper">
                {/*onClick={() => this.setState({ showSearchPage: false })}
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.


                  
                */}
                <form onSubmit={this.searchBooks}>
                    <input type="text" placeholder="Search by title or author.. Press enter to search" 
                    onChange={(event) => this.updateQuery(event.target.value)} 
                    value={this.state.query} name="query"/>
                </form>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {
                    (Array.isArray(this.state.books) && this.state.books.length>0)?
                    /*this.state.books.map((book) => console.log(book.title)):*/this.state.books.map((book) => <BookTile key={book.id} book={book} updateBook={this.props.updateBookShelf}/>):
                    this.state.books
                }
              </ol>
            </div>
          </div>
        );

    }

}

export default SearchPage;