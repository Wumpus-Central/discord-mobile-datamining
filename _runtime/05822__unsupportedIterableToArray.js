// _runtime/05822__unsupportedIterableToArray.js
import _arrayLikeToArray from "05823__arrayLikeToArray.js";


export default function _unsupportedIterableToArray(str) {
  if (str) {
    if (typeof str === "string") {
      return _arrayLikeToArray(str, arg1);
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
            arr = _arrayLikeToArray(str, arg1);
          } else {
            const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
          }
        }
        return arr;
      }
      const _Array = Array;
      arr = Array.from(str);
      tmp3 = "Object" === substr && str.constructor;
    }
  }
};