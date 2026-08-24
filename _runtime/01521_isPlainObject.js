// === Module 1521: isPlainObject ===

// Module 1521 (isPlainObject)
arg5.isPlainObject = function isPlainObject(obj) {
  let tmp = typeof obj === "object";
  if (typeof obj === "object") {
    tmp = null !== obj;
  }
  if (tmp) {
    const _Object = Object;
    const _Object2 = Object;
    tmp = Object.getPrototypeOf(obj) === Object.prototype;
  }
  return tmp;
};
arg5.deepFreeze = function deepFreeze(arg0) {
  return arg0;
};