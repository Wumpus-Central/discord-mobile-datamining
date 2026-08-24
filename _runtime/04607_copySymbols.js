// === Module 4607: copySymbols ===

// Module 4607 (copySymbols)
import getOwnPropertySymbols from "getOwnPropertySymbols" /* 795 */;
import copyObject from "copyObject" /* 4600 */;


export default function copySymbols(arg0, arg1) {
  return copyObject(arg0, getOwnPropertySymbols(arg0), arg1);
};