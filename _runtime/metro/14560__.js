// === Module 14560: ? ===

// Module 14560
import _mod14521 from "module_14521" /* 14521 */;
import _mod14523 from "module_14523" /* 14523 */;
import _mod14539 from "module_14539" /* 14539 */;
import _mod14561 from "module_14561" /* 14561 */;
import _mod14562 from "module_14562" /* 14562 */;

let closure_2 = _mod14523([].push);

export default (arg0, arg1) => {
  const tmp = _mod14521(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod14539;
    let tmp14Result = tmp14(_mod14561, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod14539(tmp, key10010);
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
    if (_mod14539(tmp, tmp7)) {
      let tmp5Result = _mod14562;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};