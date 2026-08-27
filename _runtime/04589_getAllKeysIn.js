// _runtime/04589_getAllKeysIn.js
import baseGetAllKeys from "00793_baseGetAllKeys.js";
import _mod4572 from "metro/04572__.js";
import keysIn from "04574_keysIn.js";


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  return tmp(arg0, keysIn, _mod4572);
};