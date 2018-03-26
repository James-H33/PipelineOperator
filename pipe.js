const double = (n) => n * 2;
const increment = (n) => n + 1;

// without pipeline operator
double(increment(5)); // 12

// with pipeline operator
const result = 5 
  |> increment 
  |> double 

console.log(result); // 12

const capitalize = str => str[0].toUpperCase() + str.substring(1);
const splitOnSpaces = str => str.trim().split(' ');
const getLastOfArr = arr => arr.pop();

const lastName = 'albert einstein'
  |> splitOnSpaces
  |> getLastOfArr
  |> capitalize

console.log(lastName);

// console.log(capitalize(getLastOfArr(splitOnSpaces('albert einstein'))));
 