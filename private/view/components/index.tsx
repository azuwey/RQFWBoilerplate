import * as React from 'react';
import { hydrate } from 'react-dom';
import Main from './main';

(() => {
	let unparsedState = document.getElementById('props');
	if (unparsedState && unparsedState.innerHTML) {
		console.log('possgsop');
		let initialState = JSON.parse(unparsedState.innerHTML);
		hydrate(<Main {...initialState} />, document.getElementById('view'));
	} else {
		console.error('There is no unparsed initial state');
	}
})()