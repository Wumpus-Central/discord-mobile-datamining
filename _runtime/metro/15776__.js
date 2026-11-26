// === Module 15776: ? ===

// Module 15776
import _mod15737 from "module_15737" /* 15737 */;
import _mod15739 from "module_15739" /* 15739 */;
import _mod15755 from "module_15755" /* 15755 */;
import _mod15777 from "module_15777" /* 15777 */;
import _mod15778 from "module_15778" /* 15778 */;

let closure_2 = _mod15739([].push);

export default (arg0, arg1) => {
  const tmp = _mod15737(arg0);
  items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod15755;
    let tmp14Result = tmp14(_mod15777, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod15755(tmp, key10010);
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
    if (_mod15755(tmp, tmp7)) {
      let tmp5Result = _mod15778;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};