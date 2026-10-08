// === Module 1623: ? ===

// Module 1623
import BaseNavigationContainer from "BaseNavigationContainer" /* 1505 */;
import get_options from "get options" /* 1602 */;
import noop from "module_19" /* 19 */;

require = arg1;

export const useRoutePath = function useRoutePath() {
  options = noop.useContext(get_options.LinkingContext).options;
  const stateForPath = BaseNavigationContainer.useStateForPath();
  if (undefined === stateForPath) {
    const _Error = Error;
    const error = new Error("Couldn't find a state for the route object. Is your component inside a screen in a navigator?");
    throw error;
  } else {
    let getPathFromState;
    if (options != null) {
      getPathFromState = options.getPathFromState;
    }
    if (getPathFromState == null) {
      getPathFromState = BaseNavigationContainer.getPathFromState;
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
    return noop.useMemo(() => {
      let enabled;
      if (options != null) {
        enabled = options.enabled;
      }
      if (false !== enabled) {
        let config;
        if (options != null) {
          config = options.config;
        }
        return getPathFromState(stateForPath, config);
      }
    }, items);
  }
};