// _runtime/04660_getAllKeysIn.js
import baseGetAllKeys from "00657_baseGetAllKeys.js";
import _mod4643 from "metro/04643__.js";
import keysIn from "04645_keysIn.js";

export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  return tmp(arg0, keysIn, _mod4643);
}
