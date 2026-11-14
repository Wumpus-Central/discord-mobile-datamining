// === Module 16791: ? ===

// Module 16791
import _mod16752 from "module_16752" /* 16752 */;
import _mod16754 from "module_16754" /* 16754 */;
import _mod16770 from "module_16770" /* 16770 */;
import _mod16792 from "module_16792" /* 16792 */;
import _mod16793 from "module_16793" /* 16793 */;

let closure_2 = _mod16754([].push);

export default (arg0, arg1) => {
  const tmp = _mod16752(arg0);
  items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod16770;
    let tmp14Result = tmp14(_mod16792, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod16770(tmp, key10010);
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
    if (_mod16770(tmp, tmp7)) {
      let tmp5Result = _mod16793;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};