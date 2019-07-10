import React from 'react'
import { getRandomInt } from '../store/actions'

const faBest = ['crow', 'eye', 'chart-network', 'draw-polygon', 'feather']

const data = {
    filler: `Pellentesque habitant morbi tristique senectus et netus et malesuada 
  fames ac turpis egestas. Vestibulum tortor quam, 
  feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit 
  amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.`,
}

export default () => {
    return (
        <section className="container">
            <div className="f-items">
                <span
                    className={`fal fa-${
                        faBest[getRandomInt(0, faBest.length - 1)]
                    }`}
                />
                <span className="i-inset">TRANSFORM</span>
                <p className="p-inset">{data.filler}</p>
            </div>
            <div className="f-items">
                <span className="i-inset">EXPLORE</span>
                <span
                    className={`fal fa-${
                        faBest[getRandomInt(0, faBest.length - 1)]
                    }`}
                />
                <p className="p-inset">{data.filler}</p>
            </div>
            <div className="f-items">
                <span
                    className={`fal fa-${
                        faBest[getRandomInt(0, faBest.length - 1)]
                    }`}
                />
                <span className="i-inset">OFFER</span>
                <p className="p-inset">{data.filler}</p>
            </div>
        </section>
    )
}
