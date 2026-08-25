// _runtime/04512_copySymbols.js
import getOwnPropertySymbols from "00795_getOwnPropertySymbols.js";
import copyObject from "04505_copyObject.js";


export default function copySymbols(arg0, arg1) {
  return copyObject(arg0, getOwnPropertySymbols(arg0), arg1);
};