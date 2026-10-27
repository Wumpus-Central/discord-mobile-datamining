// === Module 6416: keys2 ===

// Module 6416 (keys2)
import _mod6417 from "module_6417" /* 6417 */;
import _mod6418 from "module_6418" /* 6418 */;

if (keys) {
  let keys2 = function keys(arg0) {
    return keys(arg0);
  };
} else {
  keys2 = _mod6417;
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
        if (_mod6418(arg0)) {
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