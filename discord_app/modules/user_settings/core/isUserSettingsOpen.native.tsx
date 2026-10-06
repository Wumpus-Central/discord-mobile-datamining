// discord_app/modules/user_settings/core/isUserSettingsOpen.native.tsx
import RootNavigationRef from "../../main_tabs_v2/RootNavigationRef.native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const f115189 = (name) => {
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
      someResult = routes.some(f115189);
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
      someResult = routes.some(f115189);
    }
    tmp2 = someResult;
  }
  return tmp2;
}
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
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
                  someResult = routes.some(f115189);
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
    }
  : () => {
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
              someResult = routes.some(f115189);
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
    };
const result = size.fileFinishedImporting("modules/user_settings/core/isUserSettingsOpen.native.tsx");

export { isUserSettingsOpen };
export const useIsUserSettingsOpen = tmp2;
