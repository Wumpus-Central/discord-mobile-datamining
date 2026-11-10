// _runtime/05954_copySymbols.js
import stubArray from "00658_stubArray.js";
import copyObject from "05947_copyObject.js";

export default function copySymbols(arg0, arg1) {
  return copyObject(arg0, stubArray(arg0), arg1);
}
