var mult = require('../todd-prod');

module.exports = function(result){
  result = mult(result, result);
  return result;
}
