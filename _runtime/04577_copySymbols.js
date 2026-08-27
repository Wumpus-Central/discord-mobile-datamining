// _runtime/04577_copySymbols.js
import getOwnPropertySymbols from "00795_getOwnPropertySymbols.js";
import copyObject from "04570_copyObject.js";


export default function copySymbols(arg0, arg1) {
  return copyObject(arg0, getOwnPropertySymbols(arg0), arg1);
};