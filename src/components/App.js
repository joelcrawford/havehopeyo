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
    amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.`
}

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <section className="col-primary">
          <h1>{data.slogan}</h1>
          <p>{data.subslogan}</p>
        </section>
        <section className="col-secondary">
          <img className="ab-logo" src={hhy} alt="logo" width="100px" />
        </section>
      </header>
      <section className="banner"></section>
      <section className="col-primary">
        <p>{data.random}</p> 
          <img src={logo} alt="logo" />
      </section>
      <section className="aside col-secondary">
        <p>{data.random}</p> 
      </section>
      <footer className="footer">
        <p>{data.random}</p> 
      </footer>
    </div>
  )
}

export default App
