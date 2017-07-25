/*Create a store*/
const store = Redux.createStore(
    reducers,
    Redux.applyMiddleware(ReduxThunk.default)
);

/*Render component to DOM*/
const render = () => {
	ReactDOM.render(
		<ReactRedux.Provider store={store}>
            <NavigationContainer />
        </ReactRedux.Provider>,
		document.getElementById('rootApp')
	);
}

render();