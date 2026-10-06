// _runtime/metro/00698__.js
import _mod699 from "00699__.js";
import CONSOLE_LEVELS from "../00700_CONSOLE_LEVELS.js";
import _mod703 from "00703__.js";
import _mod704 from "00704__.js";

let hasOwnProperty, map;

function addNonEnumerableProperty(arg0, arg1, value) {
  try {
    const _Object = Object;
    const obj = { value, writable: true, configurable: true };
    Object.defineProperty(arg0, arg1, obj);
  } catch (err) {
    if (_mod699.DEBUG_BUILD) {
      const debug = CONSOLE_LEVELS.debug;
      const _HermesInternal = HermesInternal;
      debug.log('Failed to add non-enumerable property "' + arg1 + '" to object', arg0);
    }
  }
}
function markFunctionWrapped(arg0, arg1) {
  try {
    const prototype = arg1.prototype || {};
    arg1.prototype = prototype;
    arg0.prototype = prototype;
    addNonEnumerableProperty(arg0, "__sentry_original__", arg1);
  } catch (err) {}
}
function convertToPlainObject(type) {
  const obj = _mod703;
  if (obj.isError(type)) {
    const error = { message: null, name: null, stack: null };
    ({ message: obj6.message, name: obj6.name, stack: obj6.stack } = type);
    if (typeof type === "object") {
      let obj3;
      if (null !== type) {
        const obj2 = {};
        obj3 = obj2;
        const keys = Object.keys();
        if (keys !== undefined) {
          obj3 = obj2;
          while (keys[tmp] !== undefined) {
            let _Object2 = Object;
            let hasOwnProperty2 = Object.prototype.hasOwnProperty;
            if (!hasOwnProperty2.call(type, tmp17)) {
              continue;
            } else {
              obj2[tmp17] = type[tmp17];
              continue;
            }
            continue;
          }
        }
      }
      const merged = Object.assign(obj3);
      return error;
    }
    obj3 = {};
  } else {
    const tmp2Result = _mod703;
    if (tmp2Result.isEvent(type)) {
      const obj4 = {
        type: type.type,
        target: serializeEventTarget(type.target),
        currentTarget: serializeEventTarget(type.currentTarget),
      };
      if (typeof type === "object") {
        let obj7;
        if (null !== type) {
          const obj5 = {};
          obj7 = obj5;
          const keys1 = Object.keys();
          if (keys1 !== undefined) {
            obj7 = obj5;
            while (keys1[tmp] !== undefined) {
              let _Object = Object;
              hasOwnProperty = Object.prototype.hasOwnProperty;
              if (!hasOwnProperty.call(type, tmp8)) {
                continue;
              } else {
                obj5[tmp8] = type[tmp8];
                continue;
              }
              continue;
            }
          }
        }
        const merged1 = Object.assign(obj7);
        let isInstanceOfResult = typeof globalThis.CustomEvent !== "undefined";
        if (typeof globalThis.CustomEvent !== "undefined") {
          const CustomEvent2 = globalThis.CustomEvent;
          const tmp2Result2 = _mod703;
          isInstanceOfResult = tmp2Result2.isInstanceOf(type, globalThis.CustomEvent);
        }
        if (isInstanceOfResult) {
          obj4.detail = type.detail;
        }
        return obj4;
      }
      obj7 = {};
    } else {
      return type;
    }
  }
}
function serializeEventTarget(arg0) {
  try {
    let htmlTreeAsStringResult;
    const obj = _mod703;
    if (obj.isElement(arg0)) {
      const tmp2Result = _mod704;
      htmlTreeAsStringResult = tmp2Result.htmlTreeAsString(arg0);
    } else {
      const _Object = Object;
      htmlTreeAsStringResult = toString.call(arg0);
    }
    return htmlTreeAsStringResult;
  } catch (err) {
    return "<unknown>";
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export { addNonEnumerableProperty };
export { convertToPlainObject };
export const dropUndefinedKeys = function dropUndefinedKeys(obj) {
  const f81830 = (item) => {
    obj = closure_1;
    let closure_0 = item;
    items = undefined;
    let obj2;
    let value = item;
    let tmp = items;
    let push = items.push;
    if (null !== item) {
      value = item;
      if (typeof item === "object") {
        value = obj.get(item);
        if (undefined === value) {
          let tmp9 = globalThis;
          let _Array = Array;
          if (Array.isArray(item)) {
            items = [];
            let result = obj.set(item, items);
            item = item.forEach(f81830);
            value = items;
          } else {
            let constructor = item.constructor;
            let _Object = Object;
            let tmp3 = constructor === Object || undefined === constructor;
            value = item;
            if (tmp3) {
              obj2 = {};
              let result1 = obj.set(item, obj2);
              let _Object2 = Object;
              let keys = Object.keys(item);
              let item1 = keys.forEach(f81831);
              value = obj2;
            }
          }
        }
      }
    }
    arr = push(value);
  };
  const f81831 = (item) => {
    let arr = closure_1_0[item];
    if (undefined !== arr) {
      let closure_1 = closure_1_1;
      let tmp8 = null;
      let value = arr;
      if (null !== arr) {
        value = arr;
        if (typeof arr === "object") {
          value = closure_1_1.get(arr);
          if (undefined === value) {
            let tmp9 = globalThis;
            let _Array = Array;
            if (Array.isArray(arr)) {
              let items = [];
              let result = closure_1_1.set(arr, items);
              item = arr.forEach(f81830);
              value = items;
            } else {
              let constructor = arr.constructor;
              let _Object = Object;
              let tmp = constructor === Object || undefined === constructor;
              value = arr;
              if (tmp) {
                let obj = {};
                let result1 = closure_1_1.set(arr, obj);
                let _Object2 = Object;
                let keys = Object.keys(arr);
                let item1 = keys.forEach(f81831);
                value = obj;
              }
            }
          }
        }
      }
      closure_1_3[item] = value;
    }
  };
  map = new Map();
  let closure_0 = obj;
  let items;
  obj = undefined;
  let value = obj;
  if (null !== obj) {
    value = obj;
    if (typeof obj === "object") {
      value = map.get(obj);
      if (undefined === value) {
        const _Array = Array;
        if (Array.isArray(obj)) {
          items = [];
          const result = map.set(obj, items);
          const item = obj.forEach(f81830);
          value = items;
        } else {
          const constructor = obj.constructor;
          const _Object = Object;
          value = obj;
          const tmp2 = constructor === Object || undefined === constructor;
          if (tmp2) {
            obj = {};
            const result1 = map.set(obj, obj);
            const _Object2 = Object;
            const keys = Object.keys(obj);
            const item1 = keys.forEach(f81831);
            value = obj;
          }
        }
      }
    }
  }
  return value;
};
export const extractExceptionKeysForMessage = function extractExceptionKeysForMessage(name) {
  const keys = Object.keys(convertToPlainObject(name));
  const sorted = keys.sort();
  let str = "[object has no keys]";
  if (keys[0]) {
    str = keys.join(", ");
  }
  return str;
};
export const fill = function fill(prototype, fetch, fn) {
  if (fetch in prototype) {
    if (typeof prototype[fetch] === "function") {
      const tmp7 = fn(prototype[fetch]);
      if (typeof tmp7 === "function") {
        markFunctionWrapped(tmp7, prototype[fetch]);
      }
      try {
        prototype[fetch] = tmp7;
      } catch (err) {
        if (_mod699.DEBUG_BUILD) {
          const debug = CONSOLE_LEVELS.debug;
          const _HermesInternal = HermesInternal;
          debug.log('Failed to replace method "' + fetch + '" in object', prototype);
        }
      }
    }
  }
};
export const getOriginalFunction = function getOriginalFunction(__sentry_original__) {
  return __sentry_original__.__sentry_original__;
};
export { markFunctionWrapped };
export const objectify = function objectify(item) {
  let string;
  if ((null == item) === true) {
    const _String = String;
    const self3 = this;
    const self4 = this;
    string = new String(item);
  } else {
    const tmp = typeof item === "symbol" || typeof item === "bigint";
    if (tmp === true) {
      const _Object = Object;
      string = Object(item);
    } else {
      string = item;
      const obj = _mod703;
      if (obj.isPrimitive(item) === true) {
        const self = this;
        const self2 = this;
        string = new item.constructor(item);
      }
    }
  }
  return string;
};
