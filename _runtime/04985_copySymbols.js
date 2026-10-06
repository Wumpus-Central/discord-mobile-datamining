// === Module 4985: copySymbols ===

// Module 4985 (copySymbols)
import stubArray from "stubArray" /* 670 */;
import copyObject from "copyObject" /* 4978 */;


export default function copySymbols(arg0, arg1) {
  const tmp = copyObject;
  return tmp(arg0, stubArray(arg0), arg1);
};