// === Module 13833: ? ===

// Module 13833
import _mod13794 from "module_13794" /* 13794 */;
import _mod13796 from "module_13796" /* 13796 */;
import _mod13812 from "module_13812" /* 13812 */;
import _mod13834 from "module_13834" /* 13834 */;
import _mod13835 from "module_13835" /* 13835 */;

let closure_2 = _mod13796([].push);

export default (arg0, arg1) => {
  const tmp = _mod13794(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod13812;
    let tmp14Result = tmp14(_mod13834, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod13812(tmp, key10010);
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
    if (_mod13812(tmp, tmp7)) {
      let tmp5Result = _mod13835;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};