/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
	let start = 0,
		end = nums.length - 1;
	while (start <= end) {
		mid = Math.floor(start + (end - start) / 2);
		if (target === nums[mid]) {
			return mid;
		} else if (target < nums[mid]) {
			end = mid - 1;
		} else {
			start = mid + 1;
		}
	}
	return start;
};
