// === Module 1530: ? ===

// Module 1530
import _mod1531 from "module_1531" /* 1531 */;
import noop from "module_19" /* 19 */;

require = arg1;

export const useRoute = function useRoute() {
  const context = noop.useContext(_mod1531.NavigationRouteContext);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find a route object. Is your component inside a screen in a navigator?");
    throw error;
  } else {
    return context;
  }
};