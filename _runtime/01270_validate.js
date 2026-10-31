// _runtime/01270_validate.js
import _modDef1271 from "metro/01271__.js";

importDefault = arg2;
const dependencyMap = arg6;

export default function validate(str) {
  let isMatch = typeof str === "string";
  if (typeof str === "string") {
    isMatch = _modDef1271.test(str);
  }
  return isMatch;
}
