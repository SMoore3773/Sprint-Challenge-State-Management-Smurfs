import React from 'react';

const SmurfList = props =>{
    return(
        <div>
            smurfList
        </div>
    )
}
const mapStateToProps = state =>{
    return{
        slip: state.slip,
        query: state.query
    };
};
export default SmurfList;