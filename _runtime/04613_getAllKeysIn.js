// _runtime/04613_getAllKeysIn.js
import baseGetAllKeys from "00793_baseGetAllKeys.js";
import _mod4596 from "metro/04596__.js";
import keysIn from "04598_keysIn.js";


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  return tmp(arg0, keysIn, _mod4596);
};