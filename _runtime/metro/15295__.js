// _runtime/metro/15295__.js
import _mod15256 from "15256__.js";
import _mod15258 from "15258__.js";
import _mod15274 from "15274__.js";
import _mod15296 from "15296__.js";
import _mod15297 from "15297__.js";

let closure_2 = _mod15258([].push);

export default (arg0, arg1) => {
  const tmp = _mod15256(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod15274;
    let tmp14Result = tmp14(_mod15296, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod15274(tmp, key10010);
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
    if (_mod15274(tmp, tmp7)) {
      let tmp5Result = _mod15297;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
