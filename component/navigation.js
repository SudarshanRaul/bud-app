class Navigation extends React.Component {
	constructor(props){
		super(props);
		this.state = {};
	}
    componentDidMount() {
        this.props.dispatch(init);
    }
    render() {
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
    console.log(state);
    return state
}

let NavigationContainer = ReactRedux.connect(mapStateToProps)(Navigation);