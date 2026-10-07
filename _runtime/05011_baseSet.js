// _runtime/05011_baseSet.js
import _mod521 from "metro/00521__.js";
import _mod543 from "metro/00543__.js";
import _mod600 from "metro/00600__.js";
import castPath from "00603_castPath.js";
import assignValue from "04979_assignValue.js";

export default function baseSet(arg0, arg1, arg2, fn) {
  if (_mod521(arg0)) {
    const arr = castPath(arg1, arg0);
    if (null != arg0) {
      let num2 = 0;
      let tmp17 = arg0;
      if (0 < length) {
        const tmp8 = _mod600(arr[num2]);
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
        return arg0;
      }
    }
    return arg0;
  } else {
    return arg0;
  }
}
