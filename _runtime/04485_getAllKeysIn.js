// _runtime/04485_getAllKeysIn.js
import { baseGetAllKeys } from "00793_baseGetAllKeys.js";
import { keysIn } from "04470_keysIn.js";
import { 04468__ } from "metro/04468__.js";

export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  return tmp(arg0, keysIn, 04468__);
};