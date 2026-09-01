// _runtime/04624_getAllKeysIn.js
import baseGetAllKeys from "00793_baseGetAllKeys.js";
import _mod4607 from "metro/04607__.js";
import keysIn from "04609_keysIn.js";

export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  return tmp(arg0, keysIn, _mod4607);
}
