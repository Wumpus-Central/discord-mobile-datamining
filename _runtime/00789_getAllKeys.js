// === Module 789: getAllKeys ===

// Module 789 (getAllKeys)
import keys from "keys" /* 613 */;
import baseGetAllKeys from "baseGetAllKeys" /* 790 */;
import getOwnPropertySymbols from "getOwnPropertySymbols" /* 792 */;


export default function getAllKeys(arg0) {
  const tmp = baseGetAllKeys;
  return tmp(arg0, keys, getOwnPropertySymbols);
};