// _runtime/01285_validate.js
import _modDef1286 from "metro/01286__.js";

importDefault = arg2;
const dependencyMap = arg6;

export default function validate(str) {
  let isMatch = typeof str === "string";
  if (typeof str === "string") {
    isMatch = _modDef1286.test(str);
  }
  return isMatch;
}
