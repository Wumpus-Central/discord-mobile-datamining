// _runtime/04727_copySymbols.js
import stubArray from "00659_stubArray.js";
import copyObject from "04720_copyObject.js";

export default function copySymbols(arg0, arg1) {
  return copyObject(arg0, stubArray(arg0), arg1);
}
