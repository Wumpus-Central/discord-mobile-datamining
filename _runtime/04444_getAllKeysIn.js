// _runtime/04444_getAllKeysIn.js
import { baseGetAllKeys } from "00793_baseGetAllKeys.js";
import { keysIn } from "04429_keysIn.js";
import { 04427__ } from "metro/04427__.js";

export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  return tmp(arg0, keysIn, 04427__);
};