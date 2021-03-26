class SimpleRandom {
  static chooseMinMax(min, max) {
    if (typeof min !== "number" || typeof max !== "number") {
      throw new Error(
        "Either min or max isn't a number in the 'chooseMinMax' function."
      );
    }

    return Math.random() * (max - min) + min;
  }

  static chooseMinMaxInt(min, max) {
    return Math.round(this.chooseMinMax(min, max));
  }

  static chooseFromArray(array) {
    if (!array.length) {
      throw new Error(
        "An array wasn't provided in the 'chooseFromArray' function."
      );
    }
    const length = array.length;
    const max = length - 1;
    const min = 0;
    const index = this.chooseMinMaxInt(min, max);
    return array[index];
  }

  static weightedChance(percentage) {
    if (percentage < 0 || percentage > 100) {
      throw new Error(
        "A percentage above 100 or below 0 was provided to the 'weightedChance' function."
      );
    }

    const number = this.chooseMinMaxInt(0, 101);
    if (number <= percentage) {
      return true;
    }
    return false;
  }
}

module.exports = SimpleRandom;
