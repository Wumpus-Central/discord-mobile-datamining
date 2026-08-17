// _runtime/00792_getAllKeys.js
import keys from "keys" /* 616 */;
import baseGetAllKeys from "baseGetAllKeys" /* 793 */;
import getOwnPropertySymbols from "getOwnPropertySymbols" /* 795 */;


export default function getAllKeys(arg0) {
  const tmp = baseGetAllKeys;
  return tmp(arg0, keys, getOwnPropertySymbols);
};