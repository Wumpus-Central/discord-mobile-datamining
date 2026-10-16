// === Module 15295: ? ===

// Module 15295
import _mod15256 from "module_15256" /* 15256 */;
import _mod15258 from "module_15258" /* 15258 */;
import _mod15274 from "module_15274" /* 15274 */;
import _mod15296 from "module_15296" /* 15296 */;
import _mod15297 from "module_15297" /* 15297 */;

let closure_2 = _mod15258([].push);

export default (arg0, arg1) => {
  const tmp = _mod15256(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod15274;
    let tmp14Result = tmp14(_mod15296, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod15274(tmp, key10010);
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
    if (_mod15274(tmp, tmp7)) {
      let tmp5Result = _mod15297;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};