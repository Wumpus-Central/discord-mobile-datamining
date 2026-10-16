// === Module 15285: ? ===

// Module 15285
import _mod15246 from "module_15246" /* 15246 */;
import _mod15248 from "module_15248" /* 15248 */;
import _mod15264 from "module_15264" /* 15264 */;
import _mod15286 from "module_15286" /* 15286 */;
import _mod15287 from "module_15287" /* 15287 */;

let closure_2 = _mod15248([].push);

export default (arg0, arg1) => {
  const tmp = _mod15246(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod15264;
    let tmp14Result = tmp14(_mod15286, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod15264(tmp, key10010);
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
    if (_mod15264(tmp, tmp7)) {
      let tmp5Result = _mod15287;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};