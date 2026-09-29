// _runtime/metro/13956__.js
import _mod13957 from "13957__.js";
import _mod13958 from "13958__.js";
import _mod13959 from "13959__.js";
import _mod13996 from "13996__.js";
import _mod13997 from "13997__.js";
import _mod14013 from "14013__.js";
import _mod14014 from "14014__.js";

export default (dontCallGetSet, obj) => {
  ({ target, global: _global, stat } = dontCallGetSet);
  const tmp3 = _mod13957;
  if (_global) {
    let prototype = tmp3;
  } else {
    let tmp4 = tmp3[target];
    if (stat) {
      if (!tmp4) {
        tmp4 = _mod13958(target, {});
      }
      prototype = tmp4;
    } else {
      prototype = tmp4;
      if (tmp4) {
        prototype = _mod13957[target].prototype;
      }
    }
  }
  if (prototype) {
    for (const key10024 in arg1) {
      let tmp21 = arg1[key10024];
      if (arg0.dontCallGetSet) {
        obj = _mod13959;
        let iter = obj.f(prototype, key10024);
        value = iter;
        if (iter) {
          value = iter.value;
        }
        let tmp7 = value;
      } else {
        tmp7 = prototype[key10024];
      }
      let sum = key10024;
      let tmp12 = _mod13996;
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
            let tmp22 = _mod13997(tmp21, tmp7);
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
        let tmp14 = _mod14013(tmp21, "sham", true);
      }
      let tmp19 = _mod14014(prototype, key10024, tmp21, arg0);
      continue;
    }
  }
};
