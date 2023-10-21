import './Footer.css'

import vk from './../../img/icons/vk.svg'
import tg from './../../img/icons/telegram.svg'
import github from './../../img/icons/gitHub.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item">
                            <a href="https://vk.com/evvxrtex" target='_blank' rel='noreferrer'>
                                <img src={vk} alt="Link" />
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="https://t.me/evvxrtex" target='_blank' rel='noreferrer'>
                                <img src={tg} alt="Link" />
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="https://github.com/Soshinoya" target='_blank' rel='noreferrer'>
                                <img src={github} alt="Link" />
                            </a>
                        </li>
                    </ul>
                    <div className="copyright">
                        <p>© 2023</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer