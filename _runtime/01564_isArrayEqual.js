// _runtime/01564_isArrayEqual.js
arg5.isArrayEqual = function isArrayEqual(arr) {
  closure_0 = arg1;
  let tmp = arr === arg1;
  if (!tmp) {
    tmp = arr.length === arg1.length && arr.every((item, index) => Object.is(item, table[index]));
    const tmp2 = arr.length === arg1.length && arr.every((item, index) => Object.is(item, table[index]));
  }
  return tmp;
};