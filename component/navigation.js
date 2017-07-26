class Navigation extends React.Component {
	constructor(props){
		super(props);
		this.state = {};
	}
  componentWillMount() {
    this.props.dispatch(init());   
  }
  componentWillReceiveProps(props){
    console.log(props);
  }
  render() {
    return (
      <div className="navigation-wrap">
        <div className="navigation-header">
          Navigation
        </div>
        {this.props.navigationReducer.navigationLinks.map((links, index) => <div key={index}>{links}</div>)}
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
