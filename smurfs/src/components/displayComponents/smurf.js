import React from 'react';

const Smurf = props =>{
    console.log('props in smurf component', props)
    return(
    <div className = 'smurfCard'>
        <p>{props.smurf.name}</p>
        <p>Age: {props.smurf.age}</p>
        <p>Height: {props.smurf.height}</p>
    </div>
    )
}

export default Smurf;