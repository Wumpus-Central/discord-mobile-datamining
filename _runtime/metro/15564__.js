// === Module 15564: ? ===

// Module 15564
import _mod15525 from "module_15525" /* 15525 */;
import _mod15527 from "module_15527" /* 15527 */;
import _mod15543 from "module_15543" /* 15543 */;
import _mod15565 from "module_15565" /* 15565 */;
import _mod15566 from "module_15566" /* 15566 */;

let closure_2 = _mod15527([].push);

export default (arg0, arg1) => {
  const tmp = _mod15525(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod15543;
    let tmp14Result = tmp14(_mod15565, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod15543(tmp, key10010);
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
    if (_mod15543(tmp, tmp7)) {
      let tmp5Result = _mod15566;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};