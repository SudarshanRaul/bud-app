/*Navigation Reducer*/

let initialState = {}; 
const navigationReducer = (state=initialState, action) => {
    switch(action.type){
        case 'NAV_LINKS':
            return Object.assign(state, {
                navigationLinks : action.data
            })
        default:
            return state
    }
}
