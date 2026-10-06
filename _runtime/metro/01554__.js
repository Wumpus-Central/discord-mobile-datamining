// === Module 1554: ? ===

// Module 1554

export const isArrayEqual = function isArrayEqual(arr, mapped) {
  const f84392 = (item, index) => Object.is(item, mapped[index]);
  let tmp = arr === mapped;
  if (!tmp) {
    tmp = arr.length === mapped.length && arr.every(f84392);
    arr.length === mapped.length && arr.every(f84392);
  }
  return tmp;
};