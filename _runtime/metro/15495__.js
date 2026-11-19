// === Module 15495: ? ===

// Module 15495
import _mod15456 from "module_15456" /* 15456 */;
import _mod15458 from "module_15458" /* 15458 */;
import _mod15474 from "module_15474" /* 15474 */;
import _mod15496 from "module_15496" /* 15496 */;
import _mod15497 from "module_15497" /* 15497 */;

let closure_2 = _mod15458([].push);

export default (arg0, arg1) => {
  const tmp = _mod15456(arg0);
  items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod15474;
    let tmp14Result = tmp14(_mod15496, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod15474(tmp, key10010);
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
    if (_mod15474(tmp, tmp7)) {
      let tmp5Result = _mod15497;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};