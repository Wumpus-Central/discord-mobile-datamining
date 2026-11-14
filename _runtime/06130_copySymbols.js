// === Module 6130: copySymbols ===

// Module 6130 (copySymbols)
import stubArray from "stubArray" /* 658 */;
import copyObject from "copyObject" /* 6123 */;


export default function copySymbols(arg0, arg1) {
  return copyObject(arg0, stubArray(arg0), arg1);
};