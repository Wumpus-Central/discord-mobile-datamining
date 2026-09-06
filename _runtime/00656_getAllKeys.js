// _runtime/00656_getAllKeys.js
import keys from "00531_keys.js";
import baseGetAllKeys from "00657_baseGetAllKeys.js";
import getOwnPropertySymbols from "00659_getOwnPropertySymbols.js";

export default function getAllKeys(arg0) {
  const tmp = baseGetAllKeys;
  return tmp(arg0, keys, getOwnPropertySymbols);
}
