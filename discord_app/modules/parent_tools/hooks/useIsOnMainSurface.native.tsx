// discord_app/modules/parent_tools/hooks/useIsOnMainSurface.native.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import set from "getRootNavigationRef";
import { getRootNavigationRef } from "../../main_tabs_v2/RootNavigationRef.native.tsx";

const require = arg1;
function getIsOnMainSurface() {
  let index;
  let index2;
  let routes;
  let routes2;
  const rootNavigationRef = getRootNavigationRef /* getRootNavigationRef */.getRootNavigationRef();
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
let set = new Set(["tabs", "channel"]);
const result = set.fileFinishedImporting("modules/parent_tools/hooks/useIsOnMainSurface.native.tsx");

export const useIsOnMainSurface = function useIsOnMainSurface() {
  let require;
  let tmp2;
  [tmp2, require] = callback(React.useState(getIsOnMainSurface), 2);
  const effect = React.useEffect(() => {
    function handleNavigationChange() {
      return rootNavigationRef(outer1_5());
    }
    const rootNavigationRef = outer1_0(outer1_1[2]).getRootNavigationRef();
    if (null != rootNavigationRef) {
      rootNavigationRef(outer1_5());
      rootNavigationRef.addListener("state", handleNavigationChange);
      return () => {
        rootNavigationRef.removeListener("state", handleNavigationChange);
      };
    }
    const obj = outer1_0(outer1_1[2]);
  }, []);
  return tmp2;
};