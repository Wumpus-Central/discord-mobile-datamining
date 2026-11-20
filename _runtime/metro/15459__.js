// === Module 15459: ? ===

// Module 15459
import _mod15420 from "module_15420" /* 15420 */;
import _mod15422 from "module_15422" /* 15422 */;
import _mod15438 from "module_15438" /* 15438 */;
import _mod15460 from "module_15460" /* 15460 */;
import _mod15461 from "module_15461" /* 15461 */;

let closure_2 = _mod15422([].push);

export default (arg0, arg1) => {
  const tmp = _mod15420(arg0);
  items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod15438;
    let tmp14Result = tmp14(_mod15460, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod15438(tmp, key10010);
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
    if (_mod15438(tmp, tmp7)) {
      let tmp5Result = _mod15461;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};