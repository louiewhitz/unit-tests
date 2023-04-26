const threeSumClosest = function (nums, target) {
    let result = 0;
    let minDiff = Number.MAX_SAFE_INTEGER;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
        let j = i + 1, k = nums.length - 1;
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            let diff = Math.abs(sum - target);
            if (diff < minDiff) {
                minDiff = diff;
                result = sum;
            }
            if (sum < target) {
                j++;
            }
            else {
                k--;
            }
        }
    }   
    return result;

};

export { threeSumClosest };