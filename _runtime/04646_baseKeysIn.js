// _runtime/04646_baseKeysIn.js
import _mod521 from "metro/00521__.js";
import _mod545 from "metro/00545__.js";
import nativeKeysIn from "04647_nativeKeysIn.js";

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
}
