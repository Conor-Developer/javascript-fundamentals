const getNumberSign = (num) => {
  if (num === 0) {
    return 'zero';
  } else if (num > 0) {
    return 'positive';
  } else if (num < 0) {
    return 'negative';
  }
}

module.exports = getNumberSign;