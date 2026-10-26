// === Module 15588: ? ===

// Module 15588
import _mod15549 from "module_15549" /* 15549 */;
import _mod15551 from "module_15551" /* 15551 */;
import _mod15567 from "module_15567" /* 15567 */;
import _mod15589 from "module_15589" /* 15589 */;
import _mod15590 from "module_15590" /* 15590 */;

let closure_2 = _mod15551([].push);

export default (arg0, arg1) => {
  const tmp = _mod15549(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod15567;
    let tmp14Result = tmp14(_mod15589, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod15567(tmp, key10010);
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
    if (_mod15567(tmp, tmp7)) {
      let tmp5Result = _mod15590;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};