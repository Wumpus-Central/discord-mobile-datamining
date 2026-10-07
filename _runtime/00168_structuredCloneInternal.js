// === Module 168: structuredCloneInternal ===

// Module 168 (structuredCloneInternal)
import _mod126 from "module_126" /* 126 */;
import _modDef157 from "module_157" /* 157 */;
import _slicedToArray from "module_32" /* 32 */;

require = arg1;
function structuredCloneInternal(source) {
  if (null == source) {
    return source;
  } else {
    if ("boolean" !== typeof source) {
      if ("number" !== tmp107) {
        if ("string" !== tmp107) {
          if ("bigint" !== tmp107) {
            if (typeof source !== "object") {
              const _String2 = String;
              const _HermesInternal2 = HermesInternal;
              const tmp1012 = new _modDef157("Failed to execute 'structuredClone' on 'Window': " + String(source) + " could not be cloned.", "DataCloneError");
              throw tmp1012;
            } else if (map.has(source)) {
              return obj8.get(source);
            } else {
              const _Array = Array;
              if (Array.isArray(source)) {
                items = [];
                const result = obj8.set(source, items);
                const _Object4 = Object;
                const keys = Object.keys(source);
                const iter2 = keys[Symbol.iterator]();
                const nextResult = iter2.next();
                while (iter2 !== undefined) {
                  items[nextResult] = structuredCloneInternal(source[nextResult]);
                  continue;
                }
                return items;
              } else {
                const _Object = Object;
                if (Object.getPrototypeOf(source) === closure_6) {
                  const obj2 = {};
                  const result1 = obj8.set(source, obj2);
                  const _Object3 = Object;
                  const keys1 = Object.keys(source);
                  const iter = keys1[Symbol.iterator]();
                  const nextResult1 = iter.next();
                  while (iter !== undefined) {
                    obj2[nextResult1] = structuredCloneInternal(source[nextResult1]);
                    continue;
                  }
                  return obj2;
                } else {
                  for (const item10013 of items) {
                    if (arg0 instanceof item10013) {
                      let tmp5 = new.target;
                      let tmp6 = new.target;
                      let item100131 = new item10013(arg0);
                      let result2 = map.set(arg0, item100131);
                      obj9.return();
                      return item100131;
                    }
                  }
                  const _Map = Map;
                  if (source instanceof Map) {
                    const _Map2 = Map;
                    map = new Map();
                    const result3 = map.set(source, map);
                    const tmp73 = source[Symbol.iterator]();
                    while (tmp73 !== undefined) {
                      let tmp78 = _slicedToArray(tmp75, 2);
                      let tmp80 = structuredCloneInternal(tmp78[0]);
                      let result4 = map.set(tmp80, structuredCloneInternal(tmp78[1]));
                      continue;
                    }
                    return map;
                  } else {
                    const _Set = Set;
                    if (source instanceof Set) {
                      const _Set2 = Set;
                      set = new Set();
                      const result5 = map.set(source, set);
                      const tmp60 = source[Symbol.iterator]();
                      while (tmp60 !== undefined) {
                        let addResult = set.add(structuredCloneInternal(tmp62));
                        continue;
                      }
                      return set;
                    } else {
                      const _RegExp = RegExp;
                      if (source instanceof RegExp) {
                        const _RegExp2 = RegExp;
                        const regExp = new RegExp(source.source, source.flags);
                        const result6 = map.set(source, regExp);
                        return regExp;
                      } else {
                        const platformObjectClone = _mod126.getPlatformObjectClone(source);
                        if (null != platformObjectClone) {
                          const platformObjectCloneResult = platformObjectClone(source);
                          const result7 = map.set(source, platformObjectCloneResult);
                          return platformObjectCloneResult;
                        } else {
                          const _Error2 = Error;
                          if (source instanceof Error) {
                            const _Error = Error;
                            const message = source.message;
                            if (source.cause) {
                              const obj3 = { cause: source.cause };
                              let _Error1 = new _Error(message, obj3);
                            } else {
                              _Error1 = new _Error(message);
                            }
                            const result8 = map.set(source, _Error1);
                            if (set.has(source.name)) {
                              _Error1.name = source.name;
                            } else {
                              _Error1.name = "Error";
                            }
                            _Error1.stack = source.stack;
                            return _Error1;
                          } else {
                            if (!(function isNonSerializableObject(source) {
                              return closure_1_9 in source;
                            })(source)) {
                              if (!tmp14Result.isPlatformObject(source)) {
                                const obj4 = {};
                                const result9 = map.set(source, obj4);
                                const _Object2 = Object;
                                const keys2 = Object.keys(source);
                                for (const item10058 of keys2) {
                                  obj4[item10058] = structuredCloneInternal(arg0[item10058]);
                                  continue;
                                }
                                return obj4;
                              }
                              tmp14Result = _mod126;
                            }
                            const _String = String;
                            const _HermesInternal = HermesInternal;
                            const tmp252 = new _modDef157("Failed to execute 'structuredClone' on 'Window': " + String(source) + " could not be cloned.", "DataCloneError");
                            throw tmp252;
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
    }
    return source;
  }
}
let set = new Set(["Error", "EvalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"]);
let items = [Number, String, Boolean, Date];
let closure_6 = Object.prototype;
let map = new Map();
const SymbolResult = Symbol("nonSerializableObject");
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