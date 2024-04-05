import "./About.scss";

function About() {
    return (
        <section className="about">
        <div classname="text-info">
                <h1>We are your <span>Developers</span></h1>
                <p>And we wish you <span>Bon appetit!</span></p>

                <h4 style={{fontWeight: "500", fontSize: "24px", marginTop: "20px"}}><span>Анекдот дня:</span></h4>
                <h4>Заходит однажды в бар улитка и говорит:<br />
                    -Можно виски с колой?<br />
                    - Простите, но мы не обслуживаем улиток.<br />
                    И бармен вышвырнул ее за дверь.<br />
                    Через неделю заходит опять эта улитка и спрашивает:<br />
                    -Ну и нафига ты это сделал!?</h4>
            </div>

            <img src="./cats.jpg" alt="img-with-cats" width="458px" height="458px" />

            
        </section>
    )
}

export { About }