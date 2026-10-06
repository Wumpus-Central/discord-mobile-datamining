// discord_app/modules/user_settings/core/native/useAutoSettingsSearchSessionAnalytics.tsx
import SettingSearchSessionAnalyticsManagerDefault from "../../../settings/tracking/SettingSearchSessionAnalyticsManager.tsx";
import usePreviousDefault from "../../../../hooks/usePrevious.tsx";
import react from "../../../../../_runtime/00019_react.js";
import AppStateStore from "../../../../stores/native/AppStateStore.tsx";
import UserSettingSearchStore from "../../UserSettingSearchStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let importDefault, isFocused, state;

let tmp8;
const useMountEffectDefault = tmp8(5597);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let closure_1;
      let stateFromStores;
      let tmp10;
      let tmp4;
      let tmp5;
      let tmp = stateFromStores;
      let obj = stateFromStores(576);
      const cResult = obj.c(13);
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
      const tmpResult = tmp(504);
      stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      let tmp8 = importDefault;
      const tmp9 = usePreviousDefault(stateFromStores);
      importDefault = tmp9;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function o() {
          return () => {
            const obj = closure_1_1(closure_1_2[8]);
            obj.terminate();
          };
        };
        cResult[2] = fn2;
        tmp10 = fn2;
      } else {
        tmp10 = cResult[2];
      }
      useMountEffectDefault(tmp10);
      if (cResult[3] === stateFromStores) {
        let tmp12;
        let tmp13;
        let tmp15;
        let tmp16;
        if (cResult[4] === tmp9) {
          tmp12 = cResult[5];
          tmp13 = cResult[6];
        }
        const effect = react.useEffect(tmp12, tmp13);
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const fn4 = function y() {
            let obj = {
              equalityFn(arg0, arg1) {
                return arg0 === arg1;
              },
            };
            return UserSettingSearchStore.subscribe(
              (isFocused) => {
                isFocused = isFocused.isFocused || isFocused.query.length > 0;
                return isFocused;
              },
              (arg0) => {
                const obj = closure_1_1(closure_1_2[8]);
                const tmp = arg0;
                if (tmp) {
                  obj.initialize();
                } else {
                  obj.terminate();
                }
              },
              obj,
            );
          };
          cResult[7] = fn4;
          tmp15 = fn4;
        } else {
          tmp15 = cResult[7];
        }
        if (cResult[8] !== stateFromStores) {
          const items1 = [stateFromStores];
          cResult[8] = stateFromStores;
          cResult[9] = items1;
          tmp16 = items1;
        } else {
          tmp16 = cResult[9];
        }
        const effect1 = react.useEffect(tmp15, tmp16);
        const _Symbol2 = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          class F {
            constructor() {
              let obj = {
                equalityFn(arg0, arg1) {
                  return arg0 === arg1;
                },
              };
              return UserSettingSearchStore.subscribe(
                (isFocused) => {
                  isFocused = isFocused.isFocused && isFocused.query.length > 0;
                  return isFocused;
                },
                (arg0) => {
                  const tmp = arg0;
                  if (tmp) {
                    const obj = closure_1_1(closure_1_2[8]);
                    const result = obj.maybeTrackQueryEntered();
                  }
                },
                obj,
              );
            }
          }
          cResult[10] = F;
        } else {
          class F {
            constructor() {
              let obj = {
                equalityFn(arg0, arg1) {
                  return arg0 === arg1;
                },
              };
              return UserSettingSearchStore.subscribe(
                (isFocused) => {
                  isFocused = isFocused.isFocused && isFocused.query.length > 0;
                  return isFocused;
                },
                (arg0) => {
                  const tmp = arg0;
                  if (tmp) {
                    const obj = closure_1_1(closure_1_2[8]);
                    const result = obj.maybeTrackQueryEntered();
                  }
                },
                obj,
              );
            }
          }
        }
        if (cResult[11] !== stateFromStores) {
          class F {
            constructor() {
              let obj = {
                equalityFn(arg0, arg1) {
                  return arg0 === arg1;
                },
              };
              return UserSettingSearchStore.subscribe(
                (isFocused) => {
                  isFocused = isFocused.isFocused && isFocused.query.length > 0;
                  return isFocused;
                },
                (arg0) => {
                  const tmp = arg0;
                  if (tmp) {
                    const obj = closure_1_1(closure_1_2[8]);
                    const result = obj.maybeTrackQueryEntered();
                  }
                },
                obj,
              );
            }
          }
          tmp20[0] = stateFromStores;
          cResult[11] = stateFromStores;
          cResult[12] = tmp20;
        } else {
          class F {
            constructor() {
              let obj = {
                equalityFn(arg0, arg1) {
                  return arg0 === arg1;
                },
              };
              return UserSettingSearchStore.subscribe(
                (isFocused) => {
                  isFocused = isFocused.isFocused && isFocused.query.length > 0;
                  return isFocused;
                },
                (arg0) => {
                  const tmp = arg0;
                  if (tmp) {
                    const obj = closure_1_1(closure_1_2[8]);
                    const result = obj.maybeTrackQueryEntered();
                  }
                },
                obj,
              );
            }
          }
        }
        const effect2 = react.useEffect(F, tmp20);
      }
      const fn3 = function l() {
        const field =
          UserSettingSearchStore.getField("isFocused") || UserSettingSearchStore.getField("query").length > 0;
        const tmp3 = stateFromStores && !closure_1 && field;
        if (tmp3) {
          const obj = SettingSearchSessionAnalyticsManagerDefault;
          obj.initialize();
        }
        const tmp8 = !stateFromStores && closure_1 && field;
        if (tmp8) {
          const obj2 = SettingSearchSessionAnalyticsManagerDefault;
          obj2.terminate();
        }
      };
      const items2 = [stateFromStores, tmp9];
      cResult[3] = stateFromStores;
      cResult[4] = tmp9;
      cResult[5] = fn3;
      cResult[6] = items2;
      tmp13 = items2;
      tmp12 = fn3;
    }
  : () => {
      let closure_1;
      let stateFromStores;
      let obj = stateFromStores(504);
      const items = [AppStateStore];
      stateFromStores = obj.useStateFromStores(items, () => {
        state = state.getState();
        return state === stateFromStores(dependencyMap[5]).AppStates.ACTIVE;
      });
      const tmp2 = usePreviousDefault(stateFromStores);
      importDefault = tmp2;
      let tmp3 = useMountEffectDefault(() => () => {
        const obj = closure_1_1(closure_1_2[8]);
        obj.terminate();
      });
      const items1 = [stateFromStores, tmp2];
      const effect = react.useEffect(() => {
        const field =
          UserSettingSearchStore.getField("isFocused") || UserSettingSearchStore.getField("query").length > 0;
        const tmp3 = stateFromStores && !closure_1 && field;
        if (tmp3) {
          const obj = SettingSearchSessionAnalyticsManagerDefault;
          obj.initialize();
        }
        const tmp8 = !stateFromStores && closure_1 && field;
        if (tmp8) {
          const obj2 = SettingSearchSessionAnalyticsManagerDefault;
          obj2.terminate();
        }
      }, items1);
      const items2 = [stateFromStores];
      const effect1 = react.useEffect(() => {
        let obj = {
          equalityFn(arg0, arg1) {
            return arg0 === arg1;
          },
        };
        return UserSettingSearchStore.subscribe(
          (isFocused) => {
            isFocused = isFocused.isFocused || isFocused.query.length > 0;
            return isFocused;
          },
          (arg0) => {
            const obj = closure_1_1(closure_1_2[8]);
            const tmp = arg0;
            if (tmp) {
              obj.initialize();
            } else {
              obj.terminate();
            }
          },
          obj,
        );
      }, items2);
      const items3 = [stateFromStores];
      const effect2 = react.useEffect(() => {
        let obj = {
          equalityFn(arg0, arg1) {
            return arg0 === arg1;
          },
        };
        return UserSettingSearchStore.subscribe(
          (isFocused) => {
            isFocused = isFocused.isFocused && isFocused.query.length > 0;
            return isFocused;
          },
          (arg0) => {
            const tmp = arg0;
            if (tmp) {
              const obj = closure_1_1(closure_1_2[8]);
              const result = obj.maybeTrackQueryEntered();
            }
          },
          obj,
        );
      }, items3);
    };
let result = size.fileFinishedImporting("modules/user_settings/core/native/useAutoSettingsSearchSessionAnalytics.tsx");

export const useAutoSettingsSearchSessionAnalytics = tmp2;
