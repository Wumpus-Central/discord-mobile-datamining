// _runtime/09939_useInvalidPreventRemoveError.js
import noop from "00019_noop.js";

const require = arg1;

export const useInvalidPreventRemoveError = function useInvalidPreventRemoveError(descriptors) {
  first = Object.keys(first(prop[1]).usePreventRemoveContext().preventedRoutes)[0];
  prop = undefined;
  if (descriptors[first] != null) {
    const options = tmp2.options;
    if (options != null) {
      prop = options.headerBackButtonMenuEnabled;
    }
  }
  let name;
  if (descriptors[first] != null) {
    const route = tmp2.route;
    if (route != null) {
      name = route.name;
    }
  }
  const items = [first, prop, name];
  const effect = name.useEffect(() => {
    if (null != first) {
      if (prop) {
        const _HermesInternal = HermesInternal;
        const _console = console;
        console.error("The screen " + name + " uses 'usePreventRemove' hook alongside 'headerBackButtonMenuEnabled: true', which is not supported. \n\nConsider removing 'headerBackButtonMenuEnabled: true' from " + name + " screen to get rid of this error.");
      }
    }
  }, items);
};