// === Module 4416: keys ===

// Module 4416 (keys)
import isArguments from "isArguments" /* 4417 */;

if (keys) {
  let keys2 = function keys(arg0) {
    return keys(arg0);
  };
} else {
  keys2 = isArguments;
}
keys = Object.keys;
keys2.shim = function shimObjectKeys() {
  if (Object.keys) {
    if (!((arg0, arg1) => {
      keys = Object.keys(arguments);
      let tmp = keys;
      if (keys) {
        tmp = keys.length === arguments.length;
      }
      return tmp;
    })(1, 2)) {
      const _Object2 = Object;
      Object.keys = function keys(arg0) {
        if (callback(table[1])(arg0)) {
          const call = callback.call;
          callback2(typeof call === "unknown" ? callback() : call(arg0));
        } else {
          return callback2(arg0);
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