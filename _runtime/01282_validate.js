// _runtime/01282_validate.js
import _modDef1283 from "metro/01283__.js";

importDefault = arg2;
const dependencyMap = arg6;

export default function validate(str) {
  let isMatch = typeof str === "string";
  if (typeof str === "string") {
    isMatch = _modDef1283.test(str);
  }
  return isMatch;
}
