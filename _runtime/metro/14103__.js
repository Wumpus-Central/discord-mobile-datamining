// === Module 14103: ? ===

// Module 14103
import _mod14064 from "module_14064" /* 14064 */;
import _mod14066 from "module_14066" /* 14066 */;
import _mod14082 from "module_14082" /* 14082 */;
import _mod14104 from "module_14104" /* 14104 */;
import _mod14105 from "module_14105" /* 14105 */;

let closure_2 = _mod14066([].push);

export default (arg0, arg1) => {
  const tmp = _mod14064(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod14082;
    let tmp14Result = tmp14(_mod14104, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod14082(tmp, key10010);
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
    if (_mod14082(tmp, tmp7)) {
      let tmp5Result = _mod14105;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};