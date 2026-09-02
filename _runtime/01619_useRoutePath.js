// === Module 1619: useRoutePath ===

// Module 1619 (useRoutePath)
import closure_2 from "noop" /* 19 */;

const require = arg1;

export const useRoutePath = function useRoutePath() {
  options = getPathFromState.useContext(options(stateForPath[1]).LinkingContext).options;
  stateForPath = options(stateForPath[2]).useStateForPath();
  if (undefined === stateForPath) {
    const _Error = Error;
    error = new Error("Couldn't find a state for the route object. Is your component inside a screen in a navigator?");
    throw error;
  } else {
    getPathFromState = undefined;
    if (options != null) {
      getPathFromState = options.getPathFromState;
    }
    if (getPathFromState == null) {
      getPathFromState = tmp(tmp2[2]).getPathFromState;
    }
    let enabled;
    if (options != null) {
      enabled = options.enabled;
    }
    const items = [enabled, , , ];
    let config;
    if (options != null) {
      config = options.config;
    }
    items[1] = config;
    items[2] = stateForPath;
    items[3] = getPathFromState;
    return obj.useMemo(() => {
      let enabled;
      if (options != null) {
        enabled = tmp.enabled;
      }
      if (false !== enabled) {
        let config;
        if (tmp != null) {
          config = tmp.config;
        }
        return getPathFromState(stateForPath, config);
      }
    }, items);
  }
  obj = getPathFromState;
  const obj2 = options(stateForPath[2]);
  tmp = options;
  tmp2 = stateForPath;
};