// === Module 16673: ? ===

// Module 16673
import _mod16634 from "module_16634" /* 16634 */;
import _mod16636 from "module_16636" /* 16636 */;
import _mod16652 from "module_16652" /* 16652 */;
import _mod16674 from "module_16674" /* 16674 */;
import _mod16675 from "module_16675" /* 16675 */;

let closure_2 = _mod16636([].push);

export default (arg0, arg1) => {
  const tmp = _mod16634(arg0);
  items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod16652;
    let tmp14Result = tmp14(_mod16674, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod16652(tmp, key10010);
    }
    if (!tmp2) {
      continue;
    } else {
      let tmp4 = closure_2(items, key10010);
      continue;
    }
    continue;
  }
  for (let num = 0; arg1.length > num; num = num + 1) {
    let tmp7 = arg1[num];
    if (_mod16652(tmp, tmp7)) {
      let tmp5Result = _mod16675;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};