import {createStore} from 'redux';

const reducer = (state = 0, action) => {
	switch (action.type) {
		case 'INC':
			return state + 1;
		case 'DEC':
			return state - 1;
		case 'ZERO':
			return state - state;
		default:
			return state;
	}
}

const inc = () => ({type: 'INC'});
const dec = () => ({type: 'DEC'});
const zero = () => ({type: 'ZERO'});

//inc - action-creator функция, потому что создают экшн (объект, что передаем в dispatch)

const store = createStore(reducer);

document.getElementById('inc').addEventListener('click', () => {
	store.dispatch(inc());
});
document.getElementById('dec').addEventListener('click', () => {
	store.dispatch(dec());
});
document.getElementById('zero').addEventListener('click', () => {
	store.dispatch(zero());
});

const update = () => {
	document.getElementById('counter').textContent = store.getState();
}

store.subscribe(update);