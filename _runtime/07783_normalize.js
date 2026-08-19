// === Module 7783: normalize ===

// Module 7783 (normalize)
import addNonEnumerableProperty from "addNonEnumerableProperty" /* 7744 */;
import memoBuilder from "memoBuilder" /* 7784 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

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
    const obj = { ERROR: null };
    const _HermesInternal = HermesInternal;
    obj[0] = "**non-serializable** (" + tmp5 + ")";
    return obj;
  }
}
function visit(arg0, __sentry_skip_normalization__) {
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
    memoBuilderResult = memoBuilder.memoBuilder();
  }
  _slicedToArray(memoBuilderResult, 2);
  if (null != __sentry_skip_normalization__) {
    const items = ["boolean", "string"];
    if (!items.includes(typeof __sentry_skip_normalization__)) {
      if (typeof __sentry_skip_normalization__ === "number") {
        let _Number = Number;
      }
      let str = (function stringifyValue(arg0, _events) {
        try {
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
            if (undefined !== closure_0) {
              if (_events === closure_0) {
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
            if (obj.isVueViewModel(_events)) {
              return "[VueViewModel]";
            } else {
              let tmp4Result = callback(table[3]);
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
                  tmp4Result = callback(table[4]);
                  const _HermesInternal4 = HermesInternal;
                  return "[Function: " + tmp4Result.getFunctionName(_events) + "]";
                } else if (typeof _events === "symbol") {
                  const _String2 = String;
                  const _HermesInternal3 = HermesInternal;
                  return "[" + String(_events) + "]";
                } else if (typeof _events === "bigint") {
                  const _String = String;
                  const _HermesInternal2 = HermesInternal;
                  return "[BigInt: " + String(_events) + "]";
                } else {
                  const tmp9 = (function getConstructorName(_events) {
                    const prototypeOf = Object.getPrototypeOf(_events);
                    let str = "null prototype";
                    if (prototypeOf) {
                      str = prototypeOf.constructor.name;
                    }
                    return str;
                  })(_events);
                  const _HermesInternal6 = HermesInternal;
                  if (obj4.test(tmp9)) {
                    let combined = concat(tmp10, "]");
                  } else {
                    combined = concat(tmp10, "]");
                  }
                  return combined;
                }
              }
            }
            obj = callback(table[3]);
          }
        } catch (tmp7) {
          const _HermesInternal5 = HermesInternal;
          return "**non-serializable** (" + tmp7 + ")";
        }
      })(arg0, __sentry_skip_normalization__);
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
                  return visit("", __sentry_skip_normalization__.toJSON(), num - 1, num2, tmp8);
                } catch (err) {
                }
              }
            }
            const _Array = Array;
            const tmp14 = Array.isArray(__sentry_skip_normalization__) ? [] : {};
            const convertToPlainObjectResult = addNonEnumerableProperty.convertToPlainObject(__sentry_skip_normalization__);
            const keys = Object.keys();
            if (keys !== undefined) {
              while (keys[tmp] !== undefined) {
                let _Object = Object;
                let call = hasOwnProperty.call;
                let tmp28 = tmp21;
                if (!(typeof call === "unknown" ? hasOwnProperty(tmp21) : call(convertToPlainObjectResult, tmp21))) {
                  continue;
                } else {
                  if (tmp20 >= num2) {
                    tmp14[tmp21] = "[MaxProperties ~]";
                    break;
                  } else {
                    tmp14[tmp21] = visit(tmp28, convertToPlainObjectResult[tmp21], num - 1, num2, tmp8);
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
  if (~-str.split(/%..|./).length > num2) {
    tmp = normalizeToSize(arg0, num - 1, num2);
  }
  return tmp;
}

export { normalize };
export { normalizeToSize };
export const normalizeUrlToBase = function normalizeUrlToBase(arg0, str) {
  const replaced = str.replace(/\\/g, "/");
  try {
    const _decodeURI = decodeURI;
    str = decodeURI(arg0);
    const str2 = str.replace(/\\/g, "/");
    const _RegExp = RegExp;
    const _HermesInternal = HermesInternal;
    const regExp = new RegExp("(file://)?/*" + tmp2 + "/*", "ig");
    return str.replace(/\\/g, "/").replace(/webpack:\/?/g, "").replace(regExp, "app:///");
  } catch (err) {
  }
};