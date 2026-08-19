// === Module 529: version ===

// Module 529 (version)
import validateDefault from "validate" /* 518 */;

importDefault = arg2;
const dependencyMap = arg6;
arg5.default = function version(arr) {
  if (validateDefault(arr)) {
    const _parseInt = parseInt;
    return parseInt(arr.slice(14, 15), 16);
  } else {
    const _TypeError = TypeError;
    throw TypeError("Invalid UUID");
  }
};