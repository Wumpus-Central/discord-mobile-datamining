// _runtime/00865_normalize.js
import _slicedToArray from "_slicedToArray";

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
function visit(arg0, __v_isVNode) {
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
    tmp2 = (function memoBuilder() {
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
    })();
  }
  _slicedToArray(tmp2, 2);
  if (null != __v_isVNode) {
    let items = ["boolean", "string"];
    if (!items.includes(typeof __v_isVNode)) {
      if (typeof __v_isVNode === "number") {
        let _Number = Number;
      }
      let str = (function stringifyValue(arg0, __v_isVNode) {
        try {
          if ("domain" === arg0) {
            if (__v_isVNode) {
              if (typeof __v_isVNode === "object") {
                if (__v_isVNode._events) {
                  return "[Domain]";
                }
              }
            }
          }
          if ("domainEmitter" === arg0) {
            return "[DomainEmitter]";
          } else {
            if (undefined !== closure_0) {
              if (__v_isVNode === closure_0) {
                return "[Global]";
              }
            }
            const _window = window;
            if (typeof window !== "undefined") {
              const _window2 = window;
              if (__v_isVNode === window) {
                return "[Window]";
              }
            }
            const _document = document;
            if (typeof document !== "undefined") {
              const _document2 = document;
              if (__v_isVNode === document) {
                return "[Document]";
              }
            }
            if (obj.isVueViewModel(__v_isVNode)) {
              let tmp4Result = tmp4(tmp5[3]);
              return tmp4Result.getVueInternalName(__v_isVNode);
            } else {
              tmp4Result = tmp4(tmp5[2]);
              if (tmp4Result.isSyntheticEvent(__v_isVNode)) {
                return "[SyntheticEvent]";
              } else {
                if (typeof __v_isVNode === "number") {
                  const _Number = Number;
                  if (!Number.isFinite(__v_isVNode)) {
                    const _HermesInternal = HermesInternal;
                    return "[" + __v_isVNode + "]";
                  }
                }
                if (typeof __v_isVNode === "function") {
                  const _HermesInternal4 = HermesInternal;
                  return "[Function: " + tmp4(tmp5[3]).getFunctionName(__v_isVNode) + "]";
                } else if (typeof __v_isVNode === "symbol") {
                  const _String2 = String;
                  const _HermesInternal3 = HermesInternal;
                  return "[" + String(__v_isVNode) + "]";
                } else if (typeof __v_isVNode === "bigint") {
                  const _String = String;
                  const _HermesInternal2 = HermesInternal;
                  return "[BigInt: " + String(__v_isVNode) + "]";
                } else {
                  const tmp9 = (function getConstructorName(__v_isVNode) {
                    const prototypeOf = Object.getPrototypeOf(__v_isVNode);
                    let constructor;
                    if (prototypeOf != null) {
                      constructor = prototypeOf.constructor;
                    }
                    let str = "null prototype";
                    if (constructor) {
                      str = prototypeOf.constructor.name;
                    }
                    return str;
                  })(__v_isVNode);
                  const _HermesInternal6 = HermesInternal;
                  if (obj5.test(tmp9)) {
                    let combined = concat(tmp10, "]");
                  } else {
                    combined = concat(tmp10, "]");
                  }
                  return combined;
                }
              }
            }
            obj = callback(table[2]);
          }
        } catch (tmp7) {
          const _HermesInternal5 = HermesInternal;
          return "**non-serializable** (" + tmp7 + ")";
        }
      })(arg0, __v_isVNode);
      if (str.startsWith("[object ")) {
        if (__v_isVNode.__sentry_skip_normalization__) {
          return __v_isVNode;
        } else {
          if (typeof __v_isVNode.__sentry_override_normalization_depth__ === "number") {
            num = __v_isVNode.__sentry_override_normalization_depth__;
          }
          if (0 === num) {
            return str.replace("object ", "");
          } else if (tmp4(__v_isVNode)) {
            return "[Circular ~]";
          } else {
            if (__v_isVNode) {
              if (typeof __v_isVNode.toJSON === "function") {
                try {
                  return visit("", __v_isVNode.toJSON(), num - 1, num2, tmp6);
                } catch (err) {
                }
              }
            }
            const _Array = Array;
            const tmp12 = Array.isArray(__v_isVNode) ? [] : {};
            const convertToPlainObjectResult = require("00822_addNonEnumerableProperty.js") /* addNonEnumerableProperty */.convertToPlainObject(__v_isVNode);
            let num6 = 0;
            const keys = Object.keys();
            if (keys !== undefined) {
              while (keys[tmp] !== undefined) {
                let _Object = Object;
                let call = hasOwnProperty.call;
                let tmp26 = tmp19;
                if (!(typeof call === "unknown" ? hasOwnProperty(tmp19) : call(convertToPlainObjectResult, tmp19))) {
                  continue;
                } else {
                  if (tmp18 >= num2) {
                    let str4 = "[MaxProperties ~]";
                    tmp12[tmp19] = "[MaxProperties ~]";
                    break;
                  } else {
                    let tmp20 = visit;
                    let tmp21 = tmp19;
                    let tmp22 = num2;
                    let tmp23 = tmp2;
                    tmp12[tmp19] = visit(tmp26, convertToPlainObjectResult[tmp19], num - 1, num2, tmp6);
                    num6 = tmp18 + 1;
                    continue;
                  }
                  break;
                }
                break;
              }
            }
            tmp5(__v_isVNode);
            return tmp12;
          }
        }
      } else {
        return str;
      }
    }
  }
  return __v_isVNode;
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