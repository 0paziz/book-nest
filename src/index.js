import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Description from './Components/Description/Description';
import BookList from './Components/BookList/BookList';
import { HashRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <HashRouter>
  <Routes>
    <Route path="/" element={<Home />}>
      <Route path="none" element={<About />} />
      <Route path="book/:id" element={<Description />} />
      <Route path="book" element={<BookList />} />
    </Route>
  </Routes>
</HashRouter>

  </React.StrictMode>
);


