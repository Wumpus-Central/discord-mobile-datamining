// === Module 4983: baseKeysIn ===

// Module 4983 (baseKeysIn)
import isObject from "isObject" /* 521 */;
import isPrototype from "isPrototype" /* 545 */;
import nativeKeysIn from "nativeKeysIn" /* 4984 */;


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
};