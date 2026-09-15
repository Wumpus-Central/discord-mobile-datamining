// === Module 14439: ? ===

// Module 14439
import _mod14400 from "module_14400" /* 14400 */;
import _mod14402 from "module_14402" /* 14402 */;
import _mod14418 from "module_14418" /* 14418 */;
import _mod14440 from "module_14440" /* 14440 */;
import _mod14441 from "module_14441" /* 14441 */;

let closure_2 = _mod14402([].push);

export default (arg0, arg1) => {
  const tmp = _mod14400(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod14418;
    let tmp14Result = tmp14(_mod14440, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod14418(tmp, key10010);
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
    if (_mod14418(tmp, tmp7)) {
      let tmp5Result = _mod14441;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};