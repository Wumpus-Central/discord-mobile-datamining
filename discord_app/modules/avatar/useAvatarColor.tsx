// === Module 8487: useAvatarColor ===

// Module 8487 (useAvatarColor)
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4819 */;

const require = globalThis.__r;

const require = fn;
function hasFetchedColors(game_name) {
  return null != obj3.getState().palette[game_name];
}
let closure_9 = async function _maybeFetchColors(arg0) {
  if (c1 === 2) {
    c1 = 3;
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
      c1 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          obj3 = { value, done: true };
          return obj3;
        } else if (!hasFetchedColors(closure_0)) {
          c2 = 1;
          c1 = 1;
          const obj4 = { value: fetchColors(closure_0), done: false };
          return obj4;
        }
      } else if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        const obj = { value, done: true };
        return obj;
      }
      c1 = 3;
      return { value: "HermesInternal", done: null };
    } catch (tmp8) {
      c1 = tmp;
      throw tmp8;
    }
  }
};
function fetchColors() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_11 = async function _fetchColors(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      obj3 = { value, done: true };
      return obj3;
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
          const obj7 = { value, done: true };
          return obj7;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = closure_0;
          closure_129_1 = undefined;
          let complimentaryPaletteForColor;
          if (!state.getState().fetching[closure_0]) {
            require("ReactBatchUpdates").batchUpdates(() => state.setState((fetching) => {
              const obj = { fetching: null };
              const obj2 = {};
              const merged = Object.assign(fetching.fetching);
              obj2[closure_1_0] = true;
              obj.fetching = obj2;
              return obj;
            }));
            c4 = 1;
            const obj5 = require("ReactBatchUpdates");
            c5 = 2;
            c6 = 1;
            const obj8 = { value: require("ImageUtils").getPaletteForAvatar(closure_0), done: false };
            return obj8;
          }
        }
      } else {
        if (1 === tmp7) {
          c4 = 0;
          closure_130_0(closure_130_2[5]).batchUpdates(() => state.setState((fetching) => {
            const obj = { fetching: null };
            const obj2 = {};
            const merged = Object.assign(fetching.fetching);
            obj2[closure_1_0] = false;
            obj.fetching = obj2;
            return obj;
          }));
          const obj4 = closure_130_0(closure_130_2[5]);
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_129_1 = value;
          complimentaryPaletteForColor = closure_130_0(closure_130_2[7]).getComplimentaryPaletteForColor(closure_129_1[0]);
          let obj = closure_130_0(closure_130_2[7]);
          closure_130_0(closure_130_2[5]).batchUpdates(() => {
            state.setState((fetching) => {
              const obj = { fetching: null, palette: null };
              const obj2 = {};
              const merged = Object.assign(fetching.fetching);
              obj2[closure_1_0] = false;
              obj.fetching = obj2;
              obj3 = {};
              const merged1 = Object.assign(fetching.palette);
              const items = [...closure_1_2];
              obj3[closure_1_0] = items;
              obj.palette = obj3;
              return obj;
            });
          });
          c4 = 0;
          let obj2 = closure_130_0(closure_130_2[5]);
        }
        c4 = 0;
        c6 = 3;
        const obj9 = { value, done: true };
        return obj9;
      }
      c6 = 3;
    } catch (tmp27) {
      closure_3 = tmp27;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp27;
      } else {
        c5 = tmp;
      }
    }
  }
};
const module_560 = fn(560);
let obj3 = module_560.create(() => ({ palette: {}, fetching: {} }));
const size = fn(2);
const result = size.fileFinishedImporting("modules/avatar/useAvatarColor.tsx");

export default function useAvatarColor(uri, arg1) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  _require = uri;
  if (flag === undefined) {
    flag = true;
  }
  const tmp = obj3((arg0) => {
    let tmp2;
    if (null != closure_0) {
      tmp2 = arg0.palette[tmp];
    }
    return tmp2;
  });
  dependencyMap = tmp;
  const items = [AccessibilityStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    let num = 1;
    if (flag) {
      num = 1;
      if (AccessibilityStore.desaturateUserColors) {
        num = AccessibilityStore.saturation;
      }
    }
    return num;
  });
  const items1 = [uri, tmp];
  const effect = noop.useEffect(() => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = null == closure_2;
    }
    if (tmp2) {
      fetchColors(closure_0);
    }
  }, items1);
  const items2 = [tmp, stateFromStores];
  let memo = noop.useMemo(() => {
    let mapped;
    if (dependencyMap != null) {
      mapped = dependencyMap.map((item) => {
        [tmp, tmp2, tmp3] = item;
        const obj = flag(7880)({ r: tmp, g: tmp2, b: tmp3 });
        ({ h, s, l } = flag(7880)({ r: tmp, g: tmp2, b: tmp3 }).toHsl());
        const obj2 = { h, s: s * stateFromStores, l };
        const toHslResult = flag(7880)({ r: tmp, g: tmp2, b: tmp3 }).toHsl();
        return flag(7880)({ h, s: s * stateFromStores, l }).toHexString();
      });
    }
    return mapped;
  }, items2);
  if (memo == null) {
    const items3 = [arg1, arg1];
    memo = items3;
  }
  return stateFromStores(memo, 1)[0];
};
export const useColorStore = obj3;
export { hasFetchedColors };
export const maybeFetchColors = function maybeFetchColors() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const useHasFetchedColors = function useHasFetchedColors(arg0) {
  closure_0 = arg0;
  return !obj3((arg0) => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = arg0.fetching[tmp];
    }
    return tmp2;
  });
};
export const useAvatarColors = function useAvatarColors(pendingAvatarSrc, PRIMARY_530, arg2) {
  _require = pendingAvatarSrc;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  const tmp = obj3((arg0) => {
    let tmp2;
    if (null != closure_0) {
      tmp2 = arg0.palette[tmp];
    }
    return tmp2;
  });
  dependencyMap = tmp;
  const items = [AccessibilityStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    let num = 1;
    if (flag) {
      num = 1;
      if (AccessibilityStore.desaturateUserColors) {
        num = AccessibilityStore.saturation;
      }
    }
    return num;
  });
  const items1 = [pendingAvatarSrc, tmp];
  const effect = noop.useEffect(() => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = null == closure_2;
    }
    if (tmp2) {
      fetchColors(closure_0);
    }
  }, items1);
  const items2 = [tmp, stateFromStores];
  let memo = noop.useMemo(() => {
    let mapped;
    if (dependencyMap != null) {
      mapped = dependencyMap.map((item) => {
        [tmp, tmp2, tmp3] = item;
        const obj = flag(7880)({ r: tmp, g: tmp2, b: tmp3 });
        ({ h, s, l } = flag(7880)({ r: tmp, g: tmp2, b: tmp3 }).toHsl());
        const obj2 = { h, s: s * stateFromStores, l };
        const toHslResult = flag(7880)({ r: tmp, g: tmp2, b: tmp3 }).toHsl();
        return flag(7880)({ h, s: s * stateFromStores, l }).toHexString();
      });
    }
    return mapped;
  }, items2);
  if (memo == null) {
    const items3 = [PRIMARY_530, PRIMARY_530];
    memo = items3;
  }
  return memo;
};