import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, createBrowserRouter, RouterProvider, Routes, Route } from 'react-router-dom';
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer"
import { Contact } from "./components/Contact"
import { About } from "./components/About"
import { Recipes } from './components/Recipes';
import { Recipe } from './components/Recipe';
import { Search } from './components/Search';


function App() {
  const [search, setSearch] = useState(null)

  function getSearch(text) {
    let searchText = text
    console.log(text)
  }

  return (
    <BrowserRouter>
      <Header getSearch={ getSearch }/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/category/:name" element={<Recipes />}/>
        <Route path="/search/:name" element={<Search search={ search } />}/>
        <Route path="/category/:name/:name" element={<Recipe />}/>
        <Route path="/search/:name/:name" element={<Recipe />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
