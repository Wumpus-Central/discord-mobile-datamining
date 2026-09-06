// === Module 656: getAllKeys ===

// Module 656 (getAllKeys)
import keys from "keys" /* 531 */;
import baseGetAllKeys from "baseGetAllKeys" /* 657 */;
import getOwnPropertySymbols from "getOwnPropertySymbols" /* 659 */;


export default function getAllKeys(arg0) {
  const tmp = baseGetAllKeys;
  return tmp(arg0, keys, getOwnPropertySymbols);
};