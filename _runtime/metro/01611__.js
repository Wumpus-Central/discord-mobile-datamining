// _runtime/metro/01611__.js
import BaseNavigationContainer from "../01493_BaseNavigationContainer.js";
import react2 from "../01590_react.js";
import react from "../00019_react.js";

export const useRoutePath = function useRoutePath() {
  const options = react.useContext(react2.LinkingContext).options;
  const obj = BaseNavigationContainer;
  const stateForPath = obj.useStateForPath();
  if (undefined === stateForPath) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error(
      "Couldn't find a state for the route object. Is your component inside a screen in a navigator?",
    );
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
    const useMemo = react.useMemo;
    if (options != null) {
      enabled = options.enabled;
    }
    const items = [enabled, , ,];
    let config;
    if (options != null) {
      config = options.config;
    }
    items[1] = config;
    items[2] = stateForPath;
    items[3] = getPathFromState;
    return useMemo(() => {
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
