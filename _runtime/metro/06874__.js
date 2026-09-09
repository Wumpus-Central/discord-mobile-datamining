// _runtime/metro/06874__.js
import _mod6875 from "06875__.js";

export default function _unsupportedIterableToArray(str, arg1) {
  if (str) {
    if (typeof str === "string") {
      return _mod6875(str, arg1);
    } else {
      const toString = {}.toString;
      const call = toString.call;
      let arr = typeof call === "unknown" ? toString() : call(str);
      const substr = arr.slice(8, -1);
      let name = substr;
      if (tmp3) {
        name = str.constructor.name;
      }
      if ("Map" !== name) {
        if ("Set" !== name) {
          if ("Arguments" === name) {
            arr = _mod6875(str, arg1);
          }
        }
        return arr;
      }
      const _Array = Array;
      arr = Array.from(str);
      tmp3 = "Object" === substr && "Object".constructor;
    }
  }
}
