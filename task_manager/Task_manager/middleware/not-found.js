const notFoundRoute = (req,res, next) => {
return res.status(404).send("the route not found");
next();
};

module.exports = notFoundRoute;
