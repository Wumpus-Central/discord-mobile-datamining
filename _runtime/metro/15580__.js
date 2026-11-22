// === Module 15580: ? ===

// Module 15580
import _mod15541 from "module_15541" /* 15541 */;
import _mod15543 from "module_15543" /* 15543 */;
import _mod15559 from "module_15559" /* 15559 */;
import _mod15581 from "module_15581" /* 15581 */;
import _mod15582 from "module_15582" /* 15582 */;

let closure_2 = _mod15543([].push);

export default (arg0, arg1) => {
  const tmp = _mod15541(arg0);
  items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod15559;
    let tmp14Result = tmp14(_mod15581, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod15559(tmp, key10010);
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
    if (_mod15559(tmp, tmp7)) {
      let tmp5Result = _mod15582;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};