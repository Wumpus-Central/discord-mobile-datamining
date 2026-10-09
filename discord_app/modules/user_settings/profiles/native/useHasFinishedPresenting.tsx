// === Module 14801: useHasFinishedPresenting ===

// Module 14801 (useHasFinishedPresenting)
import c from "c" /* 576 */;
import useNavigation from "useNavigation" /* 1503 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/useHasFinishedPresenting.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useHasFinishedPresenting() {
  const cResult = c.c(4);
  let navigation = useNavigation.useNavigation();
  [first, closure_2] = noop.useState(false);
  if (cResult[0] === first) {
    if (cResult[1] === navigation) {
      let tmp5 = cResult[2];
      let tmp6 = cResult[3];
    }
    const effect = noop.useEffect(tmp5, tmp6);
    return first;
  }
  const fn = function s() {
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
  };
  const items = [navigation, first];
  cResult[0] = first;
  cResult[1] = navigation;
  cResult[2] = fn;
  cResult[3] = items;
  tmp6 = items;
  tmp5 = fn;
}) : (function useHasFinishedPresenting() {
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
});