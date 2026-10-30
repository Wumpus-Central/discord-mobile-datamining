// === Module 16439: useHasFinishedPresenting ===

// Module 16439 (useHasFinishedPresenting)
import useNavigation from "useNavigation" /* 1498 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/useHasFinishedPresenting.tsx");

export default function useHasFinishedPresenting() {
  let navigation = useNavigation.useNavigation();
  [first, closure_2] = noop.useState(false);
  const items = [navigation, first];
  const effect = noop.useEffect(() => {
    if (!timeout) {
      const parent = navigation.getParent();
      let addListenerResult;
      if (parent != null) {
        addListenerResult = parent.addListener("transitionEnd", (data) => {
          if (!data.data.closing) {
            closure_1_2(true);
          }
        });
      }
      navigation = addListenerResult;
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => closure_1_2(true), 500);
      return () => {
        if (addListenerResult != null) {
          tmp();
        }
        clearTimeout(closure_1);
      };
    }
  }, items);
  return first;
};