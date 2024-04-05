import React, { useEffect, useState } from "react"
import './Recipes.scss'
import { Link, useLocation } from "react-router-dom"
import { API_URL } from "./config"

function Search(props) {
    let location = useLocation()
    const categoryType = location.pathname.slice(1, 9)
    const categoryName = location.pathname.slice(8)

    const [loading, setLoading] = useState(true)
    const [meals, setMeals] = useState([])
    const [search, setSearch] = useState(props.search)

    useEffect(function getMeals() {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        
        fetch(`${API_URL}search.php?s=${ search }`, requestOptions)
        .then(response => response.json())
        .then(result => {
            result.meals && setMeals(result.meals);
            setLoading(false)
        })
        .catch(error => console.log('error', error));
    })

    return (
        <React.Fragment>
            <section className="recipes-container">
                <Link to={`/../../`} className='button-back'>
                    &#8592; Back to Categories
                </Link>

                <h1>{ categoryName }</h1>

                {loading ? <div className="recipes-preloader">
                    <img className="preloader" id="preloader" src="../../preloader.svg" />
                </div> : 
                <div className="recipes">
                    {
                        meals.length == 0 ? <div>
                            <h1><span>Not Found :(</span></h1>
                        </div> : meals.map(meal => 
                            <div className="item">
                                <img src={ meal.strMealThumb } alt={ meals.strMeal } width="118px" height="120px" />

                                <h2>{ meal.strMeal }</h2>

                                <Link to={ `./${ meal.idMeal }` }>Watch Recipe</Link>
                            </div> )
                    }
                </div>
            }

                
            </section>
        </React.Fragment>
    )
}

export { Search }