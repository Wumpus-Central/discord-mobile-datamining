// _runtime/04612_copySymbols.js
import getOwnPropertySymbols from "00795_getOwnPropertySymbols.js";
import copyObject from "04605_copyObject.js";


export default function copySymbols(arg0, arg1) {
  return copyObject(arg0, getOwnPropertySymbols(arg0), arg1);
};