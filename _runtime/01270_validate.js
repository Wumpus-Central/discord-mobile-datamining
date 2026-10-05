// _runtime/01270_validate.js
import _modDef1271 from "metro/01271__.js";

export default function validate(str) {
  let isMatch = typeof str === "string";
  if (typeof str === "string") {
    const obj = _modDef1271;
    isMatch = obj.test(str);
  }
  return isMatch;
}
