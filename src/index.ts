import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('products service');
});

app.listen(8002, () => {
  console.log('App listening on port 8002');
});
