const sortedSquaredArray = (input) => {
  if (input.length === 0) return false;

  return input.map((value) => value * value).sort((a, b) => a - b);
};

module.exports = sortedSquaredArray;
