// _runtime/04473_copySymbols.js
import { getOwnPropertySymbols } from "00795_getOwnPropertySymbols.js";
import { copyObject } from "04466_copyObject.js";

export default function copySymbols(arg0, arg1) {
  return copyObject(arg0, getOwnPropertySymbols(arg0), arg1);
};