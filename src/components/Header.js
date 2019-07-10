import React from 'react'
import hhy from '../assets/logo/octahedron.png'

const data = {
    name: 'Have Hope, Yo',
    slogan: `As ordinary as it all appears...`,
    subslogan: `There are times when it is beyond my imagination.`,
    slogan2: `Information has the power to change our world.`,
    subslogan2: `Knowledge creates better people, better relationships, better organizations.`,
}

export default () => {
    return (
        <React.Fragment>
            <header className="header">
                <div className="col-header-main">
                    <h1 className="slogan">{data.slogan}</h1>
                    <p>{data.subslogan}</p>
                </div>
                <div className="col-header-side">
                    <img className="ab-logo" src={hhy} alt="logo" />
                </div>
            </header>

            {/* <section className="banner-window"></section> */}

            <section className="banner"></section>
        </React.Fragment>
    )
}
