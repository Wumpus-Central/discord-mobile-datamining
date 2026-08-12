// _runtime/04484_getAllKeysIn.js
import { baseGetAllKeys } from "00793_baseGetAllKeys.js";
import { keysIn } from "04469_keysIn.js";
import { 04467__ } from "metro/04467__.js";

export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  return tmp(arg0, keysIn, 04467__);
};