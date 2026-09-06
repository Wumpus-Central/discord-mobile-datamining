// discord_app/modules/avatar/useAvatarColor.tsx
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../a11y/AccessibilityStore.tsx";

const require = fn;
function hasFetchedColors(game_name) {
  return null != module_560.getState().palette[game_name];
}
let closure_9 = async function _maybeFetchColors(arg0) {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
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
          obj = { value, done: true };
          return obj;
        } else if (!hasFetchedColors(closure_0)) {
          c2 = 1;
          c1 = 1;
          const obj1 = { value: fetchColors(closure_0), done: false };
          return obj1;
        }
      } else if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        obj = { value, done: true };
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
      let obj = { value, done: true };
      return obj;
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
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = closure_0;
          closure_129_1 = undefined;
          let complimentaryPaletteForColor;
          if (!state.getState().fetching[closure_0]) {
            require("ReactBatchUpdates").batchUpdates(() =>
              state.setState((fetching) => {
                let obj = { fetching: null };
                obj = {};
                const merged = Object.assign(fetching.fetching);
                obj[closure_1_0] = true;
                obj.fetching = obj;
                return obj;
              }),
            );
            c4 = 1;
            const obj5 = require("ReactBatchUpdates");
            c5 = 2;
            c6 = 1;
            let obj1 = { value: require("ImageUtils").getPaletteForAvatar(closure_0), done: false };
            return obj1;
          }
        }
      } else {
        if (1 === tmp7) {
          c4 = 0;
          closure_130_0(closure_130_2[5]).batchUpdates(() =>
            state.setState((fetching) => {
              let obj = { fetching: null };
              obj = {};
              const merged = Object.assign(fetching.fetching);
              obj[closure_1_0] = false;
              obj.fetching = obj;
              return obj;
            }),
          );
          const obj4 = closure_130_0(closure_130_2[5]);
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_129_1 = value;
          obj = closure_130_0(closure_130_2[7]);
          complimentaryPaletteForColor = obj.getComplimentaryPaletteForColor(closure_129_1[0]);
          obj1 = closure_130_0(closure_130_2[5]);
          obj1.batchUpdates(() => {
            state.setState((fetching) => {
              let obj = { fetching: null, palette: null };
              obj = {};
              const merged = Object.assign(fetching.fetching);
              obj[closure_1_0] = false;
              obj.fetching = obj;
              obj = {};
              const merged1 = Object.assign(fetching.palette);
              const items = [...closure_1_2];
              obj[closure_1_0] = items;
              obj.palette = obj;
              return obj;
            });
          });
          c4 = 0;
        }
        c4 = 0;
        c6 = 3;
        const obj2 = { value, done: true };
        return obj2;
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
let module_560 = fn(560);
module_560 = module_560.create(() => ({ palette: {}, fetching: {} }));
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
  const tmp = module_560((arg0) => {
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
        let obj = flag(7552)({ r: tmp, g: tmp2, b: tmp3 });
        ({ h, s, l } = obj.toHsl());
        obj = { h, s: s * stateFromStores, l };
        const toHslResult = obj.toHsl();
        return flag(7552)(obj).toHexString();
      });
    }
    return mapped;
  }, items2);
  if (memo == null) {
    const items3 = [arg1, arg1];
    memo = items3;
  }
  return stateFromStores(memo, 1)[0];
}
export const useColorStore = module_560;
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
  return !module_560((arg0) => {
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
  const tmp = module_560((arg0) => {
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
        let obj = flag(7552)({ r: tmp, g: tmp2, b: tmp3 });
        ({ h, s, l } = obj.toHsl());
        obj = { h, s: s * stateFromStores, l };
        const toHslResult = obj.toHsl();
        return flag(7552)(obj).toHexString();
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
