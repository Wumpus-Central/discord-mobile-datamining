// _runtime/01271_version.js
import validateDefault from "01260_validate.js";

importDefault = arg2;
const dependencyMap = arg6;

export default function version(arr) {
  if (validateDefault(arr)) {
    const _parseInt = parseInt;
    return parseInt(arr.slice(14, 15), 16);
  } else {
    const _TypeError = TypeError;
    throw TypeError("Invalid UUID");
  }
}
