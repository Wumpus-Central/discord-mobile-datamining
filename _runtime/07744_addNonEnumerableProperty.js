// _runtime/07744_addNonEnumerableProperty.js
import __SENTRY_DEBUG__ from "metro/07737___SENTRY_DEBUG__.js";
import consoleSandbox from "07738_consoleSandbox.js";
import isInstanceOf from "07745_isInstanceOf.js";
import _htmlElementAsString from "07746__htmlElementAsString.js";
import isMatchingPattern from "07747_isMatchingPattern.js";

require = arg1;
const dependencyMap = arg6;
function addNonEnumerableProperty(arg0, arg1, arg2) {
  try {
    const _Object = Object;
    const obj = { value: null, writable: true, configurable: true };
    obj[0] = arg2;
    Object.defineProperty(arg0, arg1, obj);
  } catch (err) {
    if (__SENTRY_DEBUG__.DEBUG_BUILD) {
      const logger = consoleSandbox.logger;
      const _HermesInternal = HermesInternal;
      logger.log("Failed to add non-enumerable property \"" + tmp2 + "\" to object", tmp);
    }
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
  let obj = isInstanceOf;
  if (obj.isError(type)) {
    obj = { message: null, name: null, stack: null };
    ({ message: obj6[0], name: obj6[1], stack: obj6[2] } = type);
    if (typeof type === "object") {
      if (null !== type) {
        obj = {};
        obj1 = obj;
        const keys = Object.keys();
        if (keys !== undefined) {
          obj1 = obj;
          while (keys[tmp] !== undefined) {
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
    let tmp2Result = isInstanceOf;
    if (tmp2Result.isEvent(type)) {
      const obj2 = { type: null, target: null, currentTarget: null };
      obj2[0] = type.type;
      obj2[1] = serializeEventTarget(type.target);
      obj2[2] = serializeEventTarget(type.currentTarget);
      if (typeof type === "object") {
        if (null !== type) {
          const obj3 = {};
          let obj4 = obj3;
          const keys1 = Object.keys();
          if (keys1 !== undefined) {
            obj4 = obj3;
            while (keys1[tmp] !== undefined) {
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
        let isInstanceOfResult = typeof globalThis.CustomEvent !== "undefined";
        if (typeof globalThis.CustomEvent !== "undefined") {
          tmp2Result = isInstanceOf;
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
      let htmlTreeAsStringResult = _htmlElementAsString.htmlTreeAsString(arg0);
      const tmp2Result = _htmlElementAsString;
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
  closure_0 = map;
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
        if (undefined !== arg0[item10030]) {
          obj[item10030] = _dropUndefinedKeys(arg0[item10030], arg1);
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
        const item = arr.forEach((item, index) => {
          items.push(_dropUndefinedKeys(item, closure_0));
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
      return isMatchingPattern.truncate(first, num);
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
          truncateResult = isMatchingPattern.truncate(joined, num);
        }
        return truncateResult;
      }
      return "";
    }
  } else {
    return "[object has no keys]";
  }
};
arg5.fill = function fill(closure_0, arg1, fn) {
  if (arg1 in _require) {
    const tmp6 = fn(_require[arg1]);
    if (typeof tmp6 === "function") {
      markFunctionWrapped(tmp6, tmp5);
    }
    try {
      _require[arg1] = tmp6;
    } catch (err) {
      if (__SENTRY_DEBUG__.DEBUG_BUILD) {
        const logger = consoleSandbox.logger;
        const _HermesInternal = HermesInternal;
        logger.log("Failed to replace method \"" + tmp3 + "\" in object", tmp2);
      }
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
    let tmp = typeof arg0 === "symbol";
    if (typeof arg0 !== "symbol") {
      tmp = typeof arg0 === "bigint";
    }
    if (tmp === true) {
      const _Object = Object;
      string = Object(arg0);
    } else {
      string = arg0;
      if (obj.isPrimitive(arg0) === true) {
        string = new arg0.constructor(arg0);
      }
      obj = isInstanceOf;
    }
  }
  return string;
};
arg5.urlEncode = function urlEncode(arg0) {
  const entries = Object.entries(arg0);
  const mapped = entries.map((item, index) => {
    [tmp, tmp2] = item;
    return "" + encodeURIComponent(tmp) + "=" + encodeURIComponent(tmp2);
  });
  return mapped.join("&");
};