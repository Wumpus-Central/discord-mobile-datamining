// === Module 16172: ? ===

// Module 16172
import _mod16133 from "module_16133" /* 16133 */;
import _mod16135 from "module_16135" /* 16135 */;
import _mod16151 from "module_16151" /* 16151 */;
import _mod16173 from "module_16173" /* 16173 */;
import _mod16174 from "module_16174" /* 16174 */;

let closure_2 = _mod16135([].push);

export default (arg0, arg1) => {
  const tmp = _mod16133(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod16151;
    let tmp14Result = tmp14(_mod16173, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod16151(tmp, key10010);
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
    if (_mod16151(tmp, tmp7)) {
      let tmp5Result = _mod16174;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};