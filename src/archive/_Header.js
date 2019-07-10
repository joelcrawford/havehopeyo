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

    // debounced = (delay, fn) => {
    //     let timerId
    //     return function(...args) {
    //         if (timerId) {
    //             clearTimeout(timerId)
    //         }
    //         timerId = setTimeout(() => {
    //             fn(...args)
    //             timerId = null
    //         }, delay)
    //     }
    // }

    // throttled = (delay, fn) => {
    //     let lastCall = 0
    //     return function(...args) {
    //         const now = new Date().getTime()
    //         if (now - lastCall < delay) {
    //             return
    //         }
    //         lastCall = now
    //         return fn(...args)
    //     }
    // }

    // componentDidMount() {
    //     window.addEventListener(
    //         'scroll',
    //         this.throttled(40, this.parallaxShift)
    //     )
    // }

    // componentWillUnmount() {
    //     window.removeEventListener('scroll', this.parallaxShift)
    // }

    // parallaxShift = () => {
    //     this.setState({
    //         offset: window.pageYOffset,
    //     })
    // }

    render() {
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
}

export default Header
