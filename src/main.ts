import express from 'express';
import cors from 'cors';
import places from './places.json';

console.log(places);

const app = express();
app.use(cors());

app.listen(3000, () => {
  console.log('Server is running...');
});
