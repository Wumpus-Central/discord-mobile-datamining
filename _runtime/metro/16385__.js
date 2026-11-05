// === Module 16385: ? ===

// Module 16385
import _mod16386 from "module_16386" /* 16386 */;
import _mod16387 from "module_16387" /* 16387 */;
import _mod16388 from "module_16388" /* 16388 */;
import _mod16425 from "module_16425" /* 16425 */;
import _mod16426 from "module_16426" /* 16426 */;
import _mod16442 from "module_16442" /* 16442 */;
import _mod16443 from "module_16443" /* 16443 */;


export default (dontCallGetSet, obj) => {
  ({ target, global: _global, stat } = dontCallGetSet);
  const tmp3 = _mod16386;
  if (_global) {
    let prototype = tmp3;
  } else {
    let tmp4 = tmp3[target];
    if (stat) {
      if (!tmp4) {
        tmp4 = _mod16387(target, {});
      }
      prototype = tmp4;
    } else {
      prototype = tmp4;
      if (tmp4) {
        prototype = _mod16386[target].prototype;
      }
    }
  }
  if (prototype) {
    for (const key10024 in arg1) {
      let tmp21 = arg1[key10024];
      if (arg0.dontCallGetSet) {
        obj = _mod16388;
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
      let tmp12 = _mod16425;
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
            let tmp22 = _mod16426(tmp21, tmp7);
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
        let tmp14 = _mod16442(tmp21, "sham", true);
      }
      let tmp19 = _mod16443(prototype, key10024, tmp21, arg0);
      continue;
    }
  }
};