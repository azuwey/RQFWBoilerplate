import { Request, Response } from 'express';
import { Controller, Get } from 'quartzfw';

import Main from '../view/components/main';
import Wrapper from '../view/wrapper';

@Controller()
export default class IndexGetController {
	@Get()
	private test(req: Request, res: Response) {
		let initialState = {};
		res.send(Wrapper({
			title: 'Skill tree',
			body: Main,
			initialState: JSON.stringify(initialState)
		}));
	}
}