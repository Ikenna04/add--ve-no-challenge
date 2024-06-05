// Add positive numbers challenge

const numbers = [2, -30, 50, 20, -12, -9, 7];

console.log(numbers);

const positiveSum = numbers
	.filter(number => number > 0)
	.reduce((acc, num) => acc + num, 0);

console.log('The sum of all positive numbers is: ', positiveSum);
