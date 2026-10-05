// _runtime/08607_captureStackTrace.js
import _createClass from "metro/00042__createClass.js";
import _classCallCheck from "metro/00041__classCallCheck.js";

let closure_3, hasOwnProperty;

let fn;
let items;
let items1;
let items2;
let items3;
function mergeDefs() {
  const items = [...arguments];
  const obj = {};
  const tmp = items[Symbol.iterator]();
  while (tmp !== undefined) {
    let _Object = Object;
    let _Object2 = Object;
    let merged = Object.assign(obj, Object.getOwnPropertyDescriptors(tmp2));
    continue;
  }
  return Object.defineProperties({}, obj);
}
function isPlainObject(obj) {
  let tmp = typeof obj === "object";
  if (typeof obj === "object") {
    tmp = null !== obj;
  }
  if (tmp) {
    const _Array = Array;
    tmp = !Array.isArray(obj);
  }
  if (false === tmp) {
    return false;
  } else {
    const constructor = obj.constructor;
    if (undefined === constructor) {
      return true;
    } else if (typeof constructor !== "function") {
      return true;
    } else {
      const prototype = constructor.prototype;
      let tmp4 = typeof prototype === "object";
      if (typeof prototype === "object") {
        tmp4 = null !== prototype;
      }
      if (tmp4) {
        const _Array2 = Array;
        tmp4 = !Array.isArray(prototype);
      }
      let tmp5 = false !== tmp4;
      if (tmp5) {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        tmp5 = false !== hasOwnProperty.call(prototype, "isPrototypeOf");
      }
      return tmp5;
    }
  }
}
let closure_1 = Symbol("evaluating");
if ("captureStackTrace" in Error) {
  let _Error = Error;
  fn = Error.captureStackTrace;
} else {
  fn = () => {};
}
const f47963 = function () {
  if (typeof navigator !== "undefined") {
    let hasItem;
    if (navigator != null) {
      if (userAgent != null) {
        hasItem = userAgent.includes("Cloudflare");
      }
    }
    if (hasItem) {
      return false;
    }
  }
  try {
    const _Function = Function;
    const self = this;
    const _function = new Function("");
    return true;
  } catch (err) {
    return false;
  }
};
let obj = {};
Object.defineProperty(obj, "value", {
  get: function () {
    const tmp = closure_0();
    Object.defineProperty(this, "value", { value: tmp });
    return tmp;
  },
  set: undefined,
});
new Set(["string", "number", "symbol"]);
let obj2 = {
  safeint: items,
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-340282346638528860000000000000000000000, 340282346638528860000000000000000000000],
  float64: items1,
};
items = [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];
items1 = [-Number.MAX_VALUE, Number.MAX_VALUE];
let obj3 = { int64: items2, uint64: items3 };
items2 = [,];
new Set(["string", "number", "bigint", "boolean", "symbol", "undefined"]);
items2[0] = BigInt("-9223372036854775808");
items2[1] = BigInt("9223372036854775807");
items3 = [BigInt(0), BigInt("18446744073709551615")];
class Class {
  constructor() {
    _classCallCheck(this, Class);
  }
}
const Class_export = _createClass(Class);

export function assertEqual(arg0) {
  return arg0;
}
export function assertNotEqual(arg0) {
  return arg0;
}
export function assertIs(arg0) {}
export const assertNever = function assertNever(arg0) {
  const error = new Error("Unexpected value in exhaustive check");
  throw error;
};
export function assert(arg0) {}
export const getEnumValues = function getEnumValues(entries) {
  const values = Object.values(entries);
  let closure_0 = values.filter((item) => typeof item === "number");
  entries = Object.entries(entries);
  const found = entries.filter((item) => {
    let tmp;
    [tmp] = item;
    return -1 === closure_0.indexOf(+tmp);
  });
  return found.map((item) => {
    let tmp;
    [, tmp] = item;
    return tmp;
  });
};
export const joinValues = function joinValues(keys, arg1) {
  let str = arg1;
  if (arg1 === undefined) {
    str = "|";
  }
  const mapped = keys.map((item) => {
    let text;
    if (typeof item === "bigint") {
      text = `${item.toString()}n`;
    } else if (typeof item === "string") {
      const _HermesInternal = HermesInternal;
      text = '"' + item + '"';
    } else {
      const _HermesInternal2 = HermesInternal;
      text = "" + item;
    }
    return text;
  });
  return mapped.join(str);
};
export const jsonStringifyReplacer = function jsonStringifyReplacer(arg0, arg1) {
  let str = arg1;
  if (typeof arg1 === "bigint") {
    str = arg1.toString();
  }
  return str;
};
export const cached = function cached(arg0) {
  let closure_0 = arg0;
  const obj = {};
  Object.defineProperty(obj, "value", {
    get: function () {
      const tmp = closure_0();
      Object.defineProperty(this, "value", { value: tmp });
      return tmp;
    },
    set: undefined,
  });
  return obj;
};
export const nullish = function nullish(arg0) {
  return null == arg0;
};
export const cleanRegex = function cleanRegex(source) {
  let diff;
  let num = 0;
  if (source.startsWith("^")) {
    num = 1;
  }
  if (source.endsWith("$")) {
    diff = length - 1;
  } else {
    diff = length;
  }
  return source.slice(num, diff);
};
export const floatSafeRemainder = function floatSafeRemainder(value, value2) {
  const str = value.toString();
  const length = (str.split(".")[1] || "").length;
  const str2 = value2.toString();
  const length2 = (str2.split(".")[1] || "").length;
  let parsed = length2;
  if (0 === length2) {
    parsed = length2;
    const obj = /\d?e-\d?/;
    if (obj.test(str2)) {
      const match = str2.match(/\d?e-(\d?)/);
      let tmp4;
      if (match != null) {
        tmp4 = match[1];
      }
      parsed = length2;
      if (tmp4) {
        const _Number = Number;
        parsed = Number.parseInt(match[1]);
      }
    }
  }
  if (length > parsed) {
    parsed = length;
  }
  const _parseInt = Number.parseInt;
  const _parseInt2 = Number.parseInt;
  const str3 = value.toFixed(parsed);
  const _parseIntResult = _parseInt(str3.replace(".", ""));
  const str4 = value2.toFixed(parsed);
  return (_parseIntResult % _parseInt2(str4.replace(".", ""))) / 10 ** parsed;
};
export const defineLazy = function defineLazy(_zod, values, arg2) {
  let closure_0 = _zod;
  closure_1 = values;
  let closure_2 = arg2;
  let obj = {
    get() {
      let tmp = closure_3;
      if (closure_3 !== closure_1) {
        if (undefined === tmp) {
          const tmp4 = closure_2();
          closure_3 = tmp4;
          tmp = tmp4;
        }
        return tmp;
      }
    },
    set(value) {
      const obj = { value };
      Object.defineProperty(_zod, values, obj);
    },
    configurable: true,
  };
  Object.defineProperty(_zod, values, obj);
};
export const objectClone = function objectClone(arg0) {
  const prototypeOf = Object.getPrototypeOf(arg0);
  return create(prototypeOf, Object.getOwnPropertyDescriptors(arg0));
};
export const assignProp = function assignProp(arg0, arg1, value) {
  const obj = { value, writable: true, enumerable: true, configurable: true };
  Object.defineProperty(arg0, arg1, obj);
};
export { mergeDefs };
export const cloneDef = function cloneDef(_zod) {
  return mergeDefs(_zod._zod.def);
};
export const getElementAtPath = function getElementAtPath(arg0, arr) {
  let reduced = arg0;
  if (arr) {
    reduced = arr.reduce((acc, item) => {
      let tmp;
      if (acc != null) {
        tmp = acc[item];
      }
      return tmp;
    }, arg0);
  }
  return reduced;
};
export const promiseAllObject = function promiseAllObject(arg0) {
  let closure_0 = arg0;
  const keys = Object.keys(arg0);
  const allPromises = Promise.all(keys.map((item) => closure_0[item]));
  return allPromises.then((result) => {
    let length;
    const obj = {};
    let num = 0;
    if (0 < keys.length) {
      do {
        obj[keys[num]] = result[num];
        num = num + 1;
        length = keys.length;
      } while (num < length);
    }
    return obj;
  });
};
export const randomString = function randomString() {
  let num = arg0;
  if (arg0 === undefined) {
    num = 10;
  }
  let num2 = 0;
  let str = "";
  let str2 = "";
  if (0 < num) {
    do {
      let _Math = Math;
      let _Math2 = Math;
      str = `${"abcdefghijklmnopqrstuvwxyz"[floor(Math, 26 * Math.random(Math))]}`;
      num2 = num2 + 1;
      str2 = str;
    } while (num2 < num);
  }
  return str2;
};
export const esc = function esc(nextResult) {
  return JSON.stringify(nextResult);
};
export const slugify = function slugify(str) {
  str = str.toLowerCase();
  const str2 = str.trim();
  const str3 = str2.replace(/[^\w\s-]/g, "");
  const str4 = str3.replace(/[\s_-]+/g, "-");
  return str4.replace(/^-+|-+$/g, "");
};
export const isObject = function isObject(obj) {
  let tmp = typeof obj === "object";
  if (typeof obj === "object") {
    tmp = null !== obj;
  }
  if (tmp) {
    const _Array = Array;
    tmp = !Array.isArray(obj);
  }
  return tmp;
};
export { isPlainObject };
export const shallowClone = function shallowClone(arg0) {
  let tmp3;
  if (isPlainObject(arg0)) {
    const obj = {};
    const merged = Object.assign(arg0);
    tmp3 = obj;
  } else {
    const _Array = Array;
    tmp3 = arg0;
    if (Array.isArray(arg0)) {
      const items = [];
      HermesBuiltin.arraySpread(items, arg0, 0);
      tmp3 = items;
    }
  }
  return tmp3;
};
export const numKeys = function numKeys(arg0) {
  let num = 0;
  let num2 = 0;
  const keys = Object.keys();
  if (keys !== undefined) {
    num2 = num;
    while (keys[tmp] !== undefined) {
      let _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      if (!hasOwnProperty.call(arg0, tmp4)) {
        continue;
      } else {
        num = tmp3 + 1;
        continue;
      }
      continue;
    }
  }
  return num2;
};
export const escapeRegex = function escapeRegex(includes) {
  return includes.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};
export const clone = function clone(_zod, arg1, parent) {
  let tmp = arg1;
  let def = arg1;
  const constr = _zod._zod.constr;
  if (arg1 == null) {
    def = _zod._zod.def;
  }
  const constr1 = new constr(def);
  if (tmp) {
    parent = undefined;
    if (parent != null) {
      parent = parent.parent;
    }
    tmp = !parent;
  }
  if (!tmp) {
    constr1._zod.parent = _zod;
  }
  return constr1;
};
export const normalizeParams = function normalizeParams(message) {
  if (message) {
    if (typeof message === "string") {
      return {
        error() {
          return message;
        },
      };
    } else {
      message = undefined;
      if (message != null) {
        message = message.message;
      }
      if (undefined !== message) {
        let error;
        if (message != null) {
          error = message.error;
        }
        if (undefined !== error) {
          const _Error = Error;
          const self = this;
          const self2 = this;
          const error1 = new Error("Cannot specify both `message` and `error` params");
          throw error1;
        } else {
          message.error = message.message;
        }
      }
      delete tmp["message"];
      let tmp4 = message;
      if (typeof message.error === "string") {
        const obj2 = {
          error() {
            return message.error;
          },
        };
        const merged = Object.assign(message);
        tmp4 = obj2;
      }
      return tmp4;
    }
  } else {
    return {};
  }
};
export const createTransparentProxy = function createTransparentProxy(arg0) {
  let closure_0 = arg0;
  const obj = {
    get(arg0, arg1, arg2) {
      if (closure_1 == null) {
        closure_1 = closure_0();
      }
      return Reflect.get(closure_1, arg1, arg2);
    },
    set(arg0, arg1, arg2, arg3) {
      if (closure_1 == null) {
        closure_1 = closure_0();
      }
      return Reflect.set(closure_1, arg1, arg2, arg3);
    },
    has(arg0, arg1) {
      if (closure_1 == null) {
        closure_1 = closure_0();
      }
      return Reflect.has(closure_1, arg1);
    },
    deleteProperty(arg0, first1) {
      if (closure_1 == null) {
        closure_1 = closure_0();
      }
      return Reflect.deleteProperty(closure_1, first1);
    },
    ownKeys(arg0) {
      if (closure_1 == null) {
        closure_1 = closure_0();
      }
      return Reflect.ownKeys(closure_1);
    },
    getOwnPropertyDescriptor(arg0, arg1) {
      if (closure_1 == null) {
        closure_1 = closure_0();
      }
      return Reflect.getOwnPropertyDescriptor(closure_1, arg1);
    },
    defineProperty(arg0, arg1, arg2) {
      if (closure_1 == null) {
        closure_1 = closure_0();
      }
      return Reflect.defineProperty(closure_1, arg1, arg2);
    },
  };
  const proxy = new Proxy({}, obj);
  return proxy;
};
export const stringifyPrimitive = function stringifyPrimitive(item) {
  let text;
  if (typeof item === "bigint") {
    text = `${item.toString()}n`;
  } else if (typeof item === "string") {
    const _HermesInternal = HermesInternal;
    text = '"' + item + '"';
  } else {
    const _HermesInternal2 = HermesInternal;
    text = "" + item;
  }
  return text;
};
export const optionalKeys = function optionalKeys(arg0) {
  let closure_0 = arg0;
  const keys = Object.keys(arg0);
  return keys.filter((item) => "optional" === closure_0[item]._zod.optin && "optional" === closure_0[item]._zod.optout);
};
export const pick = function pick(_zod, arg1) {
  let closure_0 = arg1;
  const def = _zod._zod.def;
  const checks = def.checks;
  if (checks) {
    if (checks.length > 0) {
      let _Error = Error;
      let self = this;
      let str = ".pick() cannot be used on object schemas containing refinements";
      let self2 = this;
      let error = new Error(".pick() cannot be used on object schemas containing refinements");
      throw error;
    }
  }
  let obj = { checks: [] };
  const def2 = _zod._zod.def;
  Object.defineProperty(obj, "shape", {
    get: function () {
      const obj = {};
      for (const key10003 in closure_0) {
        if (key10003 in def.shape) {
          if (!closure_0[key10003]) {
            continue;
          } else {
            obj[key10003] = tmp7.shape[key10003];
            continue;
          }
          continue;
        } else {
          let tmp = globalThis;
          let _Error = Error;
          let _HermesInternal = HermesInternal;
          let str = '"';
          let str2 = 'Unrecognized key: "';
          let self = this;
          let self2 = this;
          let error = new Error('Unrecognized key: "' + key10003 + '"');
          throw error;
        }
      }
      Object.defineProperty(this, "shape", { value: obj, writable: true, enumerable: true, configurable: true });
      return obj;
    },
    set: undefined,
  });
  let flag = mergeDefs(def2, obj);
  let def3 = flag;
  const constr = _zod._zod.constr;
  if (flag == null) {
    def3 = _zod._zod.def;
  }
  const constr1 = new constr(def3);
  if (flag) {
    flag = true;
  }
  if (!flag) {
    constr1._zod.parent = _zod;
  }
  return constr1;
};
export const omit = function omit(importDefaultResult3Result, paragraph) {
  let closure_0 = importDefaultResult3Result;
  closure_1 = paragraph;
  const def = importDefaultResult3Result._zod.def;
  const checks = def.checks;
  if (checks) {
    if (checks.length > 0) {
      let tmp2 = globalThis;
      let _Error = Error;
      let self = this;
      let str = ".omit() cannot be used on object schemas containing refinements";
      let self2 = this;
      let error = new Error(".omit() cannot be used on object schemas containing refinements");
      let tmp4 = error;
      throw error;
    }
  }
  let obj = { checks: [] };
  const def2 = importDefaultResult3Result._zod.def;
  Object.defineProperty(obj, "shape", {
    get: function () {
      const obj = {};
      const merged = Object.assign(_zod._zod.def.shape);
      for (const key10009 in closure_1) {
        if (key10009 in def.shape) {
          if (!closure_1[key10009]) {
            continue;
          } else {
            delete obj[tmp7];
            continue;
          }
          continue;
        } else {
          let tmp2 = globalThis;
          let _Error = Error;
          let _HermesInternal = HermesInternal;
          let str = '"';
          let str2 = 'Unrecognized key: "';
          let self = this;
          let self2 = this;
          let error = new Error('Unrecognized key: "' + key10009 + '"');
          throw error;
        }
      }
      Object.defineProperty(this, "shape", { value: obj, writable: true, enumerable: true, configurable: true });
      return obj;
    },
    set: undefined,
  });
  let flag = mergeDefs(def2, obj);
  let def3 = flag;
  const constr = importDefaultResult3Result._zod.constr;
  if (flag == null) {
    def3 = importDefaultResult3Result._zod.def;
  }
  const constr1 = new constr(def3);
  if (flag) {
    flag = true;
  }
  if (!flag) {
    constr1._zod.parent = importDefaultResult3Result;
  }
  return constr1;
};
export const extend = function extend(_zod, obj) {
  let closure_0 = _zod;
  closure_1 = obj;
  if (isPlainObject(obj)) {
    const checks = _zod._zod.def.checks;
    if (checks) {
      if (checks.length > 0) {
        for (const key10023 in obj) {
          let _Object = Object;
          if (undefined === Object.getOwnPropertyDescriptor(tmp4, key10023)) {
            continue;
          } else {
            let _Error2 = Error;
            let self3 = this;
            let str2 = "Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.";
            let self4 = this;
            let error = new Error(
              "Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.",
            );
            throw error;
          }
        }
      }
    }
    obj = {};
    const def = _zod._zod.def;
    Object.defineProperty(obj, "shape", {
      get: function () {
        const obj = {};
        const merged = Object.assign(_zod._zod.def.shape);
        const merged1 = Object.assign(closure_1);
        Object.defineProperty(this, "shape", { value: obj, writable: true, enumerable: true, configurable: true });
        return obj;
      },
      set: undefined,
    });
    let flag = mergeDefs(def, obj);
    let def2 = flag;
    const constr = _zod._zod.constr;
    if (flag == null) {
      def2 = _zod._zod.def;
    }
    const self5 = this;
    const self6 = this;
    const constr1 = new constr(def2);
    if (flag) {
      flag = true;
    }
    if (!flag) {
      constr1._zod.parent = _zod;
    }
    return constr1;
  } else {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error1 = new Error("Invalid input to extend: expected a plain object");
    throw error1;
  }
};
export const safeExtend = function safeExtend(_zod, arg1) {
  let closure_0 = _zod;
  closure_1 = arg1;
  if (isPlainObject(arg1)) {
    let obj = {};
    const def = _zod._zod.def;
    Object.defineProperty(obj, "shape", {
      get: function () {
        const obj = {};
        const merged = Object.assign(_zod._zod.def.shape);
        const merged1 = Object.assign(closure_1);
        Object.defineProperty(this, "shape", { value: obj, writable: true, enumerable: true, configurable: true });
        return obj;
      },
      set: undefined,
    });
    let flag = mergeDefs(def, obj);
    let def2 = flag;
    const constr = _zod._zod.constr;
    if (flag == null) {
      def2 = _zod._zod.def;
    }
    const self3 = this;
    const self4 = this;
    const constr1 = new constr(def2);
    if (flag) {
      flag = true;
    }
    if (!flag) {
      constr1._zod.parent = _zod;
    }
    return constr1;
  } else {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Invalid input to safeExtend: expected a plain object");
    throw error;
  }
};
export const merge = function merge(_zod, arg1) {
  let closure_0 = _zod;
  closure_1 = arg1;
  let obj = { checks: [] };
  const def = _zod._zod.def;
  Object.defineProperty(obj, "shape", {
    get: function () {
      const obj = {};
      const merged = Object.assign(_zod._zod.def.shape);
      const merged1 = Object.assign(closure_1._zod.def.shape);
      Object.defineProperty(this, "shape", { value: obj, writable: true, enumerable: true, configurable: true });
      return obj;
    },
    set: undefined,
  });
  Object.defineProperty(obj, "catchall", { get: () => closure_1._zod.def.catchall, set: undefined });
  let flag = mergeDefs(def, obj);
  let def2 = flag;
  const constr = _zod._zod.constr;
  if (flag == null) {
    def2 = _zod._zod.def;
  }
  const constr1 = new constr(def2);
  if (flag) {
    flag = true;
  }
  if (!flag) {
    constr1._zod.parent = _zod;
  }
  return constr1;
};
export const partial = function partial(arg0, _zod, arg2) {
  let closure_0 = arg0;
  closure_1 = _zod;
  let closure_2 = arg2;
  const checks = _zod._zod.def.checks;
  if (checks) {
    if (checks.length > 0) {
      let _Error = Error;
      let self = this;
      let str = ".partial() cannot be used on object schemas containing refinements";
      let self2 = this;
      let error = new Error(".partial() cannot be used on object schemas containing refinements");
      throw error;
    }
  }
  let obj = { checks: [] };
  const def = _zod._zod.def;
  Object.defineProperty(obj, "shape", {
    get: function () {
      const shape = _zod._zod.def.shape;
      const obj = {};
      const merged = Object.assign(shape);
      if (closure_2) {
        for (const key10020 in closure_2) {
          if (key10020 in shape) {
            if (!closure_2[key10020]) {
              continue;
            } else {
              let tmp112;
              let tmp12 = shape[key10020];
              if (closure_0) {
                let obj2 = { type: "optional", innerType: tmp12 };
                let self5 = this;
                let self6 = this;
                tmp112 = new tmp11(obj2);
              } else {
                tmp112 = tmp12;
              }
              obj[key10020] = tmp112;
              continue;
            }
            continue;
          } else {
            let tmp7 = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = '"';
            let str2 = 'Unrecognized key: "';
            let self3 = this;
            let self4 = this;
            let error = new Error('Unrecognized key: "' + key10020 + '"');
            throw error;
          }
        }
      } else {
        for (const key10011 in shape) {
          let tmp172;
          let tmp18 = shape[key10011];
          if (closure_0) {
            let obj3 = { type: "optional", innerType: tmp18 };
            let self = this;
            let self2 = this;
            tmp172 = new tmp17(obj3);
          } else {
            tmp172 = tmp18;
          }
          obj[key10011] = tmp172;
          continue;
        }
      }
      Object.defineProperty(this, "shape", { value: obj, writable: true, enumerable: true, configurable: true });
      return obj;
    },
    set: undefined,
  });
  let flag = mergeDefs(def, obj);
  let def2 = flag;
  const constr = _zod._zod.constr;
  if (flag == null) {
    def2 = _zod._zod.def;
  }
  const constr1 = new constr(def2);
  if (flag) {
    flag = true;
  }
  if (!flag) {
    constr1._zod.parent = _zod;
  }
  return constr1;
};
export const required = function required(arg0, _zod, arg2) {
  let closure_0 = arg0;
  closure_1 = _zod;
  let closure_2 = arg2;
  let obj = {};
  const def = _zod._zod.def;
  Object.defineProperty(obj, "shape", {
    get: function () {
      const shape = _zod._zod.def.shape;
      const obj = {};
      const merged = Object.assign(shape);
      if (closure_2) {
        for (const key10014 in closure_2) {
          if (key10014 in obj) {
            if (!closure_2[key10014]) {
              continue;
            } else {
              let obj2 = { type: "nonoptional", innerType: shape[key10014] };
              let self3 = this;
              let self4 = this;
              let tmp11 = new closure_0(obj2);
              obj[key10014] = tmp11;
              continue;
            }
            continue;
          } else {
            let tmp5 = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = '"';
            let str2 = 'Unrecognized key: "';
            let self = this;
            let self2 = this;
            let error = new Error('Unrecognized key: "' + key10014 + '"');
            throw error;
          }
        }
      } else {
        for (const key10011 in shape) {
          let obj3 = { type: "nonoptional", innerType: shape[key10011] };
          let self5 = this;
          let self6 = this;
          let tmp17 = new closure_0(obj3);
          obj[key10011] = tmp17;
          continue;
        }
      }
      Object.defineProperty(this, "shape", { value: obj, writable: true, enumerable: true, configurable: true });
      return obj;
    },
    set: undefined,
  });
  let flag = mergeDefs(def, obj);
  let def2 = flag;
  const constr = _zod._zod.constr;
  if (flag == null) {
    def2 = _zod._zod.def;
  }
  const constr1 = new constr(def2);
  if (flag) {
    flag = true;
  }
  if (!flag) {
    constr1._zod.parent = _zod;
  }
  return constr1;
};
export const aborted = function aborted(length) {
  let num = length2;
  if (length2 === undefined) {
    num = 0;
  }
  if (true === length.aborted) {
    return true;
  } else {
    if (num < length.issues.length) {
      while (true) {
        let tmp2 = length.issues[num];
        let _continue;
        if (tmp2 != null) {
          _continue = tmp2.continue;
        }
        if (true !== _continue) {
          break;
        } else {
          num = num + 1;
        }
      }
      return true;
    }
    return false;
  }
};
export const prefixIssues = function prefixIssues(key10019, issues) {
  let closure_0 = key10019;
  return issues.map((path) => {
    if (path.path == null) {
      path.path = [];
    }
    path = path.path;
    path.unshift(key10019);
    return path;
  });
};
export const unwrapMessage = function unwrapMessage(message) {
  let tmp = message;
  if (typeof message !== "string") {
    message = undefined;
    if (message != null) {
      message = message.message;
    }
    tmp = message;
  }
  return tmp;
};
export const finalizeIssue = function finalizeIssue(path, merged, NEVER) {
  const obj = { path };
  merged = Object.assign(path);
  path = path.path;
  if (path == null) {
    path = [];
  }
  if (!path.message) {
    const inst = path.inst;
    let errorResult;
    if (inst != null) {
      const def = inst._zod.def;
      if (def != null) {
        const error = def.error;
        if (error != null) {
          errorResult = error(path);
        }
      }
    }
    let str = errorResult;
    if (typeof errorResult !== "string") {
      let message;
      if (errorResult != null) {
        message = errorResult.message;
      }
      str = message;
    }
    if (str == null) {
      let error2Result;
      if (merged != null) {
        const error2 = merged.error;
        if (error2 != null) {
          error2Result = error2(path);
        }
      }
      let tmp5 = error2Result;
      if (typeof error2Result !== "string") {
        let message1;
        if (error2Result != null) {
          message1 = error2Result.message;
        }
        tmp5 = message1;
      }
      str = tmp5;
    }
    if (str == null) {
      const customError = NEVER.customError;
      let customErrorResult;
      if (customError != null) {
        customErrorResult = customError(path);
      }
      let tmp9 = customErrorResult;
      if (typeof customErrorResult !== "string") {
        let message2;
        if (customErrorResult != null) {
          message2 = customErrorResult.message;
        }
        tmp9 = message2;
      }
      str = tmp9;
    }
    if (str == null) {
      const localeError = NEVER.localeError;
      let localeErrorResult;
      if (localeError != null) {
        localeErrorResult = localeError(path);
      }
      let tmp12 = localeErrorResult;
      if (typeof localeErrorResult !== "string") {
        let message3;
        if (localeErrorResult != null) {
          message3 = localeErrorResult.message;
        }
        tmp12 = message3;
      }
      str = tmp12;
    }
    if (str == null) {
      str = "Invalid input";
    }
    obj.message = str;
  }
  delete obj["inst"];
  delete obj["continue"];
  let reportInput;
  if (merged != null) {
    reportInput = merged.reportInput;
  }
  if (!reportInput) {
    delete obj["input"];
  }
  return obj;
};
export const getSizableOrigin = function getSizableOrigin(value) {
  let str = "set";
  if (!(value instanceof Set)) {
    const _Map = Map;
    let str2 = "map";
    if (!(value instanceof Map)) {
      const _File = File;
      let str3 = "unknown";
      if (value instanceof File) {
        str3 = "file";
      }
      str2 = str3;
    }
    str = str2;
  }
  return str;
};
export const getLengthableOrigin = function getLengthableOrigin(value) {
  let str = "array";
  if (!Array.isArray(value)) {
    let str2 = "unknown";
    if (typeof value === "string") {
      str2 = "string";
    }
    str = str2;
  }
  return str;
};
export const parsedType = function parsedType(input) {
  let str = "number";
  if ("number" === typeof input) {
    const _Number = Number;
    if (Number.isNaN(input)) {
      str = "nan";
    }
    return str;
  } else {
    if ("object" === typeof input) {
      if (null === input) {
        return "null";
      } else {
        const _Array = Array;
        if (Array.isArray(input)) {
          return "array";
        } else if (input) {
          const _Object = Object;
          const _Object2 = Object;
          if (Object.getPrototypeOf(input) !== Object.prototype) {
            if ("constructor" in input) {
              if (input.constructor) {
                return input.constructor.name;
              }
            }
          }
        }
      }
    }
    return typeof input;
  }
};
export const issue = function issue() {
  const items = [...arguments];
  const first = items[0];
  if (typeof first === "string") {
    return { message: first, code: "custom", input: tmp2, inst: tmp3 };
  } else {
    const obj2 = {};
    const merged = Object.assign(first);
    return obj2;
  }
};
export const cleanEnum = function cleanEnum(arg0) {
  const entries = Object.entries(arg0);
  const found = entries.filter((item) => {
    let tmp;
    [tmp] = item;
    return Number.isNaN(Number.parseInt(tmp, 10));
  });
  return found.map((item) => item[1]);
};
export const base64ToUint8Array = function base64ToUint8Array(placeholder) {
  let length;
  const atobResult = atob(placeholder);
  const uint8Array = new Uint8Array(atobResult.length);
  let num = 0;
  if (0 < atobResult.length) {
    do {
      uint8Array[num] = atobResult.charCodeAt(num);
      num = num + 1;
      length = atobResult.length;
    } while (num < length);
  }
  return uint8Array;
};
export const uint8ArrayToBase64 = function uint8ArrayToBase64(arg0) {
  let length;
  let num = 0;
  let str = "";
  let str2 = "";
  if (0 < arg0.length) {
    do {
      let _String = String;
      str = `${String.fromCharCode(arg0[num])}`;
      num = num + 1;
      str2 = str;
      length = arg0.length;
    } while (num < length);
  }
  return btoa(str2);
};
export const base64urlToUint8Array = function base64urlToUint8Array(str) {
  let length;
  str = str.replace(/-/g, "+");
  const replaced = str.replace(/_/g, "/");
  const atobResult = atob(replaced + "=".repeat((4 - (replaced.length % 4)) % 4));
  const uint8Array = new Uint8Array(atobResult.length);
  let num = 0;
  if (0 < atobResult.length) {
    do {
      uint8Array[num] = atobResult.charCodeAt(num);
      num = num + 1;
      length = atobResult.length;
    } while (num < length);
  }
  return uint8Array;
};
export const uint8ArrayToBase64url = function uint8ArrayToBase64url(arg0) {
  let length;
  let num = 0;
  let str = "";
  let str2 = "";
  if (0 < arg0.length) {
    do {
      let _String = String;
      str = `${String.fromCharCode(arg0[num])}`;
      num = num + 1;
      str2 = str;
      length = arg0.length;
    } while (num < length);
  }
  const str3 = btoa(str2);
  const str4 = str3.replace(/\+/g, "-");
  const str5 = str4.replace(/\//g, "_");
  return str5.replace(/=/g, "");
};
export const hexToUint8Array = function hexToUint8Array(str) {
  let length;
  let sum;
  const replaced = str.replace(/^0x/, "");
  if (replaced.length % 2 !== 0) {
    const _Error = Error;
    const self3 = this;
    const self4 = this;
    const error = new Error("Invalid hex string length");
    throw error;
  } else {
    const _Uint8Array = Uint8Array;
    const self = this;
    const self2 = this;
    const uint8Array = new Uint8Array(replaced.length / 2);
    let num2 = 0;
    if (0 < replaced.length) {
      do {
        let _Number = Number;
        sum = num2 + 2;
        uint8Array[num2 / 2] = Number.parseInt(replaced.slice(num2, sum), 16);
        num2 = sum;
        length = replaced.length;
      } while (sum < length);
    }
    return uint8Array;
  }
};
export const uint8ArrayToHex = function uint8ArrayToHex(arg0) {
  const arr = Array.from(arg0);
  const mapped = arr.map((item) => {
    const str = item.toString(16);
    return str.padStart(2, "0");
  });
  return mapped.join("");
};
export const captureStackTrace = fn;
export const allowsEval = obj;
export const getParsedType = function (self) {
  if ("undefined" === typeof self) {
    return "undefined";
  } else if ("string" === typeof self) {
    return "string";
  } else {
    let str9 = "number";
    if ("number" === typeof self) {
      const _Number = Number;
      if (Number.isNaN(self)) {
        str9 = "nan";
      }
      return str9;
    } else if ("boolean" === typeof self) {
      return "boolean";
    } else if ("function" === typeof self) {
      return "function";
    } else if ("bigint" === typeof self) {
      return "bigint";
    } else if ("symbol" === typeof self) {
      return "symbol";
    } else if ("object" === typeof self) {
      const _Array = Array;
      let str2 = "array";
      if (!Array.isArray(self)) {
        let str3 = "null";
        if (null !== self) {
          let str8;
          if (self.then) {
            if (typeof self.then === "function") {
              let str4;
              if (self.catch) {
                str4 = "promise";
              }
              str3 = str4;
            }
          }
          const _Map = Map;
          if (typeof Map === "undefined") {
            let str7;
            const _Set = Set;
            if (typeof Set === "undefined") {
              let str6;
              const _Date = Date;
              if (typeof Date === "undefined") {
                const _File = File;
                let str5 = "object";
                if (typeof File !== "undefined") {
                  const _File2 = File;
                  str5 = "object";
                  if (self instanceof File) {
                    str5 = "file";
                  }
                }
                str6 = str5;
              } else {
                const _Date2 = Date;
                str6 = "date";
              }
              str7 = str6;
            } else {
              const _Set2 = Set;
              str7 = "set";
            }
            str8 = str7;
          } else {
            const _Map2 = Map;
            str8 = "map";
          }
          str4 = str8;
        }
        str2 = str3;
      }
      return str2;
    } else {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      self = this;
      const self2 = this;
      const error = new Error("Unknown data type: " + tmp);
      throw error;
    }
  }
};
export const propertyKeyTypes = new Set(["string", "number", "symbol"]);
export const primitiveTypes = new Set(["string", "number", "bigint", "boolean", "symbol", "undefined"]);
export const NUMBER_FORMAT_RANGES = obj2;
export const BIGINT_FORMAT_RANGES = obj3;
export { Class_export as Class };
