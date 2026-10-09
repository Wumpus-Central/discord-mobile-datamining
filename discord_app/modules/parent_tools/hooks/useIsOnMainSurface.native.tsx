// === Module 17876: useIsOnMainSurface ===

// Module 17876 (useIsOnMainSurface)
import RootNavigationRef from "RootNavigationRef" /* 4938 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function getIsOnMainSurface() {
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
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
        state = tmp2.state;
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
        let hasItem = null != tmp4;
        if (hasItem) {
          hasItem = set.has(tmp4.name);
        }
        return hasItem;
      }
    }
  }
  return false;
}
const set = new Set(["tabs", "channel"]);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useIsOnMainSurface.native.tsx");

export const useIsOnMainSurface = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsOnMainSurface() {
  const cResult = require("c").c(2);
  const tmp2 = _slicedToArray(noop.useState(getIsOnMainSurface), 2);
  _require = tmp2[1];
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function u() {
      const rootNavigationRef = closure_0(dependencyMap[2]).getRootNavigationRef();
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
      const obj = closure_0(dependencyMap[2]);
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp3 = fn;
    tmp4 = items;
  } else {
    [tmp3, tmp4] = cResult;
  }
  const effect = noop.useEffect(tmp3, tmp4);
  return tmp2[0];
}) : (function useIsOnMainSurface() {
  [tmp2, require] = noop.useState(getIsOnMainSurface);
  const effect = noop.useEffect(() => {
    function handleNavigationChange() {
      return rootNavigationRef(getIsOnMainSurface());
    }
    const rootNavigationRef = require("RootNavigationRef").getRootNavigationRef();
    if (null != rootNavigationRef) {
      rootNavigationRef(getIsOnMainSurface());
      rootNavigationRef.addListener("state", handleNavigationChange);
      return () => {
        rootNavigationRef.removeListener("state", handleNavigationChange);
      };
    }
    const obj = require("RootNavigationRef");
  }, []);
  return tmp2;
});