// _runtime/12203_mergeDefs.js
import _createClass from "metro/00042__createClass.js";
import _classCallCheck from "metro/00041__classCallCheck.js";

function mergeDefs(def, arg1) {
  const items = [...arguments];
  const obj = {};
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
      if (false === tmp4) {
        return tmp5;
      } else {
        const _Object = Object;
        const call = hasOwnProperty.call;
        if (typeof call === "unknown") {
          let hasOwnPropertyResult = hasOwnProperty("isPrototypeOf");
        } else {
          hasOwnPropertyResult = call(prototype, "isPrototypeOf");
        }
      }
    }
  }
}
let closure_1 = Symbol("evaluating");
if ("captureStackTrace" in Error) {
  let _Error = Error;
  let fn = Error.captureStackTrace;
} else {
  fn = () => {

  };
}
_classCallCheck = () => {
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
    const _function = new Function("");
    return true;
  } catch (err) {
    return false;
  }
};
let obj = {};
Object.defineProperty(obj, "value", {
  get: function() {
    const tmp = callback();
    Object.defineProperty(this, "value", { value: tmp });
    return tmp;
  },
  set: undefined
});
const set = new Set(["string", "number", "symbol"]);
let items = [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];
const items1 = [-Number.MAX_VALUE, Number.MAX_VALUE];
obj = { int64: null, uint64: null };
const items2 = [BigInt("-9223372036854775808"), BigInt("9223372036854775807")];
obj[0] = items2;
const items3 = [require("../discord_app/index.native.tsx"), BigInt("18446744073709551615")];
obj[1] = items3;
class Class {
  constructor() {
    tmp = f53362(this, Class);
    return;
  }
}

export function assertEqual(arg0) {
  return arg0;
}
export function assertNotEqual(arg0) {
  return arg0;
}
export function assertIs(arg0) {

}
export const assertNever = function assertNever(arg0) {
  error = new Error("Unexpected value in exhaustive check");
  throw error;
};
export function assert(arg0) {

}
export const getEnumValues = function getEnumValues(entries) {
  const values = Object.values(entries);
  closure_0 = values.filter((item, index) => typeof item === "number");
  entries = Object.entries(entries);
  const found = entries.filter((item, index) => {
    [tmp, ] = item;
    return -1 === closure_0.indexOf(+tmp);
  });
  return found.map((item, index) => {
    [, tmp] = item;
    return tmp;
  });
};
export const joinValues = function joinValues(keys, arg1) {
  let str = arg1;
  if (arg1 === undefined) {
    str = "|";
  }
  const mapped = keys.map((item, index) => {
    if (typeof item === "bigint") {
      let text = `${item.toString()}n`;
    } else if (typeof item === "string") {
      const _HermesInternal = HermesInternal;
      text = "\"" + item + "\"";
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
  closure_0 = arg0;
  const obj = {};
  Object.defineProperty(obj, "value", {
    get: function() {
      const tmp = callback();
      Object.defineProperty(this, "value", { value: tmp });
      return tmp;
    },
    set: undefined
  });
  return obj;
};
export const nullish = function nullish(arg0) {
  return null == arg0;
};
export const cleanRegex = function cleanRegex(source) {
  let num = 0;
  if (source.startsWith("^")) {
    num = 1;
  }
  if (source.endsWith("$")) {
    let diff = length - 1;
  } else {
    diff = length;
  }
  return source.slice(num, diff);
};
export const floatSafeRemainder = function floatSafeRemainder(value, value2) {
  const str = value.toString();
  const length = value.toString().split(".")[1] || "".length;
  const str2 = value2.toString();
  const arr = value.toString().split(".")[1] || "";
  const length2 = str2.split(".")[1] || "".length;
  let parsed = length2;
  if (0 === length2) {
    parsed = length2;
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
    obj = /\d?e-\d?/;
  }
  if (length > parsed) {
    parsed = length;
  }
  const arr2 = str2.split(".")[1] || "";
  const parsed1 = Number.parseInt(value.toFixed(parsed).replace(".", ""));
  const str3 = value.toFixed(parsed);
  return parsed1 % Number.parseInt(value2.toFixed(parsed).replace(".", "")) / 10 ** parsed;
};
export const defineLazy = function defineLazy(_zod, values, arg2) {
  closure_0 = _zod;
  closure_1 = values;
  closure_2 = arg2;
  Object.defineProperty(_zod, values, {
    get() {
      let tmp = closure_3;
      if (closure_3 !== closure_1) {
        if (undefined === tmp) {
          const tmp4 = callback();
          closure_3 = tmp4;
          tmp = tmp4;
        }
        return tmp;
      }
    },
    set(value) {
      Object.defineProperty(closure_0, closure_1, { value });
    },
    configurable: true
  });
};
export const objectClone = function objectClone(_Object6Result) {
  const prototypeOf = Object.getPrototypeOf(_Object6Result);
  return Object.create(prototypeOf, Object.getOwnPropertyDescriptors(_Object6Result));
};
export const assignProp = function assignProp(arg0, arg1, value) {
  Object.defineProperty(arg0, arg1, { value, writable: true, enumerable: true, configurable: true });
};
export { mergeDefs };
export const cloneDef = function cloneDef(_zod) {
  return mergeDefs(_zod._zod.def);
};
export const getElementAtPath = function getElementAtPath(arg0, arr) {
  let reduced = arg0;
  if (arr) {
    reduced = arr.reduce((acc, item, index) => {
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
  closure_0 = arg0;
  const keys = Object.keys(arg0);
  return Promise.all(keys.map((item, index) => table[item])).then((result) => {
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
      str = `${"abcdefghijklmnopqrstuvwxyz"[tmp(Math, 26 * Math.random(Math))]}`;
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
  const str3 = str.trim().replace(/[^\w\s-]/g, "");
  return str.trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
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
export const shallowClone = function shallowClone(closure_0) {
  if (isPlainObject(closure_0)) {
    const obj = {};
    const merged = Object.assign(closure_0);
    let tmp2 = obj;
  } else {
    const _Array = Array;
    tmp2 = closure_0;
    if (Array.isArray(closure_0)) {
      const items = [];
      HermesBuiltin.arraySpread(closure_0, 0);
      tmp2 = items;
    }
  }
  return tmp2;
};
export const numKeys = function numKeys(arg0) {
  let num = 0;
  let num2 = 0;
  const keys = Object.keys();
  if (keys !== undefined) {
    num2 = num;
    while (keys[tmp] !== undefined) {
      let _Object = Object;
      let call = hasOwnProperty.call;
      if (!(typeof call === "unknown" ? hasOwnProperty(tmp4) : call(arg0, tmp4))) {
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
  if (arg1 == null) {
    def = _zod._zod.def;
  }
  const constr = new _zod._zod.constr(def);
  if (tmp) {
    parent = undefined;
    if (parent != null) {
      parent = parent.parent;
    }
    tmp = !parent;
  }
  if (!tmp) {
    constr._zod.parent = _zod;
  }
  return constr;
};
export const normalizeParams = function normalizeParams(message) {
  closure_0 = message;
  if (message) {
    if (typeof message === "string") {
      let obj = { error: null };
      obj[0] = function error() {
        return closure_0;
      };
      return obj;
    } else {
      message = undefined;
      if (message != null) {
        message = message.message;
      }
      if (undefined !== message) {
        error = undefined;
        if (message != null) {
          error = message.error;
        }
        if (undefined !== error) {
          const _Error = Error;
          const error1 = new Error("Cannot specify both `message` and `error` params");
          throw error1;
        } else {
          message.error = message.message;
        }
      }
      delete tmp2[tmp];
      let tmp5 = message;
      if (typeof message.error === "string") {
        obj = {};
        const merged = Object.assign(message);
        obj.error = function error() {
          return message.error;
        };
        tmp5 = obj;
      }
      return tmp5;
    }
  } else {
    return {};
  }
};
export const createTransparentProxy = function createTransparentProxy(arg0) {
  closure_0 = arg0;
  const proxy = new Proxy({}, {
    get(arg0, arg1, arg2) {
      if (closure_1 == null) {
        closure_1 = callback();
      }
      return Reflect.get(closure_1, arg1, arg2);
    },
    set(arg0, arg1, arg2, arg3) {
      if (closure_1 == null) {
        closure_1 = callback();
      }
      return Reflect.set(closure_1, arg1, arg2, arg3);
    },
    has(arg0, arg1) {
      if (closure_1 == null) {
        closure_1 = callback();
      }
      return Reflect.has(closure_1, arg1);
    },
    deleteProperty(closure_1, arg1) {
      if (closure_1 == null) {
        closure_1 = callback();
      }
      return Reflect.deleteProperty(closure_1, arg1);
    },
    ownKeys(arg0) {
      if (closure_1 == null) {
        closure_1 = callback();
      }
      return Reflect.ownKeys(closure_1);
    },
    getOwnPropertyDescriptor(arg0, arg1) {
      if (closure_1 == null) {
        closure_1 = callback();
      }
      return Reflect.getOwnPropertyDescriptor(closure_1, arg1);
    },
    defineProperty(arg0, arg1, arg2) {
      if (closure_1 == null) {
        closure_1 = callback();
      }
      return Reflect.defineProperty(closure_1, arg1, arg2);
    }
  });
  return proxy;
};
export const stringifyPrimitive = function stringifyPrimitive(item) {
  if (typeof item === "bigint") {
    let text = `${item.toString()}n`;
  } else if (typeof item === "string") {
    const _HermesInternal = HermesInternal;
    text = "\"" + item + "\"";
  } else {
    const _HermesInternal2 = HermesInternal;
    text = "" + item;
  }
  return text;
};
export const optionalKeys = function optionalKeys(arg0) {
  closure_0 = arg0;
  const keys = Object.keys(arg0);
  return keys.filter((item, index) => "optional" === dependencyMap[item]._zod.optin && "optional" === dependencyMap[item]._zod.optout);
};
export const pick = function pick(_zod) {
  closure_0 = arg1;
  const def = _zod._zod.def;
  const checks = def.checks;
  if (checks) {
    if (checks.length > 0) {
      let _Error = Error;
      error = new Error(".pick() cannot be used on object schemas containing refinements");
      throw error;
    }
  }
  let obj = {};
  Object.defineProperty(obj, "shape", {
    get: function() {
      const obj = {};
      for (const key10003 in closure_0) {
        if (key10003 in def.shape) {
          if (!table[key10003]) {
            continue;
          } else {
            obj[key10003] = tmp9.shape[key10003];
            continue;
          }
          continue;
        } else {
          let _Error = Error;
          let _HermesInternal = HermesInternal;
          error = new Error("Unrecognized key: \"" + key10003 + "\"");
          throw error;
        }
      }
      Object.defineProperty(this, "shape", { value: obj, writable: true, enumerable: true, configurable: true });
      return obj;
    },
    set: undefined
  });
  obj.checks = [];
  let flag = mergeDefs(_zod._zod.def, obj);
  let def2 = flag;
  if (flag == null) {
    def2 = _zod._zod.def;
  }
  const constr = new _zod._zod.constr(def2);
  if (flag) {
    flag = true;
  }
  if (!flag) {
    constr._zod.parent = _zod;
  }
  return constr;
};
export const omit = function omit(importDefaultResult3Result, closure_3, newline) {
  closure_0 = importDefaultResult3Result;
  closure_1 = closure_3;
  const def = importDefaultResult3Result._zod.def;
  const checks = def.checks;
  if (checks) {
    if (checks.length > 0) {
      let _Error = Error;
      error = new Error(".omit() cannot be used on object schemas containing refinements");
      throw error;
    }
  }
  let obj = {};
  Object.defineProperty(obj, "shape", {
    get: function() {
      const obj = {};
      const merged = Object.assign(importDefaultResult3Result._zod.def.shape);
      for (const key10009 in closure_1) {
        if (key10009 in def.shape) {
          if (!table[key10009]) {
            continue;
          } else {
            delete tmp[tmp2];
            continue;
          }
          continue;
        } else {
          let _Error = Error;
          let _HermesInternal = HermesInternal;
          error = new Error("Unrecognized key: \"" + key10009 + "\"");
          throw error;
        }
      }
      Object.defineProperty(this, "shape", { value: obj, writable: true, enumerable: true, configurable: true });
      return obj;
    },
    set: undefined
  });
  obj.checks = [];
  let flag = def(importDefaultResult3Result._zod.def, obj);
  let def2 = flag;
  if (flag == null) {
    def2 = importDefaultResult3Result._zod.def;
  }
  const constr = new importDefaultResult3Result._zod.constr(def2);
  if (flag) {
    flag = true;
  }
  if (!flag) {
    constr._zod.parent = importDefaultResult3Result;
  }
  return constr;
};
export const extend = function extend(_zod, obj) {
  closure_0 = _zod;
  closure_1 = obj;
  if (isPlainObject(obj)) {
    const checks = _zod._zod.def.checks;
    if (checks) {
      if (checks.length > 0) {
        for (const key10023 in arg1) {
          let _Object = Object;
          if (undefined === Object.getOwnPropertyDescriptor(tmp6, key10023)) {
            continue;
          } else {
            let _Error2 = Error;
            error = new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
            throw error;
          }
        }
      }
    }
    obj = {};
    Object.defineProperty(obj, "shape", {
      get: function() {
          obj = {};
          const merged = Object.assign(_zod._zod.def.shape);
          const merged1 = Object.assign(closure_1);
          Object.defineProperty(this, "shape", { value: obj, writable: true, enumerable: true, configurable: true });
          return obj;
        },
      set: undefined
    });
    let flag = mergeDefs(_zod._zod.def, obj);
    let def = flag;
    if (flag == null) {
      def = _zod._zod.def;
    }
    const constr = new _zod._zod.constr(def);
    if (flag) {
      flag = true;
    }
    if (!flag) {
      constr._zod.parent = _zod;
    }
    return constr;
  } else {
    const _Error = Error;
    const error1 = new Error("Invalid input to extend: expected a plain object");
    throw error1;
  }
};
export const safeExtend = function safeExtend(closure_0, arg1) {
  closure_1 = arg1;
  if (isPlainObject(arg1)) {
    let obj = {};
    Object.defineProperty(obj, "shape", {
      get: function() {
          const obj = {};
          const merged = Object.assign(_zod._zod.def.shape);
          const merged1 = Object.assign(closure_1);
          Object.defineProperty(this, "shape", { value: obj, writable: true, enumerable: true, configurable: true });
          return obj;
        },
      set: undefined
    });
    let flag = mergeDefs(_classCallCheck._zod.def, obj);
    let def = flag;
    if (flag == null) {
      def = _classCallCheck._zod.def;
    }
    const constr = new _classCallCheck._zod.constr(def);
    if (flag) {
      flag = true;
    }
    if (!flag) {
      constr._zod.parent = _classCallCheck;
    }
    return constr;
  } else {
    const _Error = Error;
    error = new Error("Invalid input to safeExtend: expected a plain object");
    throw error;
  }
};
export const merge = function merge(_zod) {
  closure_0 = _zod;
  closure_1 = arg1;
  let obj = {};
  Object.defineProperty(obj, "shape", {
    get: function() {
      const obj = {};
      const merged = Object.assign(_zod._zod.def.shape);
      const merged1 = Object.assign(closure_1._zod.def.shape);
      Object.defineProperty(this, "shape", { value: obj, writable: true, enumerable: true, configurable: true });
      return obj;
    },
    set: undefined
  });
  Object.defineProperty(obj, "catchall", { get: () => closure_1._zod.def.catchall, set: undefined });
  obj.checks = [];
  let flag = mergeDefs(_zod._zod.def, obj);
  let def = flag;
  if (flag == null) {
    def = _zod._zod.def;
  }
  const constr = new _zod._zod.constr(def);
  if (flag) {
    flag = true;
  }
  if (!flag) {
    constr._zod.parent = _zod;
  }
  return constr;
};
export const partial = function partial(arg0, _zod) {
  closure_0 = arg0;
  closure_1 = _zod;
  mergeDefs = arg2;
  const checks = _zod._zod.def.checks;
  if (checks) {
    if (checks.length > 0) {
      let _Error = Error;
      error = new Error(".partial() cannot be used on object schemas containing refinements");
      throw error;
    }
  }
  let obj = {};
  Object.defineProperty(obj, "shape", {
    get: function() {
      const shape = _zod._zod.def.shape;
      let obj = {};
      const merged = Object.assign(shape);
      if (table) {
        for (const key10020 in tmp2) {
          if (key10020 in shape) {
            if (!table[key10020]) {
              continue;
            } else {
              let tmp16 = shape[key10020];
              if (closure_0) {
                obj = { type: "optional", innerType: null };
                obj[1] = tmp16;
                let tmp15 = new tmp15(obj);
              } else {
                tmp15 = tmp16;
              }
              obj[key10020] = tmp15;
              continue;
            }
            continue;
          } else {
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            error = new Error("Unrecognized key: \"" + key10020 + "\"");
            throw error;
          }
        }
      } else {
        for (const key10011 in shape) {
          let tmp24 = shape[key10011];
          if (closure_0) {
            obj = { type: "optional", innerType: null };
            obj[1] = tmp24;
            let tmp23 = new tmp23(obj);
          } else {
            tmp23 = tmp24;
          }
          obj[key10011] = tmp23;
          continue;
        }
      }
      Object.defineProperty(this, "shape", { value: obj, writable: true, enumerable: true, configurable: true });
      return obj;
    },
    set: undefined
  });
  obj.checks = [];
  let flag = mergeDefs(_zod._zod.def, obj);
  let def = flag;
  if (flag == null) {
    def = _zod._zod.def;
  }
  const constr = new _zod._zod.constr(def);
  if (flag) {
    flag = true;
  }
  if (!flag) {
    constr._zod.parent = _zod;
  }
  return constr;
};
export const required = function required(arg0, _zod) {
  closure_0 = arg0;
  closure_1 = _zod;
  mergeDefs = arg2;
  let obj = {};
  Object.defineProperty(obj, "shape", {
    get: function() {
      const shape = _zod._zod.def.shape;
      let obj = {};
      const merged = Object.assign(shape);
      if (table) {
        for (const key10014 in tmp2) {
          if (key10014 in obj) {
            if (!table[key10014]) {
              continue;
            } else {
              obj = { type: "nonoptional", innerType: null };
              obj[1] = shape[key10014];
              let tmp15 = new closure_0(obj);
              obj[key10014] = tmp15;
              continue;
            }
            continue;
          } else {
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            error = new Error("Unrecognized key: \"" + key10014 + "\"");
            throw error;
          }
        }
      } else {
        for (const key10011 in shape) {
          obj = { type: "nonoptional", innerType: null };
          obj[1] = shape[key10011];
          let tmp23 = new closure_0(obj);
          obj[key10011] = tmp23;
          continue;
        }
      }
      Object.defineProperty(this, "shape", { value: obj, writable: true, enumerable: true, configurable: true });
      return obj;
    },
    set: undefined
  });
  let flag = mergeDefs(_zod._zod.def, obj);
  let def = flag;
  if (flag == null) {
    def = _zod._zod.def;
  }
  const constr = new _zod._zod.constr(def);
  if (flag) {
    flag = true;
  }
  if (!flag) {
    constr._zod.parent = _zod;
  }
  return constr;
};
export const aborted = function aborted(closure_1_0, closure_0) {
  let num = closure_0;
  if (closure_0 === undefined) {
    num = 0;
  }
  if (true === _classCallCheck.aborted) {
    return true;
  } else {
    if (num < _classCallCheck.issues.length) {
      while (true) {
        let tmp2 = _classCallCheck.issues[num];
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
export const prefixIssues = function prefixIssues(closure_0, issues) {
  return issues.map((item, index) => {
    if (item.path == null) {
      item.path = [];
    }
    const path = item.path;
    path.unshift(closure_0);
    return item;
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
export const finalizeIssue = function finalizeIssue(path, closure_0, closure_1_8) {
  const obj = {};
  const merged = Object.assign(path);
  path = path.path;
  if (path == null) {
    path = [];
  }
  obj.path = path;
  if (!path.message) {
    const inst = path.inst;
    let errorResult;
    if (inst != null) {
      const def = inst._zod.def;
      if (def != null) {
        error = def.error;
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
      if (_classCallCheck != null) {
        const error2 = _classCallCheck.error;
        if (error2 != null) {
          error2Result = error2(path);
        }
      }
      let tmp7 = error2Result;
      if (typeof error2Result !== "string") {
        let message1;
        if (error2Result != null) {
          message1 = error2Result.message;
        }
        tmp7 = message1;
      }
      str = tmp7;
    }
    if (str == null) {
      const customError = closure_1_8.customError;
      let customErrorResult;
      if (customError != null) {
        customErrorResult = customError(path);
      }
      let tmp11 = customErrorResult;
      if (typeof customErrorResult !== "string") {
        let message2;
        if (customErrorResult != null) {
          message2 = customErrorResult.message;
        }
        tmp11 = message2;
      }
      str = tmp11;
    }
    if (str == null) {
      const localeError = closure_1_8.localeError;
      let localeErrorResult;
      if (localeError != null) {
        localeErrorResult = localeError(path);
      }
      let tmp14 = localeErrorResult;
      if (typeof localeErrorResult !== "string") {
        let message3;
        if (localeErrorResult != null) {
          message3 = localeErrorResult.message;
        }
        tmp14 = message3;
      }
      str = tmp14;
    }
    if (str == null) {
      str = "Invalid input";
    }
    obj.message = str;
  }
  delete tmp[tmp2];
  delete tmp[tmp2];
  let reportInput;
  if (_classCallCheck != null) {
    reportInput = _classCallCheck.reportInput;
  }
  if (!reportInput) {
    delete tmp[tmp2];
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
    if ("object" === tmp) {
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
    return tmp;
  }
};
export const issue = function issue(fatal, value, closure_1_1) {
  const items = [...arguments];
  const first = items[0];
  if (typeof first === "string") {
    let obj = { message: null, code: "custom", input: null, inst: null };
    obj[0] = first;
    obj[2] = tmp2;
    obj[3] = tmp3;
    return obj;
  } else {
    obj = {};
    const merged = Object.assign(first);
    return obj;
  }
};
export const cleanEnum = function cleanEnum(arg0) {
  const entries = Object.entries(arg0);
  const found = entries.filter((item, index) => {
    [tmp, ] = item;
    return Number.isNaN(Number.parseInt(tmp, 10));
  });
  return found.map((item, index) => item[1]);
};
export const base64ToUint8Array = function base64ToUint8Array(closure_0) {
  let length;
  const atobResult = atob(closure_0);
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
  const atobResult = atob(replaced + "=".repeat((4 - replaced.length % 4) % 4));
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
  const str4 = btoa(str2).replace(/\+/g, "-");
  return btoa(str2).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
};
export const hexToUint8Array = function hexToUint8Array(str) {
  let length;
  let sum;
  const replaced = str.replace(/^0x/, "");
  if (replaced.length % 2 !== 0) {
    const _Error = Error;
    error = new Error("Invalid hex string length");
    throw error;
  } else {
    const _Uint8Array = Uint8Array;
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
  const mapped = Array.from(arg0).map((item, index) => item.toString(16).padStart(2, "0"));
  return mapped.join("");
};
export const captureStackTrace = fn;
export const allowsEval = obj;
export const getParsedType = (self) => {
  if ("undefined" === typeof self) {
    return "undefined";
  } else if ("string" === tmp) {
    return "string";
  } else {
    let str9 = "number";
    if ("number" === tmp) {
      const _Number = Number;
      if (Number.isNaN(self)) {
        str9 = "nan";
      }
      return str9;
    } else if ("boolean" === tmp) {
      return "boolean";
    } else if ("function" === tmp) {
      return "function";
    } else if ("bigint" === tmp) {
      return "bigint";
    } else if ("symbol" === tmp) {
      return "symbol";
    } else if ("object" === tmp) {
      const _Array = Array;
      let str2 = "array";
      if (!Array.isArray(self)) {
        let str3 = "null";
        if (null !== self) {
          if (self.then) {
            if (typeof self.then === "function") {
              if (self.catch) {
                let str4 = "promise";
              }
              str3 = str4;
            }
          }
          const _Map = Map;
          if (typeof Map === "undefined") {
            const _Set = Set;
            if (typeof Set === "undefined") {
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
                let str6 = str5;
              } else {
                const _Date2 = Date;
                str6 = "date";
              }
              let str7 = str6;
            } else {
              const _Set2 = Set;
              str7 = "set";
            }
            let str8 = str7;
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
      error = new Error("Unknown data type: " + tmp);
      throw error;
    }
  }
};
export const propertyKeyTypes = new Set(["string", "number", "symbol"]);
export const primitiveTypes = new Set(["string", "number", "bigint", "boolean", "symbol", "undefined"]);
export const NUMBER_FORMAT_RANGES = { safeint: items, int32: [-2147483648, 2147483647], uint32: [0, 4294967295], float32: [-340282346638528860000000000000000000000, 340282346638528860000000000000000000000], float64: items1 };
export const BIGINT_FORMAT_RANGES = obj;
export const Class = _createClass(Class);