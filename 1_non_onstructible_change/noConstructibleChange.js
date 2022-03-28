const noConstructibleChange = (input) => {
  const sortedCoins = input.sort((a, b) => a - b);

  let currentMinChange = 0;

  for (const coin of sortedCoins) {
    if (coin > currentMinChange + 1) {
      return currentMinChange + 1;
    }

    currentMinChange += coin;
  }

  return currentMinChange + 1;
};

module.exports = noConstructibleChange;
