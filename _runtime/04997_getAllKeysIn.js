// _runtime/04997_getAllKeysIn.js
import baseGetAllKeys from "00668_baseGetAllKeys.js";
import _mod4980 from "metro/04980__.js";
import keysIn from "04982_keysIn.js";

export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  const tmp2 = keysIn;
  return tmp(arg0, tmp2, _mod4980);
}
