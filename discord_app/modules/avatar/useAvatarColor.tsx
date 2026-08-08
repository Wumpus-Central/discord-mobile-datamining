// discord_app/modules/avatar/useAvatarColor.tsx
import _slicedToArray from "_slicedToArray";
import batchUpdates from "batchUpdates";
import noop from "noop";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import keys from "keys";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
function hasFetchedColors(game_name) {
  return null != keys.getState().palette[game_name];
}
function _maybeFetchColors() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c2 = 0;
    let c1 = 0;
    return (function*(arg0) {
      if (c1 === 2) {
        c1 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c1 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              if (!outer1_8(closure_0)) {
                c2 = 1;
                c1 = 1;
                const obj1 = { value: null, done: false };
                obj1[0] = outer1_10(tmp5);
                return obj1;
              }
              tmp5 = closure_0;
            }
          } else if (arg0 === 1) {
            c1 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c1 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          c1 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp8) {
          c1 = tmp;
          throw tmp8;
        }
      }
    })();
  });
  const _maybeFetchColors = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function fetchColors() {
  const self = this;
  const apply = _fetchColors.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchColors() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let dependencyMap = tmp3;
              let table = tmp7;
              table = undefined;
              dependencyMap = undefined;
              if (!outer1_7.getState().fetching[callback]) {
                callback(outer1_2[5]).batchUpdates(() => outer1_7.setState((fetching) => {
                  let obj = { fetching: null };
                  obj = {};
                  const merged = Object.assign(fetching.fetching);
                  obj[closure_0] = true;
                  obj[0] = obj;
                  return obj;
                }));
                let c4 = 1;
                const obj5 = callback(outer1_2[5]);
                c5 = 2;
                c6 = 1;
                let obj1 = { value: null, done: false };
                obj1[0] = callback(outer1_2[6]).getPaletteForAvatar(tmp35);
                return obj1;
              }
              tmp35 = callback;
            }
          } else {
            if (1 === tmp7) {
              c4 = 0;
              callback(705).batchUpdates(() => outer1_7.setState((fetching) => {
                let obj = { fetching: null };
                obj = {};
                const merged = Object.assign(fetching.fetching);
                obj[closure_0] = false;
                obj[0] = obj;
                return obj;
              }));
              const obj4 = callback(705);
            } else if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              table = arg1;
              obj = callback(4151);
              dependencyMap = obj.getComplimentaryPaletteForColor(table[0]);
              obj1 = callback(705);
              obj1.batchUpdates(() => {
                outer1_7.setState((fetching) => {
                  let obj = { fetching: null, palette: null };
                  obj = {};
                  const merged = Object.assign(fetching.fetching);
                  obj[closure_0] = false;
                  obj[0] = obj;
                  obj = {};
                  const merged1 = Object.assign(fetching.palette);
                  const items = [...closure_2];
                  obj[closure_0] = items;
                  obj[1] = obj;
                  return obj;
                });
              });
              c4 = 0;
            }
            c4 = 0;
            c6 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          }
          c6 = 3;
        } catch (tmp27) {
          let _slicedToArray = tmp27;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp27;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  const _fetchColors = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
keys = keys.create(() => ({ palette: {}, fetching: {} }));
const result = require("noop").fileFinishedImporting("modules/avatar/useAvatarColor.tsx");

export default function useAvatarColor(arg0, arg1) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  const _require = arg0;
  if (flag === undefined) {
    flag = true;
  }
  let dependencyMap;
  let stateFromStores;
  const tmp = keys((arg0) => {
    let tmp2;
    if (null != closure_0) {
      tmp2 = arg0.palette[tmp];
    }
    return tmp2;
  });
  dependencyMap = tmp;
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  stateFromStores = _initialize.useStateFromStores(items, () => {
    let num = 1;
    if (flag) {
      num = 1;
      if (outer1_6.desaturateUserColors) {
        num = outer1_6.saturation;
      }
    }
    return num;
  });
  const items1 = [arg0, tmp];
  const effect = React.useEffect(() => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = null == c2;
    }
    if (tmp2) {
      outer1_10(closure_0);
    }
  }, items1);
  const items2 = [tmp, stateFromStores];
  let memo = React.useMemo(() => {
    let mapped;
    if (c2 != null) {
      mapped = c2.map((arg0) => {
        let h;
        let l;
        let s;
        let tmp;
        let tmp2;
        let tmp3;
        [tmp, tmp2, tmp3] = arg0;
        let obj = outer1_1(outer1_2[9])({ r: tmp, g: tmp2, b: tmp3 });
        ({ h, s, l } = obj.toHsl());
        obj = { h, s: s * _slicedToArray, l };
        const toHslResult = obj.toHsl();
        return outer1_1(outer1_2[9])(obj).toHexString();
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
export const useColorStore = keys;
export { hasFetchedColors };
export const maybeFetchColors = function maybeFetchColors(closure_0) {
  const self = this;
  const apply = _maybeFetchColors.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const useHasFetchedColors = function useHasFetchedColors(arg0) {
  let closure_0 = arg0;
  return !keys((arg0) => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = arg0.fetching[tmp];
    }
    return tmp2;
  });
};
export const useAvatarColors = function useAvatarColors(pendingAvatarSrc, PRIMARY_530, arg2) {
  const _require = pendingAvatarSrc;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  let dependencyMap;
  let stateFromStores;
  const tmp = keys((arg0) => {
    let tmp2;
    if (null != closure_0) {
      tmp2 = arg0.palette[tmp];
    }
    return tmp2;
  });
  dependencyMap = tmp;
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  stateFromStores = _initialize.useStateFromStores(items, () => {
    let num = 1;
    if (flag) {
      num = 1;
      if (outer1_6.desaturateUserColors) {
        num = outer1_6.saturation;
      }
    }
    return num;
  });
  const items1 = [pendingAvatarSrc, tmp];
  const effect = React.useEffect(() => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = null == c2;
    }
    if (tmp2) {
      outer1_10(closure_0);
    }
  }, items1);
  const items2 = [tmp, stateFromStores];
  let memo = React.useMemo(() => {
    let mapped;
    if (c2 != null) {
      mapped = c2.map((arg0) => {
        let h;
        let l;
        let s;
        let tmp;
        let tmp2;
        let tmp3;
        [tmp, tmp2, tmp3] = arg0;
        let obj = outer1_1(outer1_2[9])({ r: tmp, g: tmp2, b: tmp3 });
        ({ h, s, l } = obj.toHsl());
        obj = { h, s: s * _slicedToArray, l };
        const toHslResult = obj.toHsl();
        return outer1_1(outer1_2[9])(obj).toHexString();
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