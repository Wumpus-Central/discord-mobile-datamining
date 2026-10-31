// === Module 16168: ? ===

// Module 16168
import _mod16129 from "module_16129" /* 16129 */;
import _mod16131 from "module_16131" /* 16131 */;
import _mod16147 from "module_16147" /* 16147 */;
import _mod16169 from "module_16169" /* 16169 */;
import _mod16170 from "module_16170" /* 16170 */;

let closure_2 = _mod16131([].push);

export default (arg0, arg1) => {
  const tmp = _mod16129(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod16147;
    let tmp14Result = tmp14(_mod16169, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod16147(tmp, key10010);
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
    if (_mod16147(tmp, tmp7)) {
      let tmp5Result = _mod16170;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};