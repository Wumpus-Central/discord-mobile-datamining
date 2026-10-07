// === Module 4985: copySymbols ===

// Module 4985 (copySymbols)
import stubArray from "stubArray" /* 670 */;
import copyObject from "copyObject" /* 4978 */;


export default function copySymbols(arg0, arg1) {
  return copyObject(arg0, stubArray(arg0), arg1);
};