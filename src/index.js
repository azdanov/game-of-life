const evens = [1, 2, 3, 4, 5];

const odds = evens.map(v => v + 1);
const nums = evens.map((v, i) => v + i);

console.log(odds, nums);
