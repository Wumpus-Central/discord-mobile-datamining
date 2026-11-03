// === Module 5235: ? ===

// Module 5235

export function callback(f) {
  let tmp = f;
  if (typeof f === "function") {
    const obj = { f };
    tmp = obj;
  }
  return tmp;
}