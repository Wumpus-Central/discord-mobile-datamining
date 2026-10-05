// === Module 14060: ? ===

// Module 14060
import _mod14061 from "module_14061" /* 14061 */;
import _mod14062 from "module_14062" /* 14062 */;
import _mod14063 from "module_14063" /* 14063 */;
import isForced from "isForced" /* 14100 */;
import _mod14101 from "module_14101" /* 14101 */;
import _mod14117 from "module_14117" /* 14117 */;
import _mod14118 from "module_14118" /* 14118 */;


export default (dontCallGetSet, obj) => {
  let _global;
  let stat;
  let target;
  let tmp5;
  ({ target, global: _global, stat } = dontCallGetSet);
  const tmp3 = _mod14061;
  if (_global) {
    tmp5 = tmp3;
  } else {
    let tmp4 = tmp3[target];
    if (stat) {
      if (!tmp4) {
        tmp4 = _mod14062(target, {});
      }
      tmp5 = tmp4;
    } else {
      tmp5 = tmp4 && _mod14061[target].prototype;
    }
  }
  if (tmp5) {
    for (const key10024 in obj) {
      let tmp8;
      let tmp22 = obj[key10024];
      if (dontCallGetSet.dontCallGetSet) {
        obj = _mod14063;
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
            let tmp23 = _mod14101(tmp22, tmp8);
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
        let tmp15 = _mod14117(tmp22, "sham", true);
      }
      let tmp20 = _mod14118(tmp5, key10024, tmp22, dontCallGetSet);
      continue;
    }
  }
};