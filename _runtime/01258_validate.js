// _runtime/01258_validate.js
import _modDef1259 from "metro/01259__.js";

importDefault = arg2;
const dependencyMap = arg6;

export default function validate(str) {
  let isMatch = typeof str === "string";
  if (typeof str === "string") {
    isMatch = _modDef1259.test(str);
  }
  return isMatch;
}
