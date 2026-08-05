// _runtime/04413_copySymbols.js
import { getOwnPropertySymbols } from "00795_getOwnPropertySymbols.js";
import { copyObject } from "04406_copyObject.js";

export default function copySymbols(arg0, arg1) {
  return copyObject /* copyObject */(arg0, getOwnPropertySymbols /* getOwnPropertySymbols */(arg0), arg1);
};