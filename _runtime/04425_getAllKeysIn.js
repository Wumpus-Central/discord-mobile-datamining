// _runtime/04425_getAllKeysIn.js
import { baseGetAllKeys } from "00793_baseGetAllKeys.js";
import { keysIn } from "04410_keysIn.js";
import { 04408__ } from "metro/04408__.js";

export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys /* baseGetAllKeys */;
  return tmp(arg0, keysIn /* keysIn */, 04408__);
};