// _runtime/04979_copySymbols.js
import stubArray from "00670_stubArray.js";
import copyObject from "04972_copyObject.js";

export default function copySymbols(arg0, arg1) {
  return copyObject(arg0, stubArray(arg0), arg1);
}
