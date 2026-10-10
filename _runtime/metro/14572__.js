// === Module 14572: ? ===

// Module 14572
import _mod14533 from "module_14533" /* 14533 */;
import _mod14535 from "module_14535" /* 14535 */;
import _mod14551 from "module_14551" /* 14551 */;
import _mod14573 from "module_14573" /* 14573 */;
import _mod14574 from "module_14574" /* 14574 */;

let closure_2 = _mod14535([].push);

export default (arg0, arg1) => {
  const tmp = _mod14533(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod14551;
    let tmp14Result = tmp14(_mod14573, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod14551(tmp, key10010);
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
    if (_mod14551(tmp, tmp7)) {
      let tmp5Result = _mod14574;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};