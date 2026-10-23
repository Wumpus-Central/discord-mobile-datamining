// discord_app/modules/user_profile/hooks/native/useScrollToUserProfileEditFormSection.tsx
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import ProfileCustomizationNavigationStore from "../../../profile_customization/ProfileCustomizationNavigationStore.tsx";

const require = globalThis.__r;

const require = fn;
const findNodeHandle = fn(17).findNodeHandle;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/native/useScrollToUserProfileEditFormSection.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useScrollToUserProfileEditFormSection(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  const cResult = require("c").c(12);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = {};
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  noop = noop.useRef(first);
  noop.useRef(false);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [stateFromStores];
    const fn = function v() {
      return stateFromStores.useReducedMotion;
    };
    cResult[1] = items;
    cResult[2] = fn;
    let tmp6 = fn;
    let tmp5 = items;
  } else {
    tmp5 = cResult[1];
    tmp6 = cResult[2];
  }
  const obj = require("c");
  const obj3 = noop;
  stateFromStores = require("initialize").useStateFromStores(tmp5, tmp6);
  if (cResult[3] === arg0) {
    if (cResult[4] === stateFromStores) {
      let tmp9 = cResult[5];
    }
    ProfileCustomizationNavigationStore = tmp9;
    if (cResult[6] === arg1) {
      if (cResult[7] === tmp9) {
        let tmp10 = cResult[8];
      }
      const effect = obj3.useEffect(tmp10);
      if (cResult[9] === arg1) {
        if (cResult[10] === tmp9) {
          let tmp13 = cResult[11];
        }
        return tmp13;
      }
      class E {
        constructor(arg0, arg1) {
          if (null != arg1) {
            tmp = arg0;
            tmp2 = closure_2;
            closure_2.current[arg0] = arg1;
            tmp3 = closure_1;
            if (arg0 === closure_1) {
              tmp4 = closure_5;
              tmp5 = closure_5(arg0);
            }
          }
          return;
        }
      }
      cResult[9] = arg1;
      cResult[10] = tmp9;
      cResult[11] = E;
      tmp13 = E;
    }
    cResult[6] = arg1;
    cResult[7] = tmp9;
    cResult[8] = tmp11;
    tmp10 = tmp11;
  }
  class R {
    constructor(arg0) {
      closure_0 = arg0;
      current = closure_3.current;
      tmp = closure_3;
      if (!current) {
        tmp2 = closure_2;
        tmp3 = null;
        current = null == closure_2.current[arg0];
      }
      if (!current) {
        flag = true;
        tmp.current = true;
        tmp4 = globalThis;
        _setTimeout = setTimeout;
        num = 0;
        timerId = setTimeout(() => {
          closure_3.current = false;
          const tmp = findNodeHandle(ref.current);
          if (null != tmp) {
            if (obj != null) {
              obj.measureLayout(tmp, () => { ... });
            }
            ProfileCustomizationNavigationStore.setState({ scrollPosition: null });
          }
        }, 0);
      }
      return;
    }
  }
  cResult[3] = arg0;
  cResult[4] = stateFromStores;
  cResult[5] = R;
  tmp9 = R;
}) : (function useScrollToUserProfileEditFormSection(arg0, arg1) {
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
});