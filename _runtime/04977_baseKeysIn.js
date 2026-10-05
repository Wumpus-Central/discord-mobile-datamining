// _runtime/04977_baseKeysIn.js
import isObject from "00521_isObject.js";
import isPrototype from "00545_isPrototype.js";
import nativeKeysIn from "04978_nativeKeysIn.js";

export default function baseKeysIn(obj) {
  if (isObject(obj)) {
    const items = [];
    const tmp3 = isPrototype(obj);
    for (const key10017 in obj) {
      let tmp6 = "constructor" != key10017;
      if (!tmp6) {
        let callResult = !tmp3 && hasOwnProperty.call(obj, key10017);
        tmp6 = callResult;
      }
      if (!tmp6) {
        continue;
      } else {
        let arr = items.push(key10017);
        continue;
      }
      continue;
    }
    return items;
  } else {
    return nativeKeysIn(obj);
  }
}
