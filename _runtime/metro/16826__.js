// === Module 16826: ? ===

// Module 16826
import _mod16787 from "module_16787" /* 16787 */;
import _mod16789 from "module_16789" /* 16789 */;
import _mod16805 from "module_16805" /* 16805 */;
import _mod16827 from "module_16827" /* 16827 */;
import _mod16828 from "module_16828" /* 16828 */;

let closure_2 = _mod16789([].push);

export default (arg0, arg1) => {
  const tmp = _mod16787(arg0);
  items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod16805;
    let tmp14Result = tmp14(_mod16827, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod16805(tmp, key10010);
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
    if (_mod16805(tmp, tmp7)) {
      let tmp5Result = _mod16828;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};