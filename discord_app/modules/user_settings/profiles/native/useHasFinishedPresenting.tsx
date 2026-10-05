// === Module 14451: useHasFinishedPresenting ===

// Module 14451 (useHasFinishedPresenting)
import react2 from "react" /* 576 */;
import useNavigation from "useNavigation" /* 1490 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let navigation;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_2;
  let first;
  const obj = react2;
  const cResult = obj.c(4);
  const obj2 = useNavigation;
  navigation = obj2.useNavigation();
  [first, closure_2] = react.useState(false);
  if (cResult[0] === first) {
    let tmp5;
    let tmp6;
    if (cResult[1] === navigation) {
      tmp5 = cResult[2];
      tmp6 = cResult[3];
    }
    const effect = react.useEffect(tmp5, tmp6);
    return first;
  }
  const fn = function s() {
    let closure_1;
    let timeout;
    const tmp = timeout;
    if (!tmp) {
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
        if (navigation != null) {
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
}) : (() => {
  let closure_2;
  let first;
  const obj = useNavigation;
  navigation = obj.useNavigation();
  [first, closure_2] = react.useState(false);
  const items = [navigation, first];
  const effect = react.useEffect(() => {
    let closure_1;
    let timeout;
    const tmp = timeout;
    if (!tmp) {
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
        if (navigation != null) {
          tmp();
        }
        clearTimeout(closure_1);
      };
    }
  }, items);
  return first;
});
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/useHasFinishedPresenting.tsx");

export default tmp2;