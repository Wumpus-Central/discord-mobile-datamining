// _runtime/12604_normalize.js
import addNonEnumerableProperty from "12565_addNonEnumerableProperty.js";
import memoBuilder from "12605_memoBuilder.js";
import closure_3 from "metro/00032__slicedToArray.js";

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
function visit(arg0, num) {
  num = arg2;
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
    let obj = memoBuilder;
  }
  callback(memoBuilderResult, 2);
  if (null != num) {
    const items = ["boolean", "string"];
    if (!items.includes(typeof num)) {
      if (typeof num === "number") {
        let _Number = Number;
      }
      let str = (function stringifyValue(arg0, obj) {
        try {
          if ("domain" === arg0) {
            if (obj) {
              if (typeof obj === "object") {
                if (obj._events) {
                  return "[Domain]";
                }
              }
            }
          }
          if ("domainEmitter" === arg0) {
            return "[DomainEmitter]";
          } else {
            if (undefined !== closure_0) {
              if (obj === closure_0) {
                return "[Global]";
              }
            }
            const _window = window;
            if (typeof window !== "undefined") {
              const _window2 = window;
              if (obj === window) {
                return "[Window]";
              }
            }
            const _document = document;
            if (typeof document !== "undefined") {
              const _document2 = document;
              if (obj === document) {
                return "[Document]";
              }
            }
            if (obj.isVueViewModel(obj)) {
              return "[VueViewModel]";
            } else {
              let tmp4Result = tmp4(tmp5[3]);
              if (tmp4Result.isSyntheticEvent(obj)) {
                return "[SyntheticEvent]";
              } else {
                if (typeof obj === "number") {
                  const _Number = Number;
                  if (!Number.isFinite(obj)) {
                    const _HermesInternal = HermesInternal;
                    return "[" + obj + "]";
                  }
                }
                if (typeof obj === "function") {
                  tmp4Result = tmp4(tmp5[4]);
                  const _HermesInternal4 = HermesInternal;
                  return "[Function: " + tmp4Result.getFunctionName(obj) + "]";
                } else if (typeof obj === "symbol") {
                  const _String2 = String;
                  const _HermesInternal3 = HermesInternal;
                  return "[" + String(obj) + "]";
                } else if (typeof obj === "bigint") {
                  const _String = String;
                  const _HermesInternal2 = HermesInternal;
                  return "[BigInt: " + String(obj) + "]";
                } else {
                  const tmp9 = (function getConstructorName(arg0) {
                    const prototypeOf = Object.getPrototypeOf(arg0);
                    let str = "null prototype";
                    if (prototypeOf) {
                      str = prototypeOf.constructor.name;
                    }
                    return str;
                  })(obj);
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
      })(arg0, num);
      if (str.startsWith("[object ")) {
        if (num.__sentry_skip_normalization__) {
          return num;
        } else {
          if (typeof num.__sentry_override_normalization_depth__ === "number") {
            num = num.__sentry_override_normalization_depth__;
          }
          if (0 === num) {
            return str.replace("object ", "");
          } else if (tmp6(num)) {
            return "[Circular ~]";
          } else {
            if (num) {
              if (typeof num.toJSON === "function") {
                try {
                  return visit("", num.toJSON(), num - 1, num2, tmp8);
                } catch (err) {}
              }
            }
            const _Array = Array;
            const tmp14 = Array.isArray(num) ? [] : {};
            const convertToPlainObjectResult = addNonEnumerableProperty.convertToPlainObject(num);
            let num6 = 0;
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
                    let str4 = "[MaxProperties ~]";
                    tmp14[tmp21] = "[MaxProperties ~]";
                    break;
                  } else {
                    let tmp22 = visit;
                    let tmp23 = tmp21;
                    let tmp24 = num2;
                    let tmp25 = memoBuilderResult;
                    tmp14[tmp21] = visit(tmp28, convertToPlainObjectResult[tmp21], num - 1, num2, tmp8);
                    num6 = tmp20 + 1;
                    continue;
                  }
                  break;
                }
                break;
              }
            }
            tmp7(num);
            return tmp14;
          }
        }
      } else {
        return str;
      }
    }
  }
  return num;
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
    return str
      .replace(/\\/g, "/")
      .replace(/webpack:\/?/g, "")
      .replace(regExp, "app:///");
  } catch (err) {}
};
