const path = require('path');

module.exports = {
	entry: './private/view/components/index.tsx',
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	plugins: [
	],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public', 'static')
	}
};