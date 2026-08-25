// _runtime/04524_getAllKeysIn.js
import baseGetAllKeys from "00793_baseGetAllKeys.js";
import _mod4507 from "metro/04507__.js";
import keysIn from "04509_keysIn.js";


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  return tmp(arg0, keysIn, _mod4507);
};