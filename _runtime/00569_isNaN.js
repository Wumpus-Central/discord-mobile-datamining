// === Module 569: isNaN ===

// Module 569 (isNaN)
if (!isNaN) {
  isNaN = function isNaN(arg0) {
    return arg0 != arg0;
  };
}

export default isNaN;