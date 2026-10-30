// discord_app/modules/user_profile/hooks/native/useScrollToUserProfileEditFormSection.tsx
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import ProfileCustomizationNavigationStore from "../../../profile_customization/ProfileCustomizationNavigationStore.tsx";

const require = globalThis.__r;

const require = fn;
const findNodeHandle = fn(17).findNodeHandle;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_profile/hooks/native/useScrollToUserProfileEditFormSection.tsx",
);

export default function useScrollToUserProfileEditFormSection(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  noop = noop.useRef({});
  noop.useRef(false);
  const items = [stateFromStores];
  stateFromStores = require("initialize").useStateFromStores(items, () => stateFromStores.useReducedMotion);
  const items1 = [arg0, stateFromStores];
  const callback = noop.useCallback((arg0) => {
    let current = ref2.current;
    if (!current) {
      current = null == ref.current[arg0];
    }
    if (!current) {
      ref2.current = true;
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        closure_3.current = false;
        const tmp = findNodeHandle(ref.current);
        if (null != tmp) {
          if (obj != null) {
            obj.measureLayout(tmp, (x, y) => {
              const current = ref.current;
              if (current != null) {
                const point = { x, y, animated: !closure_1_4 };
                current.scrollTo(point);
              }
            });
          }
          ProfileCustomizationNavigationStore.setState({ scrollPosition: null });
        }
      }, 0);
    }
  }, items1);
  const effect = noop.useEffect(() => {
    if (null != closure_1) {
      callback(tmp);
    }
  });
  const items2 = [arg1, callback];
  return noop.useCallback((arg0, arg1) => {
    if (null != arg1) {
      ref.current[arg0] = arg1;
      if (arg0 === closure_1) {
        callback(arg0);
      }
    }
  }, items2);
}
