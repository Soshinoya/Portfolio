import React from 'react'

import website from './../../img/icons/website.svg'

const BtnWebsite = ({ link }) => {
    return (
        <a href={link} rel="noreferrer" className="btn-outline" target="_blank">
            <img src={website} alt="иконка интернета" />
            Website
        </a>
    )
}

export default BtnWebsite