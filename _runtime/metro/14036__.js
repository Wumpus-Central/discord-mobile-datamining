// === Module 14036: ? ===

// Module 14036
import _mod13997 from "module_13997" /* 13997 */;
import _mod13999 from "module_13999" /* 13999 */;
import _mod14015 from "module_14015" /* 14015 */;
import _mod14037 from "module_14037" /* 14037 */;
import _mod14038 from "module_14038" /* 14038 */;

let closure_2 = _mod13999([].push);

export default (arg0, arg1) => {
  const tmp = _mod13997(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod14015;
    let tmp14Result = tmp14(_mod14037, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod14015(tmp, key10010);
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
    if (_mod14015(tmp, tmp7)) {
      let tmp5Result = _mod14038;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};