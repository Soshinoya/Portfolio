import { NavLink } from 'react-router-dom'
import BtnDarkMode from '../BtnDarkMode/BtnDarkMode'
import './Navbar.css'

const checkActiveClassToLink = ({ isActive }) => isActive ? 'nav-list__link nav-list__link--active' : 'nav-list__link'

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <NavLink to="/" className="logo">
                        <strong>Portfolio</strong>
                    </NavLink>
                    <BtnDarkMode />
                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <NavLink to="/" className={checkActiveClassToLink}>
                                Главная
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/projects" className={checkActiveClassToLink}>
                                Проекты
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar