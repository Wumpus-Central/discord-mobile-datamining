// _runtime/metro/15810__.js
const exports = arg5;
let obj = {};
let closure_129_0 = obj;
obj.assertEqual = (arg0) => arg0;
obj.assertIs = function assertIs(arg0) {

};
obj.assertNever = function assertNever(arg0) {
  const error = new Error();
  throw error;
};
obj.arrayToEnum = (arg0) => {
  const obj = {};
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    obj[nextResult] = nextResult;
    continue;
  }
  return obj;
};
obj.getValidEnumValues = (arg0) => {
  dependencyMap = arg0;
  const found = exports.objectKeys(arg0).filter((item) => typeof dependencyMap[dependencyMap[item]] !== "number");
  const obj = {};
  for (const item10012 of found) {
    obj[item10012] = arg0[item10012];
    continue;
  }
  return exports.objectValues(obj);
};
obj.objectValues = (arg0) => {
  closure_0 = arg0;
  return exports.objectKeys(arg0).map((item) => closure_0[item]);
};
obj.objectKeys = typeof Object.keys === "function" ? ((arg0) => Object.keys(arg0)) : ((obj) => {
  items = [];
  for (const key10005 in arg0) {
    let _Object = Object;
    hasOwnProperty = Object.prototype.hasOwnProperty;
    let call = hasOwnProperty.call;
    if (typeof call === "unknown") {
      let hasOwnPropertyResult = hasOwnProperty(key10005);
    } else {
      hasOwnPropertyResult = call(arg0, key10005);
    }
    if (!hasOwnPropertyResult) {
      continue;
    } else {
      let arr = items.push(key10005);
      continue;
    }
    continue;
  }
  return items;
});
obj.find = (arg0, fn) => {
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    if (fn(nextResult)) {
      iter.return();
      return nextResult;
    }
  }
};
obj.isInteger = typeof Number.isInteger === "function" ? ((arg0) => Number.isInteger(arg0)) : ((num) => {
  let isFiniteResult = typeof num === "number";
  if (typeof num === "number") {
    const _isFinite = isFinite;
    isFiniteResult = isFinite(num);
  }
  if (isFiniteResult) {
    const _Math = Math;
    isFiniteResult = Math.floor(num) === num;
  }
  return isFiniteResult;
});
obj.joinValues = function joinValues(arr) {
  let str = arg1;
  if (arg1 === undefined) {
    str = " | ";
  }
  const mapped = arr.map((item) => {
    let combined = item;
    if (typeof item === "string") {
      const _HermesInternal = HermesInternal;
      combined = "'" + item + "'";
    }
    return combined;
  });
  return mapped.join(str);
};
obj.jsonStringifyReplacer = (arg0, arg1) => {
  let str = arg1;
  if (typeof arg1 === "bigint") {
    str = arg1.toString();
  }
  return str;
};
const obj2 = {};
obj2.mergeShapes = (arg0, arg1) => {
  const merged = Object.assign(arg0);
  const merged1 = Object.assign(arg1);
  return {};
};

export const util = obj;
export const objectUtil = obj2;
export const ZodParsedType = obj.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]);
export (self) => {
  if ("undefined" === typeof self) {
    return exports.ZodParsedType.undefined;
  } else if ("string" === tmp) {
    return exports.ZodParsedType.string;
  } else if ("number" === tmp) {
    const _isNaN = isNaN;
    const ZodParsedType = exports.ZodParsedType;
    return isNaN(self) ? ZodParsedType.nan : ZodParsedType.number;
  } else if ("boolean" === tmp) {
    return exports.ZodParsedType.boolean;
  } else if ("function" === tmp) {
    return exports.ZodParsedType.function;
  } else if ("bigint" === tmp) {
    return exports.ZodParsedType.bigint;
  } else if ("symbol" === tmp) {
    return exports.ZodParsedType.symbol;
  } else if ("object" === tmp) {
    const _Array = Array;
    if (Array.isArray(self)) {
      let _null = exports.ZodParsedType.array;
    } else if (null === self) {
      _null = exports.ZodParsedType.null;
    } else {
      if (self.then) {
        if (typeof self.then === "function") {
          if (self.catch) {
            if (typeof self.catch === "function") {
              _null = exports.ZodParsedType.promise;
            }
          }
        }
      }
      const _Map = Map;
      if (typeof Map !== "undefined") {
        const _Map2 = Map;
        if (self instanceof Map) {
          _null = exports.ZodParsedType.map;
        }
      }
      const _Set = Set;
      if (typeof Set !== "undefined") {
        const _Set2 = Set;
        if (self instanceof Set) {
          _null = exports.ZodParsedType.set;
        }
      }
      const _Date = Date;
      if (typeof Date !== "undefined") {
        const _Date2 = Date;
        if (self instanceof Date) {
          _null = exports.ZodParsedType.date;
        }
      }
      _null = exports.ZodParsedType.object;
    }
    return _null;
  } else {
    return exports.ZodParsedType.unknown;
  }
}