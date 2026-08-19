// _runtime/00529_version.js
import validateDefault from "00518_validate.js";

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