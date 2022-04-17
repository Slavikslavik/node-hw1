const app = require('./app/index.js');
const router = require('./app/api/controller.js')

const port = 3000;

app.use('/', router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});