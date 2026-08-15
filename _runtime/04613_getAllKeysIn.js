// _runtime/04613_getAllKeysIn.js
import { baseGetAllKeys } from "00793_baseGetAllKeys.js";
import { keysIn } from "04598_keysIn.js";
import { 04596__ } from "metro/04596__.js";

export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  return tmp(arg0, keysIn, 04596__);
};