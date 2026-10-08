// === Module 16251: useDrawerState ===

// Module 16251 (useDrawerState)
import NavigationRouteUtils from "NavigationRouteUtils" /* 4936 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/home_drawer/native/useDrawerState.tsx");

export const useDrawerOpen = ReactCompilerGating.isReactCompilerEnabled() ? (function useDrawerOpen(arg0) {
  const cResult = require("c").c(7);
  _require = tmp4;
  let obj = require("c");
  navigation = require("Link").useNavigation();
  if (cResult[0] === (undefined === arg0 || arg0)) {
    if (cResult[1] === navigation) {
      let tmp6 = cResult[2];
    }
    _slicedToArray = _slicedToArray(noop.useState(tmp6), 2)[1];
    if (cResult[3] === tmp4) {
      if (cResult[4] === navigation) {
        let tmp10 = cResult[5];
        let tmp11 = cResult[6];
      }
      const effect = noop.useEffect(tmp10, tmp11);
      return tmp9;
    }
    const fn2 = function l() {
      if (handleStateChange) {
        handleStateChange = function handleStateChange(data) {
          state = data.data.state;
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
          const coerceGuildsRouteResult = handleStateChange(navigation[5]).coerceGuildsRoute(tmp);
          if (null != coerceGuildsRouteResult) {
            const params = coerceGuildsRouteResult.params;
            let drawerOpen;
            if (params != null) {
              drawerOpen = params.drawerOpen;
            }
            closure_1_2(true === drawerOpen);
          }
          const obj = handleStateChange(navigation[5]);
        };
        navigation.addListener("state", handleStateChange);
        return () => {
          navigation.removeListener("state", handleStateChange);
        };
      }
    };
    const items = [navigation, tmp4];
    cResult[3] = tmp4;
    cResult[4] = navigation;
    cResult[5] = fn2;
    cResult[6] = items;
    tmp11 = items;
    tmp10 = fn2;
    const tmp8 = _slicedToArray(noop.useState(tmp6), 2);
  }
  const fn = function u() {
    if (closure_0) {
      state = navigation.getState();
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
  };
  cResult[0] = undefined === arg0 || arg0;
  cResult[1] = navigation;
  cResult[2] = fn;
  tmp6 = fn;
  const tmpResult = require("Link");
}) : (function useDrawerOpen() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  let navigation;
  _slicedToArray = undefined;
  navigation = flag(navigation[4]).useNavigation();
  const tmp2 = _slicedToArray(noop.useState(() => {
    if (flag) {
      state = navigation.getState();
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
  }), 2);
  _slicedToArray = tmp2[1];
  const items = [navigation, flag];
  const effect = noop.useEffect(() => {
    function handleStateChange(data) {
      state = data.data.state;
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
      const coerceGuildsRouteResult = flag(navigation[5]).coerceGuildsRoute(tmp);
      if (null != coerceGuildsRouteResult) {
        const params = coerceGuildsRouteResult.params;
        let drawerOpen;
        if (params != null) {
          drawerOpen = params.drawerOpen;
        }
        closure_1_2(true === drawerOpen);
      }
      const obj = flag(navigation[5]);
    }
    if (handleStateChange) {
      navigation.addListener("state", handleStateChange);
      return () => {
        navigation.removeListener("state", handleStateChange);
      };
    }
  }, items);
  return tmp2[0];
});