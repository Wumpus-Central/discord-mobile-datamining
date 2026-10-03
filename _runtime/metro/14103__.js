// _runtime/metro/14103__.js
import _mod14064 from "14064__.js";
import _mod14066 from "14066__.js";
import _mod14082 from "14082__.js";
import _mod14104 from "14104__.js";
import _mod14105 from "14105__.js";

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
