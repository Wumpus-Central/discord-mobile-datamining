// _runtime/01260_validate.js
import _modDef1261 from "metro/01261__.js";

importDefault = arg2;
const dependencyMap = arg6;

export default function validate(str) {
  let isMatch = typeof str === "string";
  if (typeof str === "string") {
    isMatch = _modDef1261.test(str);
  }
  return isMatch;
}
