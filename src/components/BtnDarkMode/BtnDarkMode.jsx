import { useEffect } from 'react'
import { useLocalStorage } from '../../utils/useLocalStorage'
import detectDarkMode from '../../utils/detectDarkMode'
import sun from './sun.svg'
import moon from './moon.svg'
import './BtnDarkMode.css'

const BtnDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode())

    const toggleDarkMode = () => setDarkMode(currentValue => currentValue === 'light' ? 'dark' : 'light')

    useEffect(() => {
        if (darkMode === 'dark') {
            document.body.classList.add('dark')
        } else {
            document.body.classList.remove('dark')
        }
    }, [darkMode])

    useEffect(() => {
        window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", (event) => {
                const newColorScheme = event.matches ? "dark" : "light";
                setDarkMode(newColorScheme)
            })

    }, [setDarkMode])

    const btnNormalClass = 'dark-mode-btn'
    const btnActiveClass = 'dark-mode-btn dark-mode-btn--active'

    return (
        <button className={darkMode === 'dark' ? btnActiveClass : btnNormalClass} onClick={toggleDarkMode}>
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
        </button>
    )
}

export default BtnDarkMode