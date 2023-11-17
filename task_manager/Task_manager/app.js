const express = require('express');
const connectDB = require('./db/connect');
const config = require('dotenv').config();
const app = express();
const tasks = require('./routes/tasks');
const errorMiddleware = require('./middleware/error-handler');
const notFoundRoute = require('./middleware/not-found');

//middleware 
app.use(express.json());
app.use(express.static('./public'));

app.use('/api/v1/tasks',tasks);
app.use(notFoundRoute);
app.use(errorMiddleware);


const port = 3000;
const start = async  () => {
    try {
        await connectDB(process.env.MongoURI);
        app.listen(port, () =>  console.log(`server is listening to the port ${port}...`));

    } catch(err) {
       console.log("err    ***", err)
    }
};

start();