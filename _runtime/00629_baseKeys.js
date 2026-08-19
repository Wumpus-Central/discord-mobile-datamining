// === Module 629: baseKeys ===

// Module 629 (baseKeys)
import isPrototype from "isPrototype" /* 630 */;
import overArg from "overArg" /* 631 */;


export default function baseKeys(arg0) {
  if (isPrototype(arg0)) {
    const items = [];
    const _Object = Object;
    for (const key10016 in Object(arg0)) {
      let tmp6 = key10016;
      let tmp7 = hasOwnProperty;
      let call = hasOwnProperty.call;
      if (typeof call === "unknown") {
        let callResult = tmp7(key10016);
      } else {
        callResult = call(arg0, key10016);
      }
      if (callResult) {
        callResult = "constructor" != key10016;
      }
      if (!callResult) {
        continue;
      } else {
        let arr = items.push(key10016);
        continue;
      }
      continue;
    }
    return items;
  } else {
    return overArg(arg0);
  }
  const tmp = require;
};