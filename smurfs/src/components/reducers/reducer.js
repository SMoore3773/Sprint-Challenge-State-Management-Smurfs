import {FETCH_DATA, DATA_SUCCESS, DATA_ERROR, POST_DATA, POST_SUCCESS, POST_ERROR} from '../actions/actions';

const initialState = {
    smurfs: [],
    error: '',
    isLoading: false
    
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_DATA:
        return{
            ...state,
            isLoading: true
        }
        case DATA_SUCCESS:
            return{
                ...state,
                smurfs: action.payload,
                isLoading: false
            }
        case DATA_ERROR:
            return{
                ...state,
                error: action.payload
            }
        default:
            return state;
    };
}