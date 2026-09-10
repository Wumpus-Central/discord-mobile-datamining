// === Module 14418: ? ===

// Module 14418
import _mod14379 from "module_14379" /* 14379 */;
import _mod14381 from "module_14381" /* 14381 */;
import _mod14397 from "module_14397" /* 14397 */;
import _mod14419 from "module_14419" /* 14419 */;
import _mod14420 from "module_14420" /* 14420 */;

let closure_2 = _mod14381([].push);

export default (arg0, arg1) => {
  const tmp = _mod14379(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod14397;
    let tmp14Result = tmp14(_mod14419, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod14397(tmp, key10010);
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
    if (_mod14397(tmp, tmp7)) {
      let tmp5Result = _mod14420;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};