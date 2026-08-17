// _runtime/04601_copySymbols.js
import getOwnPropertySymbols from "00795_getOwnPropertySymbols.js";
import copyObject from "04594_copyObject.js";


export default function copySymbols(arg0, arg1) {
  return copyObject(arg0, getOwnPropertySymbols(arg0), arg1);
};