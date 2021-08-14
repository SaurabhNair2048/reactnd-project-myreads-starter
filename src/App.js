import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import MainPage from './MainPage'
import SearchPage from './SearchPage'

class BooksApp extends React.Component {
    state = {
        'Currently Reading' : [],
        'Want to Read' : [],
        'Read' : []
    }
//   state = {
//     /**
//      * TODO: Instead of using this state variable to keep track of which page
//      * we're on, use the URL in the browser's address bar. This will ensure that
//      * users can use the browser's back and forward buttons to navigate between
//      * pages, as well as provide a good URL they can bookmark and share.
//      */
//     showSearchPage: false
//   }
    populateShelves = (books) => {
        let reading = [];
        let wantTo = [];
        let hasRead = [];
        for(let book of books){
            let temp = {};
            temp['id'] = book['id'];
            temp['title'] = book['title'];
            temp['authors'] = book['authors'];
            temp['thumbnail'] = typeof(book['imageLinks'])==='undefined' ? 'No Image' : book['imageLinks']['thumbnail'];;
            temp['shelf'] = book['shelf'];
            if(book['shelf']==='currentlyReading'){
                reading.push(temp);
            } else if(book['shelf']==='wantToRead'){
                wantTo.push(temp);
            } else if(book['shelf']==='read'){
                hasRead.push(temp);
            }
        }
        this.setState((prevState) => ({
            'Currently Reading' : reading,
            'Want to Read' : wantTo,
            'Read' : hasRead
        }));
    };

    updateBookShelf = (book, newShelf) => {
        // console.log('This update has been called');
        // console.log(book);
        // console.log(newShelf);
        BooksAPI.update(book, newShelf)
        .then((res) => {
            // console.log(res);
            BooksAPI.getAll()
            .then((books) => this.populateShelves(books))
        });
    };

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={()=><MainPage shelves={this.state} fetchShelves={this.populateShelves} updateBookShelf={this.updateBookShelf}/>}/>
        <Route path='/search' render={()=><SearchPage shelves={this.state} updateBookShelf={this.updateBookShelf} fetchShelves={this.populateShelves}/>}/>
      </div>
        
    )
  }
}

export default BooksApp
