// === Module 15952: useDrawerState ===

// Module 15952 (useDrawerState)
import NavigationRouteUtils from "NavigationRouteUtils" /* 4736 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, navigation;

let _slicedToArray = _slicedToArray_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let closure_2;
  let tmp = _require;
  let tmp2 = navigation;
  const obj = require("react");
  const cResult = obj.c(7);
  _require = tmp4;
  const tmpResult = tmp(tmp2[4]);
  navigation = tmpResult.useNavigation();
  if (cResult[0] === (undefined === arg0 || arg0)) {
    let tmp6;
    if (cResult[1] === navigation) {
      tmp6 = cResult[2];
    }
    let num = 2;
    [, _slicedToArray] = react.useState(tmp6);
    if (cResult[3] === (undefined === arg0 || arg0)) {
      let tmp10;
      let tmp11;
      if (cResult[4] === navigation) {
        tmp10 = cResult[5];
        tmp11 = cResult[6];
      }
      const effect = react.useEffect(tmp10, tmp11);
      return tmp9;
    }
    const fn2 = function v() {
      let handleStateChange;
      const tmp = handleStateChange;
      if (tmp) {
        handleStateChange = function handleStateChange(data) {
          const state = data.data.state;
          let tmp2;
          const coerceGuildsRoute = handleStateChange(navigation[5]).coerceGuildsRoute;
          handleStateChange(navigation[5]);
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
              tmp2 = routes[num];
            }
          }
          const coerceGuildsRouteResult = coerceGuildsRoute(tmp2);
          if (null != coerceGuildsRouteResult) {
            const params = coerceGuildsRouteResult.params;
            let drawerOpen;
            if (params != null) {
              drawerOpen = params.drawerOpen;
            }
            closure_1_2(true === drawerOpen);
          }
        };
        navigation.addListener("state", handleStateChange);
        return () => {
          navigation.removeListener("state", handleStateChange);
        };
      }
    };
    const items = [navigation, undefined === arg0 || arg0];
    cResult[3] = undefined === arg0 || arg0;
    cResult[4] = navigation;
    cResult[5] = fn2;
    cResult[6] = items;
    tmp11 = items;
    tmp10 = fn2;
  }
  const fn = function u() {
    if (closure_0) {
      const state = navigation.getState();
      let tmp8;
      const coerceGuildsRoute = NavigationRouteUtils.coerceGuildsRoute;
      NavigationRouteUtils;
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
          tmp8 = routes[num];
        }
      }
      const coerceGuildsRouteResult = coerceGuildsRoute(tmp8);
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
}) : (() => {
  let closure_2;
  let first;
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  navigation = undefined;
  _slicedToArray = undefined;
  const obj = flag(navigation[4]);
  navigation = obj.useNavigation();
  [first, _slicedToArray] = react.useState(() => {
    const tmp = flag;
    if (tmp) {
      const state = navigation.getState();
      let tmp8;
      const coerceGuildsRoute = NavigationRouteUtils.coerceGuildsRoute;
      NavigationRouteUtils;
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
          tmp8 = routes[num];
        }
      }
      const coerceGuildsRouteResult = coerceGuildsRoute(tmp8);
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
  });
  const items = [navigation, flag];
  const effect = react.useEffect(() => {
    function handleStateChange(data) {
      const state = data.data.state;
      let tmp2;
      const coerceGuildsRoute = flag(navigation[5]).coerceGuildsRoute;
      flag(navigation[5]);
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
          tmp2 = routes[num];
        }
      }
      const coerceGuildsRouteResult = coerceGuildsRoute(tmp2);
      if (null != coerceGuildsRouteResult) {
        const params = coerceGuildsRouteResult.params;
        let drawerOpen;
        if (params != null) {
          drawerOpen = params.drawerOpen;
        }
        closure_1_2(true === drawerOpen);
      }
    }
    const tmp = handleStateChange;
    if (tmp) {
      navigation.addListener("state", handleStateChange);
      return () => {
        navigation.removeListener("state", handleStateChange);
      };
    }
  }, items);
  return first;
});
const result = size.fileFinishedImporting("modules/home_drawer/native/useDrawerState.tsx");

export const useDrawerOpen = tmp2;