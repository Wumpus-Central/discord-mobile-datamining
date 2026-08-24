// discord_app/modules/user_profile/native/profileModalTransition.tsx
import closure_2 from "../../../../_runtime/00019_noop.js";
import set from "../../../../_runtime/00002_set.js";

const require = arg1;
let c3 = 0;
let set = new Set();
const result = set.fileFinishedImporting("modules/user_profile/native/profileModalTransition.tsx");

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
          const item = closure_1_4.forEach((arg0) => arg0());
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
            const item = closure_1_4.forEach((arg0) => arg0());
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
        bound = Math.max(0, bound - 1);
        if (bound !== bound) {
          const item1 = closure_1_4.forEach((arg0) => arg0());
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