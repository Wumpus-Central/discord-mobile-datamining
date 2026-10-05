// === Module 1270: validate ===

// Module 1270 (validate)
import _modDef1271 from "module_1271" /* 1271 */;


export default function validate(str) {
  let isMatch = typeof str === "string";
  if (typeof str === "string") {
    const obj = _modDef1271;
    isMatch = obj.test(str);
  }
  return isMatch;
};