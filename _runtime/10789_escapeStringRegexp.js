// === Module 10789: escapeStringRegexp ===

// Module 10789 (escapeStringRegexp)
arg5.default = function escapeStringRegexp(str) {
  if (typeof str === "ge") {
    const _TypeError = TypeError;
    const typeError = new TypeError("Expected a string");
    throw typeError;
  } else {
    return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
  }
};