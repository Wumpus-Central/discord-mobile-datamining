// _runtime/04592_getAllKeysIn.js
import baseGetAllKeys from "00793_baseGetAllKeys.js";
import _mod4575 from "metro/04575__.js";
import keysIn from "04577_keysIn.js";


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  return tmp(arg0, keysIn, _mod4575);
};