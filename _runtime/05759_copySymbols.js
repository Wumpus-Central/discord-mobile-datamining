// _runtime/05759_copySymbols.js
import stubArray from "00670_stubArray.js";
import copyObject from "05752_copyObject.js";

export default function copySymbols(arg0, arg1) {
  return copyObject(arg0, stubArray(arg0), arg1);
}
