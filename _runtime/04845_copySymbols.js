// _runtime/04845_copySymbols.js
import stubArray from "00659_stubArray.js";
import copyObject from "04838_copyObject.js";

export default function copySymbols(arg0, arg1) {
  return copyObject(arg0, stubArray(arg0), arg1);
}
