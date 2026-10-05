// === Module 1589: ? ===

// Module 1589
import BaseNavigationContainer from "BaseNavigationContainer" /* 1493 */;
import react from "react" /* 19 */;

function useBuildHref() {
  let context;
  let context1;
  let options;
  let tmp = options;
  let tmp3 = context1;
  const tmp2 = context;
  context = options.useContext(context(context1[1]).NavigationHelpersContext);
  context1 = options.useContext(context(context1[1]).NavigationRouteContext);
  options = options.useContext(context(context1[2]).LinkingContext).options;
  let obj = context(context1[1]);
  const stateForPath = obj.useStateForPath();
  let getPathFromState;
  if (options != null) {
    getPathFromState = options.getPathFromState;
  }
  if (getPathFromState == null) {
    getPathFromState = tmp2(tmp3[1]).getPathFromState;
  }
  let enabled;
  const useCallback = tmp.useCallback;
  if (options != null) {
    enabled = options.enabled;
  }
  let items = [enabled, , , , , ];
  let config;
  if (options != null) {
    config = options.config;
  }
  items[1] = config;
  let key;
  if (context1 != null) {
    key = context1.key;
  }
  items[2] = key;
  items[3] = context;
  items[4] = stateForPath;
  items[5] = getPathFromState;
  return useCallback((name, params) => {
    let constructState;
    let items;
    let items1;
    let items2;
    let obj3;
    let tmp21;
    let tmp = constructState;
    let enabled;
    if (constructState != null) {
      enabled = tmp.enabled;
    }
    if (false !== enabled) {
      let obj = context;
      let tmp3 = context;
      if (tmp3) {
        let key1;
        if (obj3 != null) {
          key1 = obj3.key;
        }
        tmp3 = key1;
      }
      if (tmp3) {
        tmp3 = stateForPath;
      }
      let tmp5 = tmp3;
      if (tmp5) {
        const key = obj3.key;
        let obj2 = context(context1[1]);
        const findFocusedRouteResult = obj2.findFocusedRoute(stateForPath);
        let key2;
        if (findFocusedRouteResult != null) {
          key2 = findFocusedRouteResult.key;
        }
        let someResult = key === key2;
        if (someResult) {
          const routes = obj.getState().routes;
          someResult = routes.some((key) => key.key === obj3.key);
        }
        tmp5 = someResult;
      }
      context = tmp5;
      obj3 = { routes: items };
      items = [{ name, params }];
      constructState = function constructState(state) {
        let items;
        const tmp = state;
        if (tmp) {
          const first = state.routes[0];
          if (context) {
            let tmp5;
            if (!first.state) {
              tmp5 = obj3;
            }
            return tmp5;
          }
          const obj = { routes: items };
          const obj2 = { state: constructState(first.state) };
          const merged = Object.assign(first);
          items = [obj2];
          tmp5 = obj;
        } else {
          return obj3;
        }
      };
      let tmp15 = obj3;
      const obj4 = { name, params };
      if (stateForPath) {
        let tmp17;
        let first = stateForPath.routes[0];
        if (!tmp5) {
          const obj5 = { state: tmp21 };
          let merged = Object.assign(first);
          const state = first.state;
          tmp21 = obj3;
          if (state) {
            const first1 = state.routes[0];
            if (!tmp5) {
              const obj6 = { routes: items1 };
              const obj7 = { state: constructState(first1.state) };
              const merged1 = Object.assign(first1);
              items1 = [obj7];
              obj3 = obj6;
            }
            tmp21 = obj3;
          }
          const obj8 = { routes: items2 };
          items2 = [obj5];
          tmp17 = obj8;
        } else {
          tmp17 = obj3;
        }
        tmp15 = tmp17;
      }
      let config;
      if (tmp != null) {
        config = tmp.config;
      }
      return getPathFromState(tmp15, config);
    }
  }, items);
}
function useBuildAction() {
  let getActionFromState;
  let getStateFromPath;
  let options;
  options = getActionFromState.useContext(options(getStateFromPath[2]).LinkingContext).options;
  getStateFromPath = undefined;
  const tmp = getActionFromState;
  if (options != null) {
    getStateFromPath = options.getStateFromPath;
  }
  if (getStateFromPath == null) {
    getStateFromPath = tmp2(tmp3[1]).getStateFromPath;
  }
  getActionFromState = undefined;
  if (options != null) {
    getActionFromState = options.getActionFromState;
  }
  if (getActionFromState == null) {
    getActionFromState = tmp2(tmp3[1]).getActionFromState;
  }
  let config;
  const useCallback = tmp.useCallback;
  if (options != null) {
    config = options.config;
  }
  const items = [config, getStateFromPath, getActionFromState];
  return useCallback(function(arr) {
    if (arr.startsWith("/")) {
      let config;
      if (options != null) {
        config = options.config;
      }
      const tmp4Result = getStateFromPath(arr, config);
      if (tmp4Result) {
        let config1;
        if (options != null) {
          config1 = options.config;
        }
        let resetResult = getActionFromState(tmp4Result, config1);
        if (resetResult == null) {
          const CommonActions = BaseNavigationContainer.CommonActions;
          resetResult = CommonActions.reset(tmp4Result);
        }
        return resetResult;
      } else {
        const _Error2 = Error;
        const self3 = this;
        const self4 = this;
        const error = new Error("Failed to parse the href to a navigation state.");
        throw error;
      }
    } else {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const error1 = new Error("The href must start with '/' (" + arr + ").");
      throw error1;
    }
  }, items);
}

export { useBuildHref };
export { useBuildAction };
export const useLinkBuilder = function useLinkBuilder() {
  const obj = { buildHref: useBuildHref(), buildAction: useBuildAction() };
  return obj;
};