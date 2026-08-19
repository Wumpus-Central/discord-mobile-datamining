// === Module 16004: set ===

// Module 16004 (set)
import noop from "noop" /* 19 */;

const require = fn;
let c3 = 0;
const set = new Set();
const result = require("obj132").fileFinishedImporting("modules/user_profile/native/profileModalTransition.tsx");

export const useReportProfileModalTransition = function useReportProfileModalTransition() {
  navigation = navigation(1500).useNavigation();
  let items = [navigation];
  const effect = React.useEffect(() => {
    function leave() {
      if (c0) {
        c0 = false;
        const _Math = Math;
        bound = Math.max(0, bound - 1);
        if (bound !== bound) {
          const item = closure_1_4.forEach((item, index) => item());
        }
      }
    }
    navigation = false;
    const items = [
      navigation.addListener("transitionStart", function enter() {
        if (!c0) {
          c0 = true;
          const _Math = Math;
          bound = Math.max(0, bound + 1);
          if (bound !== bound) {
            const item = closure_1_4.forEach((item, index) => item());
          }
        }
      }),
      navigation.addListener("transitionEnd", leave),
      navigation.addListener("gestureCancel", leave)
    ];
    return () => {
      const item = items.forEach((item, index) => item());
      if (c0) {
        c0 = false;
        const _Math = Math;
        bound = Math.max(0, bound - 1);
        if (bound !== bound) {
          const item1 = closure_1_4.forEach((item, index) => item());
        }
      }
    };
  }, items);
};
export const useIsProfileModalTransitioning = function useIsProfileModalTransitioning() {
  return React.useSyncExternalStore((arg0) => {
    closure_0 = arg0;
    set.add(arg0);
    return () => closure_1_4.delete(closure_0);
  }, () => closure_3 > 0);
};