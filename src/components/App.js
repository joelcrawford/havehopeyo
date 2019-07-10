import React from 'react'
import '../assets/scss/app.scss'

import Footer from './Footer'
import Header from './Header'
import Content from './Content'

export default () => {
    return (
        <div className="wrapper">
            <Header />
            <Content />
            <Footer />
        </div>
    )
}
