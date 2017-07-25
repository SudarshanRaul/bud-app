/*Navigation Action*/

const init = () => {
    (dispatch) => {
        return {
            type : 'NAV_LINKS',
            data : ['Home', 'Summary']    
        }
    }
}