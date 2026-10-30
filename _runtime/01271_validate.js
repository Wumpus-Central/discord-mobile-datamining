// _runtime/01271_validate.js
import _modDef1272 from "metro/01272__.js";

importDefault = arg2;
const dependencyMap = arg6;

export default function validate(str) {
  let isMatch = typeof str === "string";
  if (typeof str === "string") {
    isMatch = _modDef1272.test(str);
  }
  return isMatch;
}
