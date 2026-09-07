// === Module 14344: ? ===

// Module 14344
import _mod14305 from "module_14305" /* 14305 */;
import _mod14307 from "module_14307" /* 14307 */;
import _mod14323 from "module_14323" /* 14323 */;
import _mod14345 from "module_14345" /* 14345 */;
import _mod14346 from "module_14346" /* 14346 */;

let closure_2 = _mod14307([].push);

export default (arg0, arg1) => {
  const tmp = _mod14305(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod14323;
    let tmp14Result = tmp14(_mod14345, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod14323(tmp, key10010);
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
    if (_mod14323(tmp, tmp7)) {
      let tmp5Result = _mod14346;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};