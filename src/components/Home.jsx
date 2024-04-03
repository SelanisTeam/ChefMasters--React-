import "./Home.scss";

function Home(props) {
    console.log(props)

    return (
        <section>
            {props.loading ? <img className="preloader" id="preloader" src="preloader.svg" /> : <p>Ok</p>}
        </section>
    )
}

export { Home }