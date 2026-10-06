// === Module 14078: ? ===

// Module 14078
import _mod14079 from "module_14079" /* 14079 */;
import _mod14080 from "module_14080" /* 14080 */;
import _mod14081 from "module_14081" /* 14081 */;
import isForced from "isForced" /* 14118 */;
import _mod14119 from "module_14119" /* 14119 */;
import _mod14135 from "module_14135" /* 14135 */;
import _mod14136 from "module_14136" /* 14136 */;


export default (dontCallGetSet, obj) => {
  let _global;
  let stat;
  let target;
  let tmp5;
  ({ target, global: _global, stat } = dontCallGetSet);
  const tmp3 = _mod14079;
  if (_global) {
    tmp5 = tmp3;
  } else {
    let tmp4 = tmp3[target];
    if (stat) {
      if (!tmp4) {
        tmp4 = _mod14080(target, {});
      }
      tmp5 = tmp4;
    } else {
      tmp5 = tmp4 && _mod14079[target].prototype;
    }
  }
  if (tmp5) {
    for (const key10024 in obj) {
      let tmp8;
      let tmp22 = obj[key10024];
      if (dontCallGetSet.dontCallGetSet) {
        obj = _mod14081;
        let iter = obj.f(tmp5, key10024);
        let value = iter && iter.value;
        tmp8 = value;
      } else {
        tmp8 = tmp5[key10024];
      }
      let sum = key10024;
      let tmp13 = isForced;
      if (!_global) {
        let str4 = "#";
        if (stat) {
          str4 = ".";
        }
        sum = target + str4 + key10024;
      }
      if (!tmp13(sum, dontCallGetSet.forced)) {
        if (undefined !== tmp8) {
          if (typeof tmp22 === typeof tmp8) {
            continue;
          } else {
            let tmp23 = _mod14119(tmp22, tmp8);
          }
        }
        continue;
      }
      let sham = dontCallGetSet.sham;
      if (!sham) {
        let sham2 = tmp8 && tmp8.sham;
        sham = sham2;
      }
      if (sham) {
        let tmp15 = _mod14135(tmp22, "sham", true);
      }
      let tmp20 = _mod14136(tmp5, key10024, tmp22, dontCallGetSet);
      continue;
    }
  }
};