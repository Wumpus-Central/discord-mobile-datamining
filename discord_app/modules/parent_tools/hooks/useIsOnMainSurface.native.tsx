// discord_app/modules/parent_tools/hooks/useIsOnMainSurface.native.tsx
import RootNavigationRef from "../../main_tabs_v2/RootNavigationRef.native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

function getIsOnMainSurface() {
  let index;
  let index2;
  let routes;
  let routes2;
  const obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      const rootState = rootNavigationRef.getRootState();
      let tmp2;
      if (null != rootState) {
        if (0 !== rootState.routes.length) {
          ({ index, routes } = rootState);
          if (index == null) {
            index = rootState.routes.length - 1;
          }
          tmp2 = routes[index];
        }
      }
      let name;
      if (tmp2 != null) {
        name = tmp2.name;
      }
      if ("main" !== name) {
        return false;
      } else {
        const state = tmp2.state;
        let tmp4;
        if (null != state) {
          if (0 !== state.routes.length) {
            ({ index: index2, routes: routes2 } = state);
            if (index2 == null) {
              index2 = state.routes.length - 1;
            }
            tmp4 = routes2[index2];
          }
        }
        const hasItem = null != tmp4 && set.has(tmp4.name);
        return hasItem;
      }
    }
  }
  return false;
}
const set = new Set(["tabs", "channel"]);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let closure_0;
      let first;
      let tmp4;
      let tmp5;
      let obj = require("react");
      const cResult = obj.c(2);
      [first, _require] = react.useState(getIsOnMainSurface);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function u() {
          const obj = closure_0(dependencyMap[2]);
          const rootNavigationRef = obj.getRootNavigationRef();
          if (null != rootNavigationRef) {
            function handleNavigationChange() {
              return rootNavigationRef(getIsOnMainSurface());
            }
            rootNavigationRef(getIsOnMainSurface());
            rootNavigationRef.addListener("state", handleNavigationChange);
            return () => {
              rootNavigationRef.removeListener("state", handleNavigationChange);
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
      [tmp2, require] = _slicedToArray(react.useState(getIsOnMainSurface), 2);
      const tmp = _slicedToArray(react.useState(getIsOnMainSurface), 2);
      const effect = react.useEffect(() => {
        function handleNavigationChange() {
          return rootNavigationRef(getIsOnMainSurface());
        }
        const obj = require("RootNavigationRef");
        const rootNavigationRef = obj.getRootNavigationRef();
        if (null != rootNavigationRef) {
          rootNavigationRef(getIsOnMainSurface());
          rootNavigationRef.addListener("state", handleNavigationChange);
          return () => {
            rootNavigationRef.removeListener("state", handleNavigationChange);
          };
        }
      }, []);
      return tmp2;
    };
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useIsOnMainSurface.native.tsx");

export const useIsOnMainSurface = tmp3;
