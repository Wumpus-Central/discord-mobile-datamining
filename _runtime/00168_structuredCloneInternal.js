// _runtime/00168_structuredCloneInternal.js
import _slicedToArray from "_slicedToArray";
import { setPlatformObject } from "00126_setPlatformObject.js";
import { _isNativeReflectConstruct } from "00157__isNativeReflectConstruct.js";

const require = arg1;
function structuredCloneInternal(style) {
  if (null == style) {
    return style;
  } else {
    let tmp = typeof style;
    if ("boolean" !== tmp) {
      if ("number" !== tmp) {
        if ("string" !== tmp) {
          if ("bigint" !== tmp) {
            if (typeof style !== "object") {
              tmp = dependencyMap;
              tmp = globalThis;
              const _String2 = String;
              tmp = _isNativeReflectConstruct;
              const _HermesInternal2 = HermesInternal;
              tmp = new.target;
              tmp = new.target;
              tmp = new tmp("Failed to execute 'structuredClone' on 'Window': " + String(style) + " could not be cloned.", "DataCloneError");
              throw tmp;
            } else {
              tmp = map;
              if (map.has(style)) {
                return obj8.get(style);
              } else {
                tmp = globalThis;
                const _Array = Array;
                if (Array.isArray(style)) {
                  const items = [];
                  const result = obj8.set(style, items);
                  const _Object4 = Object;
                  const keys = Object.keys(style);
                  const iter2 = keys[Symbol.iterator]();
                  const nextResult = iter2.next();
                  while (iter2 !== undefined) {
                    let tmp97 = structuredCloneInternal;
                    items[nextResult] = structuredCloneInternal(style[nextResult]);
                    continue;
                  }
                  return items;
                } else {
                  const _Object = Object;
                  if (Object.getPrototypeOf(style) === closure_6) {
                    let obj = {};
                    const result1 = obj8.set(style, obj);
                    const _Object3 = Object;
                    const keys1 = Object.keys(style);
                    const iter = keys1[Symbol.iterator]();
                    const nextResult1 = iter.next();
                    while (iter !== undefined) {
                      let tmp89 = structuredCloneInternal;
                      obj[nextResult1] = structuredCloneInternal(style[nextResult1]);
                      continue;
                    }
                    return obj;
                  } else {
                    tmp = items;
                    for (const item10013 of items) {
                      let tmp4 = item10013;
                      if (arg0 instanceof item10013) {
                        let tmp5 = new.target;
                        let tmp6 = new.target;
                        let tmp7 = arg0;
                        let item10013 = new item10013(arg0);
                        let tmp9 = item10013;
                        let tmp10 = map;
                        let tmp11 = map;
                        let result2 = map.set(arg0, item10013);
                        let tmp13 = obj9;
                        obj9.return();
                        return item10013;
                      }
                    }
                    const _Map = Map;
                    if (style instanceof Map) {
                      const _Map2 = Map;
                      map = new Map();
                      const result3 = map.set(style, map);
                      const tmp73 = style[Symbol.iterator]();
                      while (tmp73 !== undefined) {
                        let tmp77 = callback;
                        let tmp78 = callback(tmp75, 2);
                        let tmp79 = structuredCloneInternal;
                        let tmp80 = structuredCloneInternal(tmp78[0]);
                        let result4 = map.set(tmp80, structuredCloneInternal(tmp78[1]));
                        continue;
                      }
                      return map;
                    } else {
                      const _Set = Set;
                      if (style instanceof Set) {
                        const _Set2 = Set;
                        const set = new Set();
                        const result5 = map.set(style, set);
                        const tmp60 = style[Symbol.iterator]();
                        while (tmp60 !== undefined) {
                          let tmp64 = structuredCloneInternal;
                          let addResult = set.add(structuredCloneInternal(tmp62));
                          continue;
                        }
                        return set;
                      } else {
                        const _RegExp = RegExp;
                        if (style instanceof RegExp) {
                          const _RegExp2 = RegExp;
                          const regExp = new RegExp(style.source, style.flags);
                          const result6 = map.set(style, regExp);
                          return regExp;
                        } else {
                          obj = setPlatformObject;
                          const platformObjectClone = obj.getPlatformObjectClone(style);
                          if (null != platformObjectClone) {
                            const platformObjectCloneResult = platformObjectClone(style);
                            const result7 = map.set(style, platformObjectCloneResult);
                            return platformObjectCloneResult;
                          } else {
                            const _Error2 = Error;
                            if (style instanceof Error) {
                              let _Error = Error;
                              const message = style.message;
                              if (style.cause) {
                                obj = { cause: null };
                                obj[0] = style.cause;
                                _Error = new _Error(message, obj);
                              } else {
                                _Error = new _Error(message);
                              }
                              const result8 = map.set(style, _Error);
                              if (set.has(style.name)) {
                                _Error.name = style.name;
                              } else {
                                _Error.name = "Error";
                              }
                              _Error.stack = style.stack;
                              return _Error;
                            } else {
                              if (!(function isNonSerializableObject(style) {
                                return closure_9 in style;
                              })(style)) {
                                if (!tmp14Result.isPlatformObject(style)) {
                                  const obj1 = {};
                                  const result9 = map.set(style, obj1);
                                  const _Object2 = Object;
                                  const keys2 = Object.keys(style);
                                  for (const item10058 of keys2) {
                                    let tmp23 = structuredCloneInternal;
                                    obj1[item10058] = structuredCloneInternal(arg0[item10058]);
                                    continue;
                                  }
                                  return obj1;
                                }
                                tmp14Result = tmp14(126);
                              }
                              const _String = String;
                              let tmp25 = _isNativeReflectConstruct;
                              const _HermesInternal = HermesInternal;
                              tmp25 = new tmp25("Failed to execute 'structuredClone' on 'Window': " + String(style) + " could not be cloned.", "DataCloneError");
                              throw tmp25;
                            }
                          }
                          tmp14 = require;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return style;
  }
}
let set = new Set(["Error", "EvalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"]);
let items = [Number, String, Boolean, Date];
let closure_6 = Object.prototype;
let map = new Map();
const SymbolResult = Symbol("nonSerializableObject");
let c9 = SymbolResult;
WeakMap.prototype[SymbolResult] = true;
WeakSet.prototype[SymbolResult] = true;
Promise.prototype[SymbolResult] = true;

export default function structuredClone(style) {
  try {
    map.clear();
    return structuredCloneInternal(style);
  } catch (tmp6) {
    map.clear();
    throw tmp6;
  }
};