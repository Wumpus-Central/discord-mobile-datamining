// === Module 4599: baseKeysIn ===

// Module 4599 (baseKeysIn)
import isObject from "isObject" /* 606 */;
import isPrototype from "isPrototype" /* 630 */;
import nativeKeysIn from "nativeKeysIn" /* 4600 */;


export default function baseKeysIn(obj) {
  if (isObject(obj)) {
    const tmp3 = isPrototype(obj);
    const items = [];
    for (const key10017 in arg0) {
      let tmp8 = "constructor" != key10017;
      if (!tmp8) {
        if (tmp3) {
          tmp8 = !tmp3;
        } else {
          let call = hasOwnProperty.call;
          if (typeof call === "unknown") {
            let callResult = hasOwnProperty(key10017);
          } else {
            callResult = call(arg0, key10017);
          }
        }
      }
      if (!tmp8) {
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