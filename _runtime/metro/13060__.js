// === Module 13060: ? ===

// Module 13060
import _mod13029 from "module_13029" /* 13029 */;

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
        if (!(arr instanceof _mod13029)) {
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