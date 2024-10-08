import Project from "../components/Project/Project"
import { projects } from "../data/projectsList"

const Projects = () => {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Пет-Проекты</h2>
                <ul className="projects">
                    {projects.map(project => <Project key={project.id} {...project}/>)}
                </ul>
            </div>
        </main>
    )
}

export default Projects