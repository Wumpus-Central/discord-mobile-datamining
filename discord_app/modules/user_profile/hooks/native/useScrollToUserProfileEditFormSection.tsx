// === Module 14783: useScrollToUserProfileEditFormSection ===

// Module 14783 (useScrollToUserProfileEditFormSection)
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5080 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 10543 */;

const require = globalThis.__r;

const require = fn;
const findNodeHandle = fn(17).findNodeHandle;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/native/useScrollToUserProfileEditFormSection.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useScrollToUserProfileEditFormSection(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  const cResult = require("c").c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = {};
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  ref = ref.useRef(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function v() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[1] = items;
    cResult[2] = fn;
    let tmp7 = fn;
    let tmp6 = items;
  } else {
    tmp6 = cResult[1];
    tmp7 = cResult[2];
  }
  const obj = require("c");
  const obj3 = ref;
  const stateFromStores = require("initialize").useStateFromStores(tmp6, tmp7);
  if (cResult[3] === arg1) {
    if (cResult[4] === arg0) {
      if (cResult[5] === stateFromStores) {
        let tmp10 = cResult[6];
      }
      const effect = obj3.useEffect(tmp10);
      return ref;
    }
  }
  const fn2 = function y() {
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
        const tmp = stateFromStores(ref.current);
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
  };
  cResult[3] = arg1;
  cResult[4] = arg0;
  cResult[5] = stateFromStores;
  cResult[6] = fn2;
  tmp10 = fn2;
  const tmpResult = require("initialize");
}) : (function useScrollToUserProfileEditFormSection(arg0, arg1) {
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
});