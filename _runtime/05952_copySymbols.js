// === Module 5952: copySymbols ===

// Module 5952 (copySymbols)
import stubArray from "stubArray" /* 658 */;
import copyObject from "copyObject" /* 5945 */;


export default function copySymbols(arg0, arg1) {
  return copyObject(arg0, stubArray(arg0), arg1);
};