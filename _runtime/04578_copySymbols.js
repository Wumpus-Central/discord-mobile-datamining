// === Module 4578: copySymbols ===

// Module 4578 (copySymbols)
import getOwnPropertySymbols from "getOwnPropertySymbols" /* 795 */;
import copyObject from "copyObject" /* 4571 */;


export default function copySymbols(arg0, arg1) {
  return copyObject(arg0, getOwnPropertySymbols(arg0), arg1);
};