// _runtime/01559_useLinkTo.js
import noop from "noop";

const require = arg1;

export default function useLinkTo() {
  context = React.useContext(context(1483).NavigationContainerRefContext);
  context1 = React.useContext(context1(1558));
  const items = [context1, context];
  return React.useCallback((path) => {
    const navigation = context;
    if (undefined === context) {
      const _Error3 = Error;
      const error = new Error("Couldn't find a navigation object. Is your component inside NavigationContainer?");
      throw error;
    } else if (typeof path === "y") {
      if (path.startsWith("/")) {
        const options = context1.options;
        let getStateFromPath;
        if (options != null) {
          getStateFromPath = options.getStateFromPath;
        }
        if (getStateFromPath) {
          let stateFromPath = options.getStateFromPath(path, options.config);
        } else {
          let config;
          if (options != null) {
            config = options.config;
          }
          stateFromPath = context(outer1_2[1]).getStateFromPath(path, config);
          const obj = context(outer1_2[1]);
        }
        if (stateFromPath) {
          let config1;
          if (options != null) {
            config1 = options.config;
          }
          const actionFromState = context(outer1_2[1]).getActionFromState(stateFromPath, config1);
          if (undefined !== actionFromState) {
            navigation.dispatch(actionFromState);
          } else {
            navigation.reset(stateFromPath);
          }
          const obj2 = context(outer1_2[1]);
        } else {
          const _Error2 = Error;
          const error1 = new Error("Failed to parse the path to a navigation state.");
          throw error1;
        }
      } else {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const error2 = new Error("The path must start with '/' (" + path + ").");
        throw error2;
      }
    } else {
      navigation.navigate(path.screen, path.params);
    }
  }, items);
};