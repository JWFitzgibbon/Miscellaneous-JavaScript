let getWeightRequirement = (x) => x = 100 * (x / 70);
let roundToOne = (x) => +(Math.round(x + "e+1")  + "e-1");

let x = +prompt('Enter current weight:', 0.0);

alert(`Needed equip load is: ${roundToOne(getWeightRequirement(x))}`);


