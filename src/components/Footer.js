import React from 'react'
import '../assets/scss/footer.scss'
import { config } from '../store/config'

function handleClick (to, e) {
    console.log(to, e)

}
export default({data}) => {
    return (
        <footer className="footer">
            <div className="col-primary">
                
                <div className="social-icons">
                    
                    <a 
                        href={`mailto:${config.links.email}`}
                        target="_blank"
                        rel="noreferrer noopener">
                        <span className="fal fa-paper-plane" />
                        
                    </a>
                    <a 
                        href={config.links.linkedin}
                        target="_blank"
                        rel="noreferrer noopener">
                        <span className="fab fa-linkedin-in" />
                    </a>
                    
                </div> 
                <p style={{float: 'left'}}>&copy; {data}</p> 
            </div>
      </footer>
    )
}
    