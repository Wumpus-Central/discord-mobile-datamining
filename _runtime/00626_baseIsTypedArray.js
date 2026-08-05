// _runtime/00626_baseIsTypedArray.js
import { isObjectLike } from "00620_isObjectLike.js";
const obj = {};
obj["[object Uint32Array]"] = true;
obj["[object Uint16Array]"] = true;
obj["[object Uint8ClampedArray]"] = true;
obj["[object Uint8Array]"] = true;
obj["[object Int32Array]"] = true;
obj["[object Int16Array]"] = true;
obj["[object Int8Array]"] = true;
obj["[object Float64Array]"] = true;
obj["[object Float32Array]"] = true;
obj["[object WeakMap]"] = false;
obj["[object String]"] = false;
obj["[object Set]"] = false;
obj["[object RegExp]"] = false;
obj["[object Object]"] = false;
obj["[object Number]"] = false;
obj["[object Map]"] = false;
obj["[object Function]"] = false;
obj["[object Error]"] = false;
obj["[object Date]"] = false;
obj["[object DataView]"] = false;
obj["[object Boolean]"] = false;
obj["[object ArrayBuffer]"] = false;
obj["[object Array]"] = false;
obj["[object Arguments]"] = false;

export default function baseIsTypedArray(arg0) {
  let tmp3 = isObjectLike(arg0) && tmp(604)(arg0.length);
  if (tmp3) {
    tmp3 = obj[tmp(undefined, 607)(undefined, arg0)];
  }
  return tmp3;
};