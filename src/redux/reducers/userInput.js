import intialState from "./intialState";
const addNewUser=(user,newUser)=>{
   return [...user,newUser]
}
const inputReducer = (state=intialState, action)=>{
    switch(action.type) {
        case 'NEW_USER': 
           return {...state,user:addNewUser(state.user,action.data)};
       default:
            return intialState;
    }
}

export default inputReducer;