import "./Home.scss";
import React, { useEffect, useState } from 'react';
import { API_URL } from "./config";
import { Link } from "react-router-dom";

function Home() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(function getRecipes() {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(API_URL + 'categories.php', requestOptions)
            .then(response => response.json())
            .then(result => {
                result.categories && setCategories(result.categories);
                setLoading(false);
                console.log(result.categories);
            })
            .catch(error => console.log('error', error));
        
        console.log(categories)

    }, [])

    return (
        <section className="home">
            <h2>Browser Our Trending <span>Categories</span></h2>

            {loading ? <div className="home__preloader">
                <img className="preloader" id="preloader" src="preloader.svg" />
            </div> : 
            <div className='home__categories'>
                {categories.map(item => 
                    <Link to={`/category/${item.strCategory}`} className="category" id={ item.idCategory } style={{background: `url('black-rectangle.svg') center/cover no-repeat, url(${item.strCategoryThumb}) center/cover no-repeat`}}>
                        <p>{item.strCategory}</p>
                    </Link>
                )}
            </div>
            }
            
            
        </section>
    )
}

export { Home }