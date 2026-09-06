// _runtime/04674_baseSet.js
import _mod521 from "metro/00521__.js";
import _mod543 from "metro/00543__.js";
import _mod589 from "metro/00589__.js";
import castPath from "00592_castPath.js";
import assignValue from "04642_assignValue.js";

export default function baseSet(arr, arg1, arg2, fn) {
  if (_mod521(arr)) {
    arr = castPath(arg1, arr);
    if (null != arr) {
      let num2 = 0;
      let tmp17 = arr;
      if (0 < length) {
        const tmp8 = _mod589(arr[num2]);
        while ("__proto__" !== tmp8) {
          if ("constructor" === tmp8) {
            break;
          } else if ("prototype" === tmp8) {
            break;
          } else {
            let tmp13 = arg2;
            if (num2 !== tmp4) {
              let tmp11 = tmp17[tmp8];
              let tmp12;
              if (fn) {
                tmp12 = fn(tmp11, tmp8, tmp17);
              }
              tmp13 = tmp12;
              if (undefined === tmp12) {
                if (_mod521(tmp11)) {
                  tmp13 = tmp11;
                } else {
                  let tmp14 = _mod543(arr[num2 + 1]) ? [] : {};
                }
              }
            }
            let tmp15 = assignValue(tmp17, tmp8, tmp13);
            let tmp16 = tmp17[tmp8];
            if (null != tmp16) {
              num2 = num2 + 1;
              tmp17 = tmp16;
            }
          }
        }
        return arr;
      }
    }
    return arr;
  } else {
    return arr;
  }
}
