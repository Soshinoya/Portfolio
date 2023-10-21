import gitHubBlack from './../../img/icons/gitHub-black.svg'

const BtnGitHub = ({ link }) => {
    return (
        <a href={link} rel="noreferrer" className="btn-outline" target="_blank">
            <img src={gitHubBlack} alt="" />
            GitHub
        </a>
    )
}

export default BtnGitHub