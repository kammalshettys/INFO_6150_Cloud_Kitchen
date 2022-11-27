import * as TYPE from '../type'
const intialState = {
    role:"",
    name:"",
    isSignedIn:false,
 }

export const reducer = (state={...intialState}, action)=>{
     switch(action.type){
        case TYPE.USER_ROLE:
            return {
                ...state,
                role:action.role,
                isSignedIn:true,
                name:"Danny"
            }
            break;
     }
     return state;
}