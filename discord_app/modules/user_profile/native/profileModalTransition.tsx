// discord_app/modules/user_profile/native/profileModalTransition.tsx
import noop from "noop";
import set from "set";

const require = arg1;
let c3 = 0;
let set = new Set();
const result = set.fileFinishedImporting("modules/user_profile/native/profileModalTransition.tsx");

export const useReportProfileModalTransition = function useReportProfileModalTransition() {
  navigation = navigation(1499).useNavigation();
  let items = [navigation];
  const effect = React.useEffect(() => {
    function leave() {
      if (c0) {
        c0 = false;
        const _Math = Math;
        const bound = Math.max(0, outer1_3 - 1);
        if (bound !== outer1_3) {
          outer1_3 = bound;
          const item = outer1_4.forEach((arg0) => arg0());
        }
      }
    }
    const navigation = false;
    const items = [
      navigation.addListener("transitionStart", function enter() {
        if (!c0) {
          c0 = true;
          const _Math = Math;
          const bound = Math.max(0, outer1_3 + 1);
          if (bound !== outer1_3) {
            outer1_3 = bound;
            const item = outer1_4.forEach((arg0) => arg0());
          }
        }
      }),
      navigation.addListener("transitionEnd", leave),
      navigation.addListener("gestureCancel", leave)
    ];
    return () => {
      const item = items.forEach((arg0) => arg0());
      if (c0) {
        c0 = false;
        const _Math = Math;
        const bound = Math.max(0, outer1_3 - 1);
        if (bound !== outer1_3) {
          outer1_3 = bound;
          const item1 = outer1_4.forEach((arg0) => arg0());
        }
      }
    };
  }, items);
};
export const useIsProfileModalTransitioning = function useIsProfileModalTransitioning() {
  return React.useSyncExternalStore((arg0) => {
    let closure_0 = arg0;
    set.add(arg0);
    return () => outer1_4.delete(closure_0);
  }, () => closure_3 > 0);
};