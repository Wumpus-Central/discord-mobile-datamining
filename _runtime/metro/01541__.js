// _runtime/metro/01541__.js
import _mod1542 from "01542__.js";
import noop from "00019__.js";

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
