import React from 'react'
import Tilt from 'react-tilt'
import './Logo.css'
import camera from './camera.png'
 

const Logo = () => {
    
    return(
        <div className='ma4 mt0'> 
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 100, width: 100 }} >
            <div className="Tilt-inner pa3"><img alt='camera' src={camera}/></div>
            </Tilt>
        </div>
        
    );
}

export default Logo;