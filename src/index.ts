import express from 'express';
import { checkOrigin } from './middleware/check.origin';

const app = express();

app.use(checkOrigin);

app.get('/', (req, res) => {
  res.send('products service');
});

app.listen(8002, () => {
  console.log('App listening on port 8002');
});
