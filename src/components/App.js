import React from 'react'
import logo from '../assets/logo/react-logo.svg'
import hhy from '../assets/logo/octahedron.png'
import '../assets/scss/app.scss'

const data = {
  title: 'Have Hope Yo',
  slogan: `Information has the power to change our world.`,
  subslogan: `Knowledge creates better organizations, better people, better relationships.`,
  random: `Pellentesque habitant morbi tristique senectus et netus et malesuada 
    fames ac turpis egestas. Vestibulum tortor quam, 
    feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit 
    amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.`,
  footer: `2015 Have Hope Yo.`
}

function App() {
  return (
    <div className="wrapper">
     <header className="header">
        <div className="col-3">
          <h1 className="slogan">{data.slogan}</h1>
          <p>{data.subslogan}</p>
        </div>
        <div className="col-1">
          <img className="ab-logo" src={hhy} alt="logo" />
        </div>
      </header>
      <section className="banner"></section>
      
      <section className="col-primary">
        <p>{data.random}</p> 
          <img src={logo} alt="logo" />
      </section>
      <section className="col-secondary">
        <p>{data.random}</p> 
      </section>
      <footer className="footer">
        <div className="col-primary">
        <p>&copy; {data.footer}</p> 
        </div>
      </footer>
    </div>
  )
}

export default App
