// === Module 13571: isUserSettingsOpen ===

// Module 13571 (isUserSettingsOpen)
import RootNavigationRef from "RootNavigationRef" /* 4737 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const f115027 = (name) => {
  let tmp = "settings" === name.name;
  if (!tmp) {
    const state = name.state;
    let routes1;
    if (state != null) {
      routes1 = state.routes;
    }
    let someResult = null != routes1;
    if (someResult) {
      const routes = state.routes;
      someResult = routes.some(f115027);
    }
    tmp = someResult;
  }
  return tmp;
};
function isUserSettingsOpen() {
  const obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  let tmp2 = !(null == rootNavigationRef || !rootNavigationRef.isReady());
  null == rootNavigationRef || !rootNavigationRef.isReady();
  if (tmp2) {
    const rootState = rootNavigationRef.getRootState();
    let routes1;
    if (rootState != null) {
      routes1 = rootState.routes;
    }
    let someResult = null != routes1;
    if (someResult) {
      const routes = rootState.routes;
      someResult = routes.some(f115027);
    }
    tmp2 = someResult;
  }
  return tmp2;
}
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_0;
  let first;
  let tmp4;
  let tmp5;
  let obj = require("react");
  const cResult = obj.c(2);
  [first, _require] = react.useState(isUserSettingsOpen);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      let rootNavigationRef;
      const obj = rootNavigationRef(dependencyMap[2]);
      rootNavigationRef = obj.getRootNavigationRef();
      if (null != rootNavigationRef) {
        function handleStateChange() {
          if (null != rootNavigationRef) {
            const rootState = rootNavigationRef.getRootState();
            let routes1;
            if (rootState != null) {
              routes1 = rootState.routes;
            }
            let someResult = null != routes1;
            if (someResult) {
              const routes = rootState.routes;
              someResult = routes.some(f115027);
            }
            rootNavigationRef(someResult);
          }
        }
        rootNavigationRef.addListener("state", handleStateChange);
        return () => {
          rootNavigationRef.removeListener("state", handleStateChange);
        };
      }
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp4 = fn;
    tmp5 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const effect = react.useEffect(tmp4, tmp5);
  return first;
}) : (() => {
  let require;
  let tmp2;
  let tmp = _slicedToArray(react.useState(isUserSettingsOpen), 2);
  [tmp2, require] = tmp;
  const effect = react.useEffect(() => {
    function handleStateChange() {
      if (null != rootNavigationRef) {
        const rootState = rootNavigationRef.getRootState();
        let routes1;
        if (rootState != null) {
          routes1 = rootState.routes;
        }
        let someResult = null != routes1;
        if (someResult) {
          let routes = rootState.routes;
          someResult = routes.some(f115027);
        }
        _require(someResult);
      }
    }
    const obj = require("RootNavigationRef");
    const rootNavigationRef = obj.getRootNavigationRef();
    if (null != rootNavigationRef) {
      rootNavigationRef.addListener("state", handleStateChange);
      return () => {
        rootNavigationRef.removeListener("state", handleStateChange);
      };
    }
  }, []);
  return tmp2;
});
const result = size.fileFinishedImporting("modules/user_settings/core/isUserSettingsOpen.native.tsx");

export { isUserSettingsOpen };
export const useIsUserSettingsOpen = tmp2;