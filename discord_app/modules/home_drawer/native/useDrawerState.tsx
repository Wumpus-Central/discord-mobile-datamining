// discord_app/modules/home_drawer/native/useDrawerState.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../_runtime/00019_noop.js";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/home_drawer/native/useDrawerState.tsx");

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
      const coerceGuildsRouteResult = handleStateChange(navigation[3]).coerceGuildsRoute(tmp);
      if (null != coerceGuildsRouteResult) {
        const params = coerceGuildsRouteResult.params;
        let drawerOpen;
        if (params != null) {
          drawerOpen = params.drawerOpen;
        }
        callback(true === drawerOpen);
      }
      const obj = handleStateChange(navigation[3]);
    }
    if (handleStateChange) {
      navigation.addListener("state", handleStateChange);
      return () => {
        navigation.removeListener("state", handleStateChange);
      };
    }
  }, items);
  return tmp2[0];
};