class Navigation extends React.Component {
	constructor(props){
		super(props);
		this.state = {};
	}
    componentDidMount() {
        this.props.dispatch(init());
    }
    render() {
        console.log(this.props.navigationReducer)
        return (
            <div className="navigation-wrap">
                <div className="navigation-header">
                    Navigation
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state={}) => {
    return {
        navigationReducer : state.navigationReducer,
        navigationLinks : state.navigationReducer.navigationLinks
    }
}


let NavigationContainer = ReactRedux.connect(mapStateToProps)(Navigation);