// _runtime/01273_validate.js
import _modDef1274 from "metro/01274__.js";

importDefault = arg2;
const dependencyMap = arg6;

export default function validate(str) {
  let isMatch = typeof str === "string";
  if (typeof str === "string") {
    isMatch = _modDef1274.test(str);
  }
  return isMatch;
}
