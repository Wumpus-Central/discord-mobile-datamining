// _runtime/01544_isArrayEqual.js
arg5.isArrayEqual = function isArrayEqual(arr) {
  let closure_0 = arg1;
  let tmp = arr === arg1;
  if (!tmp) {
    tmp = arr.length === arg1.length && arr.every((arg0, arg1) => Object.is(arg0, table[arg1]));
    const tmp2 = arr.length === arg1.length && arr.every((arg0, arg1) => Object.is(arg0, table[arg1]));
  }
  return tmp;
};