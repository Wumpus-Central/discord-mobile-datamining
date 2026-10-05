// === Module 521: isObject ===

// Module 521 (isObject)

export default function isObject(obj) {
  let tmp = null != obj;
  if (tmp) {
    tmp = typeof obj === "object" || typeof obj === "function";
  }
  return tmp;
};