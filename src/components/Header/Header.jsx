import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Hi, my name is <em>Alex</em></strong><br />
                </h1>
                <div className="header__text">
                    <p>Разрабатываю адаптивную верстку на основе макетов для desktop и mobile версии</p>
                </div>
            </div>
        </header>
    )
}

export default Header