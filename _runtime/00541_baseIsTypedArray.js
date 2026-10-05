// === Module 541: baseIsTypedArray ===

// Module 541 (baseIsTypedArray)
import isLength from "isLength" /* 519 */;
import baseGetTag from "baseGetTag" /* 522 */;
import isObjectLike from "isObjectLike" /* 535 */;

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
  const tmp3 = isObjectLike(arg0) && isLength(arg0.length) && obj[baseGetTag(undefined, arg0)];
  return tmp3;
};