import { isObject } from "00606_isObject.js";
import { toKey } from "00725_toKey.js";
// _runtime/04439_baseSet.js

export default function baseSet(arg0, arg1, arg2, arg3) {
  if (isObject /* isObject */(arg0)) {
    const arr = tmp(728)(arg1, arg0);
    if (null != arg0) {
      let num2 = 0;
      let tmp17 = arg0;
      if (0 < length) {
        const tmp8 = toKey /* toKey */(arr[num2]);
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
              if (arg3) {
                tmp12 = arg3(tmp11, tmp8, tmp17);
              }
              tmp13 = tmp12;
              if (undefined === tmp12) {
                if (tmp6(606)(tmp11)) {
                  tmp13 = tmp11;
                } else {
                  let tmp14 = tmp6(628)(arr[num2 + 1]) ? [] : {};
                }
              }
            }
            let tmp15 = tmp6(4407)(tmp17, tmp8, tmp13);
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
  tmp = require;
};