// === Module 13580: useCheckpointCharacterTextureSwaps ===

// Module 13580 (useCheckpointCharacterTextureSwaps)
import DataBindByName from "DataBindByName" /* 5085 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_4 = async function _loadImage(arg0) {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
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
      c1 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          c3 = 1;
          const RiveImages = DataBindByName.RiveImages;
          c2 = 2;
          c1 = 1;
          const obj4 = { value: RiveImages.loadFromURLAsync(closure_0), done: false };
          return obj4;
        }
      } else if (1 === tmp6) {
        c3 = 0;
        c1 = 3;
        return { value: null, done: true };
      } else if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        c1 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        c3 = 0;
        c1 = 3;
        const obj = { value, done: true };
        return obj;
      }
    } catch (tmp10) {
      if (tmp3 === c3) {
        c1 = tmp2;
        throw tmp10;
      } else {
        c2 = tmp;
      }
    }
  }
};
let closure_5 = async function _swapTextures(arg0) {
  if (c6 === 2) {
    c6 = 3;
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
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          let obj3 = { value, done: true };
          return obj3;
        } else {
          let set = tmp2;
          closure_132_0 = closure_0;
          closure_132_1 = closure_1;
          closure_132_2 = closure_3;
          closure_132_3 = undefined;
          closure_132_4 = undefined;
          closure_132_5 = undefined;
          closure_132_6 = undefined;
          closure_132_7 = undefined;
          const _Map2 = Map;
          const map = new Map();
          closure_132_3 = map;
          const _Set = Set;
          set = new Set();
          closure_132_4 = set;
          const _Object = Object;
          const entries = Object.entries(closure_2);
          const item = entries.forEach((item) => {
            [tmp, ] = item;
            if (closure_1_1.get(tmp) !== tmp2.uri) {
              const result = closure_1_3.set(tmp, tmp2.uri);
              set.add(tmp2.uri);
            }
          });
          if (0 !== map.size) {
            const _Map = Map;
            map1 = new Map();
            closure_132_5 = map1;
            const _Array = Array;
            c5 = 1;
            c6 = 1;
            let obj4 = {
              value: Promise.all(Array.from(set, (() => {
                          closure_0 = closure_1_2(function*(arg0) {
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
                                    const obj4 = {
                                      value: (function loadImage() {
                                                const self = this;
                                                const apply = closure_1_4.apply;
                                                if (typeof apply === "unknown") {
                                                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                                                } else {
                                                  applyArgumentsResult = apply(self, arguments);
                                                }
                                                return applyArgumentsResult;
                                              })(closure_0),
                                      done: false
                                    };
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
                              } catch (tmp16) {
                                c4 = tmp;
                                throw tmp16;
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
            return obj4;
          } else {
            c6 = 3;
          }
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        const _Array2 = Array;
        closure_132_6 = Array.from(closure_132_5.values());
        if (!closure_132_2()) {
          closure_132_7 = {};
          const item1 = closure_132_3.forEach((item, index) => {
            value = closure_1_5.get(item);
            if (null != value) {
              const obj = { image: value };
              closure_1_7[index] = obj;
              const result = closure_1_1.set(index, item);
            }
          });
          let obj = { data: closure_132_7 };
          let result = closure_132_0.updateReferencedAssets(obj);
          (function releaseLater(arg0) {
            closure_0 = arg0;
            const timerId = setTimeout(() => closure_0.forEach((dispose) => dispose.dispose()), 1000);
          })(closure_132_6);
        }
      }
      const item2 = closure_132_6.forEach((dispose) => dispose.dispose());
    } catch (tmp19) {
      c6 = tmp;
      throw tmp19;
    }
  }
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/native/useCheckpointCharacterTextureSwaps.tsx");

export function useCheckpointCharacterTextureSwaps(arg0, memo2, arg2) {
  closure_0 = arg0;
  closure_1 = memo2;
  closure_2 = arg2;
  noop = noop.useRef(new Map());
  const items = [arg0, arg2];
  const effect = noop.useEffect(() => {
    const map = new Map();
    const entries = Object.entries(closure_2);
    const item = entries.forEach((item) => {
      [tmp, ] = item;
      return map.set(tmp, tmp2.uri);
    });
    closure_3.current = map;
  }, items);
  const items1 = [arg0, memo2];
  const effect1 = noop.useEffect(() => {
    if (null != closure_0) {
      c0 = false;
      (function swapTextures() {
        const self = this;
        const apply = closure_1_5.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(closure_0, ref.current, closure_1, () => c0);
      return () => {
        c0 = true;
      };
    }
  }, items1);
}