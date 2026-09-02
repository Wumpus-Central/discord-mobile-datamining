// === Module 4612: copySymbols ===

// Module 4612 (copySymbols)
import getOwnPropertySymbols from "getOwnPropertySymbols" /* 792 */;
import copyObject from "copyObject" /* 4605 */;


export default function copySymbols(arg0, arg1) {
  return copyObject(arg0, getOwnPropertySymbols(arg0), arg1);
};