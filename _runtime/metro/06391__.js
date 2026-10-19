// === Module 6391: ? ===

// Module 6391

export default function isPropertyKey(str) {
  let tmp = typeof str === "string";
  if (typeof str !== "string") {
    tmp = typeof str === "symbol";
  }
  return tmp;
};