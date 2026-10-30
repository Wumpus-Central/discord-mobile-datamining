// === Module 16127: ? ===

// Module 16127
import _mod16088 from "module_16088" /* 16088 */;
import _mod16090 from "module_16090" /* 16090 */;
import _mod16106 from "module_16106" /* 16106 */;
import _mod16128 from "module_16128" /* 16128 */;
import _mod16129 from "module_16129" /* 16129 */;

let closure_2 = _mod16090([].push);

export default (arg0, arg1) => {
  const tmp = _mod16088(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod16106;
    let tmp14Result = tmp14(_mod16128, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod16106(tmp, key10010);
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
    if (_mod16106(tmp, tmp7)) {
      let tmp5Result = _mod16129;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};