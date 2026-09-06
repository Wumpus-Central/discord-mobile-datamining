// === Module 14341: ? ===

// Module 14341
import _mod14302 from "module_14302" /* 14302 */;
import _mod14304 from "module_14304" /* 14304 */;
import _mod14320 from "module_14320" /* 14320 */;
import _mod14342 from "module_14342" /* 14342 */;

let closure_2 = _mod14304([].push);

export default (arg0, arg1) => {
  const tmp = _mod14302(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp12 = require;
    let tmp14 = _mod14320;
    let tmp14Result = tmp14(_mod14342, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = tmp12(14320)(tmp, key10010);
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
    let tmp5 = require;
    let tmp7 = arg1[num];
    if (_mod14320(tmp, tmp7)) {
      let tmp5Result = tmp5(14343);
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};