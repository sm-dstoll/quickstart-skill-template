const yargs = require('yargs');
const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.get('/', (req, res) => {
  console.log(req);
})

router.post(
  '/session',
  async (request, response, next) => {
    console.log('session Request: ' + JSON.stringify(request.body));
    const sessionRequest = request.body;
    const sessionResponse = await sessionHandler(sessionRequest);
    response.setHeader('Content-Type', 'application/json');
    response.send(sessionResponse);
  }
);

router.post(
  '/execute',
  async (request, response, next) => {
    const executeRequest = request.body;
    const executeResponse = await executeHandler(executeRequest);
    response.setHeader('Content-Type', 'application/json');
    response.send(executeResponse);
  }
);

app.use('/', router);

const args = yargs(process.argv.slice(2))
  .option({
    port: { type: 'number', default: 4001, describe: 'Port to serve on' },
  })
  .help()
  .parseSync();

app.listen(args.port, () => {
  console.log(`Soul Machines Skill started on port ${args.port}.`);
});

async function sessionHandler(req) {
  console.log('SESSION HANDLER')

  const resp = {
    output: {},
    memory: [],
    endConversation: false,
    endRouting: false,
  } 
  return resp;
}

async function executeHandler(req) {
  console.log('EXECUTE HANDLER');
  console.log({ req })
  const { text, memory } = req;
  const variables = {};

  const resp = {
    output: {
      text: `User said: ${text}`,
      variables,
    },
    memory,
    endConversation: false,
    endRouting: false,
  } 
  return resp;
}
