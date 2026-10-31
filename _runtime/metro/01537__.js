// === Module 1537: ? ===

// Module 1537
import _mod1538 from "module_1538" /* 1538 */;
import noop from "module_19" /* 19 */;

require = arg1;

export function useRoute() {
  const context = noop.useContext(_mod1538.NavigationRouteContext);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find a route object. Is your component inside a screen in a navigator?");
    throw error;
  } else {
    return context;
  }
}