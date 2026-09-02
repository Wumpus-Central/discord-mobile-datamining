// _runtime/metro/14174__.js
import _mod14175 from "14175__.js";
import getOwnPropertyDescriptor from "../14177_getOwnPropertyDescriptor.js";
import isForced from "../14214_isForced.js";

export default (dontCallGetSet, obj) => {
  ({ target, global: _global, stat } = dontCallGetSet);
  const tmp3 = _mod14175;
  if (_global) {
    let prototype = tmp3;
  } else {
    let tmp4 = tmp3[target];
    if (stat) {
      if (!tmp4) {
        tmp4 = tmp(14176)(target, {});
      }
      prototype = tmp4;
    } else {
      prototype = tmp4;
      if (tmp4) {
        prototype = tmp(14175)[target].prototype;
      }
    }
  }
  if (prototype) {
    for (const key10024 in arg1) {
      let tmp21 = arg1[key10024];
      let tmp20 = key10024;
      if (arg0.dontCallGetSet) {
        let tmp8 = require;
        let tmp9 = dependencyMap;
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
      let tmp10 = require;
      let tmp11 = dependencyMap;
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
            let tmp22 = tmp10(14215)(tmp21, tmp7);
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
        let tmp14 = tmp10(14231)(tmp21, "sham", true);
      }
      let tmp15 = prototype;
      let tmp16 = key10024;
      let tmp17 = tmp21;
      let tmp18 = arg0;
      let tmp19 = tmp10(14232)(prototype, tmp20, tmp21, arg0);
      continue;
    }
  }
};
