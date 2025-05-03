import React, { useState, useEffect } from "react";
import searchingimg from "../../images/searching.gif";
import searchIcon from "../../images/search.png";
import "./Hero.css";
import BookList from "../BookList/BookList";
import axios from "axios";

function Hero() {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [bookData, setBookData] = useState([]);

  const API_key = "AIzaSyBAjRNldZVc0fnSvjx58A5x4YViCt5kQR4";

 
  useEffect(() => {
    const storedBooks = localStorage.getItem("bookData");
    if (storedBooks) {
      setBookData(JSON.parse(storedBooks));
    }
  }, []);


  useEffect(() => {
    if (bookData.length > 0) {
      localStorage.setItem("bookData", JSON.stringify(bookData));
    }
  }, [bookData]);

  const SearchBook = (event) => {
    event.preventDefault();
    const trimmedTerm = searchTerm.trim();

    if (trimmedTerm !== "") {
      const url = `https://www.googleapis.com/books/v1/volumes?q=${trimmedTerm}&key=${API_key}&maxResults=20`;

      setLoading(true);
      setTimeout(() => {
        axios
          .get(url)
          .then((res) => {
            setBookData(res.data.items || []);
          })
          .catch((err) => console.error("API error:", err))
          .finally(() => setLoading(false));
      }, 2000);
    }
  };

  return (
    <>
      <main id="hero">
        <div className="text-containers">
          <h1 id="hero-title">Find Your Next Favorite Book</h1>
          <p id="hero-para">
            BookNest's the spot to find your next great read. Whether you're into chill romances,
            wild thrillers, or something totally out there, we've got books you'll vibe with. Come
            find your next favorite!
          </p>

          <form id="book_search" onSubmit={SearchBook}>
            <input
              id="book_name"
              placeholder="author or book name..."
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <img
              id="search-icon"
              src={searchIcon}
              alt="search icon"
              onClick={SearchBook}
              style={{ cursor: "pointer" }}
            />
          </form>
        </div>
      </main>

      <div className="bookList-container">
        {loading ? (
          <div className="loading">
            <img id="gif" src={searchingimg} alt="Loading books..." />
          </div>
        ) : (
          <BookList book={bookData} />
        )}
      </div>
    </>
  );
}

export default Hero;
