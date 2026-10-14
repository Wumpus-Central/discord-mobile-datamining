// _runtime/05175_copySymbols.js
import stubArray from "00670_stubArray.js";
import copyObject from "05168_copyObject.js";

export default function copySymbols(arg0, arg1) {
  return copyObject(arg0, stubArray(arg0), arg1);
}
