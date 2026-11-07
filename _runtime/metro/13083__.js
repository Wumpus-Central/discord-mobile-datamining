// === Module 13083: ? ===

// Module 13083
import _mod13052 from "module_13052" /* 13052 */;

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
        if (!(arr instanceof _mod13052)) {
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