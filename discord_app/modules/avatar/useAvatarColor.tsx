// discord_app/modules/avatar/useAvatarColor.tsx
import react2 from "../../../_runtime/00576_react.js";
import _modDef7063 from "../../../_runtime/metro/07063__.js";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../_runtime/00019_react.js";
import AccessibilityStore from "../a11y/AccessibilityStore.tsx";
import 00570__ from "../../../_runtime/metro/00570__.js";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, c1, c2, c5, c6, dependencyMap;

function hasFetchedColors(iconURL) {
  return null != obj.getState().palette[iconURL];
}
let obj = function _maybeFetchColors() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
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
          obj = { value, done: true };
          return obj;
        }
        c1 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp7) {
        c1 = 3;
        throw tmp7;
      }
    }
  });
  return obj(...arguments);
};
function fetchColors() {
  return obj(...arguments);
}
obj = function _fetchColors() {
  let state;
  obj = _asyncToGenerator(async (arg0) => {
    let closure_2;
    let obj6;
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
      try {
        let closure_1;
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
            closure_1 = undefined;
            let complimentaryPaletteForColor;
            if (!state.getState().fetching[closure_0]) {
              const obj5 = require("react-native");
              obj5.batchUpdates(() => state.setState((fetching) => {
                let obj2;
                obj = { fetching: obj2 };
                obj2 = {};
                const merged = Object.assign(fetching.fetching);
                obj2[closure_1_0] = true;
                return obj;
              }));
              c4 = 1;
              c5 = 2;
              c6 = 1;
              const obj8 = { value: obj6.getPaletteForAvatar(closure_0), done: false };
              obj6 = require("ImageUtils");
              return obj8;
            }
          }
        } else if (1 === c5) {
          c4 = 0;
          const obj4 = closure_130_0(closure_130_2[5]);
          obj4.batchUpdates(() => state.setState((fetching) => {
            let obj2;
            obj = { fetching: obj2 };
            obj2 = {};
            const merged = Object.assign(fetching.fetching);
            obj2[closure_1_0] = false;
            return obj;
          }));
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          closure_1 = value;
          obj = closure_130_0(closure_130_2[7]);
          complimentaryPaletteForColor = obj.getComplimentaryPaletteForColor(closure_1[0]);
          let obj2 = closure_130_0(closure_130_2[5]);
          obj2.batchUpdates(() => {
            let args;
            state.setState((fetching) => {
              let obj2;
              let obj3;
              obj = { fetching: obj2, palette: obj3 };
              obj2 = {};
              const merged = Object.assign(fetching.fetching);
              obj2[closure_1_0] = false;
              obj3 = {};
              const merged1 = Object.assign(fetching.palette);
              const items = [...closure_1_2];
              obj3[closure_1_0] = items;
              return obj;
            });
          });
          c4 = 0;
        }
        c6 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp24) {
        let closure_3 = tmp24;
        if (0 === c4) {
          c6 = 3;
          throw tmp24;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = module_570.create(() => ({ palette: {}, fetching: {} }));
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let tmp2;
  let closure_0 = arg0;
  obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] !== arg0) {
    const fn = function e(arg0) {
      return null != closure_0 && arg0.fetching[tmp];
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  return !obj(tmp2);
}) : ((arg0) => {
  let closure_0 = arg0;
  return !obj((arg0) => null != closure_0 && arg0.fetching[tmp]);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, arg2) => {
  const tmp2 = undefined === arg2 || arg2;
  return _slicedToArray(closure_12(arg0, arg1, tmp2), 1)[0];
}) : ((arg0, arg1) => {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  return _slicedToArray(closure_12(arg0, arg1, flag), 1)[0];
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, arg2) => {
  let closure_0;
  let closure_2;
  let fn2;
  let items1;
  let tmp17;
  let tmp5;
  let tmp7;
  _require = arg0;
  const tmp = _require;
  let tmp2 = dependencyMap;
  obj = require("react");
  const cResult = obj.c(15);
  const tmp4 = undefined === arg2 || arg2;
  let closure_1 = tmp4;
  if (cResult[0] !== arg0) {
    const fn = function c(arg0) {
      let tmp2;
      if (null != closure_0) {
        tmp2 = arg0.palette[tmp];
      }
      return tmp2;
    };
    let num = 0;
    cResult[0] = arg0;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  const tmp6 = obj(tmp5);
  dependencyMap = tmp6;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    cResult[2] = items;
    tmp7 = items;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] !== tmp4) {
    class C {
      constructor() {
        let num = 1;
        if (closure_1) {
          num = 1;
          if (AccessibilityStore.desaturateUserColors) {
            num = AccessibilityStore.saturation;
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
        let num = 1;
        if (closure_1) {
          num = 1;
          if (AccessibilityStore.desaturateUserColors) {
            num = AccessibilityStore.saturation;
          }
        }
        return num;
      }
    }
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp7, C);
  if (cResult[5] === arg0) {
    class C {
      constructor() {
        let num = 1;
        if (closure_1) {
          num = 1;
          if (AccessibilityStore.desaturateUserColors) {
            num = AccessibilityStore.saturation;
          }
        }
        return num;
      }
    }
    const effect = react.useEffect(fn2, items1);
    if (cResult[9] === tmp6) {
      class C {
        constructor() {
          let num = 1;
          if (closure_1) {
            num = 1;
            if (AccessibilityStore.desaturateUserColors) {
              num = AccessibilityStore.saturation;
            }
          }
          return num;
        }
      }
      if (cResult[12] === tmp13) {
        class C {
          constructor() {
            let num = 1;
            if (closure_1) {
              num = 1;
              if (AccessibilityStore.desaturateUserColors) {
                num = AccessibilityStore.saturation;
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
            let num = 1;
            if (closure_1) {
              num = 1;
              if (AccessibilityStore.desaturateUserColors) {
                num = AccessibilityStore.saturation;
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
          let num = 1;
          if (closure_1) {
            num = 1;
            if (AccessibilityStore.desaturateUserColors) {
              num = AccessibilityStore.saturation;
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
  fn2 = function v() {
    const tmp2 = null != closure_0 && null == closure_2;
    if (tmp2) {
      fetchColors(closure_0);
    }
  };
  items1 = [arg0, tmp6];
  cResult[5] = arg0;
  cResult[6] = tmp6;
  cResult[7] = fn2;
  cResult[8] = items1;
}) : ((arg0, arg1) => {
  let closure_0;
  let closure_2;
  _require = arg0;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  const tmp = obj((arg0) => {
    let tmp2;
    if (null != closure_0) {
      tmp2 = arg0.palette[tmp];
    }
    return tmp2;
  });
  dependencyMap = tmp;
  obj = require("get initialized");
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
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
  const effect = react.useEffect(() => {
    const tmp2 = null != closure_0 && null == closure_2;
    if (tmp2) {
      fetchColors(closure_0);
    }
  }, items1);
  const items2 = [tmp, stateFromStores];
  let memo = react.useMemo(() => {
    let mapped;
    if (closure_2 != null) {
      mapped = closure_2.map((item) => {
        let h;
        let l;
        let s;
        let tmp;
        let tmp2;
        let tmp3;
        [tmp, tmp2, tmp3] = item;
        obj = flag(closure_2[11])({ r: tmp, g: tmp2, b: tmp3 });
        ({ h, s, l } = obj.toHsl());
        const obj2 = { h, s: s * stateFromStores, l };
        obj.toHsl();
        const obj3 = flag(closure_2[11])(obj2);
        return obj3.toHexString();
      });
    }
    return mapped;
  }, items2);
  if (memo == null) {
    const items3 = [arg1, arg1];
    memo = items3;
  }
  return memo;
});
let closure_12 = tmp5;
const result = size.fileFinishedImporting("modules/avatar/useAvatarColor.tsx");

export default tmp4;
export const useColorStore = obj;
export { hasFetchedColors };
export const maybeFetchColors = function maybeFetchColors() {
  return obj(...arguments);
};
export const useHasFetchedColors = tmp3;
export const useAvatarColors = tmp5;