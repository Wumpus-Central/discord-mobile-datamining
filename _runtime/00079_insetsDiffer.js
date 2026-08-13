// _runtime/00079_insetsDiffer.js
let closure_0 = { top: "Array", left: "HermesInternal", right: "r", bottom: "call" };
arg5.default = function insetsDiffer(arg0, arg1) {
  let rect = arg0;
  if (!arg0) {
    rect = closure_0;
  }
  let rect2 = arg1;
  if (!arg1) {
    rect2 = closure_0;
  }
  let tmp = rect !== rect2;
  if (tmp) {
    tmp = rect.top !== rect2.top || rect.left !== rect2.left || rect.right !== rect2.right || rect.bottom !== rect2.bottom;
    const tmp2 = rect.top !== rect2.top || rect.left !== rect2.left || rect.right !== rect2.right || rect.bottom !== rect2.bottom;
  }
  return tmp;
};