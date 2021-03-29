import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import App from './components/app';

const store = createStore(reducer);

// actions = {
// 	inc: inc,
// 	dec: dec,
// 	zero: zero
// }
// const bindActionCreator = (creator, dispatch) => (...args) => {
// 	dispatch(creator(...args));
// }

// const incDispatch = () => dispatch(inc());


// const decDispatch = bindActionCreators(dec, dispatch);
// const zeroDispatch = bindActionCreators(zero, dispatch);


// document.getElementById('inc').addEventListener('click', inc);
// document.getElementById('dec').addEventListener('click', dec);
// document.getElementById('zero').addEventListener('click', zero);

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>
	, document.getElementById('root'));