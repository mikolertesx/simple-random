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
    // Javascript Math.Random excludes the last.
    const max = length;
    const min = 0;
    const index = this.chooseMinMaxInt(min, max);
    return array[index];
  }
}

module.exports = SimpleRandom;
