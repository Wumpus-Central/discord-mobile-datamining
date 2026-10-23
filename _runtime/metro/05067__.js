// === Module 5067: ? ===

// Module 5067

export const callback = function callback(f) {
  let tmp = f;
  if (typeof f === "function") {
    const obj = { f };
    tmp = obj;
  }
  return tmp;
};