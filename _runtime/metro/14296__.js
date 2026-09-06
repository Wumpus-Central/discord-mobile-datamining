// === Module 14296: ? ===

// Module 14296
import _mod14297 from "module_14297" /* 14297 */;
import _mod14298 from "module_14298" /* 14298 */;
import _mod14299 from "module_14299" /* 14299 */;
import _mod14336 from "module_14336" /* 14336 */;
import _mod14337 from "module_14337" /* 14337 */;
import _mod14353 from "module_14353" /* 14353 */;
import _mod14354 from "module_14354" /* 14354 */;


export default (dontCallGetSet, obj) => {
  ({ target, global: _global, stat } = dontCallGetSet);
  const tmp3 = _mod14297;
  if (_global) {
    let prototype = tmp3;
  } else {
    let tmp4 = tmp3[target];
    if (stat) {
      if (!tmp4) {
        tmp4 = _mod14298(target, {});
      }
      prototype = tmp4;
    } else {
      prototype = tmp4;
      if (tmp4) {
        prototype = _mod14297[target].prototype;
      }
    }
  }
  if (prototype) {
    for (const key10024 in arg1) {
      let tmp21 = arg1[key10024];
      if (arg0.dontCallGetSet) {
        obj = _mod14299;
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
      let tmp12 = _mod14336;
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
            let tmp22 = _mod14337(tmp21, tmp7);
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
        let tmp14 = _mod14353(tmp21, "sham", true);
      }
      let tmp19 = _mod14354(prototype, key10024, tmp21, arg0);
      continue;
    }
  }
};