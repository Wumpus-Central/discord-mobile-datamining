// _runtime/01553_isRecordEqual.js
arg5.isRecordEqual = function isRecordEqual(value, arg1) {
  closure_0 = value;
  closure_1 = arg1;
  if (value === arg1) {
    return true;
  } else {
    const _Object = Object;
    const keys = Object.keys(value);
    const _Object2 = Object;
    return keys.length === Object.keys(arg1).length && keys.every((item, index) => Object.is(value[item], table[item]));
  }
};