// === Module 16954: profileModalTransition ===

// Module 16954 (profileModalTransition)
import react2 from "react" /* 576 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let bound, navigation;

let c3 = 0;
const set = new Set();
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp3;
  let tmp4;
  const obj = navigation(576);
  const cResult = obj.c(3);
  const obj2 = navigation(1490);
  navigation = obj2.useNavigation();
  if (cResult[0] !== navigation) {
    const fn = function o() {
      let c0 = false;
      function leave() {
        const tmp = c0;
        if (tmp) {
          c0 = false;
          const _Math = Math;
          bound = Math.max(0, bound - 1);
          if (bound !== bound) {
            const item = closure_2_4.forEach((fn) => fn());
          }
        }
      }
      const items = [
        navigation.addListener("transitionStart", function enter() {
          const tmp = c0;
          if (!tmp) {
            c0 = true;
            const _Math = Math;
            bound = Math.max(0, bound + 1);
            if (bound !== bound) {
              const item = closure_2_4.forEach((fn) => fn());
            }
          }
        }),
        navigation.addListener("transitionEnd", leave),
        navigation.addListener("gestureCancel", leave)
      ];
      return () => {
        const item = items.forEach((fn) => fn());
        const tmp2 = c0;
        if (tmp2) {
          c0 = false;
          const _Math = Math;
          bound = Math.max(0, bound - 1);
          if (bound !== bound) {
            const item1 = closure_2_4.forEach((fn) => fn());
          }
        }
      };
    };
    let items = [navigation];
    cResult[0] = navigation;
    cResult[1] = fn;
    cResult[2] = items;
    tmp4 = items;
    tmp3 = fn;
  } else {
    tmp3 = cResult[1];
    tmp4 = cResult[2];
  }
  const effect = react.useEffect(tmp3, tmp4);
}) : (function useReportProfileModalTransition() {
  const obj = navigation(1490);
  navigation = obj.useNavigation();
  let items = [navigation];
  const effect = react.useEffect(() => {
    function leave() {
      const tmp = c0;
      if (tmp) {
        c0 = false;
        const _Math = Math;
        bound = Math.max(0, bound - 1);
        if (bound !== bound) {
          const item = closure_2_4.forEach((fn) => fn());
        }
      }
    }
    let c0 = false;
    const items = [
      navigation.addListener("transitionStart", function enter() {
        const tmp = c0;
        if (!tmp) {
          c0 = true;
          const _Math = Math;
          bound = Math.max(0, bound + 1);
          if (bound !== bound) {
            const item = closure_2_4.forEach((fn) => fn());
          }
        }
      }),
      navigation.addListener("transitionEnd", leave),
      navigation.addListener("gestureCancel", leave)
    ];
    return () => {
      const item = items.forEach((fn) => fn());
      const tmp2 = c0;
      if (tmp2) {
        c0 = false;
        const _Math = Math;
        bound = Math.max(0, bound - 1);
        if (bound !== bound) {
          const item1 = closure_2_4.forEach((fn) => fn());
        }
      }
    };
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsProfileModalTransitioning() {
  let tmp2;
  let tmp3;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s(arg0) {
      let closure_0 = arg0;
      set.add(arg0);
      return () => set.delete(closure_0);
    };
    const fn2 = function l() {
      return closure_1_3 > 0;
    };
    cResult[0] = fn;
    cResult[1] = fn2;
    tmp2 = fn;
    tmp3 = fn2;
  } else {
    [tmp2, tmp3] = cResult;
  }
  return react.useSyncExternalStore(tmp2, tmp3);
}) : (function useIsProfileModalTransitioning() {
  return react.useSyncExternalStore((arg0) => {
    let closure_0 = arg0;
    set.add(arg0);
    return () => set.delete(closure_0);
  }, () => closure_1_3 > 0);
});
const result = size.fileFinishedImporting("modules/user_profile/native/profileModalTransition.tsx");

export const useReportProfileModalTransition = tmp3;
export const useIsProfileModalTransitioning = tmp4;