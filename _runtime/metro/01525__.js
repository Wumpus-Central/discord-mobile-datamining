// === Module 1525: ? ===

// Module 1525
import _mod1526 from "module_1526" /* 1526 */;
import noop from "module_19" /* 19 */;

require = arg1;

export const useRoute = function useRoute() {
  const context = noop.useContext(_mod1526.NavigationRouteContext);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find a route object. Is your component inside a screen in a navigator?");
    throw error;
  } else {
    return context;
  }
};