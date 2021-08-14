import React, {Component} from 'react'
import Shelf from './Shelf'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class MainPage extends Component{

    static propTypes = {
        fetchShelves : PropTypes.func.isRequired,
        shelves : PropTypes.object.isRequired,
        updateBookShelf : PropTypes.func.isRequired
    };

    componentDidMount(){
        BooksAPI.getAll()
        .then((books) => this.props.fetchShelves(books));
    }
    

    render(){

        return (
            <div className="list-books">
                <div className="list-books-title">
                <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {Object.keys(this.props.shelves).map((key) => (<Shelf heading={key} key={key} value={this.props.shelves[key]} updateBook={this.props.updateBookShelf}/>))}
                    </div>
                    <div className="open-search">
                        {/*<button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>*/}
                        <Link to='/search'><button>Add a book</button></Link>
                    </div>
                </div>
            </div>
        )
        
        

    }

}

export default MainPage;