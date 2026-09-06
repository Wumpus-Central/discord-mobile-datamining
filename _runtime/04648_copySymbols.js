// === Module 4648: copySymbols ===

// Module 4648 (copySymbols)
import getOwnPropertySymbols from "getOwnPropertySymbols" /* 659 */;
import copyObject from "copyObject" /* 4641 */;


export default function copySymbols(arg0, arg1) {
  return copyObject(arg0, getOwnPropertySymbols(arg0), arg1);
};