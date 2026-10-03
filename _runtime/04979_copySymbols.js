// === Module 4979: copySymbols ===

// Module 4979 (copySymbols)
import stubArray from "stubArray" /* 670 */;
import copyObject from "copyObject" /* 4972 */;


export default function copySymbols(arg0, arg1) {
  return copyObject(arg0, stubArray(arg0), arg1);
};