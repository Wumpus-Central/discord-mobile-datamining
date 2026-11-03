// === Module 13772: useCheckpointCharacterTextureSwaps ===

// Module 13772 (useCheckpointCharacterTextureSwaps)
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

let closure_3 = async function _swapTextures(arg0) {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c3 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          let obj3 = { value, done: true };
          return obj3;
        } else {
          closure_1 = tmp2;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          ({ textureManager: closure_129_0, shownUrls: closure_129_1, referencedAssets: closure_129_2, isStale: closure_129_3 } = closure_0);
          closure_129_4 = undefined;
          closure_129_5 = undefined;
          closure_129_6 = undefined;
          c2 = 1;
          c3 = 1;
          return { value: "flexDirection", done: true };
        }
      } else {
        if (1 === tmp5) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            let obj4 = { value, done: true };
            return obj4;
          } else {
            const _Map3 = Map;
            const map = new Map();
            closure_129_4 = map;
            const _Object = Object;
            const entries = Object.entries(closure_129_2);
            const item = entries.forEach((item) => {
              [tmp, ] = item;
              if (closure_1_1.get(tmp) !== tmp2.uri) {
                const result = closure_1_4.set(tmp, tmp2.uri);
              }
            });
            if (0 !== closure_129_4.size) {
              const _Map2 = Map;
              const map1 = new Map();
              closure_129_5 = map1;
              const _Array2 = Array;
              const _Set = Set;
              const set = new Set(closure_129_4.values());
              c2 = 2;
              c3 = 1;
              const obj5 = {
                value: Promise.all(Array.from(set, (() => {
                              closure_0 = closure_1_1(function*(arg0) {
                                if (c4 === 2) {
                                  c4 = 3;
                                  throw new TypeError("Generator functions may not be called on executing generators");
                                } else if (tmp4 === 3) {
                                  if (arg0 === 1) {
                                    throw value;
                                  } else if (arg0 === 2) {
                                    const obj2 = { value, done: true };
                                    return obj2;
                                  } else {
                                    return { value: "HermesInternal", done: null };
                                  }
                                } else {
                                  try {
                                    c4 = 2;
                                    if (0 === c3) {
                                      if (arg0 === 1) {
                                        c4 = 3;
                                        throw value;
                                      } else if (arg0 === 2) {
                                        c4 = 3;
                                        const obj3 = { value, done: true };
                                        return obj3;
                                      } else {
                                        closure_2 = tmp5;
                                        closure_1 = tmp2;
                                        closure_129_0 = closure_0;
                                        closure_129_1 = undefined;
                                        c3 = 1;
                                        c4 = 1;
                                        const obj4 = { value: closure_0.load(closure_0), done: false };
                                        return obj4;
                                      }
                                    } else if (arg0 === 1) {
                                      c4 = 3;
                                      throw value;
                                    } else if (arg0 === 2) {
                                      c4 = 3;
                                      const obj = { value, done: true };
                                      return obj;
                                    } else {
                                      closure_129_1 = value;
                                      if (null != closure_129_1) {
                                        const result = closure_1_5.set(closure_129_0, closure_129_1);
                                      }
                                      c4 = 3;
                                      return { value: "HermesInternal", done: null };
                                    }
                                  } catch (tmp17) {
                                    c4 = tmp;
                                    throw tmp17;
                                  }
                                }
                              });
                              return function() {
                                const self = this;
                                const apply = closure_0.apply;
                                if (typeof apply === "unknown") {
                                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                                } else {
                                  applyArgumentsResult = apply(self, arguments);
                                }
                                return applyArgumentsResult;
                              };
                            })())),
                done: false
              };
              return obj5;
            } else {
              c3 = 3;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 !== 2) {
          if (!closure_129_3()) {
            const _Map = Map;
            const map2 = new Map();
            closure_129_6 = map2;
            const item1 = closure_129_4.forEach((item, index) => {
              value = closure_1_5.get(item);
              if (null != value) {
                const result = closure_1_6.set(index, value);
                const result1 = closure_1_1.set(index, item);
              }
            });
            closure_129_0.swap(closure_129_6);
          }
          const _Array = Array;
          closure_129_0.release(Array.from(closure_129_5.values()));
        }
        c3 = 3;
        let obj = { value, done: true };
        return obj;
      }
    } catch (tmp33) {
      c3 = tmp;
      throw tmp33;
    }
  }
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/character/useCheckpointCharacterTextureSwaps.tsx");

export function useCheckpointCharacterTextureSwaps(textureManager) {
  textureManager = textureManager.textureManager;
  const referencedAssets = textureManager.referencedAssets;
  const initialReferencedAssets = textureManager.initialReferencedAssets;
  closure_3 = initialReferencedAssets.useRef(new Map());
  const tmp2 = textureManager(initialReferencedAssets.useState(initialReferencedAssets), 2);
  closure_4 = tmp2[1];
  items = [textureManager, initialReferencedAssets];
  const effect = initialReferencedAssets.useEffect(() => {
    let obj = initialReferencedAssets;
    if (initialReferencedAssets == null) {
      obj = {};
    }
    const entries = Object.entries(obj);
    closure_3.current = new Map(entries.map((item) => {
      [tmp, ] = item;
      items = [tmp, tmp2.uri];
      return items;
    }));
    const map = new Map(entries.map((item) => {
      [tmp, ] = item;
      items = [tmp, tmp2.uri];
      return items;
    }));
  }, items);
  const items1 = [textureManager, referencedAssets];
  const effect1 = initialReferencedAssets.useEffect(() => {
    if (null != c0) {
      c0 = referencedAssets(function*() {
        if (c2 === 2) {
          c2 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c2 = 2;
            if (0 === c1) {
              if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                closure_0 = tmp4;
                const obj4 = {
                  textureManager,
                  shownUrls: ref.current,
                  referencedAssets,
                  isStale() {
                            return textureManager;
                          }
                };
                c1 = 1;
                c2 = 1;
                const obj5 = {
                  value: (function swapTextures() {
                            const self = this;
                            const apply = closure_1_3.apply;
                            if (typeof apply === "unknown") {
                              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                            } else {
                              applyArgumentsResult = apply(self, arguments);
                            }
                            return applyArgumentsResult;
                          })(obj4),
                  done: false
                };
                return obj5;
              }
            } else if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              if (!closure_0) {
                closure_2_4(referencedAssets);
              }
              c2 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp13) {
            c2 = tmp;
            throw tmp13;
          }
        }
      });
      (function swap() {
        const self = this;
        const apply = c0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })();
      return () => {
        c0 = true;
      };
    }
  }, items1);
  return tmp2[0] === referencedAssets;
}