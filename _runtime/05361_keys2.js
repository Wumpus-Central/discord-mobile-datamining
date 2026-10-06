// _runtime/05361_keys2.js
import isArguments from "05362_isArguments.js";
import isArguments2 from "05363_isArguments.js";

let keys2;
if (keys) {
  keys2 = function keys(arg0) {
    return keys(arg0);
  };
} else {
  keys2 = isArguments;
}
keys2 = Object.keys;
keys2.shim = function shimObjectKeys() {
  if (Object.keys) {
    if (
      !(function () {
        keys = Object.keys(arguments);
        return keys && keys.length === arguments.length;
      })(1, 2)
    ) {
      const _Object2 = Object;
      Object.keys = function keys(arg0) {
        let tmpResult;
        if (isArguments2(arg0)) {
          tmpResult = keys2(slice.call(arg0));
        } else {
          tmpResult = keys2(arg0);
        }
        return tmpResult;
      };
    }
  } else {
    const _Object = Object;
    Object.keys = keys2;
  }
  return Object.keys || keys2;
};

export default keys2;
