// _runtime/04991_getAllKeysIn.js
import baseGetAllKeys from "00668_baseGetAllKeys.js";
import _mod4974 from "metro/04974__.js";
import keysIn from "04976_keysIn.js";

export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  const tmp2 = keysIn;
  return tmp(arg0, tmp2, _mod4974);
}
