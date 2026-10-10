// === Module 5171: copySymbols ===

// Module 5171 (copySymbols)
import stubArray from "stubArray" /* 670 */;
import copyObject from "copyObject" /* 5164 */;


export default function copySymbols(arg0, arg1) {
  return copyObject(arg0, stubArray(arg0), arg1);
};