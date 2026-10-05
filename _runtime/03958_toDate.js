// === Module 3958: toDate ===

// Module 3958 (toDate)
import requiredArgs_mod from "requiredArgs" /* 3959 */;

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

export default function toDate(getTime) {
  let date;
  requiredArgs.default(1, arguments);
  const callResult = toString.call(getTime);
  if (!(getTime instanceof Date)) {
    if ("object" === _typeof(getTime)) {
      return date;
    }
    if (typeof getTime !== "number") {
      if ("[object Number]" !== callResult) {
        let tmp4 = typeof getTime !== "string";
        if (typeof getTime !== "string") {
          tmp4 = "[object String]" !== callResult;
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
          const self = this;
          const self2 = this;
          const error = new Error();
          warn(error.stack);
        }
        const _Date = Date;
        const self3 = this;
        const self4 = this;
        date = new Date(NaN);
      }
    }
    const _Date2 = Date;
    const self5 = this;
    const self6 = this;
    date = new Date(getTime);
  }
  date = new Date(getTime.getTime());
};