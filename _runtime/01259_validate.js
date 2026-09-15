// _runtime/01259_validate.js
import _modDef1260 from "metro/01260__.js";

importDefault = arg2;
const dependencyMap = arg6;

export default function validate(str) {
  let isMatch = typeof str === "string";
  if (typeof str === "string") {
    isMatch = _modDef1260.test(str);
  }
  return isMatch;
}
