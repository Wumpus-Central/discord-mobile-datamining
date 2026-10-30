// === Module 1325: ? ===

// Module 1325
if (!isNaN) {
  isNaN = function isNaN(arg0) {
    return arg0 != arg0;
  };
}

export default isNaN;