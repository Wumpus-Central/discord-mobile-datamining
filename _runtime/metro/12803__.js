// _runtime/metro/12803__.js
import _mod12796 from "12796__.js";
import _mod12804 from "12804__.js";
import _mod12805 from "12805__.js";
import _mod12806 from "12806__.js";

require = arg1;
const dependencyMap = arg6;
function addNonEnumerableProperty(arg0, arg1, value) {
  try {
    const _Object = Object;
    const obj = { value, writable: true, configurable: true };
    Object.defineProperty(arg0, arg1, obj);
  } catch (err) {
    if (_mod12796.DEBUG_BUILD) {
      const logger = tmp6(12797).logger;
      const _HermesInternal = HermesInternal;
      logger.log('Failed to add non-enumerable property "' + tmp2 + '" to object', tmp);
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
  } catch (err) {}
}
function convertToPlainObject(type) {
  let obj = _mod12804;
  if (obj.isError(type)) {
    const error = { message: null, name: null, stack: null };
    ({ message: obj6.message, name: obj6.name, stack: obj6.stack } = type);
    if (typeof type === "object") {
      if (null !== type) {
        obj = {};
        const keys = Object.keys();
        if (keys !== undefined) {
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
      const merged = Object.assign(obj);
      return error;
    }
    obj = {};
  } else {
    let tmp2Result = tmp2(12804);
    if (tmp2Result.isEvent(type)) {
      const obj1 = {
        type: type.type,
        target: serializeEventTarget(type.target),
        currentTarget: serializeEventTarget(type.currentTarget),
      };
      if (typeof type === "object") {
        if (null !== type) {
          const obj2 = {};
          let obj3 = obj2;
          const keys1 = Object.keys();
          if (keys1 !== undefined) {
            obj3 = obj2;
            while (keys1[tmp] !== undefined) {
              let _Object = Object;
              hasOwnProperty = Object.prototype.hasOwnProperty;
              let call = hasOwnProperty.call;
              if (!(typeof call === "unknown" ? hasOwnProperty(tmp8) : call(type, tmp8))) {
                continue;
              } else {
                obj2[tmp8] = type[tmp8];
                continue;
              }
              continue;
            }
          }
        }
        const merged1 = Object.assign(obj3);
        let isInstanceOfResult = typeof globalThis.CustomEvent !== "undefined";
        if (typeof globalThis.CustomEvent !== "undefined") {
          tmp2Result = tmp2(12804);
          isInstanceOfResult = tmp2Result.isInstanceOf(type, globalThis.CustomEvent);
        }
        if (isInstanceOfResult) {
          obj1.detail = type.detail;
        }
        return obj1;
      }
      obj3 = {};
    } else {
      return type;
    }
  }
}
function serializeEventTarget(arg0) {
  try {
    if (obj.isElement(arg0)) {
      let htmlTreeAsStringResult = _mod12805.htmlTreeAsString(arg0);
      const tmp2Result = _mod12805;
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
  if (
    (function isPojo(arr) {
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
    })(arr)
  ) {
    value = map.get(arr);
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
        const item = arr.forEach((item) => {
          items.push(_dropUndefinedKeys(item, closure_0));
        });
        return items;
      }
    } else {
      return arr;
    }
  }
}

export { addNonEnumerableProperty };
export { convertToPlainObject };
export const dropUndefinedKeys = function dropUndefinedKeys(arr) {
  return _dropUndefinedKeys(arr, new Map());
};
export const extractExceptionKeysForMessage = function extractExceptionKeysForMessage(arg0) {
  let num = arg1;
  if (arg1 === undefined) {
    num = 40;
  }
  const keys = Object.keys(convertToPlainObject(arg0));
  const sorted = keys.sort();
  const first = keys[0];
  if (first) {
    if (first.length >= num) {
      return _mod12806.truncate(first, num);
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
          truncateResult = _mod12806.truncate(joined, num);
        }
        return truncateResult;
      }
      return "";
    }
  } else {
    return "[object has no keys]";
  }
};
export const fill = function fill(arg0, arg1, fn) {
  if (arg1 in arg0) {
    const tmp6 = fn(arg0[arg1]);
    if (typeof tmp6 === "function") {
      markFunctionWrapped(tmp6, tmp5);
    }
    try {
      arg0[arg1] = tmp6;
    } catch (err) {
      if (_mod12796.DEBUG_BUILD) {
        const logger = tmp7(12797).logger;
        const _HermesInternal = HermesInternal;
        logger.log('Failed to replace method "' + tmp3 + '" in object', tmp2);
      }
      tmp7 = require;
    }
  }
};
export const getOriginalFunction = function getOriginalFunction(__sentry_original__) {
  return __sentry_original__.__sentry_original__;
};
export { markFunctionWrapped };
export const objectify = function objectify(arg0) {
  if ((null == arg0) === true) {
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
      obj = _mod12804;
    }
  }
  return string;
};
export const urlEncode = function urlEncode(arg0) {
  const entries = Object.entries(arg0);
  const mapped = entries.map((item) => {
    [tmp, tmp2] = item;
    return "" + encodeURIComponent(tmp) + "=" + encodeURIComponent(tmp2);
  });
  return mapped.join("&");
};
