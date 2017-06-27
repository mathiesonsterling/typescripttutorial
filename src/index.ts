/**
 * Created by gsterling on 6/27/2017.
 */

import * as http from 'http';
import * as debug from 'debug';

import App from './App';

debug('ts-express:server');

const port = normalizePort(process.env.PORT || 3000);
App.set('port', port);

const server = http.createServer(App);
