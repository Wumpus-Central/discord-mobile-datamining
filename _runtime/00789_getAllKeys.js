// _runtime/00789_getAllKeys.js
import keys from "00613_keys.js";
import baseGetAllKeys from "00790_baseGetAllKeys.js";
import getOwnPropertySymbols from "00792_getOwnPropertySymbols.js";

export default function getAllKeys(arg0) {
  const tmp = baseGetAllKeys;
  return tmp(arg0, keys, getOwnPropertySymbols);
}
