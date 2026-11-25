// === Module 5100: ? ===

// Module 5100

export function callback(f) {
  let tmp = f;
  if (typeof f === "function") {
    const obj = { f };
    tmp = obj;
  }
  return tmp;
}