// === Module 15584: ? ===

// Module 15584
import _mod15545 from "module_15545" /* 15545 */;
import _mod15547 from "module_15547" /* 15547 */;
import _mod15563 from "module_15563" /* 15563 */;
import _mod15585 from "module_15585" /* 15585 */;
import _mod15586 from "module_15586" /* 15586 */;

let closure_2 = _mod15547([].push);

export default (arg0, arg1) => {
  const tmp = _mod15545(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod15563;
    let tmp14Result = tmp14(_mod15585, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod15563(tmp, key10010);
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
    if (_mod15563(tmp, tmp7)) {
      let tmp5Result = _mod15586;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};