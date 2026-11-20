// === Module 1540: ? ===

// Module 1540
import _mod1541 from "module_1541" /* 1541 */;
import noop from "module_19" /* 19 */;

require = arg1;

export function useRoute() {
  const context = noop.useContext(_mod1541.NavigationRouteContext);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find a route object. Is your component inside a screen in a navigator?");
    throw error;
  } else {
    return context;
  }
}