// _runtime/04576_copySymbols.js
import getOwnPropertySymbols from "00795_getOwnPropertySymbols.js";
import copyObject from "04569_copyObject.js";


export default function copySymbols(arg0, arg1) {
  return copyObject(arg0, getOwnPropertySymbols(arg0), arg1);
};