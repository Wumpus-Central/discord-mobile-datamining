// === Module 16940: ? ===

// Module 16940
import _mod8550 from "module_8550" /* 8550 */;


export default _mod8550((arg0, arg1, arg2) => {
  let num = 1;
  if (arg2) {
    num = 0;
  }
  let arr = arg0[num];
  arr = arr.push(arg1);
}, () => {
  const items = [[], []];
  return items;
});