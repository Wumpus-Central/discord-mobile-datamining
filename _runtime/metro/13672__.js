// === Module 13672: ? ===

// Module 13672
import _mod13673 from "module_13673" /* 13673 */;
import _mod13674 from "module_13674" /* 13674 */;
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor" /* 13675 */;
import isForced from "isForced" /* 13712 */;
import _mod13713 from "module_13713" /* 13713 */;
import _mod13729 from "module_13729" /* 13729 */;
import _mod13730 from "module_13730" /* 13730 */;


export default (dontCallGetSet, obj) => {
  ({ target, global: _global, stat } = dontCallGetSet);
  const tmp3 = _mod13673;
  if (_global) {
    let prototype = tmp3;
  } else {
    let tmp4 = tmp3[target];
    if (stat) {
      if (!tmp4) {
        tmp4 = _mod13674(target, {});
      }
      prototype = tmp4;
    } else {
      prototype = tmp4;
      if (tmp4) {
        prototype = _mod13673[target].prototype;
      }
    }
  }
  if (prototype) {
    for (const key10024 in arg1) {
      let tmp21 = arg1[key10024];
      if (arg0.dontCallGetSet) {
        obj = getOwnPropertyDescriptor;
        let iter = obj.f(prototype, key10024);
        let value = iter;
        if (iter) {
          value = iter.value;
        }
        let tmp7 = value;
      } else {
        tmp7 = prototype[key10024];
      }
      let sum = key10024;
      let tmp12 = isForced;
      if (!_global) {
        let str4 = "#";
        if (stat) {
          str4 = ".";
        }
        sum = target + str4 + key10024;
      }
      if (!tmp12(sum, arg0.forced)) {
        if (undefined !== tmp7) {
          if (typeof tmp21 === typeof tmp7) {
            continue;
          } else {
            let tmp22 = _mod13713(tmp21, tmp7);
          }
        }
        continue;
      }
      let sham = arg0.sham;
      if (!sham) {
        let sham2 = tmp7;
        if (tmp7) {
          sham2 = tmp7.sham;
        }
        sham = sham2;
      }
      if (sham) {
        let tmp14 = _mod13729(tmp21, "sham", true);
      }
      let tmp19 = _mod13730(prototype, key10024, tmp21, arg0);
      continue;
    }
  }
};