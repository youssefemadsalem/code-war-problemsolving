function countPositivesSumNegatives(input) {
  if (input === null || input.length === 0) {
    return [];
  }

  var positive = 0;
  var negative = 0;

  for (var i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      positive++;
    } else if (input[i] < 0) {
      negative += input[i];
    }
  }

  return [positive, negative];
}
