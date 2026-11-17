// discord_app/modules/user_profile/hooks/native/useScrollToUserProfileEditFormSection.tsx
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import ProfileCustomizationNavigationStore from "../../../profile_customization/ProfileCustomizationNavigationStore.tsx";

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_profile/hooks/native/useScrollToUserProfileEditFormSection.tsx",
);

export default function useScrollToUserProfileEditFormSection(animatedRef, field, tabsBarHeight) {
  _require = animatedRef;
  dependencyMap = field;
  noop = tabsBarHeight;
  noop.useRef(false);
  const ref = noop.useRef({});
  items = [ref];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ref.useReducedMotion);
  const items1 = [animatedRef, stateFromStores, tabsBarHeight];
  const callback = noop.useCallback((arg0) => {
    let current = ref2.current;
    if (!current) {
      current = null == ref.current[arg0];
    }
    if (!current) {
      ref2.current = true;
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        closure_4.current = false;
        let current = ref.current;
        let innerViewRef;
        if (current != null) {
          innerViewRef = current.getInnerViewRef();
        }
        if (null != innerViewRef) {
          if (obj != null) {
            obj.measureLayout(innerViewRef, (arg0, arg1) => {
              let num;
              if (closure_1_2 != null) {
                num = closure_1_2.get();
              }
              if (num == null) {
                num = 0;
              }
              const current = ref.current;
              if (current != null) {
                const obj2 = { y: tmp, animated: !closure_1_5 };
                current.scrollTo(obj2);
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
  const items2 = [field, callback];
  return noop.useCallback((arg0, arg1) => {
    if (null != arg1) {
      ref.current[arg0] = arg1;
      if (arg0 === closure_1) {
        callback(arg0);
      }
    }
  }, items2);
}
