import { Application, static as Static } from 'express';
import * as Path from 'path';
import { App, Module } from 'quartzfw';

import IndexGetController from './controllers/index.get.controller';
import IndexGateway from './gateways/index.gateway';

@Module({
	controllers: [
		IndexGetController
	],
	gateways: [
		IndexGateway
	]
})
export default class ApplicationModule {
	@App
	private _app?: Application;

	constructor() {
		this._app && this._app.use(require('compression')());
		this._app && this._app.use(Static(__dirname + '/static'));
		this._app && this._app.set('view engine', 'js');
		this._app && this._app.set('views',
			Path.join(__dirname, '/view/components'));
	}
}