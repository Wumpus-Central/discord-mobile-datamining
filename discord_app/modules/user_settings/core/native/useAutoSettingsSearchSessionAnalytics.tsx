// === Module 17393: useAutoSettingsSearchSessionAnalytics ===

// Module 17393 (useAutoSettingsSearchSessionAnalytics)
import useMountEffectDefault from "useMountEffect" /* 5392 */;
import usePreviousDefault from "usePrevious" /* 5928 */;
import SettingSearchSessionAnalyticsManagerDefault from "SettingSearchSessionAnalyticsManager" /* 6676 */;
import noop from "module_19" /* 19 */;
import AppStateStore from "AppStateStore" /* 1998 */;
import UserSettingSearchStore from "UserSettingSearchStore" /* 14777 */;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/core/native/useAutoSettingsSearchSessionAnalytics.tsx");

export const useAutoSettingsSearchSessionAnalytics = ReactCompilerGating.isReactCompilerEnabled() ? (function useAutoSettingsSearchSessionAnalytics() {
  const cResult = stateFromStores(576).c(13);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AppStateStore];
    const fn = function u() {
      state = state.getState();
      return state === stateFromStores(dependencyMap[5]).AppStates.ACTIVE;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let obj = stateFromStores(576);
  stateFromStores = stateFromStores(504).useStateFromStores(tmp4, tmp5);
  const tmp9 = usePreviousDefault(stateFromStores);
  importDefault = tmp9;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function o() {
      return () => {
        closure_1_1(closure_1_2[8]).terminate();
      };
    };
    cResult[2] = fn2;
    let tmp10 = fn2;
  } else {
    tmp10 = cResult[2];
  }
  useMountEffectDefault(tmp10);
  if (cResult[3] === stateFromStores) {
    if (cResult[4] === tmp9) {
      let tmp12 = cResult[5];
      let tmp13 = cResult[6];
    }
    const effect = noop.useEffect(tmp12, tmp13);
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const fn4 = function y() {
        return UserSettingSearchStore.subscribe((isFocused) => {
          isFocused = isFocused.isFocused;
          if (!isFocused) {
            isFocused = isFocused.query.length > 0;
          }
          return isFocused;
        }, (arg0) => {
          const obj = closure_1_1(closure_1_2[8]);
          if (arg0) {
            obj.initialize();
          } else {
            obj.terminate();
          }
        }, {
          equalityFn(arg0, arg1) {
            return arg0 === arg1;
          }
        });
      };
      cResult[7] = fn4;
      let tmp15 = fn4;
    } else {
      tmp15 = cResult[7];
    }
    if (cResult[8] !== stateFromStores) {
      const items1 = [stateFromStores];
      cResult[8] = stateFromStores;
      cResult[9] = items1;
      let tmp16 = items1;
    } else {
      tmp16 = cResult[9];
    }
    const effect1 = noop.useEffect(tmp15, tmp16);
    const _Symbol2 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor() {
          obj = {
            equalityFn(arg0, arg1) {
                      return arg0 === arg1;
                    }
          };
          return closure_1_5.subscribe((isFocused) => {
            isFocused = isFocused.isFocused;
            if (isFocused) {
              isFocused = isFocused.query.length > 0;
            }
            return isFocused;
          }, (arg0) => {
            if (arg0) {
              const result = closure_1_1(dependencyMap[8]).maybeTrackQueryEntered();
              const obj = closure_1_1(dependencyMap[8]);
            }
          }, obj);
        }
      }
      cResult[10] = F;
    } else {
      class F {
        constructor() {
          obj = {
            equalityFn(arg0, arg1) {
                      return arg0 === arg1;
                    }
          };
          return closure_1_5.subscribe((isFocused) => {
            isFocused = isFocused.isFocused;
            if (isFocused) {
              isFocused = isFocused.query.length > 0;
            }
            return isFocused;
          }, (arg0) => {
            if (arg0) {
              const result = closure_1_1(dependencyMap[8]).maybeTrackQueryEntered();
              const obj = closure_1_1(dependencyMap[8]);
            }
          }, obj);
        }
      }
    }
    if (cResult[11] !== stateFromStores) {
      class F {
        constructor() {
          obj = {
            equalityFn(arg0, arg1) {
                      return arg0 === arg1;
                    }
          };
          return closure_1_5.subscribe((isFocused) => {
            isFocused = isFocused.isFocused;
            if (isFocused) {
              isFocused = isFocused.query.length > 0;
            }
            return isFocused;
          }, (arg0) => {
            if (arg0) {
              const result = closure_1_1(dependencyMap[8]).maybeTrackQueryEntered();
              const obj = closure_1_1(dependencyMap[8]);
            }
          }, obj);
        }
      }
      tmp20[0] = stateFromStores;
      cResult[11] = stateFromStores;
      cResult[12] = tmp20;
    } else {
      class F {
        constructor() {
          obj = {
            equalityFn(arg0, arg1) {
                      return arg0 === arg1;
                    }
          };
          return closure_1_5.subscribe((isFocused) => {
            isFocused = isFocused.isFocused;
            if (isFocused) {
              isFocused = isFocused.query.length > 0;
            }
            return isFocused;
          }, (arg0) => {
            if (arg0) {
              const result = closure_1_1(dependencyMap[8]).maybeTrackQueryEntered();
              const obj = closure_1_1(dependencyMap[8]);
            }
          }, obj);
        }
      }
    }
    const effect2 = noop.useEffect(F, tmp20);
  }
  const fn3 = function l() {
    let field = UserSettingSearchStore.getField("isFocused");
    if (!field) {
      field = UserSettingSearchStore.getField("query").length > 0;
    }
    let tmp3 = stateFromStores;
    if (stateFromStores) {
      tmp3 = !closure_1;
    }
    if (tmp3) {
      tmp3 = field;
    }
    if (tmp3) {
      SettingSearchSessionAnalyticsManagerDefault.initialize();
    }
    let tmp8 = !stateFromStores;
    if (!stateFromStores) {
      tmp8 = closure_1;
    }
    if (tmp8) {
      tmp8 = field;
    }
    if (tmp8) {
      SettingSearchSessionAnalyticsManagerDefault.terminate();
    }
  };
  const items2 = [stateFromStores, tmp9];
  cResult[3] = stateFromStores;
  cResult[4] = tmp9;
  cResult[5] = fn3;
  cResult[6] = items2;
  tmp13 = items2;
  tmp12 = fn3;
  const tmpResult = stateFromStores(504);
}) : (function useAutoSettingsSearchSessionAnalytics() {
  const items = [AppStateStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => {
    state = state.getState();
    return state === stateFromStores(dependencyMap[5]).AppStates.ACTIVE;
  });
  const tmp2 = usePreviousDefault(stateFromStores);
  importDefault = tmp2;
  useMountEffectDefault(() => () => {
    closure_1_1(closure_1_2[8]).terminate();
  });
  const items1 = [stateFromStores, tmp2];
  const effect = noop.useEffect(() => {
    let field = UserSettingSearchStore.getField("isFocused");
    if (!field) {
      field = UserSettingSearchStore.getField("query").length > 0;
    }
    let tmp3 = stateFromStores;
    if (stateFromStores) {
      tmp3 = !closure_1;
    }
    if (tmp3) {
      tmp3 = field;
    }
    if (tmp3) {
      SettingSearchSessionAnalyticsManagerDefault.initialize();
    }
    let tmp8 = !stateFromStores;
    if (!stateFromStores) {
      tmp8 = closure_1;
    }
    if (tmp8) {
      tmp8 = field;
    }
    if (tmp8) {
      SettingSearchSessionAnalyticsManagerDefault.terminate();
    }
  }, items1);
  const items2 = [stateFromStores];
  const effect1 = noop.useEffect(() => UserSettingSearchStore.subscribe((isFocused) => {
    isFocused = isFocused.isFocused;
    if (!isFocused) {
      isFocused = isFocused.query.length > 0;
    }
    return isFocused;
  }, (arg0) => {
    const obj = closure_1_1(closure_1_2[8]);
    if (arg0) {
      obj.initialize();
    } else {
      obj.terminate();
    }
  }, {
    equalityFn(arg0, arg1) {
      return arg0 === arg1;
    }
  }), items2);
  const items3 = [stateFromStores];
  const effect2 = noop.useEffect(() => UserSettingSearchStore.subscribe((isFocused) => {
    isFocused = isFocused.isFocused;
    if (isFocused) {
      isFocused = isFocused.query.length > 0;
    }
    return isFocused;
  }, (arg0) => {
    if (arg0) {
      const result = closure_1_1(dependencyMap[8]).maybeTrackQueryEntered();
      const obj = closure_1_1(dependencyMap[8]);
    }
  }, {
    equalityFn(arg0, arg1) {
      return arg0 === arg1;
    }
  }), items3);
});