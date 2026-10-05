// discord_app/modules/user_profile/hooks/native/useScrollToUserProfileEditFormSection.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react from "../../../../../_runtime/00019_react.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import ProfileCustomizationNavigationStore from "../../../profile_customization/ProfileCustomizationNavigationStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap;

const findNodeHandle = react_native.findNodeHandle;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let closure_0;
      let closure_1;
      let first;
      let ref;
      let state;
      let tmp6;
      let tmp7;
      let useReducedMotion;
      _require = arg0;
      dependencyMap = arg1;
      let tmp = _require;
      let tmp2 = dependencyMap;
      const obj = require("react");
      const cResult = obj.c(7);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = {};
        cResult[0] = obj2;
        first = obj2;
      } else {
        first = cResult[0];
      }
      const obj3 = ref;
      ref = ref.useRef(first);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AccessibilityStore];
        const fn = function v() {
          return useReducedMotion.useReducedMotion;
        };
        cResult[1] = items;
        cResult[2] = fn;
        tmp7 = fn;
        tmp6 = items;
      } else {
        tmp6 = cResult[1];
        tmp7 = cResult[2];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
      if (cResult[3] === arg1) {
        if (cResult[4] === arg0) {
          let tmp10;
          if (cResult[5] === stateFromStores) {
            tmp10 = cResult[6];
          }
          const effect = obj3.useEffect(tmp10);
          return ref;
        }
      }
      const fn2 = function y() {
        let ref2;
        let tmp;
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
              if (ref2.current[closure_1_1] != null) {
                ref2.current[closure_1_1].measureLayout(tmp, (x, y) => {
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
    }
  : (arg0, arg1) => {
      let closure_0;
      let closure_1;
      let ref;
      let state;
      let useReducedMotion;
      _require = arg0;
      dependencyMap = arg1;
      ref = ref.useRef({});
      const items = [AccessibilityStore];
      const obj = require("get initialized");
      let closure_3 = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
      const effect = ref.useEffect(() => {
        let ref2;
        let tmp;
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
              if (ref2.current[closure_1_1] != null) {
                ref2.current[closure_1_1].measureLayout(tmp, (x, y) => {
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
const result = size.fileFinishedImporting(
  "modules/user_profile/hooks/native/useScrollToUserProfileEditFormSection.tsx",
);

export default tmp2;
