import { Link, useLocation } from "react-router-dom"
import { API_URL } from "./config"
import { useEffect, useState, React } from "react"
import './Recipe.scss'

function Recipe() {
    let location = useLocation()
    const recipeId = location.pathname.slice(10).split('/')[1]

    const [meal, setMeal] = useState(null)
    const [loading, setLoading] = useState(true)

    const [ingredients, setIngredients] = useState([])
    // let ingredients = []
    let arr = []

    useEffect(function getRecipe() {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`${ API_URL }lookup.php?i=${ recipeId }`, requestOptions)
            .then(response => response.json())
            .then(result => {
                result.meals[0] && setMeal(result.meals[0]);
                setLoading(false)

                if (arr.length == 0) {
                    for (let i = 1; i < 21; i++) {
                
                    const strI = `strIngredient${i}`;
                    const strM = `strMeasure${i}`;
                    
                    switch (result.meals[0][strI] == null || result.meals[0][strI] == "") {
                        case false:
                            arr.push([result.meals[0][strI], result.meals[0][strM]]);
                            break;
                        case true:
                            break;
                    }
                }

                setIngredients(arr)}
            })
            .catch(error => console.log('error', error));
    }, [])

    useEffect(function getIngredients() {
        if (meal != null) {
            for (let i = 1; i < 21; i++) {
                
                const strI = `strIngredient${i}`;
                const strM = `strMeasure${i}`;
                
                switch (meal[strI] == null || meal[strI] == "") {
                    case false:
                        arr.push([meal[strI], meal[strM]]);
                        break;
                    case true:
                        break;
                }
            }
        }
    })

    console.log(arr)

    return (
        <section className="recipe">
            <Link to={ `../` } >&#8592; Back to Categories</Link>

            {loading ? <img src="../../preloader.svg" /> :
                <div>
                    <h1>{ meal.strMeal }</h1>
                    <span>{ meal.strArea } Food</span>
                    
                    <div className="meal">
                        <img src={ meal.strMealThumb } alt={ meal.strMeal } width="300px" height="300px" />

                        <div className="meal-ingredients">
                            {ingredients.map(item => 
                                <div className="item">
                                    <p>{ item[0] }</p>
                                    <p><span>{ item[1] }</span></p>
                                </div>
                            )}
                        </div>
                    </div>
                    
                    <div className="instruction">
                        <h2>Recipe</h2>
                        <p>{ meal.strInstructions }</p>
                    </div>


                    { meal.strYoutube != "" ? 
                        <div className="video">
                            <h2>Watch Video</h2>

                            <iframe width="760px" height="415px" src={ `https://youtube.com/embed/${ meal.strYoutube.slice(-11) }` } allowFullScreen />
                        </div> : null
                    }
                    
                </div>
            }
        </section>
    )
}

export { Recipe }