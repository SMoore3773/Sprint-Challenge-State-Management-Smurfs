import React from 'react';
import {connect} from 'react-redux';
import {fetchData, postData} from '../actions/actions';
import Smurf from './smurf'
import {useInput} from '../useInput';

const SmurfList = props =>{
    // console.log('props in smurfList', props)

    const{value:name, bind:bindName, reset:resetName} = useInput('');
    const{value:age, bind:bindAge, reset:resetAge} = useInput('');
    const{value:height, bind: bindHeight, reset: resetHeight} = useInput('');

    const handleSubmit = e =>{
        e.preventDefault();
        props.postData({name,age,height});
        resetName();
        resetAge();
        resetHeight();
    }
    

    
    
    return(
        <div className='smurfList'>
            <button onClick={()=>props.fetchData()}>Get Smurfs</button>
            <div>
                {props.smurfs.map(smurf=> <Smurf key={smurf.id} smurf={smurf}/>)}
            </div>
            <form className='newSmurfForm'>
                <label> Name: 
                    <input type='text' {...bindName} />
                </label>
                <label>Age:
                    <input type='number' {...bindAge}/>
                </label>
                <label>Height:
                    <input type='text' {...bindHeight} />
                </label>
                <button type='submit' onClick={handleSubmit}>Add New Smurf</button>
            </form>
        </div>
    )
}
const mapStateToProps = state =>{
    return{
       smurfs: state.smurfs
    };
};
export default connect(mapStateToProps,{fetchData, postData})(SmurfList);