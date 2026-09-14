// === Module 1582: ? ===

// Module 1582
import BaseNavigationContainer from "BaseNavigationContainer" /* 1486 */;
import noop from "module_19" /* 19 */;

require = arg1;
function useBuildHref() {
  context = options.useContext(context(context1[1]).NavigationHelpersContext);
  context1 = options.useContext(context(context1[1]).NavigationRouteContext);
  options = options.useContext(context(context1[2]).LinkingContext).options;
  const stateForPath = context(context1[1]).useStateForPath();
  let getPathFromState;
  if (options != null) {
    getPathFromState = options.getPathFromState;
  }
  if (getPathFromState == null) {
    getPathFromState = context(context1[1]).getPathFromState;
  }
  let enabled;
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
  return options.useCallback((name, params) => {
    let enabled;
    if (constructState != null) {
      enabled = tmp.enabled;
    }
    if (false !== enabled) {
      let tmp3 = context;
      if (context) {
        let key;
        if (obj3 != null) {
          key = obj3.key;
        }
        tmp3 = key;
      }
      if (tmp3) {
        tmp3 = stateForPath;
      }
      let tmp5 = tmp3;
      if (tmp5) {
        const findFocusedRouteResult = context(context1[1]).findFocusedRoute(stateForPath);
        let key1;
        if (findFocusedRouteResult != null) {
          key1 = findFocusedRouteResult.key;
        }
        let someResult = obj3.key === key1;
        if (someResult) {
          const routes = context.getState().routes;
          someResult = routes.some((key) => key.key === obj3.key);
        }
        tmp5 = someResult;
        let obj2 = context(context1[1]);
      }
      context = tmp5;
      obj3 = { routes: null };
      const obj4 = { name, params };
      let items = [obj4];
      obj3.routes = items;
      constructState = function constructState(state) {
        if (state) {
          const first = state.routes[0];
          if (someResult) {
            if (!first.state) {
              let tmp4 = obj3;
            }
            return tmp4;
          }
          const obj = { routes: null };
          const obj2 = {};
          const merged = Object.assign(first);
          obj2.state = constructState(first.state);
          const items = [obj2];
          obj.routes = items;
          tmp4 = obj;
        } else {
          return obj3;
        }
      };
      let tmp15 = obj3;
      if (stateForPath) {
        let first = stateForPath.routes[0];
        if (!tmp5) {
          const obj5 = {};
          let merged = Object.assign(first);
          const state = first.state;
          let tmp21 = obj3;
          if (state) {
            const first1 = state.routes[0];
            if (!tmp5) {
              const obj6 = { routes: null };
              const obj7 = {};
              const merged1 = Object.assign(first1);
              obj7.state = constructState(first1.state);
              const items1 = [obj7];
              obj6.routes = items1;
              obj3 = obj6;
            }
            tmp21 = obj3;
          }
          const obj8 = { routes: null };
          obj5.state = tmp21;
          const items2 = [obj5];
          obj8.routes = items2;
          let tmp17 = obj8;
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
  options = getActionFromState.useContext(options(getStateFromPath[2]).LinkingContext).options;
  getStateFromPath = undefined;
  if (options != null) {
    getStateFromPath = options.getStateFromPath;
  }
  if (getStateFromPath == null) {
    getStateFromPath = tmp(tmp2[1]).getStateFromPath;
  }
  getActionFromState = undefined;
  if (options != null) {
    getActionFromState = options.getActionFromState;
  }
  if (getActionFromState == null) {
    getActionFromState = tmp(tmp2[1]).getActionFromState;
  }
  let config;
  if (options != null) {
    config = options.config;
  }
  const items = [config, getStateFromPath, getActionFromState];
  return getActionFromState.useCallback((str) => {
    if (str.startsWith("/")) {
      let config;
      if (options != null) {
        config = options.config;
      }
      const tmp6Result = getStateFromPath(str, config);
      if (tmp6Result) {
        let config1;
        if (options != null) {
          config1 = options.config;
        }
        let resetResult = getActionFromState(tmp6Result, config1);
        if (resetResult == null) {
          const CommonActions = BaseNavigationContainer.CommonActions;
          resetResult = CommonActions.reset(tmp6Result);
        }
        return resetResult;
      } else {
        const _Error2 = Error;
        const error = new Error("Failed to parse the href to a navigation state.");
        throw error;
      }
    } else {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error1 = new Error("The href must start with '/' (" + str + ").");
      throw error1;
    }
  }, items);
}

export { useBuildHref };
export { useBuildAction };
export const useLinkBuilder = function useLinkBuilder() {
  return { buildHref: useBuildHref(), buildAction: useBuildAction() };
};