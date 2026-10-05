// _runtime/00675_baseIsMatch.js
import baseIsEqual from "00643_baseIsEqual.js";
import Stack from "00650_Stack.js";

export default function baseIsMatch(arg0, arg1, arg2, fn) {
  let tmp8;
  if (null == arg0) {
    return !arg2.length;
  } else {
    const _Object = Object;
    const ObjectResult = Object(arg0);
    let diff = tmp33 - 1;
    let tmp6 = diff;
    if (+arg2.length) {
      while (true) {
        let tmp = arg2[diff];
        if (!fn) {
          let tmp3;
          if (tmp[2]) {
            tmp3 = tmp[1] !== ObjectResult[tmp[0]];
          }
          if (tmp3) {
            break;
          } else {
            let tmp4 = +diff;
            diff = tmp4 - 1;
            tmp6 = diff;
          }
        }
        tmp3 = !(tmp[0] in ObjectResult);
      }
      return false;
    }
    let sum = tmp6 + 1;
    if (sum < arg2.length) {
      while (true) {
        let tmp9 = arg2[sum];
        let first = tmp9[0];
        let tmp11 = ObjectResult[first];
        let tmp12 = tmp9[1];
        let tmp13 = tmp8;
        if (!fn) {
          let tmp15;
          if (tmp9[2]) {
            tmp15 = tmp13;
            if (undefined === tmp11) {
              tmp15 = tmp13;
              if (!(first in ObjectResult)) {
                break;
              }
            }
          }
          sum = sum + 1;
          tmp8 = tmp15;
        }
        let self = this;
        let self2 = this;
        let tmp18 = new Stack();
        let tmp19 = tmp18;
        if (fn) {
          tmp13 = fn(tmp11, tmp12, first, ObjectResult, arg1, tmp19);
        }
        let tmp26 = tmp13;
        if (undefined === tmp13) {
          tmp26 = baseIsEqual(tmp12, tmp11, 3, fn, tmp19);
        }
        tmp15 = tmp13;
        if (!tmp26) {
          let flag2 = false;
          return false;
        }
      }
      return false;
    }
    return true;
  }
}
