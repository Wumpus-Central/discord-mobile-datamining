// _runtime/00518_validate.js
import _modDef519 from "metro/00519__.js";

importDefault = arg2;
const dependencyMap = arg6;
arg5.default = function validate(str) {
  let isMatch = typeof str === "string";
  if (typeof str === "string") {
    isMatch = _modDef519.test(str);
  }
  return isMatch;
};