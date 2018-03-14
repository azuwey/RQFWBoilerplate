import { Gateway, Income } from 'quartzfw';
import * as Ws from 'ws';

@Gateway('asd')
export default class IndexGateway {
	@Income('test')
	private name(ws: Ws, message: string) {
		ws.send((new Date()).getTime());
	}
}