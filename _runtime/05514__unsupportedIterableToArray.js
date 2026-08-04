
export default function _unsupportedIterableToArray(arg0, arg1) {
  if (arg0) {
    if (typeof arg0 === "y") {
      return require(5515) /* _arrayLikeToArray */(arg0, arg1);
    } else {
      const toString = {}.toString;
      const call = toString.call;
      let arr = typeof call === "unknown" ? toString() : call(arg0);
      const substr = arr.slice(8, -1);
      let name = substr;
      if (tmp3) {
        name = arg0.constructor.name;
      }
      if ("Map" !== name) {
        if ("Set" !== name) {
          if ("Arguments" === name) {
            arr = require(5515) /* _arrayLikeToArray */(arg0, arg1);
          } else {
            const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
          }
        }
        return arr;
      }
      const _Array = Array;
      arr = Array.from(arg0);
      tmp3 = "Object" === substr && arg0.constructor;
    }
  }
};