// A reducer is a function that returns an object, or
// a piece of state to the rootReducer
// I specifically manage the users name and token
// If you want to change me let me know by an action.type

export default (state = [], action)=>{
    // signature takes state, we default it to []
    if ((action.type === "AUTH_ACTION")|| (action.type ==="LOGIN_ACTION")){
        console.log(action.payload.data);
        return action.payload.data 
    }else if(action.type === "LOGOUT"){
        return []
    }else{
        return state 
    }
}