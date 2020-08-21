
function sum(fromN, toN) {

  if (fromN !== toN + 1) {
    return fromN + sum(fromN + 1, toN);
  } else {
    return 0;
  }
};

module.exports = sum;
