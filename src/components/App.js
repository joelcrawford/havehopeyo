import React from 'react'
import hhy from '../assets/logo/octahedron.png'
import '../assets/scss/app.scss'
import { getRandomInt } from '../store/actions'

const data = {
  name: 'Have Hope, Yo',
  slogan: `As ordinary as it all appears...`,
  subslogan: `There are times when it is beyond my imagination.`,
  slogan2: `Information has the power to change our world.`,
  subslogan2: `Knowledge creates better people, better relationships, better organizations.`,
  filler: `Pellentesque habitant morbi tristique senectus et netus et malesuada 
  fames ac turpis egestas. Vestibulum tortor quam, 
  feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit 
  amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.`,
  footer: '2015 Have Hope Yo'
}

function App() {
  const faBest = ['crow', 'hat-wizard', 'eye',
    'chart-network', 'draw-polygon', 'feather']
  let f = faBest[getRandomInt(0, faBest.length - 1)]
                        
  return (
    <div className="wrapper">

     <header className="header">
        <div className="col-header-main">
          <h1 className="slogan">{data.slogan}</h1>
          <p>{data.subslogan}</p>
        </div>
        <div className="col-header-side">
          <img className="ab-logo" src={hhy} alt="logo" />
        </div>
      </header>

      <section className="banner"></section>
      <section className="l20">
        <span className={`i-inset fal fa-${faBest[getRandomInt(0, faBest.length - 1)]}`} />
        
        <span className="i-inset">DATA</span>
        <p className="p-inset">{data.filler}</p> 
      </section>
      <section className="l20">
      <span className={`i-inset fal fa-${faBest[getRandomInt(0, faBest.length - 1)]}`} />
        
        <span className="i-inset">VIZ</span>
        <p className="p-inset">{data.filler}</p>
      </section>
      

      {/* <section className="col-primary">
        <p>{data.filler}</p> 
          <img src={logo} alt="logo" />
      </section>
      <section className="col-secondary">
        <p>{data.filler}</p> 
      </section> */}

      <footer className="footer">
        <div className="col-primary">
        <p>&copy; {data.footer}</p> 
        </div>
      </footer>

    </div>
  )
}

export default App
