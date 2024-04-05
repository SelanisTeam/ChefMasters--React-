import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, createBrowserRouter, RouterProvider, Routes, Route } from 'react-router-dom';
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer"
import { Random } from "./components/Random"
import { About } from "./components/About"
import { Recipes } from './components/Recipes';
import { Recipe } from './components/Recipe';
import { Search } from './components/Search';
import { SearchRecipe } from './components/SearchRecipe';


function App() {
  const [search, setSearch] = useState(null)

  function getSearch(text) {
    let searchText = text
    setSearch(searchText)
  }

  return (
    <BrowserRouter>
      <Header getSearch={ getSearch }/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/random" element={<Random />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/category/:name" element={<Recipes />}/>
        <Route path="/search" element={<Search search={ search } />}/>
        <Route path="/category/:name/:name" element={<Recipe />}/>
        <Route path="/search/:name" element={<SearchRecipe />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
