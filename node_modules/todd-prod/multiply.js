var sum = require('todd-sum');

module.exports = function mult(a, b) {
  var total = a;
  for (var i = 1; i < b; i++) {
    total = sum(a, total);
  }
  return total;
};
