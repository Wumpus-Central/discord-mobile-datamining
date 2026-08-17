// _runtime/00792_getAllKeys.js
import keys from "00616_keys.js";
import baseGetAllKeys from "00793_baseGetAllKeys.js";
import getOwnPropertySymbols from "00795_getOwnPropertySymbols.js";


export default function getAllKeys(arg0) {
  const tmp = baseGetAllKeys;
  return tmp(arg0, keys, getOwnPropertySymbols);
};