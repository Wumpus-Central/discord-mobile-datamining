// _runtime/metro/01538__.js
import _mod1539 from "01539__.js";
import noop from "00019__.js";

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
