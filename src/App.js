import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, createBrowserRouter, RouterProvider, Routes, Route } from 'react-router-dom';
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer"
import { Contact } from "./components/Contact"
import { About } from "./components/About"

import { API_URL } from './components/config';

function App() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(function getRecipes() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(API_URL, requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        data.categories && setCategories(data.categories);
        setLoading(false);
      })
      .catch(error => console.log('error', error));

  }, [])

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home loading={loading} />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
