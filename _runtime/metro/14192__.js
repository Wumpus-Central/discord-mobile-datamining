// _runtime/metro/14192__.js
import _mod518 from "00518__.js";
import baseKeys from "../00544_baseKeys.js";
import _mod545 from "00545__.js";
import _mod634 from "00634__.js";

export default function isEmpty(size) {
  if (null == size) {
    return true;
  } else {
    if (_mod518(size)) {
      return !size.length;
    }
    const tmp = _mod634(size);
    if ("[object Map]" != tmp) {
      if ("[object Set]" != tmp) {
        if (_mod545(size)) {
          return !baseKeys(size).length;
        } else {
          for (const key10021 in arg0) {
            let call = hasOwnProperty.call;
            if (typeof call === "unknown") {
              let callResult = hasOwnProperty(key10021);
            } else {
              callResult = call(arg0, key10021);
            }
            if (!callResult) {
              continue;
            } else {
              let flag = false;
              return false;
            }
          }
          return true;
        }
      }
    }
    return !size.size;
  }
}
