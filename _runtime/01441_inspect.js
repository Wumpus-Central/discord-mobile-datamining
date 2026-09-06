// _runtime/01441_inspect.js
import _mod1442 from "metro/01442__.js";
import _mod1459 from "metro/01459__.js";
import _mod1460 from "metro/01460__.js";

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
  let obj = customInspect;
  closure_1 = inspect;
  closure_2 = arg2;
  if (customInspect.customInspect) {
    if (inspect) {
      if (typeof inspect.inspect === "function") {
        if (inspect.inspect !== obj.inspect) {
          const inspectResult = inspect.inspect(arg2, customInspect);
          let tmp52 = inspectResult;
          if (typeof inspectResult !== "string") {
            tmp52 = formatValue(customInspect, inspectResult, arg2);
          }
          return tmp52;
        }
      }
    }
  }
  if (undefined === inspect) {
    let stylizeResult = customInspect.stylize("undefined", "undefined");
  } else if (typeof inspect === "string") {
    const _JSON = JSON;
    const str3 = JSON.stringify(inspect);
    const str5 = JSON.stringify(inspect).replace(/^"|"$/g, "");
    stylizeResult = customInspect.stylize(
      `'${JSON.stringify(inspect).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"')}'`,
      "string",
    );
    const str7 = JSON.stringify(inspect).replace(/^"|"$/g, "").replace(/'/g, "\\'");
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
    const _Object = Object;
    const keys = Object.keys(inspect);
    obj = {};
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
      const call = toString.call;
      let tmp7 = "[object Error]" === (typeof call === "unknown" ? toString() : call(inspect));
      if (!tmp7) {
        const _Error = Error;
        tmp7 = inspect instanceof Error;
      }
      tmp6 = tmp7;
    }
    if (tmp6) {
      const _Error6 = Error;
      const call17 = toString7.call;
      return "[" + (typeof call17 === "unknown" ? toString7() : call17(inspect)) + "]";
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
        let tmp56 = tmp5;
        if (typeof inspect === "object") {
          tmp56 = null !== inspect;
        }
        if (!tmp56) {
          if (tmp56) {
            const _RegExp3 = RegExp;
            const call16 = toString6.call;
            return customInspect.stylize(typeof call16 === "unknown" ? toString6() : call16(inspect), "regexp");
          } else {
            let tmp10 = tmp5;
            if (typeof inspect === "object") {
              tmp10 = null !== inspect;
            }
            if (!tmp10) {
              if (tmp10) {
                const _Date2 = Date;
                const call15 = toString5.call;
                return customInspect.stylize(typeof call15 === "unknown" ? toString5() : call15(inspect), "date");
              } else {
                let tmp13 = tmp5;
                if (typeof inspect === "object") {
                  tmp13 = null !== inspect;
                }
                if (tmp13) {
                  const _Object6 = Object;
                  const call4 = toString2.call;
                  let tmp14 = "[object Error]" === (typeof call4 === "unknown" ? toString2() : call4(inspect));
                  if (!tmp14) {
                    const _Error2 = Error;
                    tmp14 = inspect instanceof Error;
                  }
                  tmp13 = tmp14;
                }
                if (tmp13) {
                  const _Error5 = Error;
                  const call14 = toString4.call;
                  return "[" + (typeof call14 === "unknown" ? toString4() : call14(inspect)) + "]";
                }
              }
            } else {
              const _Object5 = Object;
              let str15 = Object.prototype.toString;
              const call3 = str15.call;
              str15 = "[object Date]";
              const tmp11 = typeof call3 === "unknown" ? str15() : call3(inspect);
            }
          }
        } else {
          const _Object4 = Object;
          let str14 = Object.prototype.toString;
          const call2 = str14.call;
          str14 = "[object RegExp]";
          const tmp8 = typeof call2 === "unknown" ? str14() : call2(inspect);
        }
      }
    }
    let flag = false;
    c4 = false;
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
    let tmp16 = tmp5;
    if (typeof inspect === "object") {
      tmp16 = null !== inspect;
    }
    if (!tmp16) {
      if (!tmp16) {
        let tmp21 = tmp5;
        if (typeof inspect === "object") {
          tmp21 = null !== inspect;
        }
        if (!tmp21) {
          if (!tmp21) {
            let tmp26 = tmp5;
            if (typeof inspect === "object") {
              tmp26 = null !== inspect;
            }
            if (tmp26) {
              const _Object9 = Object;
              const call9 = toString3.call;
              let tmp27 = "[object Error]" === (typeof call9 === "unknown" ? toString3() : call9(inspect));
              if (!tmp27) {
                const _Error3 = Error;
                tmp27 = inspect instanceof Error;
              }
              tmp26 = tmp27;
            }
            if (!tmp26) {
              if (0 === ownPropertyNames.length) {
                return items[0] + str18 + items[1];
              }
              if (arg2 >= 0) {
                const seen = customInspect.seen;
                seen.push(inspect);
                if (flag) {
                  closure_129_0 = customInspect;
                  closure_129_1 = inspect;
                  closure_129_2 = arg2;
                  closure_129_3 = obj;
                  const items1 = [];
                  closure_129_4 = items1;
                  for (let num4 = 0; num4 < length; num4 = num4 + 1) {
                    let _String = String;
                    let StringResult = String(num4);
                    let _Object10 = Object;
                    hasOwnProperty = Object.prototype.hasOwnProperty;
                    let call11 = hasOwnProperty.call;
                    let push = items1.push;
                    if (typeof call11 === "unknown" ? hasOwnProperty(StringResult) : call11(inspect, StringResult)) {
                      let _String2 = String;
                      let flag3 = true;
                      let arr = push(formatProperty(customInspect, inspect, arg2, obj, String(num4), true));
                    } else {
                      let arr1 = push(str17);
                    }
                  }
                  const item1 = ownPropertyNames.forEach((item) => {
                    if (!item.match(/^\d+$/)) {
                      _true.push(formatProperty(obj, closure_1, closure_2, obj, item, true));
                    }
                  });
                  let mapped = items1;
                  length = inspect.length;
                } else {
                  mapped = ownPropertyNames.map((item) => formatProperty(obj, closure_1, closure_2, obj, item, c4));
                }
                const seen1 = customInspect.seen;
                seen1.pop();
                if (
                  mapped.reduce((acc, arr) => {
                    arr.indexOf("\n") >= 0;
                    return acc + arr.replace(/\u001b\[\d\d?m/g, "").length + 1;
                  }, 0) > 60
                ) {
                  if (str17 !== str18) {
                    str17 = `${str18}
   `;
                  }
                  const sum = items[0] + str17;
                  let text1 = `${tmp44} ${arr4.join(",\n  ")} ${arr3[1]}`;
                } else {
                  const sum1 = items[0] + str18;
                  text1 = `${tmp42} ${arr4.join(", ")} ${arr3[1]}`;
                }
              }
              if (typeof inspect === "object") {
                tmp5 = null !== inspect;
              }
              if (!tmp5) {
                const stylize = customInspect.stylize;
                if (!tmp5) {
                  stylize("[Object]", "special");
                }
                const _RegExp2 = RegExp;
                let str38 = RegExp.prototype.toString;
                const call13 = str38.call;
                str38 = "regexp";
                stylize(typeof call13 === "unknown" ? str38() : call13(inspect), "regexp");
                const tmp47 = typeof call13 === "unknown" ? str38() : call13(inspect);
              } else {
                const _Object11 = Object;
                let str35 = Object.prototype.toString;
                const call12 = str35.call;
                str35 = "[object RegExp]";
                const tmp45 = typeof call12 === "unknown" ? str35() : call12(inspect);
              }
            } else {
              const _Error4 = Error;
              let str27 = Error.prototype.toString;
              const call10 = str27.call;
              const _HermesInternal2 = HermesInternal;
              const text2 = `[${typeof call10 === "unknown" ? str27() : call10(inspect)}`;
              str27 = " ";
              const combined = " " + `[${typeof call10 === "unknown" ? str27() : call10(inspect)}` + "]";
            }
          } else {
            const _Date = Date;
            let str25 = Date.prototype.toUTCString;
            const call8 = str25.call;
            str25 = " ";
            const text3 = ` ${typeof call8 === "unknown" ? str25() : call8(inspect)}`;
            const tmp24 = typeof call8 === "unknown" ? str25() : call8(inspect);
          }
        } else {
          const _Object8 = Object;
          let str24 = Object.prototype.toString;
          const call7 = str24.call;
          str24 = "[object Date]";
          const tmp22 = typeof call7 === "unknown" ? str24() : call7(inspect);
        }
      } else {
        const _RegExp = RegExp;
        let str23 = RegExp.prototype.toString;
        const call6 = str23.call;
        str23 = " ";
        const text4 = ` ${typeof call6 === "unknown" ? str23() : call6(inspect)}`;
        const tmp19 = typeof call6 === "unknown" ? str23() : call6(inspect);
      }
    } else {
      const _Object7 = Object;
      let str22 = Object.prototype.toString;
      const call5 = str22.call;
      str22 = "[object RegExp]";
      const tmp17 = typeof call5 === "unknown" ? str22() : call5(inspect);
    }
  }
}
function formatProperty(stylize, arg1, arg2, arg3, key10009, arg5) {
  let iter = Object.getOwnPropertyDescriptor(arg1, key10009);
  if (!iter) {
    const obj = { value: arg1[key10009] };
    iter = obj;
  }
  if (iter.get) {
    stylize = stylize.stylize;
    if (set) {
      let stylizeResult = stylize("[Getter/Setter]", "special");
    } else {
      stylizeResult = stylize("[Getter]", "special");
    }
  } else {
    let stylizeResult1;
    if (set) {
      stylizeResult1 = stylize.stylize("[Setter]", "special");
    }
    const _Object = Object;
    hasOwnProperty = Object.prototype.hasOwnProperty;
    const call = hasOwnProperty.call;
    if (!(typeof call === "unknown" ? hasOwnProperty(key10009) : call(arg3, key10009))) {
      let text = `${"[" + key10009}]`;
    }
    if (stylizeResult1) {
      if (undefined === text) {
        if (arg5) {
          if (key10009.match(/^\d+$/)) {
            return stylizeResult1;
          }
        }
        const _JSON = JSON;
        const str12 = JSON.stringify("" + key10009);
        if (str12.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
          text = stylize.stylize(str12.slice(1, -1), "name");
        } else {
          const str14 = str12.replace(/'/g, "\\'");
          text = stylize.stylize(
            str12
              .replace(/'/g, "\\'")
              .replace(/\\"/g, '"')
              .replace(/(^"|"$)/g, "'"),
            "string",
          );
          const str16 = str12.replace(/'/g, "\\'").replace(/\\"/g, '"');
        }
      }
      return text + ": " + stylizeResult1;
    } else {
      const seen = stylize.seen;
      if (seen.indexOf(iter.value) < 0) {
        if (null === arg2) {
          let arr2 = formatValue(stylize, iter.value, null);
        } else {
          arr2 = formatValue(stylize, iter.value, arg2 - 1);
        }
        iter = arr2.indexOf("\n");
        if (iter <= -1) {
          let stylizeResult2 = arr2;
        } else {
          const parts = arr2.split("\n");
          let map = parts.map;
          if (arg5) {
            const mapped = map((arg0) => "  " + arg0);
            map = mapped.join("\n");
            let substr = map.slice(2);
          } else {
            const mapped1 = map((arg0) => "   " + arg0);
            substr = `
  ${obj2.join("\n")}`;
          }
        }
      } else {
        stylizeResult2 = stylize.stylize("[Circular]", "special");
      }
    }
  }
}
function callbackifyOnRejected(reason, fn) {
  let tmp = reason;
  if (!reason) {
    const _Error = Error;
    const error = new Error("Promise was rejected with a falsy value");
    error.reason = reason;
    tmp = error;
  }
  return fn(tmp);
}
let closure_1 =
  Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(_Object6Result) {
    let length;
    const keys = Object.keys(_Object6Result);
    const obj = {};
    let num = 0;
    if (0 < keys.length) {
      do {
        let _Object = Object;
        obj[keys[num]] = Object.getOwnPropertyDescriptor(_Object6Result, keys[num]);
        num = num + 1;
        length = keys.length;
      } while (num < length);
    }
    return obj;
  };
const re2 = /%[sdj%]/g;
let dependencyMap = {};
let regExp = /^$/;
if (process.env.NODE_DEBUG) {
  let _process = process;
  let str = process.env.NODE_DEBUG;
  let str3 = process.env.NODE_DEBUG.replace(/[|\\{}()[\]^$+?.]/g, "\\$&");
  let str5 = process.env.NODE_DEBUG.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*");
  let _RegExp = RegExp;
  regExp = new RegExp(
    "^" +
      process.env.NODE_DEBUG.replace(/[|\\{}()[\]^$+?.]/g, "\\$&")
        .replace(/\*/g, ".*")
        .replace(/,/g, "$|^")
        .toUpperCase() +
      "$",
    "i",
  );
  let str7 = process.env.NODE_DEBUG.replace(/[|\\{}()[\]^$+?.]/g, "\\$&")
    .replace(/\*/g, ".*")
    .replace(/,/g, "$|^");
}
function isRegExp(obj) {
  let tmp = typeof obj === "object";
  if (typeof obj === "object") {
    tmp = null !== obj;
  }
  if (!tmp) {
    return tmp;
  } else {
    const _Object = Object;
    let str = Object.prototype.toString;
    const call = str.call;
    str = "[object RegExp]";
    const tmp3 = typeof call === "unknown" ? str() : call(obj);
  }
}
function isDate(obj) {
  let tmp = typeof obj === "object";
  if (typeof obj === "object") {
    tmp = null !== obj;
  }
  if (!tmp) {
    return tmp;
  } else {
    const _Object = Object;
    let str = Object.prototype.toString;
    const call = str.call;
    str = "[object Date]";
    const tmp3 = typeof call === "unknown" ? str() : call(obj);
  }
}
function isError(obj) {
  let tmp = typeof obj === "object";
  if (typeof obj === "object") {
    tmp = null !== obj;
  }
  if (tmp) {
    const _Object = Object;
    const call = toString.call;
    let tmp3 = "[object Error]" === (typeof call === "unknown" ? toString() : call(obj));
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
exports.promisify.custom = SymbolResult;

export const format = (str) => {
  let length;
  let sum1;
  if (typeof str === "string") {
    closure_0 = 1;
    dependencyMap = arguments;
    const length2 = arguments.length;
    let _String = String;
    let replaced = String(str).replace(re2, (arg0) => {
      if ("%%" === arg0) {
        return "%";
      } else if (closure_0 >= length2) {
        return arg0;
      } else if ("%s" === arg0) {
        const _String = String;
        closure_0 = tmp12 + 1;
        return String(dependencyMap[+closure_0]);
      } else if ("%d" === arg0) {
        const _Number = Number;
        closure_0 = tmp8 + 1;
        return Number(dependencyMap[+closure_0]);
      } else if ("%j" === arg0) {
        try {
          const _JSON = JSON;
          closure_0 = tmp4 + 1;
          return JSON.stringify(dependencyMap[+closure_0]);
        } catch (err) {
          return "[Circular]";
        }
      } else {
        return arg0;
      }
    });
    let tmp13 = arguments[closure_0];
    let tmp16 = replaced;
    if (closure_0 < length2) {
      while (true) {
        if (null !== tmp13) {
          let tmp19 = typeof tmp13 === "object";
          if (typeof tmp13 === "object") {
            tmp19 = null !== tmp13;
          }
          if (tmp19) {
            let text = `${tmp11} ${inspect(tmp13)}`;
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
        sum1 = closure_0 + 1;
        closure_0 = sum1;
        length = arguments.length;
      } while (sum1 < length);
    }
    return items.join(" ");
  }
};
export const deprecate = (arg0, arg1) => {
  closure_0 = arg0;
  closure_1 = arg1;
  if (typeof process !== "undefined") {
    let _process = process;
    if (true === process.noDeprecation) {
      return arg0;
    }
  }
  if (typeof process === "undefined") {
    return function () {
      const self = this;
      const deprecateResult = exports.deprecate(closure_0, closure_1);
      const apply = deprecateResult.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
  } else {
    c2 = false;
    return function deprecated() {
      if (!c2) {
        const _process = process;
        if (process.throwDeprecation) {
          const _Error = Error;
          const error = new Error(closure_1);
          throw error;
        } else {
          const _process2 = process;
          const _console = console;
          if (process.traceDeprecation) {
            _console.trace(closure_1);
          } else {
            _console.error(closure_1);
          }
          c2 = true;
        }
      }
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
  }
};
export const debuglog = (str) => {
  const formatted = str.toUpperCase();
  if (!dependencyMap[formatted]) {
    if (regExp.test(formatted)) {
      const _process = process;
      dependencyMap[formatted] = () => {
        const format = exports.format;
        const apply = format.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(exports);
        } else {
          applyArgumentsResult = apply(exports, arguments);
        }
        console.error("%s %d: %s", formatted, pid, applyArgumentsResult);
      };
    } else {
      dependencyMap[formatted] = () => {};
    }
  }
  return dependencyMap[formatted];
};
export { inspect };
export const types = _mod1442;
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
  let tmp =
    null === flag ||
    typeof flag === "boolean" ||
    typeof flag === "number" ||
    typeof flag === "string" ||
    typeof flag === "symbol";
  if (!tmp) {
    tmp = undefined === flag;
  }
  return tmp;
}
export const isBuffer = _mod1459;
export const log = () => {
  const date = new Date();
  const str = date.getHours();
  if (str < 10) {
    let text = `0${str.toString(10)}`;
  } else {
    text = str.toString(10);
  }
  const items = [text, ,];
  const str3 = date.getMinutes();
  if (str3 < 10) {
    let text1 = `0${str3.toString(10)}`;
  } else {
    text1 = str3.toString(10);
  }
  items[1] = text1;
  const str5 = date.getSeconds();
  if (str5 < 10) {
    let text2 = `0${str5.toString(10)}`;
  } else {
    text2 = str5.toString(10);
  }
  items[2] = text2;
  const joined = items.join(":");
  const items1 = [date.getDate(), closure_10[date.getMonth(date)], joined];
  const format = exports.format;
  const apply = format.apply;
  const joined1 = items1.join(" ");
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(exports);
  } else {
    applyArgumentsResult = apply(exports, arguments);
  }
  console.log("%s - %s", joined1, applyArgumentsResult);
};
export const inherits = _mod1460;
export const _extend = (arg0, showHidden) => {
  let tmp5;
  if (showHidden) {
    let tmp = typeof showHidden === "object";
    if (typeof showHidden === "object") {
      tmp = null !== showHidden;
    }
    if (tmp) {
      const _Object = Object;
      const keys = Object.keys(showHidden);
      let diff = tmp3 - 1;
      if (+keys.length) {
        do {
          arg0[keys[diff]] = showHidden[keys[diff]];
          tmp5 = +diff;
          diff = tmp5 - 1;
        } while (tmp5);
      }
      return arg0;
    }
  }
  return arg0;
};
export const promisify = function promisify(fn) {
  value = fn;
  if (typeof fn !== "function") {
    const _TypeError2 = TypeError;
    const typeError = new TypeError('The "original" argument must be of type Function');
    throw typeError;
  } else {
    if (SymbolResult) {
      if (fn[SymbolResult]) {
        if (typeof fn[SymbolResult] !== "function") {
          const _TypeError = TypeError;
          const typeError1 = new TypeError('The "util.promisify.custom" argument must be of type Function');
          throw typeError1;
        } else {
          const _Object5 = Object;
          let obj = { value: tmp5, enumerable: false, writable: false, configurable: true };
          Object.defineProperty(tmp5, SymbolResult, obj);
          return tmp5;
        }
      }
    }
    value = function n() {
      let length;
      const promise = new Promise((arg0, arg1) => {
        closure_0 = arg0;
        closure_1 = arg1;
      });
      const items = [];
      let num = 0;
      if (0 < arguments.length) {
        do {
          let arr = items.push(arguments[num]);
          num = num + 1;
          length = arguments.length;
        } while (num < length);
      }
      items.push((arg0, arg1) => {
        if (arg0) {
          closure_1(arg0);
        } else {
          closure_0(arg1);
        }
      });
      try {
        const self = this;
        value.apply(this, items);
        return promise;
      } catch (tmp7) {
        closure_1(tmp7);
      }
    };
    const _Object = Object;
    const _Object2 = Object;
    Object.setPrototypeOf(value, Object.getPrototypeOf(fn));
    if (SymbolResult) {
      const _Object3 = Object;
      obj = { value, enumerable: false, writable: false, configurable: true };
      Object.defineProperty(value, SymbolResult, obj);
    }
    const _Object4 = Object;
    return Object.defineProperties(value, closure_1(fn));
  }
};
export const callbackify = function callbackify(fn) {
  closure_0 = fn;
  if (typeof fn !== "function") {
    let _TypeError = TypeError;
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
      arr = items.pop();
      if (typeof arr !== "function") {
        const _TypeError = TypeError;
        const typeError = new TypeError("The last argument must be of type Function");
        throw typeError;
      } else {
        const self = this;
        function cb() {
          const apply = arr.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        }
        closure_0.apply(this, items).then(
          (result) => {
            process.nextTick(cb.bind(null, null, result));
          },
          (c165) => {
            process.nextTick(callbackifyOnRejected.bind(null, c165, cb));
          },
        );
        const applyResult = closure_0.apply(this, items);
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
