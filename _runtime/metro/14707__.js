// === Module 14707: ? ===

// Module 14707
import _mod14668 from "module_14668" /* 14668 */;
import _mod14670 from "module_14670" /* 14670 */;
import _mod14686 from "module_14686" /* 14686 */;
import _mod14708 from "module_14708" /* 14708 */;
import _mod14709 from "module_14709" /* 14709 */;

let closure_2 = _mod14670([].push);

export default (arg0, arg1) => {
  const tmp = _mod14668(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod14686;
    let tmp14Result = tmp14(_mod14708, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod14686(tmp, key10010);
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
    if (_mod14686(tmp, tmp7)) {
      let tmp5Result = _mod14709;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};