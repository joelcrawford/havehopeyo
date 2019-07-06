import React from 'react'
import logo from './logo.svg'
import './App.scss'

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="content">
          <h1>Have Hope Yo</h1>
          <p>Pellentesque habitant morbi tristique senectus et netus et 
          malesuada fames ac turpis egestas. Vestibulum tortor quam, 
          feugiat vitae, ultricies eget</p>
        </div>
      </header>
      <section className="banner"></section>
      <section className="col-primary">
        <p>Pellentesque habitant morbi tristique senectus et netus et 
          malesuada fames ac turpis egestas. Vestibulum tortor quam, 
          feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu 
          libero sit amet quam egestas semper. Aenean ultricies mi vitae est. 
          Mauris placerat eleifend leo.</p> 
          <img src={logo} alt="logo" />
      </section>
      <section className="aside col-secondary">
        <p>Pellentesque habitant morbi tristique senectus et netus et 
            malesuada fames ac turpis egestas. Vestibulum tortor quam, 
            feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu 
            libero sit amet quam egestas semper. Aenean ultricies mi vitae est. 
            Mauris placerat eleifend leo.</p> 
      </section>
      <footer className="footer">
        <p>Pellentesque habitant morbi tristique senectus et netus et 
              malesuada fames ac turpis egestas. Vestibulum tortor quam, 
              feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu 
              libero sit amet quam egestas semper. Aenean ultricies mi vitae est. 
              Mauris placerat eleifend leo.</p> 
      </footer>
    </div>
  )
}

export default App
