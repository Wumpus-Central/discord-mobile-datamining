// _runtime/01504_deepFreeze.js

export const isPlainObject = function isPlainObject(obj) {
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
export function deepFreeze(arg0) {
  return arg0;
}
