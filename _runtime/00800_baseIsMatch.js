// _runtime/00800_baseIsMatch.js
import { Stack } from "00775_Stack.js";

export default function baseIsMatch(arg0, arg1, arg2, arg3) {
  if (null == arg0) {
    return !length;
  } else {
    const _Object = Object;
    const ObjectResult = Object(arg0);
    let diff = tmp35 - 1;
    let tmp6 = diff;
    if (+length) {
      while (true) {
        let tmp = arg2[diff];
        let tmp2 = diff;
        if (!arg3) {
          if (tmp[2]) {
            let tmp3 = tmp[1] !== ObjectResult[tmp[0]];
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
    if (sum < length) {
      while (true) {
        let tmp9 = arg2[sum];
        let first = tmp9[0];
        let tmp11 = ObjectResult[first];
        let tmp12 = tmp9[1];
        let tmp13 = tmp8;
        let tmp14 = sum;
        if (!arg3) {
          if (tmp9[2]) {
            let tmp15 = tmp13;
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
        let tmp16 = require;
        let tmp17 = dependencyMap;
        let tmp18 = new.target;
        let tmp19 = new.target;
        let tmp20 = new Stack /* Stack */();
        let tmp21 = tmp20;
        if (arg3) {
          let tmp22 = tmp11;
          let tmp23 = tmp12;
          let tmp24 = first;
          let tmp25 = ObjectResult;
          let tmp26 = arg1;
          let tmp27 = tmp20;
          tmp13 = arg3(tmp11, tmp12, first, ObjectResult, arg1, tmp21);
        }
        let tmp28 = tmp13;
        if (undefined === tmp13) {
          let tmp29 = tmp12;
          let tmp30 = tmp11;
          let num2 = 3;
          let tmp31 = arg3;
          let tmp32 = tmp20;
          tmp28 = tmp16(768)(tmp12, tmp11, 3, arg3, tmp21);
        }
        tmp15 = tmp13;
        if (!tmp28) {
          let flag2 = false;
          return false;
        }
      }
      return false;
    }
    return true;
  }
};