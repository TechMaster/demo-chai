/**
 * Created by techmaster on 2/7/17.
 */
exports.divide = (a, b) => {
  let a_ = parseFloat(a);
  let b_ = parseFloat(b);

  if (isNaN(a_)) {
    throw new Error('a is not number');
  }

  if (isNaN(b_)) {
    throw new Error('b is not number');
  }

  if (b_ === 0) {
    throw new Error('Divide to zero');
  }

  return parseFloat(a_) / parseFloat(b_);
};