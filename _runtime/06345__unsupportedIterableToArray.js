// _runtime/06345__unsupportedIterableToArray.js
import _arrayLikeToArray from "06346__arrayLikeToArray.js";

export default function _unsupportedIterableToArray(str, arg1) {
  const tmp = str;
  if (tmp) {
    if (typeof str === "string") {
      return _arrayLikeToArray(str, arg1);
    } else {
      const toString = {}.toString;
      const callResult = toString.call(str);
      const substr = callResult.slice(8, -1);
      let name = substr;
      const tmp4 = "Object" === substr && "Object".constructor;
      if (tmp4) {
        name = str.constructor.name;
      }
      if ("Map" !== name) {
        let arr;
        if ("Set" !== name) {
          if ("Arguments" === name) {
            arr = _arrayLikeToArray(str, arg1);
          }
        }
        return arr;
      }
      const _Array = Array;
      arr = Array.from(str);
    }
  }
}
