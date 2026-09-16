// === Module 14457: ? ===

// Module 14457
import _mod14418 from "module_14418" /* 14418 */;
import _mod14420 from "module_14420" /* 14420 */;
import _mod14436 from "module_14436" /* 14436 */;
import _mod14458 from "module_14458" /* 14458 */;
import _mod14459 from "module_14459" /* 14459 */;

let closure_2 = _mod14420([].push);

export default (arg0, arg1) => {
  const tmp = _mod14418(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod14436;
    let tmp14Result = tmp14(_mod14458, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod14436(tmp, key10010);
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
    if (_mod14436(tmp, tmp7)) {
      let tmp5Result = _mod14459;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};