const mongoose = require('mongoose');

const connectDB = (mongoUrl) => {
    return mongoose.connect(mongoUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify:false,
        useCreateIndex: true
    }).then(() => console.log('connecting to the DB......'));
};


module.exports = connectDB;
