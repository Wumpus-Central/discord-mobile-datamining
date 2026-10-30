// === Module 1538: ? ===

// Module 1538
import _mod1539 from "module_1539" /* 1539 */;
import noop from "module_19" /* 19 */;

require = arg1;

export function useRoute() {
  const context = noop.useContext(_mod1539.NavigationRouteContext);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find a route object. Is your component inside a screen in a navigator?");
    throw error;
  } else {
    return context;
  }
}