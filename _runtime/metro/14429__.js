// === Module 14429: ? ===

// Module 14429
import _mod14390 from "module_14390" /* 14390 */;
import _mod14392 from "module_14392" /* 14392 */;
import _mod14408 from "module_14408" /* 14408 */;
import _mod14430 from "module_14430" /* 14430 */;
import _mod14431 from "module_14431" /* 14431 */;

let closure_2 = _mod14392([].push);

export default (arg0, arg1) => {
  const tmp = _mod14390(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod14408;
    let tmp14Result = tmp14(_mod14430, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod14408(tmp, key10010);
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
    if (_mod14408(tmp, tmp7)) {
      let tmp5Result = _mod14431;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};