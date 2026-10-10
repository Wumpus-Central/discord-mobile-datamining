// === Module 5651: ? ===

// Module 5651

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