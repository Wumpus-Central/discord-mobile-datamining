// === Module 7576: react ===

// Module 7576 (react)
import Link from "Link" /* 1491 */;
import react from "react" /* 19 */;


export const useInvalidPreventRemoveError = function useInvalidPreventRemoveError(descriptors) {
  const obj = Link;
  const first = Object.keys(obj.usePreventRemoveContext().preventedRoutes)[0];
  let prop;
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
  const effect = react.useEffect(() => {
    if (null != first) {
      if (prop) {
        const _HermesInternal = HermesInternal;
        const _console = console;
        console.error("The screen " + name + " uses 'usePreventRemove' hook alongside 'headerBackButtonMenuEnabled: true', which is not supported. \n\nConsider removing 'headerBackButtonMenuEnabled: true' from " + name + " screen to get rid of this error.");
      }
    }
  }, items);
};