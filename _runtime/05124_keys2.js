// === Module 5124: keys2 ===

// Module 5124 (keys2)
import _mod5125 from "module_5125" /* 5125 */;
import _mod5126 from "module_5126" /* 5126 */;

if (keys) {
  let keys2 = function keys(arg0) {
    return keys(arg0);
  };
} else {
  keys2 = _mod5125;
}
keys = Object.keys;
keys2.shim = function shimObjectKeys() {
  if (Object.keys) {
    if (!(() => {
      keys = Object.keys(arguments);
      let tmp = keys;
      if (keys) {
        tmp = keys.length === arguments.length;
      }
      return tmp;
    })(1, 2)) {
      const _Object2 = Object;
      Object.keys = function keys(arg0) {
        if (_mod5126(arg0)) {
          const call = slice.call;
          keys(typeof call === "unknown" ? slice() : call(arg0));
        } else {
          return keys(arg0);
        }
      };
    }
  } else {
    const _Object = Object;
    Object.keys = keys2;
  }
  return Object.keys || keys2;
};

export default keys2;