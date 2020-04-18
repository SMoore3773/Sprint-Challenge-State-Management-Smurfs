import React, {useState} from 'react';
import {connect} from 'react-redux';
import {fetchData} from '../actions/actions';
import Smurf from './smurf'

const SmurfList = props =>{
    console.log('props in smurfList', props)

    const [newSmurf, setNewSmurf] = useState({})
    
    return(
        <div className='smurfList'>
            <button onClick={()=>props.fetchData()}>Get Smurfs</button>
            <div>
                {props.smurfs.map(smurf=> <Smurf key={smurf.id} smurf={smurf}/>)}
            </div>
        </div>
    )
}
const mapStateToProps = state =>{
    return{
       smurfs: state.smurfs
    };
};
export default connect(mapStateToProps,{fetchData})(SmurfList);