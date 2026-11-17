// === Module 6127: copySymbols ===

// Module 6127 (copySymbols)
import stubArray from "stubArray" /* 658 */;
import copyObject from "copyObject" /* 6120 */;


export default function copySymbols(arg0, arg1) {
  return copyObject(arg0, stubArray(arg0), arg1);
};