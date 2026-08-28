// === Module 8542: ? ===

// Module 8542
const re0 = /[|\\{}()[\]^$+*?.-]/g;

export default (str) => {
  if (typeof str !== "string") {
    const _TypeError = TypeError;
    const typeError = new TypeError("Expected a string");
    throw typeError;
  } else {
    return str.replace(closure_0, "\\$&");
  }
};