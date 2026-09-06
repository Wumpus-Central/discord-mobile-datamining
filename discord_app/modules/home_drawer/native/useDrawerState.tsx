// discord_app/modules/home_drawer/native/useDrawerState.tsx
import NavigationRouteUtils from "../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/home_drawer/native/useDrawerState.tsx");

export const useDrawerOpen = function useDrawerOpen(enableHome) {
  let flag = enableHome;
  if (enableHome === undefined) {
    flag = true;
  }
  let navigation;
  _slicedToArray = undefined;
  navigation = flag(navigation[2]).useNavigation();
  const tmp2 = _slicedToArray(
    noop.useState(() => {
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
        const coerceGuildsRouteResult = NavigationRouteUtils.coerceGuildsRoute(tmp6);
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
    }),
    2,
  );
  _slicedToArray = tmp2[1];
  const items = [navigation, flag];
  const effect = noop.useEffect(() => {
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
      const coerceGuildsRouteResult = flag(navigation[3]).coerceGuildsRoute(tmp);
      if (null != coerceGuildsRouteResult) {
        const params = coerceGuildsRouteResult.params;
        let drawerOpen;
        if (params != null) {
          drawerOpen = params.drawerOpen;
        }
        closure_1_2(true === drawerOpen);
      }
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
