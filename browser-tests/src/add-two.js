var twoSum = function (nums, target) {
  var sum = 0;
  var finalArr = [];
  var current = 0;

  for (let i = 0; i < nums.length; i++) {
    sum = nums[current] + nums[i];
    if (sum === target && current !== i) {
      finalArr.push(current, i);
      return finalArr;
    } else if (current === nums.length) {
      return;
    } else if (i === nums.length - 1) {
      i = 0;
      current++;
    }
  }
  return finalArr;
};

export { twoSum }