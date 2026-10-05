// _runtime/metro/14105__.js
import _mod14066 from "14066__.js";
import _mod14068 from "14068__.js";
import _mod14084 from "14084__.js";
import _mod14106 from "14106__.js";
import _mod14107 from "14107__.js";

let closure_2 = _mod14068([].push);

export default (arg0, arg1) => {
  let num;
  const tmp = _mod14066(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod14084;
    let tmp14Result = tmp14(_mod14106, key10010);
    let tmp2 = !tmp14Result && _mod14084(tmp, key10010);
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
