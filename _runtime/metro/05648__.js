// === Module 5648: ? ===

// Module 5648

export default function isObject(fn) {
  let tmp = fn;
  if (tmp) {
    let tmp2 = typeof fn === "function";
    if (typeof fn !== "function") {
      tmp2 = typeof fn === "object";
    }
    tmp = tmp2;
  }
  return tmp;
};