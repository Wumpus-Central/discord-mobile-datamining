// _runtime/metro/14716__.js
import _mod14677 from "14677__.js";
import _mod14679 from "14679__.js";
import _mod14695 from "14695__.js";
import _mod14717 from "14717__.js";
import _mod14718 from "14718__.js";

let closure_2 = _mod14679([].push);

export default (arg0, arg1) => {
  const tmp = _mod14677(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod14695;
    let tmp14Result = tmp14(_mod14717, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod14695(tmp, key10010);
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
    if (_mod14695(tmp, tmp7)) {
      let tmp5Result = _mod14718;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
