// _runtime/01272_validate.js
import _modDef1273 from "metro/01273__.js";

importDefault = arg2;
const dependencyMap = arg6;

export default function validate(str) {
  let isMatch = typeof str === "string";
  if (typeof str === "string") {
    isMatch = _modDef1273.test(str);
  }
  return isMatch;
}
