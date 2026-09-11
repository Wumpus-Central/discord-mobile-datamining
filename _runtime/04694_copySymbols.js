// _runtime/04694_copySymbols.js
import stubArray from "00659_stubArray.js";
import copyObject from "04687_copyObject.js";

export default function copySymbols(arg0, arg1) {
  return copyObject(arg0, stubArray(arg0), arg1);
}
