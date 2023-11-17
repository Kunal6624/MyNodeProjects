require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const connectDB = require('./db/connect');
const mainsRoute = require('./routes/main');

const notFoundMiddleware = require('../starter/middleware/not-found');
const errorHandlerMiddleware = require('../starter/middleware/error-handler');

//middleware
app.use(express.static('./public'));
app.use(express.json());

app.use('/api/v1', mainsRoute);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start =  async () => {
try {
  await connectDB(process.env.MongoURI);
  app.listen(5000, () => {
    console.log(`server is listening to the port ${port}`)
  });
} catch (error) {
console.log("errrrrrrr     ##@#", error);
};
};

start();