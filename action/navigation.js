/*Navigation Action*/

const init = () => {
    return (dispatch) => {
        dispatch ({
            type : 'NAV_LINKS',
            data : ['Home', 'Summary']    
        })
    }
}