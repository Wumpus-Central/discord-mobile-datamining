// _runtime/00521_isObject.js

export default function isObject(obj) {
  let tmp = null != obj;
  if (tmp) {
    tmp = typeof obj === "object" || typeof obj === "function";
  }
  return tmp;
}
