/**
 * Created by techmaster on 2/7/17.
 */
exports.divide = (a, b) => {

  if (isNaN(a)) {
    throw new Error('a is not number');
  }

  if (isNaN(b)) {
    throw new Error('b is not number');
  }

  if (b === 0) {
    throw new Error('Divide to zero');
  }

  return a / b;
};