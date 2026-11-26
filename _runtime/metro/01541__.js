// === Module 1541: ? ===

// Module 1541
import _mod1542 from "module_1542" /* 1542 */;
import noop from "module_19" /* 19 */;

require = arg1;

export function useRoute() {
  const context = noop.useContext(_mod1542.NavigationRouteContext);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find a route object. Is your component inside a screen in a navigator?");
    throw error;
  } else {
    return context;
  }
}