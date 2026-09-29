// === Module 13979: ? ===

// Module 13979
import _mod13964 from "module_13964" /* 13964 */;

let c0 = 0;
let closure_1 = Math.random();
let closure_2 = _mod13964(1.toString);

export default (arg0) => {
  let str = "";
  if (undefined !== arg0) {
    str = arg0;
  }
  const sum = c0 + 1;
  c0 = sum;
  return `Symbol(${str}` + ")_" + closure_2(sum + closure_1, 36);
};