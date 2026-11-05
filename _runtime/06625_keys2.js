// === Module 6625: keys2 ===

// Module 6625 (keys2)
import _mod6626 from "module_6626" /* 6626 */;
import _mod6627 from "module_6627" /* 6627 */;

if (keys) {
  let keys2 = function keys(arg0) {
    return keys(arg0);
  };
} else {
  keys2 = _mod6626;
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
        if (_mod6627(arg0)) {
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