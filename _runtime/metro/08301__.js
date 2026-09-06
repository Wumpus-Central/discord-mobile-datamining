// === Module 8301: ? ===

// Module 8301
const re0 = /[|\\{}()[\]^$+*?.-]/g;

export default (str) => {
  if (typeof str !== "string") {
    const _TypeError = TypeError;
    const typeError = new TypeError("Expected a string");
    throw typeError;
  } else {
    return str.replace(re0, "\\$&");
  }
};