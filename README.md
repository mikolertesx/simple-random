# Simple-Random

A Simple Random Number generator.

## Functions

### chooseMinMax
```js
// Pick the minimum and the maximum (Exclutionary).
const number = SimpleRandom.chooseMinMax(0, 5);
```

### chooseMinMaxInt
```js
// Same as above, but with an integer.
const number = SimpleRandom.chooseMinMaxInt(0, 5);
```

### chooseFromArray

```js
// Gets a random element from the array.
const element = SimpleRandom.chooseFromArray([1, 2, 3]);
```

### weightedChance

```js
// Get a true, or false with a weighted chance.
// Use an int from 0 to 100.
// This function will throw an error if not given a number between 0 and 100.
const trueOrFalse = SimpleRandom.weightedChance(25);
```
