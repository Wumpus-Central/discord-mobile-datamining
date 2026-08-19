// === Module 3655: _typeof ===

// Module 3655 (_typeof)
import requiredArgs from "requiredArgs" /* 3473 */;

function _typeof(arg0) {
  if (typeof Symbol === "function") {
    let _Symbol = Symbol;
    if (typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(arg0) {
        return typeof arg0;
      };
    }
    return _typeof(arg0);
  }
  _typeof = function _typeof(arg0) {
    if (arg0) {
      const _Symbol = Symbol;
      if (typeof Symbol === "function") {
        const _Symbol3 = Symbol;
        if (arg0.constructor === Symbol) {
          const _Symbol2 = Symbol;
          let str = "symbol";
        }
        return str;
      }
    }
    str = typeof arg0;
  };
}
if (!requiredArgs) {
  const obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function isDate(arg0) {
  requiredArgs.default(1, arguments);
  let tmp2 = arg0 instanceof Date;
  if (!tmp2) {
    const tmp4 = "object" === _typeof(arg0);
    if (!tmp4) {
      tmp2 = tmp4;
    } else {
      const _Object = Object;
      let str2 = Object.prototype.toString;
      const call = str2.call;
      str2 = "[object Date]";
      const tmp5 = typeof call === "unknown" ? str2() : call(arg0);
    }
  }
  return tmp2;
};
export default exports.default;