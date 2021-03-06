'use strict';

const koa = require('koa');
const app = koa();

//logger
const logger = require('koa-logger');
app.use(logger());

const favicon = require('koa-favicon');
app.use(favicon(__dirname + './front/favicon.ico'));

//errors
app.use(require('./libs/errors'));

// body-parser
const bodyParser = require('koa-body');
app.use(bodyParser());

//helmet
const helmet = require('koa-helmet');
app.use(helmet());

//static
const serve = require('koa-static');
app.use(serve('./front'));

//render
require('./libs/render')(app);

//routes
const router = require('./routes/openRoutes');
app.use(router.routes());

//oAuth2
// const model = require('koa-oauth-server/node_modules/oauth2-server/examples/memory/model');
// var oauthserver = require('koa-oauth-server');
// app.oauth = oauthserver({
//   model: model,
//   grants: ['password'],
//   debug: true
// });


app.listen(5300);

console.log('server is running on 5300...');



// const middlewares = fs.readdirSync(path.join(__dirname, 'middlewares')).sort();
// middlewares.forEach(middleware => app.use(require('./middlewares/' + middleware)));
//
// require('./routes')(app);
// require('./libs/socket')(app);
