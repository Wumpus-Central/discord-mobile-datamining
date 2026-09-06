// === Module 14607: useScrollToUserProfileEditFormSection ===

// Module 14607 (useScrollToUserProfileEditFormSection)
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 9208 */;

const require = fn;
const findNodeHandle = fn(17).findNodeHandle;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/native/useScrollToUserProfileEditFormSection.tsx");

export default function useScrollToUserProfileEditFormSection(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  ref = ref.useRef({});
  const items = [AccessibilityStore];
  closure_3 = require("initialize").useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const effect = ref.useEffect(() => {
    let tmp2 = null != closure_1;
    if (tmp2) {
      let current = ref.current;
      let tmp4;
      if (current != null) {
        tmp4 = current[tmp];
      }
      tmp2 = null != tmp4;
    }
    if (tmp2) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        const tmp = closure_3(ref.current);
        if (null != tmp) {
          if (obj != null) {
            obj.measureLayout(tmp, (x, y) => {
              const current = ref.current;
              if (current != null) {
                const point = { x, y, animated: !closure_1_3 };
                current.scrollTo(point);
              }
            });
          }
          state.setState({ scrollPosition: null });
        }
      }, 0);
    }
  });
  return ref;
};