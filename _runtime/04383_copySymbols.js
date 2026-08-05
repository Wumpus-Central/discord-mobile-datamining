// _runtime/04383_copySymbols.js
import { getOwnPropertySymbols } from "00795_getOwnPropertySymbols.js";
import { copyObject } from "04376_copyObject.js";

export default function copySymbols(arg0, arg1) {
  return copyObject(arg0, getOwnPropertySymbols(arg0), arg1);
};