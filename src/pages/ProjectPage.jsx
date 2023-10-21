import { useParams } from "react-router-dom"

import { Swiper, SwiperSlide } from 'swiper/react'

import { Autoplay } from 'swiper/modules'

import BtnGitHub from "../components/BtnGitHub/BtnGitHub"
import BtnWebsite from "../components/BtnWebsite/BtnWebsite"

import { projects } from "../data/projectsList"

import 'swiper/css'

const ProjectPage = () => {

    const { id } = useParams()

    const currentProject = projects.find(project => project.id === +id)

    const { title, skills, fullPageImgUrl, sliderImgUrls = [], gitHubLink = '', websiteLink = '' } = currentProject

    return (
        <main className="section project-page">
            <div className="container">
                <div className="project-details">

                    <h1 className="title-1">{title}</h1>
                    <Swiper
                        className="project-slider"
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    loop={true}
                    >
                        {sliderImgUrls?.length > 0 && sliderImgUrls.map((imgUrl, i) => (
                            <SwiperSlide key={i}>
                                <div className="project-slide">
                                    <img src={imgUrl} alt={`${title} app mockup`} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="project-details__desc">
                        <div className="project-details__skills">
                            {skills.length > 0 && skills.split(' ').map((skill, i) => <p key={i}>{skill}</p>)}
                        </div>
                        <div className="project-details__links">
                            {gitHubLink && <BtnGitHub link={gitHubLink} />}
                            {websiteLink && <BtnWebsite link={websiteLink} />}
                        </div>
                        {fullPageImgUrl && <div className="project-details__fullPage"><img src={fullPageImgUrl} alt="Скриншот всей страницы" /></div>}
                    </div>

                </div>
            </div>
        </main>
    )
}

export default ProjectPage