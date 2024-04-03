import React from 'react';
import "./Footer.scss";

function Footer() {
    return (
        <footer>
            <div className="footer">
                <h2 style={{fontSize: '18px'}}>Разработчики</h2>

                <a href="https://github.com/SelanisTeam/ChefMasters--React-">Репозиторий</a>

                <div>
                    <h3>Волкова Диана ТКБО-01-22</h3>
                    <h3>Логвинова Валерия ТКБО-01-22</h3>
                    <h3>Полехова Екатерина ТКБО-01-22</h3>
                </div>
            </div>
        </footer>

    )
}

export { Footer }