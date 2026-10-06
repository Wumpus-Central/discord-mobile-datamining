// _runtime/04147_isDate.js
import requiredArgs_mod from "03965_requiredArgs.js";

let tmp3;
function _typeof(arg0) {
  if (typeof Symbol === "function") {
    let _Symbol = Symbol;
    if (typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(arg0) {
        return typeof arg0;
      };
    }
    let tmp = arg0;
    return _typeof(arg0);
  }
  _typeof = function _typeof(arg0) {
    const tmp = arg0;
    if (tmp) {
      const _Symbol = Symbol;
      if (typeof Symbol === "function") {
        let str;
        const _Symbol3 = Symbol;
        if (arg0.constructor === Symbol) {
          const _Symbol2 = Symbol;
          str = "symbol";
        }
        return str;
      }
    }
    str = typeof arg0;
  };
}
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp3 = { default: requiredArgs };
  const obj = { default: requiredArgs };
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function isDate(arg0) {
  requiredArgs.default(1, arguments);
  let tmp2 = arg0 instanceof Date;
  if (!tmp2) {
    let tmp4 = "object" === _typeof(arg0);
    if (tmp4) {
      const _Object = Object;
      tmp4 = "[object Date]" === toString.call(arg0);
    }
    tmp2 = tmp4;
  }
  return tmp2;
}
