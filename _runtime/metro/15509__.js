// === Module 15509: ? ===

// Module 15509
import _mod15470 from "module_15470" /* 15470 */;
import _mod15472 from "module_15472" /* 15472 */;
import _mod15488 from "module_15488" /* 15488 */;
import _mod15510 from "module_15510" /* 15510 */;
import _mod15511 from "module_15511" /* 15511 */;

let closure_2 = _mod15472([].push);

export default (arg0, arg1) => {
  const tmp = _mod15470(arg0);
  items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod15488;
    let tmp14Result = tmp14(_mod15510, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod15488(tmp, key10010);
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
    if (_mod15488(tmp, tmp7)) {
      let tmp5Result = _mod15511;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};