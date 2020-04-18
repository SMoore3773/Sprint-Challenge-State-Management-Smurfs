import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const DATA_SUCCESS = 'DATA_SUCCESS';
export const DATA_ERROR = 'DATA_ERROR';
export const POST_DATA = 'POST_DATA';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_ERROR = 'POST_ERROR';

export const fetchData = () => dispatch => {
    dispatch({
        type: FETCH_DATA
    });
    axios
        .get('http://localhost:3333/smurfs')
        .then(res=>{
            console.log('result in api request',res);
            const smurfs = res.data;
            dispatch({type: DATA_SUCCESS, payload: smurfs});
        })
        .catch(err=>{
            console.log('error: ', err)
            dispatch({ type: DATA_ERROR, payload: err});
        })
}

export const postData = (newSmurf) => dispatch => {
    console.log('newSmurf in post', newSmurf)
    dispatch({
        type: POST_DATA, payload:newSmurf
    });
    axios
        .post('http://localhost:3333/smurfs/',newSmurf)
        .then(res=>{
            console.log('post in api post',res);
            const newSmurf = res.data;
            dispatch({type: POST_SUCCESS, payload: newSmurf});
        })
        .catch(err=>{
            console.log('error: ', err)
            dispatch({ type: POST_ERROR, payload: err});
        })
}