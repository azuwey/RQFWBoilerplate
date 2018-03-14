import * as React from 'react';
import { renderToString } from 'react-dom/server';

import Props from './wrapper.props';

export default (props: Props) => {
	return `<!DOCTYPE html><html>
		<head>
			<script id='props' type='application/json'>
				${props.initialState}
			</script>
			<title>${props.title}</title>
			<link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' />
		</head>
		<body>
			<div id='view'>${renderToString(<props.body {...props.initialState} />)}</div>
		</body>
		<script src='bundle.js'></script>
	</html>`;
}