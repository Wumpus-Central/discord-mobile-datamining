// _runtime/04848_keys2.js
import _mod4849 from "metro/04849__.js";
import _mod4850 from "metro/04850__.js";

if (keys) {
  let keys2 = function keys(arg0) {
    return keys(arg0);
  };
} else {
  keys2 = _mod4849;
}
keys = Object.keys;
keys2.shim = function shimObjectKeys() {
  if (Object.keys) {
    if (
      !(() => {
        keys = Object.keys(arguments);
        let tmp = keys;
        if (keys) {
          tmp = keys.length === arguments.length;
        }
        return tmp;
      })(1, 2)
    ) {
      const _Object2 = Object;
      Object.keys = function keys(arg0) {
        if (_mod4850(arg0)) {
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
