import React from 'react'
import hhy from '../assets/logo/octahedron.png'

const data = {
    name: 'Have Hope, Yo',
    slogan: `As ordinary as it all appears...`,
    subslogan: `There are times when it is beyond my imagination.`,
    slogan2: `Information has the power to change our world.`,
    subslogan2: `Knowledge creates better people, better relationships, better organizations.`,
}

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            offset: 0,
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.parallaxShift)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.parallaxShift)
    }

    parallaxShift = () => {
        this.setState({
            offset: window.pageYOffset,
        })
    }

    render() {
        return (
            <React.Fragment>
                <header
                    style={{ backgroundPositionY: this.state.offset / 2 }}
                    className="header"
                >
                    <div className="col-header-main">
                        <h1 className="slogan">{data.slogan}</h1>
                        <p>{data.subslogan}</p>
                    </div>
                    <div className="col-header-side">
                        <img className="ab-logo" src={hhy} alt="logo" />
                    </div>
                </header>
                <section className="banner"></section>
            </React.Fragment>
        )
    }
}

export default Header
