// _runtime/05818_copySymbols.js
import stubArray from "00658_stubArray.js";
import copyObject from "05811_copyObject.js";

export default function copySymbols(arg0, arg1) {
  return copyObject(arg0, stubArray(arg0), arg1);
}
