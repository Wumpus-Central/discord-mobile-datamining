// === Module 544: baseKeys ===

// Module 544 (baseKeys)
import _mod545 from "module_545" /* 545 */;
import overArg from "overArg" /* 546 */;


export default function baseKeys(arg0) {
  if (_mod545(arg0)) {
    const items = [];
    const _Object = Object;
    for (const key10016 in Object(arg0)) {
      let call = hasOwnProperty.call;
      if (typeof call === "unknown") {
        let callResult = hasOwnProperty(key10016);
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
};