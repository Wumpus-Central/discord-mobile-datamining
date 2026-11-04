// === Module 16417: ? ===

// Module 16417
import _mod16378 from "module_16378" /* 16378 */;
import _mod16380 from "module_16380" /* 16380 */;
import _mod16396 from "module_16396" /* 16396 */;
import _mod16418 from "module_16418" /* 16418 */;
import _mod16419 from "module_16419" /* 16419 */;

let closure_2 = _mod16380([].push);

export default (arg0, arg1) => {
  const tmp = _mod16378(arg0);
  items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod16396;
    let tmp14Result = tmp14(_mod16418, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod16396(tmp, key10010);
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
    if (_mod16396(tmp, tmp7)) {
      let tmp5Result = _mod16419;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};