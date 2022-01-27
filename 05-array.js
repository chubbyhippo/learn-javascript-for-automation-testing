let marks = Array(4);
console.log(marks);
marks[0] = 1;
console.log(marks.length);
marks.push(1, 2, 3, 4);
console.log(marks);
console.log(marks.length);
console.log(marks.pop());
console.log(marks);
console.log(marks.length);
console.log(marks.unshift(99));
console.log(marks);
console.log(marks.includes(99));
console.log(marks.filter(value => value > 2));
console.log(marks.reduce((previousValue, currentValue) => previousValue + currentValue));

const reduce = marks.filter(value => value > 1)
.map(value => value * 2)
.reduce((previousValue, currentValue) => previousValue+currentValue);
console.log(reduce);

const fruits = ["apple", "cantaloupe", "banana", "mango"]
console.log(fruits.sort());
