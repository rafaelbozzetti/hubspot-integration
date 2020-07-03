import express, { response } from 'express';
import { contacts } from './routes';

import { Client } from '@hubspot/api-client';

const app = express();

app.get('/contacts', contacts);

app.listen(3333, () => {
  console.log('Server started');
});
