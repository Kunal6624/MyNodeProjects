
class CustomErrorAPI extends Error {
    constructor (message, statusCode) {
      super(message),
      this.statusCode = statusCode
    }
  };
  
  function createCustomError(message, statusCode) {
  return new CustomErrorAPI(message, statusCode);
  };
  
  module.exports = {createCustomError,CustomErrorAPI};