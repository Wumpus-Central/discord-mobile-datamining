// _runtime/metro/00656__.js
import _mod531 from "00531__.js";
import baseGetAllKeys from "../00657_baseGetAllKeys.js";
import stubArray from "../00659_stubArray.js";

export default function getAllKeys(arg0) {
  const tmp = baseGetAllKeys;
  return tmp(arg0, _mod531, stubArray);
}
