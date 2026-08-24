// _runtime/04619_getAllKeysIn.js
import baseGetAllKeys from "00793_baseGetAllKeys.js";
import _mod4602 from "metro/04602__.js";
import keysIn from "04604_keysIn.js";


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  return tmp(arg0, keysIn, _mod4602);
};