// === Module 16315: ? ===

// Module 16315
import _mod16276 from "module_16276" /* 16276 */;
import _mod16278 from "module_16278" /* 16278 */;
import _mod16294 from "module_16294" /* 16294 */;
import _mod16316 from "module_16316" /* 16316 */;
import _mod16317 from "module_16317" /* 16317 */;

let closure_2 = _mod16278([].push);

export default (arg0, arg1) => {
  const tmp = _mod16276(arg0);
  items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod16294;
    let tmp14Result = tmp14(_mod16316, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod16294(tmp, key10010);
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
    if (_mod16294(tmp, tmp7)) {
      let tmp5Result = _mod16317;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};