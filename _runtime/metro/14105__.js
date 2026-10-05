// === Module 14105: ? ===

// Module 14105
import _mod14066 from "module_14066" /* 14066 */;
import _mod14068 from "module_14068" /* 14068 */;
import _mod14084 from "module_14084" /* 14084 */;
import _mod14106 from "module_14106" /* 14106 */;
import _mod14107 from "module_14107" /* 14107 */;

let closure_2 = _mod14068([].push);

export default (arg0, arg1) => {
  const tmp = _mod14066(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod14084;
    let tmp14Result = tmp14(_mod14106, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod14084(tmp, key10010);
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
    if (_mod14084(tmp, tmp7)) {
      let tmp5Result = _mod14107;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};