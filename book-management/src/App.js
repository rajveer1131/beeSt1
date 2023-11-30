import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    genre: '',
    publicationYear: '',
    ISBN: '',
  });

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/books'); // Replace with your backend URL
      setBooks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addBook = async () => {
    try {
      await axios.post('http://localhost:4000/api/books', newBook); // Replace with your backend URL
      fetchBooks();
      resetForm();
    } catch (error) {
      console.error(error);
    }
  };

  const resetForm = () => {
    setNewBook({
      title: '',
      author: '',
      genre: '',
      publicationYear: '',
      ISBN: '',
    });
  };

  return (
    <div className="container">
      <h1>Book Management</h1>

      <form>
        <label>Title:</label>
        <input
          type="text"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
        />

        <label>Author:</label>
        <input
          type="text"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        />

        <label>Genre:</label>
        <input
          type="text"
          value={newBook.genre}
          onChange={(e) => setNewBook({ ...newBook, genre: e.target.value })}
        />

        <label>Publication Year:</label>
        <input
          type="number"
          value={newBook.publicationYear}
          onChange={(e) =>
            setNewBook({ ...newBook, publicationYear: e.target.value })
          }
        />

        <label>ISBN:</label>
        <input
          type="text"
          value={newBook.ISBN}
          onChange={(e) => setNewBook({ ...newBook, ISBN: e.target.value })}
        />

        <button type="button" onClick={addBook}>
          Add Book
        </button>
      </form>

      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
