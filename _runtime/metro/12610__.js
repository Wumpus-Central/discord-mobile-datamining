// _runtime/metro/12610__.js
import _mod12568 from "12568__.js";
import _mod12571 from "12571__.js";
import _mod12572 from "12572__.js";
import memoBuilder from "../12611_memoBuilder.js";
import _slicedToArray from "00032__slicedToArray.js";

let hasOwnProperty;

function normalize(arg0) {
  let num = arg1;
  if (arg1 === undefined) {
    num = 100;
  }
  let num2 = arg2;
  if (arg2 === undefined) {
    num2 = Infinity;
  }
  try {
    return visit("", arg0, num, num2);
  } catch (tmp5) {
    const _HermesInternal = HermesInternal;
    const obj = { ERROR: "**non-serializable** (" + tmp5 + ")" };
    return obj;
  }
}
function visit(arg0, __sentry_skip_normalization__) {
  function stringifyValue(arg0, _events) {
    function getConstructorName(_events) {
      const prototypeOf = Object.getPrototypeOf(_events);
      let str = "null prototype";
      if (prototypeOf) {
        str = prototypeOf.constructor.name;
      }
      return str;
    }
    try {
      let str = "domain";
      if ("domain" === arg0) {
        if (_events) {
          if (typeof _events === "object") {
            if (_events._events) {
              return "[Domain]";
            }
          }
        }
      }
      if ("domainEmitter" === arg0) {
        return "[DomainEmitter]";
      } else {
        if (undefined !== global) {
          if (_events === global) {
            return "[Global]";
          }
        }
        const _window = window;
        if (typeof window !== "undefined") {
          const _window2 = window;
          if (_events === window) {
            return "[Window]";
          }
        }
        const _document = document;
        if (typeof document !== "undefined") {
          const _document2 = document;
          if (_events === document) {
            return "[Document]";
          }
        }
        const obj = _mod12572;
        if (obj.isVueViewModel(_events)) {
          return "[VueViewModel]";
        } else {
          const tmp4Result = _mod12572;
          if (tmp4Result.isSyntheticEvent(_events)) {
            return "[SyntheticEvent]";
          } else {
            if (typeof _events === "number") {
              const _Number = Number;
              if (!Number.isFinite(_events)) {
                const _HermesInternal = HermesInternal;
                return "[" + _events + "]";
              }
            }
            if (typeof _events === "function") {
              const _HermesInternal4 = HermesInternal;
              const tmp4Result2 = _mod12568;
              return "[Function: " + tmp4Result2.getFunctionName(_events) + "]";
            } else if (typeof _events === "symbol") {
              const _String2 = String;
              const _HermesInternal3 = HermesInternal;
              return "[" + String(_events) + "]";
            } else if (typeof _events === "bigint") {
              const _String = String;
              const _HermesInternal2 = HermesInternal;
              return "[BigInt: " + String(_events) + "]";
            } else {
              let combined;
              const _HermesInternal6 = HermesInternal;
              const obj4 = /^HTML(\w*)Element$/;
              const tmp9 = getConstructorName(_events);
              if (obj4.test(tmp9)) {
                combined = concat(tmp10, "]");
              } else {
                combined = concat(tmp10, "]");
              }
              return combined;
            }
          }
        }
      }
    } catch (tmp7) {
      const _HermesInternal5 = HermesInternal;
      return "**non-serializable** (" + tmp7 + ")";
    }
  }
  let num = arg2;
  if (arg2 === undefined) {
    num = Infinity;
  }
  let num2 = arg3;
  if (arg3 === undefined) {
    num2 = Infinity;
  }
  let memoBuilderResult = arg4;
  if (arg4 === undefined) {
    let obj = memoBuilder;
    memoBuilderResult = obj.memoBuilder();
  }
  _slicedToArray(memoBuilderResult, 2);
  if (null != __sentry_skip_normalization__) {
    const items = ["boolean", "string"];
    if (!items.includes(typeof __sentry_skip_normalization__)) {
      if (typeof __sentry_skip_normalization__ === "number") {
        let _Number = Number;
      }
      let tmp9 = arg0;
      let str = stringifyValue(arg0, __sentry_skip_normalization__);
      if (str.startsWith("[object ")) {
        if (__sentry_skip_normalization__.__sentry_skip_normalization__) {
          return __sentry_skip_normalization__;
        } else {
          if (typeof __sentry_skip_normalization__.__sentry_override_normalization_depth__ === "number") {
            num = __sentry_skip_normalization__.__sentry_override_normalization_depth__;
          }
          if (0 === num) {
            return str.replace("object ", "");
          } else if (tmp6(__sentry_skip_normalization__)) {
            return "[Circular ~]";
          } else {
            if (__sentry_skip_normalization__) {
              if (typeof __sentry_skip_normalization__.toJSON === "function") {
                try {
                  return visit("", __sentry_skip_normalization__.toJSON(), num - 1, num2, memoBuilderResult);
                } catch (err) {}
              }
            }
            const _Array = Array;
            const tmp14 = Array.isArray(__sentry_skip_normalization__) ? [] : {};
            const obj2 = _mod12571;
            const convertToPlainObjectResult = obj2.convertToPlainObject(__sentry_skip_normalization__);
            const keys = Object.keys();
            if (keys !== undefined) {
              while (keys[tmp] !== undefined) {
                let _Object = Object;
                hasOwnProperty = Object.prototype.hasOwnProperty;
                let tmp28 = tmp21;
                if (!hasOwnProperty.call(convertToPlainObjectResult, tmp21)) {
                  continue;
                } else {
                  if (tmp20 >= num2) {
                    let str4 = "[MaxProperties ~]";
                    tmp14[tmp21] = "[MaxProperties ~]";
                    break;
                  } else {
                    tmp14[tmp21] = visit(tmp28, convertToPlainObjectResult[tmp21], num - 1, num2, tmp8);
                    let num6 = tmp20 + 1;
                    continue;
                  }
                  break;
                }
                break;
              }
            }
            tmp7(__sentry_skip_normalization__);
            return tmp14;
          }
        }
      } else {
        return str;
      }
    }
  }
  return __sentry_skip_normalization__;
}
function normalizeToSize(arg0) {
  let num = arg1;
  if (arg1 === undefined) {
    num = 3;
  }
  let num2 = arg2;
  if (arg2 === undefined) {
    num2 = 102400;
  }
  let tmp = normalize(arg0, num);
  const str = encodeURI(JSON.stringify(tmp));
  if (~-str.split(/%..|./).length > num2) {
    tmp = normalizeToSize(arg0, num - 1, num2);
  }
  return tmp;
}

export { normalize };
export { normalizeToSize };
export const normalizeUrlToBase = function normalizeUrlToBase(arg0, str) {
  str = str.replace(/\\/g, "/");
  let str2 = arg0;
  const replaced = str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  try {
    const _decodeURI = decodeURI;
    str2 = decodeURI(arg0);
  } catch (err) {}
  const str3 = str2.replace(/\\/g, "/");
  const replace = str3.replace(/webpack:\/?/g, "").replace;
  str3.replace(/webpack:\/?/g, "");
  const regExp = new RegExp("(file://)?/*" + replaced + "/*", "ig");
  return replace(regExp, "app:///");
};
