import express from 'express';
const app = express();
const port = 8080;

// define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.get('/goodbye', (req, res) => {
  res.send('Goodbye world!');
});

// start the Express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
