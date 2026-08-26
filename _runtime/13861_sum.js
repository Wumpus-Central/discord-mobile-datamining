// _runtime/13861_sum.js
import call from "13846_call.js";

let c0 = 0;
let closure_1 = Math.random();
let closure_2 = call(1.toString);

export default (arg0) => {
  let str = "";
  if (undefined !== arg0) {
    str = arg0;
  }
  const sum = c0 + 1;
  c0 = sum;
  return `Symbol(${str}` + ")_" + callback(sum + closure_1, 36);
};