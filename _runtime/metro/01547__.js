// === Module 1547: ? ===

// Module 1547

export const isArrayEqual = function isArrayEqual(arr, mapped) {
  let tmp = arr === mapped;
  if (!tmp) {
    tmp = arr.length === mapped.length && arr.every((item, index) => Object.is(item, mapped[index]));
    const tmp2 = arr.length === mapped.length && arr.every((item, index) => Object.is(item, mapped[index]));
  }
  return tmp;
};