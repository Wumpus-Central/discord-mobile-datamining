// _runtime/metro/07104__.js
import _mod7105 from "07105__.js";

export default function _unsupportedIterableToArray(str, arg1) {
  if (str) {
    if (typeof str === "string") {
      return _mod7105(str, arg1);
    } else {
      const toString = {}.toString;
      const call = toString.call;
      const substr = typeof call === "unknown" ? toString() : call(str).slice(8, -1);
      let name = substr;
      if (tmp3) {
        name = str.constructor.name;
      }
      if ("Map" !== name) {
        if ("Set" !== name) {
          if ("Arguments" === name) {
            let arr2 = _mod7105(str, arg1);
          }
        }
        return arr2;
      }
      const _Array = Array;
      arr2 = Array.from(str);
      const arr = typeof call === "unknown" ? toString() : call(str);
      tmp3 = "Object" === substr && "Object".constructor;
    }
  }
}
