import React from 'react';
import siraj from './siraj.jpg';

function ProfilPhoto()
{
    return(
        <img src={siraj} style={{ width: 150,
            height: 140,
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
        }} /> 

    )
}
export default ProfilPhoto