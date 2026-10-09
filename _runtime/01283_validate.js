// _runtime/01283_validate.js
import _modDef1284 from "metro/01284__.js";

importDefault = arg2;
const dependencyMap = arg6;

export default function validate(str) {
  let isMatch = typeof str === "string";
  if (typeof str === "string") {
    isMatch = _modDef1284.test(str);
  }
  return isMatch;
}
