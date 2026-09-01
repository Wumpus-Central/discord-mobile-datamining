// === Module 15618: useDrawerOpen ===

// Module 15618 (useDrawerOpen)
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/home_drawer/native/useDrawerState.tsx");

export const useDrawerOpen = function useDrawerOpen(enableHome) {
  let flag = enableHome;
  if (enableHome === undefined) {
    flag = true;
  }
  let navigation;
  let callback;
  navigation = flag(navigation[2]).useNavigation();
  const tmp2 = callback(React.useState(() => {
    if (flag) {
      const state = navigation.getState();
      let tmp6;
      if (state != null) {
        const routes = state.routes;
        if (routes != null) {
          let num;
          if (state != null) {
            num = state.index;
          }
          if (num == null) {
            num = 0;
          }
          tmp6 = routes[num];
        }
      }
      const coerceGuildsRouteResult = flag(navigation[3]).coerceGuildsRoute(tmp6);
      let drawerOpen;
      if (coerceGuildsRouteResult != null) {
        const params = coerceGuildsRouteResult.params;
        if (params != null) {
          drawerOpen = params.drawerOpen;
        }
      }
      return true === drawerOpen;
    } else {
      return false;
    }
  }), 2);
  callback = tmp2[1];
  const items = [navigation, flag];
  const effect = React.useEffect(() => {
    function handleStateChange(data) {
      const state = data.data.state;
      let tmp;
      if (state != null) {
        const routes = state.routes;
        if (routes != null) {
          let num;
          if (state != null) {
            num = state.index;
          }
          if (num == null) {
            num = 0;
          }
          tmp = routes[num];
        }
      }
      const coerceGuildsRouteResult = handleStateChange(closure_1_1[3]).coerceGuildsRoute(tmp);
      if (null != coerceGuildsRouteResult) {
        const params = coerceGuildsRouteResult.params;
        let drawerOpen;
        if (params != null) {
          drawerOpen = params.drawerOpen;
        }
        callback(true === drawerOpen);
      }
    }
    if (handleStateChange) {
      navigation.addListener("state", handleStateChange);
      return () => {
        closure_1_1.removeListener("state", handleStateChange);
      };
    }
  }, items);
  return tmp2[0];
};