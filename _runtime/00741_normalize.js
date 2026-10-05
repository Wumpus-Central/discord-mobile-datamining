// === Module 741: normalize ===

// Module 741 (normalize)
import _mod698 from "module_698" /* 698 */;
import _mod703 from "module_703" /* 703 */;
import UNKNOWN_FUNCTION from "UNKNOWN_FUNCTION" /* 709 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

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
  function memoBuilder() {
    const weakSet = new WeakSet();
    const items = [
      function memoize(arg0) {
        let flag = weakSet.has(arg0);
        if (!flag) {
          weakSet.add(arg0);
          flag = false;
        }
        return flag;
      },
      function unmemoize(arg0) {
        weakSet.delete(arg0);
      }
    ];
    return items;
  }
  function stringifyValue(arg0, _events) {
    function getConstructorName(_events) {
      const prototypeOf = Object.getPrototypeOf(_events);
      let constructor;
      if (prototypeOf != null) {
        constructor = prototypeOf.constructor;
      }
      let str = "null prototype";
      if (constructor) {
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
        const obj = _mod703;
        if (obj.isVueViewModel(_events)) {
          const tmp4Result = UNKNOWN_FUNCTION;
          return tmp4Result.getVueInternalName(_events);
        } else {
          const tmp4Result3 = _mod703;
          if (tmp4Result3.isSyntheticEvent(_events)) {
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
              const tmp4Result4 = UNKNOWN_FUNCTION;
              return "[Function: " + tmp4Result4.getFunctionName(_events) + "]";
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
              const obj5 = /^HTML(\w*)Element$/;
              const tmp9 = getConstructorName(_events);
              if (obj5.test(tmp9)) {
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
  let tmp2 = arg4;
  if (arg4 === undefined) {
    tmp2 = memoBuilder();
  }
  _slicedToArray(tmp2, 2);
  if (null != __sentry_skip_normalization__) {
    let items = ["boolean", "string"];
    if (!items.includes(typeof __sentry_skip_normalization__)) {
      if (typeof __sentry_skip_normalization__ === "number") {
        let _Number = Number;
      }
      const tmp7 = arg0;
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
          } else if (tmp4(__sentry_skip_normalization__)) {
            return "[Circular ~]";
          } else {
            if (__sentry_skip_normalization__) {
              if (typeof __sentry_skip_normalization__.toJSON === "function") {
                try {
                  let tmp9 = num2;
                  const tmp10 = tmp2;
                  return visit("", __sentry_skip_normalization__.toJSON(), num - 1, num2, tmp2);
                } catch (err) {
                }
              }
            }
            const _Array = Array;
            const tmp12 = Array.isArray(__sentry_skip_normalization__) ? [] : {};
            let obj = _mod698;
            const convertToPlainObjectResult = obj.convertToPlainObject(__sentry_skip_normalization__);
            const keys = Object.keys();
            if (keys !== undefined) {
              while (keys[tmp] !== undefined) {
                let _Object = Object;
                hasOwnProperty = Object.prototype.hasOwnProperty;
                let tmp26 = tmp19;
                if (!hasOwnProperty.call(convertToPlainObjectResult, tmp19)) {
                  continue;
                } else {
                  if (tmp18 >= num2) {
                    let str4 = "[MaxProperties ~]";
                    tmp12[tmp19] = "[MaxProperties ~]";
                    break;
                  } else {
                    tmp12[tmp19] = visit(tmp26, convertToPlainObjectResult[tmp19], num - 1, num2, tmp6);
                    let num6 = tmp18 + 1;
                    continue;
                  }
                  break;
                }
                break;
              }
            }
            tmp5(__sentry_skip_normalization__);
            return tmp12;
          }
        }
      } else {
        return str;
      }
    }
  }
  return __sentry_skip_normalization__;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
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
  if (~(-str.split(/%..|./).length) > num2) {
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
  } catch (err) {
  }
  const str3 = str2.replace(/\\/g, "/");
  const replace = str3.replace(/webpack:\/?/g, "").replace;
  str3.replace(/webpack:\/?/g, "");
  const regExp = new RegExp("(file://)?/*" + replaced + "/*", "ig");
  return replace(regExp, "app:///");
};