// discord_app/modules/user_profile/native/profileModalTransition.tsx
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
let c3 = 0;
const set = new Set();
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/profileModalTransition.tsx");

export const useReportProfileModalTransition = function useReportProfileModalTransition() {
  navigation = navigation(1483).useNavigation();
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
      navigation.addListener("gestureCancel", leave),
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
};
export const useIsProfileModalTransitioning = function useIsProfileModalTransitioning() {
  return noop.useSyncExternalStore(
    (arg0) => {
      closure_0 = arg0;
      set.add(arg0);
      return () => set.delete(closure_0);
    },
    () => closure_1_3 > 0,
  );
};
