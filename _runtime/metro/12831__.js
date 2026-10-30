// _runtime/metro/12831__.js
import _mod12800 from "12800__.js";

function clone(obj) {
  obj = {};
  for (const key10006 in arg0) {
    let arr = arg0[key10006];
    if (!arr) {
      obj[key10006] = arr;
      continue;
    } else {
      let _Array = Array;
      if (!Array.isArray(arr)) {
        if (!(arr instanceof _mod12800)) {
          let _Object = Object;
          let mapped = arr;
          if (arr.constructor === Object) {
            mapped = clone(arr);
          }
        }
      }
      mapped = arr.map(clone);
    }
  }
  return obj;
}

export default clone;
