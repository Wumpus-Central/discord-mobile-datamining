// === Module 1314: isNaN ===

// Module 1314 (isNaN)
if (!isNaN) {
  isNaN = function isNaN(arg0) {
    return arg0 != arg0;
  };
}

export default isNaN;