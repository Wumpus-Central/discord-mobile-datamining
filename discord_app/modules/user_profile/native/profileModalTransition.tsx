// === Module 16954: profileModalTransition ===

// Module 16954 (profileModalTransition)
import c from "c" /* 576 */;
import noop from "module_19" /* 19 */;

require = fn;
let c3 = 0;
const set = new Set();
fn(558);
const ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = navigation(576).c(3);
  const obj = navigation(576);
  navigation = navigation(1490).useNavigation();
  if (cResult[0] !== navigation) {
    const fn = function o() {
      c0 = false;
      function leave() {
        if (c0) {
          c0 = false;
          const _Math = Math;
          bound = Math.max(0, bound - 1);
          if (bound !== bound) {
            const item = set.forEach((fn) => fn());
          }
        }
      }
      const items = [
        navigation.addListener("transitionStart", function enter() {
          if (!c0) {
            c0 = true;
            const _Math = Math;
            bound = Math.max(0, bound + 1);
            if (bound !== bound) {
              const item = set.forEach((fn) => fn());
            }
          }
        }),
        navigation.addListener("transitionEnd", leave),
        navigation.addListener("gestureCancel", leave)
      ];
      return () => {
        const item = items.forEach((fn) => fn());
        if (c0) {
          c0 = false;
          const _Math = Math;
          bound = Math.max(0, bound - 1);
          if (bound !== bound) {
            const item1 = set.forEach((fn) => fn());
          }
        }
      };
    };
    let items = [navigation];
    cResult[0] = navigation;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp4 = items;
    let tmp3 = fn;
  } else {
    tmp3 = cResult[1];
    tmp4 = cResult[2];
  }
  const effect = noop.useEffect(tmp3, tmp4);
}) : (function useReportProfileModalTransition() {
  navigation = navigation(1490).useNavigation();
  let items = [navigation];
  const effect = noop.useEffect(() => {
    function leave() {
      if (c0) {
        c0 = false;
        const _Math = Math;
        bound = Math.max(0, bound - 1);
        if (bound !== bound) {
          const item = set.forEach((fn) => fn());
        }
      }
    }
    c0 = false;
    const items = [
      navigation.addListener("transitionStart", function enter() {
        if (!c0) {
          c0 = true;
          const _Math = Math;
          bound = Math.max(0, bound + 1);
          if (bound !== bound) {
            const item = set.forEach((fn) => fn());
          }
        }
      }),
      navigation.addListener("transitionEnd", leave),
      navigation.addListener("gestureCancel", leave)
    ];
    return () => {
      const item = items.forEach((fn) => fn());
      if (c0) {
        c0 = false;
        const _Math = Math;
        bound = Math.max(0, bound - 1);
        if (bound !== bound) {
          const item1 = set.forEach((fn) => fn());
        }
      }
    };
  }, items);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/profileModalTransition.tsx");

export const useReportProfileModalTransition = tmp3;
export const useIsProfileModalTransitioning = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsProfileModalTransitioning() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s(arg0) {
      closure_0 = arg0;
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
  return noop.useSyncExternalStore(tmp2, tmp3);
}) : (function useIsProfileModalTransitioning() {
  return noop.useSyncExternalStore((arg0) => {
    closure_0 = arg0;
    set.add(arg0);
    return () => set.delete(closure_0);
  }, () => closure_1_3 > 0);
});