// _runtime/05979_copySymbols.js
import stubArray from "00658_stubArray.js";
import copyObject from "05972_copyObject.js";

export default function copySymbols(arg0, arg1) {
  return copyObject(arg0, stubArray(arg0), arg1);
}
