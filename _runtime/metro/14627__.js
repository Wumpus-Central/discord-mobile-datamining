// _runtime/metro/14627__.js
import _mod14588 from "14588__.js";
import _mod14590 from "14590__.js";
import _mod14606 from "14606__.js";
import _mod14628 from "14628__.js";
import _mod14629 from "14629__.js";

let closure_2 = _mod14590([].push);

export default (arg0, arg1) => {
  const tmp = _mod14588(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod14606;
    let tmp14Result = tmp14(_mod14628, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod14606(tmp, key10010);
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
    if (_mod14606(tmp, tmp7)) {
      let tmp5Result = _mod14629;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
