// === Module 168: structuredClone ===

// Module 168 (structuredClone)
import _mod126 from "module_126" /* 126 */;
import _modDef157 from "module_157" /* 157 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

function structuredCloneInternal(source) {
  function isNonSerializableObject(source) {
    return closure_1_9 in source;
  }
  if (null == source) {
    return source;
  } else {
    if ("boolean" !== typeof source) {
      if ("number" !== typeof source) {
        if ("string" !== typeof source) {
          if ("bigint" !== typeof source) {
            if (typeof source !== "object") {
              const _String2 = String;
              const _HermesInternal2 = HermesInternal;
              const self15 = this;
              const self16 = this;
              const tmp89 = _modDef157;
              const tmp892 = new tmp89("Failed to execute 'structuredClone' on 'Window': " + String(source) + " could not be cloned.", "DataCloneError");
              throw tmp892;
            } else if (map.has(source)) {
              return map.get(source);
            } else {
              const _Array = Array;
              if (Array.isArray(source)) {
                items = [];
                const result = obj7.set(source, items);
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
                  const result1 = obj7.set(source, obj2);
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
                    if (source instanceof item10013) {
                      let self = this;
                      let self2 = this;
                      let item100131 = new item10013(source);
                      let result2 = map.set(source, item100131);
                      obj8.return();
                      return item100131;
                    }
                  }
                  const _Map = Map;
                  if (source instanceof Map) {
                    const _Map2 = Map;
                    const self13 = this;
                    const self14 = this;
                    map = new Map();
                    const result3 = map.set(source, map);
                    const tmp60 = source[Symbol.iterator]();
                    while (tmp60 !== undefined) {
                      let tmp65 = _slicedToArray(tmp62, 2);
                      let tmp66 = tmp65[1];
                      set = map.set;
                      let tmp68 = structuredCloneInternal(tmp65[0]);
                      let result4 = set(tmp68, structuredCloneInternal(tmp66));
                      continue;
                    }
                    return map;
                  } else {
                    const _Set = Set;
                    if (source instanceof Set) {
                      const _Set2 = Set;
                      const self11 = this;
                      const self12 = this;
                      const set1 = new Set();
                      const result5 = map.set(source, set1);
                      const tmp48 = source[Symbol.iterator]();
                      while (tmp48 !== undefined) {
                        let addResult = set1.add(structuredCloneInternal(tmp50));
                        continue;
                      }
                      return set1;
                    } else {
                      const _RegExp = RegExp;
                      if (source instanceof RegExp) {
                        const _RegExp2 = RegExp;
                        const self9 = this;
                        const self10 = this;
                        const regExp = new RegExp(source.source, source.flags);
                        const result6 = map.set(source, regExp);
                        return regExp;
                      } else {
                        const obj = _mod126;
                        const platformObjectClone = obj.getPlatformObjectClone(source);
                        if (null != platformObjectClone) {
                          const platformObjectCloneResult = platformObjectClone(source);
                          const result7 = map.set(source, platformObjectCloneResult);
                          return platformObjectCloneResult;
                        } else {
                          const _Error2 = Error;
                          if (source instanceof Error) {
                            let _Error1;
                            const _Error = Error;
                            const message = source.message;
                            if (source.cause) {
                              const self7 = this;
                              const self8 = this;
                              const obj3 = { cause: source.cause };
                              _Error1 = new _Error(message, obj3);
                            } else {
                              const self5 = this;
                              const self6 = this;
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
                            if (!isNonSerializableObject(source)) {
                              const tmp12Result = _mod126;
                              if (!tmp12Result.isPlatformObject(source)) {
                                const obj4 = {};
                                const result9 = map.set(source, obj4);
                                const _Object2 = Object;
                                const keys2 = Object.keys(source);
                                for (const item10058 of keys2) {
                                  obj4[item10058] = structuredCloneInternal(source[item10058]);
                                  continue;
                                }
                                return obj4;
                              }
                            }
                            const _String = String;
                            const _HermesInternal = HermesInternal;
                            const self3 = this;
                            const self4 = this;
                            const tmp23 = _modDef157;
                            const tmp232 = new tmp23("Failed to execute 'structuredClone' on 'Window': " + String(source) + " could not be cloned.", "DataCloneError");
                            throw tmp232;
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
let c9 = SymbolResult;
WeakMap.prototype[SymbolResult] = true;
WeakSet.prototype[SymbolResult] = true;
Promise.prototype[SymbolResult] = true;

export default function structuredClone(style) {
  try {
    const tmp3 = structuredCloneInternal(style);
    map.clear();
    return tmp3;
  } catch (tmp6) {
    map.clear();
    throw tmp6;
  }
};