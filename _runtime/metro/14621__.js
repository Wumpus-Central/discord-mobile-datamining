// === Module 14621: ? ===

// Module 14621
import _mod14582 from "module_14582" /* 14582 */;
import _mod14584 from "module_14584" /* 14584 */;
import _mod14600 from "module_14600" /* 14600 */;
import _mod14622 from "module_14622" /* 14622 */;
import _mod14623 from "module_14623" /* 14623 */;

let closure_2 = _mod14584([].push);

export default (arg0, arg1) => {
  const tmp = _mod14582(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod14600;
    let tmp14Result = tmp14(_mod14622, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod14600(tmp, key10010);
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
    if (_mod14600(tmp, tmp7)) {
      let tmp5Result = _mod14623;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};