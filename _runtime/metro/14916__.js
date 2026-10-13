// === Module 14916: ? ===

// Module 14916
import _mod14877 from "module_14877" /* 14877 */;
import _mod14879 from "module_14879" /* 14879 */;
import _mod14895 from "module_14895" /* 14895 */;
import _mod14917 from "module_14917" /* 14917 */;
import _mod14918 from "module_14918" /* 14918 */;

let closure_2 = _mod14879([].push);

export default (arg0, arg1) => {
  const tmp = _mod14877(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod14895;
    let tmp14Result = tmp14(_mod14917, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod14895(tmp, key10010);
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
    if (_mod14895(tmp, tmp7)) {
      let tmp5Result = _mod14918;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};