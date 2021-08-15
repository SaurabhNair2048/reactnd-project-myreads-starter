# MyReads Project

This project is part of Udacity's assessment project for React Fundamentals course. It represents a kind of virtual book shelf. The user can search for books and add them to his/her shelves. The shelves are divided into three categories as 'Want to Read', 'Currently Reading' and 'Read'. The user can move the books between these shelves or even choose to remove it from the shelves.

## TL;DR

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── MainPage.js # This is the home page of your app. It displays the contents of your shelf and a link to the Search page.
    ├── SearchPage.js # This page lets you search for books to add to your shelf and also a link to return back to Home page.
    ├── Shelf.js # This represents a single shelf and displays the books available in that shelf.
    ├── BooksList.js # This just represents the books on a shelf. It loops through the available books to display each of them.
    ├── BookTile.js # This represents a single book on our shelf. Each book has an associated control to change it shelf.
    ├── SelectionDropDown.js # This represents the control available with each book to change their shelves.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## Backend Server

To simplify the development process, a backend server is provided by Udacity. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods needed to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Contributing

This repository is the project code for submission as part of Udacity's React Fundamentals course. Therefore, currently no pull requests will be accepted.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
