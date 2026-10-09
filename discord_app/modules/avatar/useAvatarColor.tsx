// discord_app/modules/avatar/useAvatarColor.tsx
import c from "../../../_runtime/00576_c.js";
import tinycolorDefault from "../../../_runtime/07267_tinycolor.js";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../a11y/AccessibilityStore.tsx";

require = fn;
function hasFetchedColors(game_name) {
  return null != obj6.getState().palette[game_name];
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
      return { value: "IconComponent", done: null };
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
      return { value: "IconComponent", done: null };
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
      let obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "IconComponent", done: null };
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
            require("ReactBatchUpdates").batchUpdates(() =>
              state.setState((fetching) => {
                const obj = { fetching: null };
                const obj2 = {};
                const merged = Object.assign(fetching.fetching);
                obj2[closure_1_0] = true;
                obj.fetching = obj2;
                return obj;
              }),
            );
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
          closure_130_0(closure_130_2[5]).batchUpdates(() =>
            state.setState((fetching) => {
              const obj = { fetching: null };
              const obj2 = {};
              const merged = Object.assign(fetching.fetching);
              obj2[closure_1_0] = false;
              obj.fetching = obj2;
              return obj;
            }),
          );
          const obj4 = closure_130_0(closure_130_2[5]);
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_129_1 = value;
          complimentaryPaletteForColor = closure_130_0(closure_130_2[7]).getComplimentaryPaletteForColor(
            closure_129_1[0],
          );
          let obj = closure_130_0(closure_130_2[7]);
          closure_130_0(closure_130_2[5]).batchUpdates(() => {
            state.setState((fetching) => {
              const obj = { fetching: null, palette: null };
              const obj2 = {};
              const merged = Object.assign(fetching.fetching);
              obj2[closure_1_0] = false;
              obj.fetching = obj2;
              const obj3 = {};
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
const module_570 = fn(570);
const obj6 = module_570.create(() => ({ palette: {}, fetching: {} }));
fn(558);
let ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useHasFetchedColors(arg0) {
      closure_0 = arg0;
      const cResult = c.c(2);
      if (cResult[0] !== arg0) {
        const fn = function t(arg0) {
          let tmp2 = null != closure_0;
          if (tmp2) {
            tmp2 = arg0.fetching[tmp];
          }
          return tmp2;
        };
        cResult[0] = arg0;
        cResult[1] = fn;
        let tmp2 = fn;
      } else {
        tmp2 = cResult[1];
      }
      return !obj6(tmp2);
    }
  : function useHasFetchedColors(arg0) {
      closure_0 = arg0;
      return !obj6((arg0) => {
        let tmp2 = null != closure_0;
        if (tmp2) {
          tmp2 = arg0.fetching[tmp];
        }
        return tmp2;
      });
    };
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useAvatarColors(arg0, arg1, arg2) {
      _require = arg0;
      const cResult = require("c").c(15);
      closure_1 = tmp4;
      if (cResult[0] !== arg0) {
        const fn = function c(arg0) {
          let tmp2;
          if (null != closure_0) {
            tmp2 = arg0.palette[tmp];
          }
          return tmp2;
        };
        cResult[0] = arg0;
        cResult[1] = fn;
        let tmp5 = fn;
      } else {
        tmp5 = cResult[1];
      }
      const tmp6 = obj6(tmp5);
      dependencyMap = tmp6;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AccessibilityStore];
        cResult[2] = items;
        let tmp7 = items;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] !== (undefined === arg2 || arg2)) {
        class C {
          constructor() {
            num = 1;
            if (closure_1) {
              num = 1;
              if (closure_6.desaturateUserColors) {
                num = closure_6.saturation;
              }
            }
            return num;
          }
        }
        cResult[3] = tmp4;
        cResult[4] = C;
      } else {
        class C {
          constructor() {
            num = 1;
            if (closure_1) {
              num = 1;
              if (closure_6.desaturateUserColors) {
                num = closure_6.saturation;
              }
            }
            return num;
          }
        }
      }
      let obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(tmp7, C);
      if (cResult[5] === arg0) {
        class C {
          constructor() {
            num = 1;
            if (closure_1) {
              num = 1;
              if (closure_6.desaturateUserColors) {
                num = closure_6.saturation;
              }
            }
            return num;
          }
        }
        const effect = noop.useEffect(fn2, items1);
        if (cResult[9] === tmp6) {
          class C {
            constructor() {
              num = 1;
              if (closure_1) {
                num = 1;
                if (closure_6.desaturateUserColors) {
                  num = closure_6.saturation;
                }
              }
              return num;
            }
          }
          if (cResult[12] === tmp13) {
            class C {
              constructor() {
                num = 1;
                if (closure_1) {
                  num = 1;
                  if (closure_6.desaturateUserColors) {
                    num = closure_6.saturation;
                  }
                }
                return num;
              }
            }
            return tmp17;
          }
          let tmp19 = tmp13;
          if (tmp13 == null) {
            class C {
              constructor() {
                num = 1;
                if (closure_1) {
                  num = 1;
                  if (closure_6.desaturateUserColors) {
                    num = closure_6.saturation;
                  }
                }
                return num;
              }
            }
            tmp20[0] = arg1;
            tmp20[1] = arg1;
            tmp19 = tmp20;
          }
          cResult[12] = tmp13;
          cResult[13] = arg1;
          cResult[14] = tmp19;
          tmp17 = tmp19;
        }
        if (tmp6 != null) {
          class C {
            constructor() {
              num = 1;
              if (closure_1) {
                num = 1;
                if (closure_6.desaturateUserColors) {
                  num = closure_6.saturation;
                }
              }
              return num;
            }
          }
        }
        cResult[9] = tmp6;
        cResult[10] = stateFromStores;
        cResult[11] = undefined;
      }
      fn2 = function p() {
        let tmp2 = null != closure_0;
        if (tmp2) {
          tmp2 = null == closure_2;
        }
        if (tmp2) {
          fetchColors(closure_0);
        }
      };
      items1 = [arg0, tmp6];
      cResult[5] = arg0;
      cResult[6] = tmp6;
      cResult[7] = fn2;
      cResult[8] = items1;
      const tmpResult = require("initialize");
    }
  : function useAvatarColors(arg0, arg1) {
      _require = arg0;
      let flag = arg2;
      if (arg2 === undefined) {
        flag = true;
      }
      const tmp = obj6((arg0) => {
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
      const items1 = [arg0, tmp];
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
            const obj = flag(7267)({ r: tmp, g: tmp2, b: tmp3 });
            ({ h, s, l } = flag(7267)({ r: tmp, g: tmp2, b: tmp3 }).toHsl());
            const obj2 = { h, s: s * stateFromStores, l };
            const toHslResult = flag(7267)({ r: tmp, g: tmp2, b: tmp3 }).toHsl();
            return flag(7267)({ h, s: s * stateFromStores, l }).toHexString();
          });
        }
        return mapped;
      }, items2);
      if (memo == null) {
        const items3 = [arg1, arg1];
        memo = items3;
      }
      return memo;
    };
let closure_12 = tmp5;
const size = fn(2);
const result = size.fileFinishedImporting("modules/avatar/useAvatarColor.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useAvatarColor(arg0, arg1, arg2) {
      let tmp2 = undefined === arg2;
      if (!tmp2) {
        tmp2 = arg2;
      }
      return _slicedToArray(closure_12(arg0, arg1, tmp2), 1)[0];
    }
  : function useAvatarColor(arg0, arg1) {
      let flag = arg2;
      if (arg2 === undefined) {
        flag = true;
      }
      return _slicedToArray(closure_12(arg0, arg1, flag), 1)[0];
    };
export const useColorStore = obj6;
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
export const useHasFetchedColors = tmp3;
export const useAvatarColors = tmp5;
