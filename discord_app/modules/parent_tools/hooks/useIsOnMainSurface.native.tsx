// discord_app/modules/parent_tools/hooks/useIsOnMainSurface.native.tsx
import RootNavigationRef from "../../main_tabs_v2/RootNavigationRef.native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

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
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useIsOnMainSurface.native.tsx");

export const useIsOnMainSurface = function useIsOnMainSurface() {
  [tmp2, require] = _slicedToArray(noop.useState(getIsOnMainSurface), 2);
  const effect = noop.useEffect(() => {
    function handleNavigationChange() {
      return rootNavigationRef(getIsOnMainSurface());
    }
    const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
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
