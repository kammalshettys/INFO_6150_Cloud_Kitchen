
export const setUserDetails = (dayArray)=>{
    return {
        type: TYPE.DAY_WEATHER,
        dayArray:dayArray
    }
}