// _runtime/00667_getAllKeys.js
import _mod531 from "metro/00531__.js";
import baseGetAllKeys from "00668_baseGetAllKeys.js";
import stubArray from "00670_stubArray.js";

export default function getAllKeys(arg0) {
  const tmp = baseGetAllKeys;
  const tmp2 = _mod531;
  return tmp(arg0, tmp2, stubArray);
}
