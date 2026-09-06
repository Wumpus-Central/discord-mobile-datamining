// _runtime/04648_copySymbols.js
import getOwnPropertySymbols from "00659_getOwnPropertySymbols.js";
import copyObject from "04641_copyObject.js";

export default function copySymbols(arg0, arg1) {
  return copyObject(arg0, getOwnPropertySymbols(arg0), arg1);
}
