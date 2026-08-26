// === Module 3540: _typeof ===

// Module 3540 (_typeof)
import requiredArgs from "requiredArgs" /* 3541 */;

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

export default function toDate(num) {
  requiredArgs.default(1, arguments);
  const call = toString.call;
  const tmp2 = typeof call === "unknown" ? toString() : call(num);
  if (!(num instanceof Date)) {
    if ("object" === _typeof(num)) {
      return date;
    }
    if (typeof num !== "number") {
      if ("[object Number]" !== tmp2) {
        let tmp4 = typeof num !== "string";
        if (typeof num !== "string") {
          tmp4 = "[object String]" !== tmp2;
        }
        if (!tmp4) {
          const _console = console;
          tmp4 = typeof console === "undefined";
        }
        if (!tmp4) {
          const _console2 = console;
          console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
          const _console3 = console;
          const _Error = Error;
          error = new Error();
          console.warn(error.stack);
        }
        const _Date = Date;
        date = new Date(NaN);
      }
    }
    const _Date2 = Date;
    date = new Date(num);
  }
  date = new Date(num.getTime());
};
export default exports.default;