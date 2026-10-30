// === Module 5107: ? ===

// Module 5107

export function callback(f) {
  let tmp = f;
  if (typeof f === "function") {
    const obj = { f };
    tmp = obj;
  }
  return tmp;
}