import { Link } from 'react-router-dom'
import './Project.css'

const Project = ({ id, title, previewImgUrl }) => {
    return (
        <li className="project">
            <Link to={`/project/${id}`}>
                <div className="project__img">
                    <img src={previewImgUrl} alt="Project img" />
                </div>
                <h3 className="project__title">{title}</h3>
            </Link>
        </li>
    )
}

export default Project