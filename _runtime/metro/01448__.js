// _runtime/metro/01448__.js
import _mod1449 from "01449__.js";
import isBuffer from "../01466_isBuffer.js";
import _mod1467 from "01467__.js";

let _exports, hasOwnProperty;

function inspect(arg0, showHidden) {
  const obj = { seen: [], stylize: stylizeNoColor };
  if (arguments.length >= 3) {
    obj.depth = arguments[2];
  }
  if (arguments.length >= 4) {
    obj.colors = arguments[3];
  }
  if (typeof showHidden === "boolean") {
    obj.showHidden = showHidden;
  } else if (showHidden) {
    exports._extend(obj, showHidden);
  }
  if (undefined === obj.showHidden) {
    obj.showHidden = false;
  }
  if (undefined === obj.depth) {
    obj.depth = 2;
  }
  if (undefined === obj.colors) {
    obj.colors = false;
  }
  if (undefined === obj.customInspect) {
    obj.customInspect = true;
  }
  if (obj.colors) {
    obj.stylize = stylizeWithColor;
  }
  return formatValue(obj, arg0, obj.depth);
}
function stylizeWithColor(arg0, arg1) {
  let text = arg0;
  if (inspect.styles[arg1]) {
    text = `${"\u001B[" + tmp.colors[tmp2][0] + "m" + arg0 + "\u001B[" + tmp.colors[tmp2][1]}m`;
  }
  return text;
}
function stylizeNoColor(arg0, arg1) {
  return arg0;
}
function formatValue(customInspect, inspect, arg2) {
  let stylizeResult;
  _exports = customInspect;
  closure_1 = inspect;
  let closure_2 = arg2;
  if (customInspect.customInspect) {
    if (inspect) {
      if (typeof inspect.inspect === "function") {
        if (inspect.inspect !== _exports.inspect) {
          const inspectResult = inspect.inspect(arg2, customInspect);
          let tmp35 = inspectResult;
          if (typeof inspectResult !== "string") {
            tmp35 = formatValue(customInspect, inspectResult, arg2);
          }
          return tmp35;
        }
      }
    }
  }
  if (undefined === inspect) {
    stylizeResult = customInspect.stylize("undefined", "undefined");
  } else if (typeof inspect === "string") {
    const _JSON = JSON;
    const str3 = JSON.stringify(inspect);
    const str5 = str3.replace(/^"|"$/g, "");
    const str7 = str5.replace(/'/g, "\\'");
    stylizeResult = customInspect.stylize(`'${str7.replace(/\\"/g, '"')}'`, "string");
  } else if (typeof inspect === "number") {
    stylizeResult = customInspect.stylize("" + inspect, "number");
  } else if (typeof inspect === "boolean") {
    stylizeResult = customInspect.stylize("" + inspect, "boolean");
  } else if (null === inspect) {
    stylizeResult = customInspect.stylize("null", "null");
  }
  if (stylizeResult) {
    return stylizeResult;
  } else {
    let sum2;
    const _Object = Object;
    const keys = Object.keys(inspect);
    const obj = {};
    const item = keys.forEach((item, index) => {
      obj[item] = true;
    });
    let ownPropertyNames = keys;
    if (customInspect.showHidden) {
      const _Object2 = Object;
      ownPropertyNames = Object.getOwnPropertyNames(inspect);
    }
    let tmp5 = typeof inspect === "object";
    let tmp6 = tmp5;
    if (typeof inspect === "object") {
      tmp6 = null !== inspect;
    }
    if (tmp6) {
      const _Object3 = Object;
      let tmp7 = "[object Error]" === toString.call(inspect);
      if (!tmp7) {
        const _Error = Error;
        tmp7 = inspect instanceof Error;
      }
      tmp6 = tmp7;
    }
    if (tmp6) {
      const _Error6 = Error;
      const toString15 = Error.prototype.toString;
      return "[" + toString15.call(inspect) + "]";
    }
    if (0 === ownPropertyNames.length) {
      if (typeof inspect === "function") {
        let str43 = "";
        if (inspect.name) {
          str43 = `: ${inspect.name}`;
        }
        const _HermesInternal3 = HermesInternal;
        return customInspect.stylize("[Function" + str43 + "]", "special");
      } else {
        let tmp8 = tmp5;
        if (typeof inspect === "object") {
          tmp8 = null !== inspect;
        }
        if (tmp8) {
          const _Object4 = Object;
          const toString2 = Object.prototype.toString;
          tmp8 = "[object RegExp]" === toString2.call(inspect);
        }
        if (tmp8) {
          const _RegExp3 = RegExp;
          const toString14 = RegExp.prototype.toString;
          return customInspect.stylize(toString14.call(inspect), "regexp");
        } else {
          let tmp9 = tmp5;
          if (typeof inspect === "object") {
            tmp9 = null !== inspect;
          }
          if (tmp9) {
            const _Object5 = Object;
            const toString3 = Object.prototype.toString;
            tmp9 = "[object Date]" === toString3.call(inspect);
          }
          if (tmp9) {
            const _Date2 = Date;
            const toString13 = Date.prototype.toString;
            return customInspect.stylize(toString13.call(inspect), "date");
          } else {
            let tmp10 = tmp5;
            if (typeof inspect === "object") {
              tmp10 = null !== inspect;
            }
            if (tmp10) {
              const _Object6 = Object;
              const toString4 = Object.prototype.toString;
              let tmp11 = "[object Error]" === toString4.call(inspect);
              if (!tmp11) {
                const _Error2 = Error;
                tmp11 = inspect instanceof Error;
              }
              tmp10 = tmp11;
            }
            if (tmp10) {
              const _Error5 = Error;
              const toString12 = Error.prototype.toString;
              return "[" + toString12.call(inspect) + "]";
            }
          }
        }
      }
    }
    let flag = false;
    let c4 = false;
    let items = ["{", "}"];
    const _Array = Array;
    if (Array.isArray(inspect)) {
      c4 = true;
      items = ["[", "]"];
      flag = true;
    }
    let str17 = "";
    let str18 = "";
    if (typeof inspect === "function") {
      let text = str17;
      if (inspect.name) {
        text = `: ${inspect.name}`;
      }
      const _HermesInternal = HermesInternal;
      str18 = " [Function" + text + "]";
    }
    let tmp13 = tmp5;
    if (typeof inspect === "object") {
      tmp13 = null !== inspect;
    }
    if (tmp13) {
      const _Object7 = Object;
      const toString5 = Object.prototype.toString;
      tmp13 = "[object RegExp]" === toString5.call(inspect);
    }
    if (tmp13) {
      const _RegExp = RegExp;
      const toString6 = RegExp.prototype.toString;
      str18 = ` ${toString6.call(inspect)}`;
    }
    let tmp14 = tmp5;
    if (typeof inspect === "object") {
      tmp14 = null !== inspect;
    }
    if (tmp14) {
      const _Object8 = Object;
      const toString7 = Object.prototype.toString;
      tmp14 = "[object Date]" === toString7.call(inspect);
    }
    if (tmp14) {
      const _Date = Date;
      str18 = ` ${toUTCString.call(inspect)}`;
    }
    let tmp15 = tmp5;
    if (typeof inspect === "object") {
      tmp15 = null !== inspect;
    }
    if (tmp15) {
      const _Object9 = Object;
      const toString8 = Object.prototype.toString;
      let tmp16 = "[object Error]" === toString8.call(inspect);
      if (!tmp16) {
        const _Error3 = Error;
        tmp16 = inspect instanceof Error;
      }
      tmp15 = tmp16;
    }
    if (tmp15) {
      const _Error4 = Error;
      const toString9 = Error.prototype.toString;
      const _HermesInternal2 = HermesInternal;
      str18 = " " + `[${toString9.call(inspect)}` + "]";
    }
    if (0 !== ownPropertyNames.length) {
      let text1;
      if (arg2 < 0) {
        let stylizeResult1;
        if (typeof inspect === "object") {
          tmp5 = null !== inspect;
        }
        if (tmp5) {
          const _Object11 = Object;
          const toString10 = Object.prototype.toString;
          tmp5 = "[object RegExp]" === toString10.call(inspect);
        }
        const stylize = customInspect.stylize;
        if (tmp5) {
          const _RegExp2 = RegExp;
          const toString11 = RegExp.prototype.toString;
          stylizeResult1 = stylize(toString11.call(inspect), "regexp");
        } else {
          stylizeResult1 = stylize("[Object]", "special");
        }
        text1 = stylizeResult1;
      } else {
        let mapped;
        const seen = customInspect.seen;
        const arr = seen.push(inspect);
        if (flag) {
          let num4;
          _exports = customInspect;
          closure_1 = inspect;
          closure_2 = arg2;
          const items1 = [];
          const length = inspect.length;
          for (let num4 = 0; num4 < length; num4 = num4 + 1) {
            let _String = String;
            let _Object10 = Object;
            hasOwnProperty = Object.prototype.hasOwnProperty;
            let push = items1.push;
            if (hasOwnProperty.call(inspect, String(num4))) {
              let _String2 = String;
              let flag3 = true;
              let arr2 = push(formatProperty(customInspect, inspect, arg2, obj, String(num4), true));
            } else {
              let arr5 = push(str17);
            }
          }
          const item1 = ownPropertyNames.forEach((item) => {
            if (!item.match(/^\d+$/)) {
              items1.push(formatProperty(closure_0, closure_1, closure_2, obj, item, true));
            }
          });
          mapped = items1;
        } else {
          mapped = ownPropertyNames.map((item) => formatProperty(customInspect, inspect, closure_2, obj, item, c4));
        }
        const seen1 = customInspect.seen;
        seen1.pop();
        if (
          mapped.reduce((acc, arr) => {
            arr.indexOf("\n") >= 0;
            return acc + arr.replace(/\u001b\[\d\d?m/g, "").length + 1;
          }, 0) > 60
        ) {
          const first = items[0];
          if (str17 !== str18) {
            str17 = `${str18}
   `;
          }
          const sum = first + str17;
          text1 = `${tmp32} ${arr4.join(",\n  ")} ${arr3[1]}`;
        } else {
          const sum1 = items[0] + str18;
          text1 = `${tmp29} ${arr4.join(", ")} ${arr3[1]}`;
        }
      }
      sum2 = text1;
    } else {
      sum2 = items[0] + str18 + items[1];
    }
    return sum2;
  }
}
function formatProperty(stylize, arg1, arg2, arg3, str, arg5) {
  let stylizeResult1;
  let iter = Object.getOwnPropertyDescriptor(arg1, str);
  if (!iter) {
    iter = { value: arg1[str] };
    const obj = { value: arg1[str] };
  }
  if (iter.get) {
    let stylizeResult;
    stylize = stylize.stylize;
    if (iter.set) {
      stylizeResult = stylize("[Getter/Setter]", "special");
    } else {
      stylizeResult = stylize("[Getter]", "special");
    }
    stylizeResult1 = stylizeResult;
  } else if (iter.set) {
    stylizeResult1 = stylize.stylize("[Setter]", "special");
  }
  hasOwnProperty = Object.prototype.hasOwnProperty;
  let text;
  if (!hasOwnProperty.call(arg3, str)) {
    text = `${"[" + str}]`;
  }
  if (!stylizeResult1) {
    let stylizeResult2;
    const seen = stylize.seen;
    if (seen.indexOf(iter.value) < 0) {
      let arr2;
      if (null === arg2) {
        arr2 = formatValue(stylize, iter.value, null);
      } else {
        arr2 = formatValue(stylize, iter.value, arg2 - 1);
      }
      let tmp10 = arr2;
      if (arr2.indexOf("\n") > -1) {
        let substr;
        const parts = arr2.split("\n");
        if (arg5) {
          const mapped = map((arg0) => "  " + arg0);
          const joined = mapped.join("\n");
          substr = joined.slice(2);
        } else {
          const mapped1 = map((arg0) => "   " + arg0);
          substr = `
  ${obj2.join("\n")}`;
        }
        tmp10 = substr;
      }
      stylizeResult2 = tmp10;
    } else {
      stylizeResult2 = stylize.stylize("[Circular]", "special");
    }
    stylizeResult1 = stylizeResult2;
  }
  if (undefined === text) {
    if (arg5) {
      if (str.match(/^\d+$/)) {
        return stylizeResult1;
      }
    }
    const _JSON = JSON;
    const str12 = JSON.stringify("" + str);
    if (str12.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      text = stylize.stylize(str12.slice(1, -1), "name");
    } else {
      const str14 = str12.replace(/'/g, "\\'");
      const str16 = str14.replace(/\\"/g, '"');
      text = stylize.stylize(str16.replace(/(^"|"$)/g, "'"), "string");
    }
  }
  return text + ": " + stylizeResult1;
}
function callbackifyOnRejected(reason, fn) {
  let tmp = reason;
  if (!tmp) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Promise was rejected with a falsy value");
    error.reason = reason;
    tmp = error;
  }
  return fn(tmp);
}
let closure_1 =
  Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(arg0) {
    let length;
    const keys = Object.keys(arg0);
    const obj = {};
    let num = 0;
    if (0 < keys.length) {
      do {
        let _Object = Object;
        obj[keys[num]] = Object.getOwnPropertyDescriptor(arg0, keys[num]);
        num = num + 1;
        length = keys.length;
      } while (num < length);
    }
    return obj;
  };
const re2 = /%[sdj%]/g;
let closure_3 = {};
let regExp = /^$/;
if (process.env.NODE_DEBUG) {
  let _process = process;
  let str = process.env.NODE_DEBUG;
  let str2 = "\\$&";
  let str3 = str.replace(/[|\\{}()[\]^$+?.]/g, "\\$&");
  let str5 = str3.replace(/\*/g, ".*");
  let str7 = str5.replace(/,/g, "$|^");
  let _RegExp = RegExp;
  let self = this;
  let self2 = this;
  regExp = new RegExp("^" + str7.toUpperCase() + "$", "i");
  let tmp2 = regExp;
}
function isRegExp(obj) {
  let tmp = typeof obj === "object";
  if (typeof obj === "object") {
    tmp = null !== obj;
  }
  if (tmp) {
    const _Object = Object;
    tmp = "[object RegExp]" === toString.call(obj);
  }
  return tmp;
}
function isDate(obj) {
  let tmp = typeof obj === "object";
  if (typeof obj === "object") {
    tmp = null !== obj;
  }
  if (tmp) {
    const _Object = Object;
    tmp = "[object Date]" === toString.call(obj);
  }
  return tmp;
}
function isError(obj) {
  let tmp = typeof obj === "object";
  if (typeof obj === "object") {
    tmp = null !== obj;
  }
  if (tmp) {
    const _Object = Object;
    let tmp3 = "[object Error]" === toString.call(obj);
    if (!tmp3) {
      const _Error = Error;
      tmp3 = obj instanceof Error;
    }
    tmp = tmp3;
  }
  return tmp;
}
inspect.colors = {
  bold: [1, 22],
  italic: [3, 23],
  underline: [4, 24],
  inverse: [7, 27],
  white: [37, 39],
  grey: [90, 39],
  black: [30, 39],
  blue: [34, 39],
  cyan: [36, 39],
  green: [32, 39],
  magenta: [35, 39],
  red: [31, 39],
  yellow: [33, 39],
};
inspect.styles = {
  special: "cyan",
  number: "yellow",
  boolean: "yellow",
  undefined: "grey",
  null: "bold",
  string: "green",
  date: "magenta",
  regexp: "red",
};
function isArray(arg0) {
  return Array.isArray(arg0);
}
function isBoolean(flag) {
  return typeof flag === "boolean";
}
function isNull(arg0) {
  return null === arg0;
}
function isNumber(num) {
  return typeof num === "number";
}
function isString(str) {
  return typeof str === "string";
}
function isUndefined(arg0) {
  return undefined === arg0;
}
function isObject(obj) {
  let tmp = typeof obj === "object";
  if (typeof obj === "object") {
    tmp = null !== obj;
  }
  return tmp;
}
function isFunction(fn) {
  return typeof fn === "function";
}
exports.types.isRegExp = isRegExp;
exports.types.isDate = isDate;
exports.types.isNativeError = isError;
let closure_10 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let SymbolResult;
if (typeof Symbol !== "undefined") {
  const _Symbol = Symbol;
  SymbolResult = Symbol("util.promisify.custom");
}
const unpackModuleId = SymbolResult;
exports.promisify.custom = SymbolResult;

export const format = function (str) {
  let closure_0;
  let length;
  let sum1;
  if (typeof str === "string") {
    closure_0 = 1;
    closure_1 = arguments;
    const tmp8 = arguments;
    const length2 = arguments.length;
    let _String = String;
    const str2 = String(str);
    let replaced = str2.replace(re2, (arg0) => {
      if ("%%" === arg0) {
        return "%";
      } else if (closure_0 >= length2) {
        return arg0;
      } else if ("%s" === arg0) {
        const _String = String;
        closure_0 = tmp12 + 1;
        return String(closure_1[+closure_0]);
      } else if ("%d" === arg0) {
        const _Number = Number;
        closure_0 = tmp8 + 1;
        return Number(closure_1[+closure_0]);
      } else if ("%j" === arg0) {
        try {
          const _JSON = JSON;
          closure_0 = tmp4 + 1;
          return JSON.stringify(closure_1[+closure_0]);
        } catch (err) {
          return "[Circular]";
        }
      } else {
        return arg0;
      }
    });
    const tmp12 = closure_0;
    let tmp13 = arguments[closure_0];
    let tmp16 = replaced;
    if (closure_0 < length2) {
      while (true) {
        if (null !== tmp13) {
          let text;
          let tmp19 = typeof tmp13 === "object";
          if (typeof tmp13 === "object") {
            tmp19 = null !== tmp13;
          }
          if (tmp19) {
            text = `${tmp11} ${inspect(tmp13)}`;
          }
          let sum = closure_0 + 1;
          closure_0 = sum;
          tmp13 = arguments[sum];
          replaced = text;
          tmp16 = text;
          if (closure_0 >= length2) {
            break;
          }
        }
        text = `${tmp11} ${tmp13}`;
      }
    }
    return tmp16;
  } else {
    const items = [];
    closure_0 = 0;
    if (0 < arguments.length) {
      do {
        let arr = items.push(inspect(arguments[closure_0]));
        let tmp4 = closure_0;
        sum1 = closure_0 + 1;
        closure_0 = sum1;
        length = arguments.length;
      } while (sum1 < length);
    }
    return items.join(" ");
  }
};
export const deprecate = (arg0, throwDeprecation) => {
  let closure_0 = arg0;
  closure_1 = throwDeprecation;
  if (typeof process !== "undefined") {
    let _process = process;
    if (true === process.noDeprecation) {
      return arg0;
    }
  }
  if (typeof process === "undefined") {
    return function () {
      const deprecateResult = exports.deprecate(closure_0, throwDeprecation);
      return deprecateResult(...arguments);
    };
  } else {
    let c2 = false;
    return function deprecated() {
      const tmp = c2;
      if (!tmp) {
        const _process = process;
        if (process.throwDeprecation) {
          const _Error = Error;
          const self = this;
          const self2 = this;
          const error = new Error(throwDeprecation);
          throw error;
        } else {
          const _process2 = process;
          const _console = console;
          if (process.traceDeprecation) {
            _console.trace(throwDeprecation);
          } else {
            _console.error(throwDeprecation);
          }
          c2 = true;
        }
      }
      return closure_0(...arguments);
    };
  }
};
export const debuglog = (str) => {
  const formatted = str.toUpperCase();
  if (!closure_3[formatted]) {
    if (regExp.test(formatted)) {
      const _process = process;
      closure_3[formatted] = function () {
        const format = exports.format;
        const applyResult = format(...arguments);
        console.error("%s %d: %s", formatted, pid, applyResult);
      };
    } else {
      closure_3[formatted] = () => {};
    }
  }
  return closure_3[formatted];
};
export { inspect };
export const types = _mod1449;
export { isArray };
export { isBoolean };
export { isNull };
export const isNullOrUndefined = function isNullOrUndefined(arg0) {
  return null == arg0;
};
export { isNumber };
export { isString };
export function isSymbol(arg0) {
  return typeof arg0 === "symbol";
}
export { isUndefined };
export { isRegExp };
export { isObject };
export { isDate };
export { isError };
export { isFunction };
export function isPrimitive(flag) {
  return (
    null === flag ||
    typeof flag === "boolean" ||
    typeof flag === "number" ||
    typeof flag === "string" ||
    typeof flag === "symbol" ||
    undefined === flag
  );
}
export { isBuffer };
export const log = function () {
  let text;
  let text1;
  let text2;
  const _console = console;
  const date = new Date();
  const str = date.getHours();
  if (str < 10) {
    text = `0${str.toString(10)}`;
  } else {
    text = str.toString(10);
  }
  const items = [text, ,];
  const str3 = date.getMinutes();
  if (str3 < 10) {
    text1 = `0${str3.toString(10)}`;
  } else {
    text1 = str3.toString(10);
  }
  items[1] = text1;
  const str5 = date.getSeconds();
  if (str5 < 10) {
    text2 = `0${str5.toString(10)}`;
  } else {
    text2 = str5.toString(10);
  }
  items[2] = text2;
  const joined = items.join(":");
  const items1 = [date.getDate(), closure_10[date.getMonth(date)], joined];
  const format = exports.format;
  const joined1 = items1.join(" ");
  log("%s - %s", joined1, format(...arguments));
};
export const inherits = _mod1467;
export const _extend = (arg0, showHidden) => {
  let tmp6;
  const tmp = showHidden;
  if (tmp) {
    let tmp2 = typeof showHidden === "object";
    if (typeof showHidden === "object") {
      tmp2 = null !== showHidden;
    }
    if (tmp2) {
      const _Object = Object;
      const keys = Object.keys(showHidden);
      let diff = tmp4 - 1;
      if (+keys.length) {
        do {
          arg0[keys[diff]] = showHidden[keys[diff]];
          tmp6 = +diff;
          diff = tmp6 - 1;
        } while (tmp6);
      }
      return arg0;
    }
  }
  return arg0;
};
export const promisify = function promisify(fn) {
  let closure_0 = fn;
  if (typeof fn !== "function") {
    const _TypeError2 = TypeError;
    const self3 = this;
    const self4 = this;
    const typeError = new TypeError('The "original" argument must be of type Function');
    throw typeError;
  } else {
    if (unpackModuleId) {
      if (fn[unpackModuleId]) {
        if (typeof fn[unpackModuleId] !== "function") {
          const tmp6 = globalThis;
          const _TypeError = TypeError;
          let self = this;
          const self2 = this;
          const typeError1 = new TypeError('The "util.promisify.custom" argument must be of type Function');
          throw typeError1;
        } else {
          const _Object5 = Object;
          const obj2 = { value: fn[unpackModuleId], enumerable: false, writable: false, configurable: true };
          Object.defineProperty(fn[unpackModuleId], unpackModuleId, obj2);
          return fn[unpackModuleId];
        }
      }
    }
    fn = function n() {
      let length;
      const items = [];
      let num = 0;
      const promise = new Promise((arg0, arg1) => {
        let closure_1_0 = arg0;
        let closure_1_1 = arg1;
      });
      if (0 < arguments.length) {
        do {
          let arr = items.push(arguments[num]);
          num = num + 1;
          length = arguments.length;
        } while (num < length);
      }
      items.push((arg0, arg1) => {
        const tmp = arg0;
        if (tmp) {
          closure_1_1(arg0);
        } else {
          closure_1_0(arg1);
        }
      });
      try {
        const self = this;
        closure_0.apply(this, items);
      } catch (tmp6) {
        closure_129_1(tmp6);
      }
      return promise;
    };
    let tmp = globalThis;
    const _Object = Object;
    const _Object2 = Object;
    Object.setPrototypeOf(fn, Object.getPrototypeOf(fn));
    if (unpackModuleId) {
      const _Object3 = Object;
      const obj = { value: fn, enumerable: false, writable: false, configurable: true };
      Object.defineProperty(fn, unpackModuleId, obj);
    }
    const _Object4 = Object;
    return Object.defineProperties(fn, closure_1(fn));
  }
};
export const callbackify = function callbackify(fn) {
  let closure_0 = fn;
  if (typeof fn !== "function") {
    let _TypeError = TypeError;
    let self = this;
    let self2 = this;
    let typeError = new TypeError('The "original" argument must be of type Function');
    throw typeError;
  } else {
    function callbackified() {
      let length;
      const items = [];
      let num = 0;
      if (0 < arguments.length) {
        do {
          let arr = items.push(arguments[num]);
          num = num + 1;
          length = arguments.length;
        } while (num < length);
      }
      const arr3 = items.pop();
      if (typeof arr3 !== "function") {
        const _TypeError = TypeError;
        let self = this;
        const self2 = this;
        const typeError = new TypeError("The last argument must be of type Function");
        throw typeError;
      } else {
        const self3 = this;
        self = this;
        function cb() {
          return arr3(...arguments);
        }
        const applyResult = fn.apply(this, items);
        applyResult.then(
          (result) => {
            process.nextTick(cb.bind(null, null, result));
          },
          (c165) => {
            process.nextTick(closure_2_12.bind(null, c165, cb));
          },
        );
      }
    }
    const _Object = Object;
    const _Object2 = Object;
    Object.setPrototypeOf(callbackified, Object.getPrototypeOf(fn));
    const _Object3 = Object;
    Object.defineProperties(callbackified, closure_1(fn));
    return callbackified;
  }
};
