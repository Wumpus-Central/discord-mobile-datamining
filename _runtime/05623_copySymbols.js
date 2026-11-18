// _runtime/05623_copySymbols.js
import stubArray from "00658_stubArray.js";
import copyObject from "05616_copyObject.js";

export default function copySymbols(arg0, arg1) {
  return copyObject(arg0, stubArray(arg0), arg1);
}
