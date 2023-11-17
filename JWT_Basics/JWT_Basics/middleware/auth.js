const jwt = require('jsonwebtoken');
const {unauthenticated, CustomAPIError} = require('../errors/index');

const authenticationMiddleWare = (req, res, next) => {
try {
    const authHeader = req.headers.authorization;

    console.log("authheader    ***",authHeader );

    if (!authHeader || !authHeader.startsWith('Bearer '))
    throw new unauthenticated('Not Authorized to acess the data, please provide token')

   const token = authHeader.split(' ')[1];

      console.log("token     ", token );

   const decoded =  jwt.verify(token, process.env.JWT_SECRET);

   console.log("decoded     ", decoded );

   const {id, username} = decoded;
   req.user = {id, username};
   next();
} catch (error) {
    console.log("errrror     ", error)
throw new unauthenticated('not authorized to acess the data')
};
};

module.exports = authenticationMiddleWare;