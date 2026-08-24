// discord_app/modules/user_profile/hooks/native/useScrollToUserProfileEditFormSection.tsx
import closure_2 from "../../../../../_runtime/00019_noop.js";
import { findNodeHandle } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_4 from "../../../a11y/AccessibilityStore.tsx";
import closure_5 from "../../../profile_customization/ProfileCustomizationNavigationStore.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_profile/hooks/native/useScrollToUserProfileEditFormSection.tsx");

export default function useScrollToUserProfileEditFormSection(arg0, arg1) {
  const _require = arg0;
  dependencyMap = arg1;
  ref = ref.useRef({});
  const items = [closure_4];
  closure_3 = require("../../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => useReducedMotion.useReducedMotion);
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
        const tmp = closure_1_3(ref.current);
        if (null != tmp) {
          if (obj != null) {
            obj.measureLayout(tmp, (arg0, arg1) => {
              const current = ref.current;
              if (current != null) {
                const obj = { x: null, y: null, animated: null };
                obj[0] = arg0;
                obj[1] = arg1;
                obj[2] = !closure_3;
                current.scrollTo(obj);
              }
            });
          }
          closure_1_5.setState({ scrollPosition: null });
        }
      }, 0);
    }
  });
  return ref;
};