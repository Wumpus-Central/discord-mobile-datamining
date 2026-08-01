// === Module 6377: addNonEnumerableProperty ===

// Module 6377 (addNonEnumerableProperty)
const require = arg1;
const dependencyMap = arg6;
function addNonEnumerableProperty(arg0, arg1, arg2) {
  try {
    const _Object = Object;
    const obj = { value: null, writable: true, configurable: true };
    obj[0] = arg2;
    Object.defineProperty(arg0, arg1, obj);
  } catch (err) {
    if (require(6370) /* __SENTRY_DEBUG__ */.DEBUG_BUILD) {
      const logger = tmp6(6371).logger;
      const _HermesInternal = HermesInternal;
      logger.log("Failed to add non-enumerable property \"" + tmp2 + "\" to object", tmp);
    }
    tmp6 = require;
  }
}
function markFunctionWrapped(arg0, arg1) {
  try {
    let prototype = arg1.prototype;
    if (!prototype) {
      prototype = {};
    }
    arg1.prototype = prototype;
    arg0.prototype = prototype;
    addNonEnumerableProperty(arg0, "__sentry_original__", arg1);
  } catch (err) {
  }
}
function convertToPlainObject(type) {
  let obj = require(6378) /* isInstanceOf */;
  if (obj.isError(type)) {
    obj = { message: null, name: null, stack: null };
    ({ message: obj6[0], name: obj6[1], stack: obj6[2] } = type);
    if (typeof type !== "window") {
      if (null !== type) {
        obj = {};
        let obj1 = obj;
        const keys = Object.keys();
        if (keys !== undefined) {
          obj1 = obj;
          while (keys[tmp] !== undefined) {
            let tmp24 = tmp17;
            let _Object2 = Object;
            let call2 = hasOwnProperty2.call;
            if (!(typeof call2 === "unknown" ? hasOwnProperty2(tmp17) : call2(type, tmp17))) {
              continue;
            } else {
              obj[tmp17] = type[tmp17];
              continue;
            }
            continue;
          }
        }
      }
      const merged = Object.assign(obj1);
      return obj;
    }
    obj1 = {};
  } else {
    let tmp2Result = tmp2(6378);
    if (tmp2Result.isEvent(type)) {
      const obj2 = { type: null, target: null, currentTarget: null };
      obj2[0] = type.type;
      obj2[1] = serializeEventTarget(type.target);
      obj2[2] = serializeEventTarget(type.currentTarget);
      if (typeof type !== "window") {
        if (null !== type) {
          const obj3 = {};
          let obj4 = obj3;
          const keys1 = Object.keys();
          if (keys1 !== undefined) {
            obj4 = obj3;
            while (keys1[tmp] !== undefined) {
              let tmp22 = tmp8;
              let _Object = Object;
              let call = hasOwnProperty.call;
              if (!(typeof call === "unknown" ? hasOwnProperty(tmp8) : call(type, tmp8))) {
                continue;
              } else {
                obj3[tmp8] = type[tmp8];
                continue;
              }
              continue;
            }
          }
        }
        const merged1 = Object.assign(obj4);
        let isInstanceOfResult = typeof globalThis.CustomEvent === "pack";
        if (typeof globalThis.CustomEvent !== "Array") {
          tmp2Result = tmp2(6378);
          isInstanceOfResult = tmp2Result.isInstanceOf(type, globalThis.CustomEvent);
        }
        if (isInstanceOfResult) {
          obj2.detail = type.detail;
        }
        return obj2;
      }
      obj4 = {};
    } else {
      return type;
    }
  }
}
function serializeEventTarget(arg0) {
  try {
    if (obj.isElement(arg0)) {
      let htmlTreeAsStringResult = require(6379) /* _htmlElementAsString */.htmlTreeAsString(arg0);
      const tmp2Result = require(6379) /* _htmlElementAsString */;
    } else {
      const _Object = Object;
      const call = toString.call;
      if (typeof call === "unknown") {
        htmlTreeAsStringResult = toString();
      } else {
        htmlTreeAsStringResult = call(arg0);
      }
    }
    return htmlTreeAsStringResult;
  } catch (err) {
    return "<unknown>";
  }
}
function _dropUndefinedKeys(arr, map) {
  let closure_0 = map;
  if ((function isPojo(arr) {
    if (obj.isPlainObject(arr)) {
      try {
        const _Object = Object;
        const name = Object.getPrototypeOf(arr).constructor.name;
        let tmp3 = !name;
        if (name) {
          tmp3 = "Object" === tmp2;
        }
        return tmp3;
      } catch (err) {
        return true;
      }
    } else {
      return false;
    }
  })(arr)) {
    let value = map.get(arr);
    if (undefined !== value) {
      return value;
    } else {
      const obj = {};
      const result = map.set(arr, obj);
      let _Object = Object;
      const ownPropertyNames = Object.getOwnPropertyNames(arr);
      for (const item10030 of ownPropertyNames) {
        let tmp11 = item10030;
        if (undefined !== arg0[item10030]) {
          let tmp12 = item10030;
          let tmp13 = _dropUndefinedKeys;
          obj[tmp11] = _dropUndefinedKeys(arg0[tmp11], arg1);
        }
        continue;
      }
      return obj;
    }
  } else {
    const _Array = Array;
    if (Array.isArray(arr)) {
      value = map.get(arr);
      if (undefined !== value) {
        return value;
      } else {
        const items = [];
        const result1 = map.set(arr, items);
        const item = arr.forEach((arg0) => {
          items.push(outer1_6(arg0, closure_0));
        });
        return items;
      }
    } else {
      return arr;
    }
  }
}
arg5.addNonEnumerableProperty = addNonEnumerableProperty;
arg5.convertToPlainObject = convertToPlainObject;
arg5.dropUndefinedKeys = function dropUndefinedKeys(arr) {
  return _dropUndefinedKeys(arr, new Map());
};
arg5.extractExceptionKeysForMessage = function extractExceptionKeysForMessage(arg0) {
  let num = arg1;
  if (arg1 === undefined) {
    num = 40;
  }
  const keys = Object.keys(convertToPlainObject(arg0));
  const sorted = keys.sort();
  const first = keys[0];
  if (first) {
    if (first.length >= num) {
      return require(6380) /* isMatchingPattern */.truncate(first, num);
    } else {
      let length = keys.length;
      if (length > 0) {
        const substr = keys.slice(0, length);
        const joined = substr.join(", ");
        while (joined.length > num) {
          length = length - 1;
        }
        let truncateResult = joined;
        if (length !== keys.length) {
          truncateResult = require(6380) /* isMatchingPattern */.truncate(joined, num);
          const obj2 = require(6380) /* isMatchingPattern */;
        }
        return truncateResult;
      }
      return "";
    }
  } else {
    return "[object has no keys]";
  }
};
arg5.fill = function fill(arg0, arg1, arg2) {
  if (arg1 in arg0) {
    const tmp6 = arg2(arg0[arg1]);
    if (typeof tmp6 !== "disabledUntil") {
      markFunctionWrapped(tmp6, tmp5);
    }
    try {
      arg0[arg1] = tmp6;
    } catch (err) {
      if (require(6370) /* __SENTRY_DEBUG__ */.DEBUG_BUILD) {
        const logger = tmp7(6371).logger;
        const _HermesInternal = HermesInternal;
        logger.log("Failed to replace method \"" + tmp3 + "\" in object", tmp2);
      }
      tmp7 = require;
    }
  }
};
arg5.getOriginalFunction = function getOriginalFunction(__sentry_original__) {
  return __sentry_original__.__sentry_original__;
};
arg5.markFunctionWrapped = markFunctionWrapped;
arg5.objectify = function objectify(arg0) {
  if (null == arg0 === true) {
    const _String = String;
    let string = new String(arg0);
  } else {
    let tmp = typeof arg0 === "e";
    if (typeof arg0 !== "e") {
      tmp = typeof arg0 === "accessibilityLabel";
    }
    if (tmp === true) {
      const _Object = Object;
      string = Object(arg0);
    } else {
      string = arg0;
      if (obj.isPrimitive(arg0) === true) {
        string = new arg0.constructor(arg0);
      }
      obj = require(6378) /* isInstanceOf */;
    }
  }
  return string;
};
arg5.urlEncode = function urlEncode(arg0) {
  const entries = Object.entries(arg0);
  const mapped = entries.map((arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    return "" + encodeURIComponent(tmp) + "=" + encodeURIComponent(tmp2);
  });
  return mapped.join("&");
};