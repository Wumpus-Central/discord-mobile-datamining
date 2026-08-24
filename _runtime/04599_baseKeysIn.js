// === Module 4599: baseKeysIn ===

// Module 4599 (baseKeysIn)
import isObject from "isObject" /* 606 */;


export default function baseKeysIn(obj) {
  if (isObject(obj)) {
    const tmp3 = tmp(630)(obj);
    const items = [];
    for (const key10017 in arg0) {
      let tmp10 = key10017;
      let tmp8 = "constructor" != key10017;
      if (!tmp8) {
        if (tmp3) {
          tmp8 = !tmp3;
        } else {
          let tmp5 = hasOwnProperty;
          let call = hasOwnProperty.call;
          if (typeof call === "unknown") {
            let callResult = tmp5(key10017);
          } else {
            callResult = call(arg0, key10017);
          }
          let tmp7 = callResult;
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
    return tmp(4600)(obj);
  }
};