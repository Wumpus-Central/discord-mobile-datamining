// === Module 1536: ? ===

// Module 1536

export const isRecordEqual = function isRecordEqual(value, arg1) {
  closure_1 = arg1;
  if (value === arg1) {
    return true;
  } else {
    const _Object = Object;
    const keys = Object.keys(value);
    const _Object2 = Object;
    return keys.length === Object.keys(arg1).length && keys.every((item) => Object.is(value[item], closure_1[item]));
  }
};