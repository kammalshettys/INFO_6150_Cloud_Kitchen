import * as TYPE from '../type'
import data from '../../data.json'
export  function getUserDetails(){
    return {
        type: TYPE.USER_ROLE,
        role: data.role    
    }
}