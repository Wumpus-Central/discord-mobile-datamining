// _runtime/metro/15530__.js
import _mod15491 from "15491__.js";
import _mod15493 from "15493__.js";
import _mod15509 from "15509__.js";
import _mod15531 from "15531__.js";
import _mod15532 from "15532__.js";

let closure_2 = _mod15493([].push);

export default (arg0, arg1) => {
  const tmp = _mod15491(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod15509;
    let tmp14Result = tmp14(_mod15531, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod15509(tmp, key10010);
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
    if (_mod15509(tmp, tmp7)) {
      let tmp5Result = _mod15532;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
