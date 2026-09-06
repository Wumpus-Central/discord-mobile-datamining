// === Module 4646: baseKeysIn ===

// Module 4646 (baseKeysIn)
import _mod521 from "module_521" /* 521 */;
import _mod545 from "module_545" /* 545 */;
import nativeKeysIn from "nativeKeysIn" /* 4647 */;


export default function baseKeysIn(obj) {
  if (_mod521(obj)) {
    const tmp3 = _mod545(obj);
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