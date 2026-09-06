// === Module 1582: useBuildHref ===

// Module 1582 (useBuildHref)
import closure_2 from "noop" /* 19 */;

const require = arg1;
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
  return options.useCallback((arg0, arg1) => {
    let enabled;
    if (constructState != null) {
      enabled = tmp.enabled;
    }
    if (false !== enabled) {
      let obj = context;
      let tmp3 = context;
      if (context) {
        let key;
        if (obj != null) {
          key = obj.key;
        }
        tmp3 = key;
      }
      if (tmp3) {
        tmp3 = stateForPath;
      }
      let tmp5 = tmp3;
      if (tmp5) {
        obj1 = context(context1[1]);
        const findFocusedRouteResult = obj1.findFocusedRoute(stateForPath);
        let key1;
        if (findFocusedRouteResult != null) {
          key1 = findFocusedRouteResult.key;
        }
        let someResult = obj.key === key1;
        if (someResult) {
          const routes = obj.getState().routes;
          someResult = routes.some((key) => key.key === obj.key);
        }
        tmp5 = someResult;
      }
      context = tmp5;
      obj = { routes: null };
      obj = { name: null, params: null };
      obj[0] = arg0;
      obj[1] = arg1;
      let items = [obj];
      obj[0] = items;
      constructState = function constructState(state) {
        if (state) {
          const first = state.routes[0];
          if (closure_0) {
            if (!first.state) {
              let tmp4 = obj;
            }
            return tmp4;
          }
          obj = { routes: null };
          obj = {};
          const merged = Object.assign(first);
          obj.state = constructState(first.state);
          const items = [obj];
          obj[0] = items;
          tmp4 = obj;
        } else {
          return obj;
        }
      };
      let tmp15 = obj;
      if (stateForPath) {
        let first = stateForPath.routes[0];
        if (!tmp5) {
          obj1 = {};
          let merged = Object.assign(first);
          const state = first.state;
          let tmp21 = obj;
          if (state) {
            const first1 = state.routes[0];
            if (!tmp5) {
              const obj2 = { routes: null };
              const obj3 = {};
              const merged1 = Object.assign(first1);
              obj3.state = constructState(first1.state);
              const items1 = [obj3];
              obj2[0] = items1;
              obj = obj2;
            }
            tmp21 = obj;
          }
          const obj4 = { routes: null };
          obj1.state = tmp21;
          const items2 = [obj1];
          obj4[0] = items2;
          let tmp17 = obj4;
        } else {
          tmp17 = obj;
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
        config = tmp7.config;
      }
      const tmp6Result = getStateFromPath(str, config);
      if (tmp6Result) {
        let config1;
        if (tmp7 != null) {
          config1 = tmp7.config;
        }
        let resetResult = getActionFromState(tmp6Result, config1);
        if (resetResult == null) {
          const CommonActions = options(getStateFromPath[1]).CommonActions;
          resetResult = CommonActions.reset(tmp6Result);
        }
        return resetResult;
      } else {
        const _Error2 = Error;
        error = new Error("Failed to parse the href to a navigation state.");
        throw error;
      }
      const tmp6 = getStateFromPath;
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