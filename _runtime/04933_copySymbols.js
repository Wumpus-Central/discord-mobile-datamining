// === Module 4933: copySymbols ===

// Module 4933 (copySymbols)
import stubArray from "stubArray" /* 659 */;
import copyObject from "copyObject" /* 4926 */;


export default function copySymbols(arg0, arg1) {
  return copyObject(arg0, stubArray(arg0), arg1);
};