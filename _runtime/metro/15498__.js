// _runtime/metro/15498__.js
import _mod15499 from "15499__.js";
import _mod15500 from "15500__.js";
import _mod15501 from "15501__.js";
import _mod15538 from "15538__.js";
import _mod15539 from "15539__.js";
import _mod15555 from "15555__.js";
import _mod15556 from "15556__.js";

export default (dontCallGetSet, obj) => {
  ({ target, global: _global, stat } = dontCallGetSet);
  const tmp3 = _mod15499;
  if (_global) {
    let prototype = tmp3;
  } else {
    let tmp4 = tmp3[target];
    if (stat) {
      if (!tmp4) {
        tmp4 = _mod15500(target, {});
      }
      prototype = tmp4;
    } else {
      prototype = tmp4;
      if (tmp4) {
        prototype = _mod15499[target].prototype;
      }
    }
  }
  if (prototype) {
    for (const key10024 in arg1) {
      let tmp21 = arg1[key10024];
      if (arg0.dontCallGetSet) {
        obj = _mod15501;
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
      let tmp12 = _mod15538;
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
            let tmp22 = _mod15539(tmp21, tmp7);
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
        let tmp14 = _mod15555(tmp21, "sham", true);
      }
      let tmp19 = _mod15556(prototype, key10024, tmp21, arg0);
      continue;
    }
  }
};
