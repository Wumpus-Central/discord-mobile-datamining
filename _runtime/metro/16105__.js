// === Module 16105: ? ===

// Module 16105
import _mod16090 from "module_16090" /* 16090 */;

let c0 = 0;
let closure_1 = Math.random();
let closure_2 = _mod16090(1.toString);

export default (arg0) => {
  let str = "";
  if (undefined !== arg0) {
    str = arg0;
  }
  const sum = c0 + 1;
  c0 = sum;
  return `Symbol(${str}` + ")_" + closure_2(sum + closure_1, 36);
};