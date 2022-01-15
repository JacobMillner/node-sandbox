import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import * as dotenv from 'dotenv';

dotenv.config();

if (!process.env.SERVER_PORT) {
  // tslint:disable-next-line:no-console
  console.log('No SERVER_PORT env var found!');
  process.exit(1);
}
const PORT: number = parseInt(process.env.SERVER_PORT as string, 10);

const app = express();

// server middleware
app.use(helmet());
app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// define a route handler for the default home page
app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.get('/goodbye', (req, res) => {
  res.json({ message: 'Goodbye World!' });
});

// start the Express server
app.listen(PORT, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${PORT}`);
});
