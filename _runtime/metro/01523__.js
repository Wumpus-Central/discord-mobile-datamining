// _runtime/metro/01523__.js
import _mod1524 from "01524__.js";
import noop from "00019__.js";

require = arg1;

export const useRoute = function useRoute() {
  const context = noop.useContext(_mod1524.NavigationRouteContext);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find a route object. Is your component inside a screen in a navigator?");
    throw error;
  } else {
    return context;
  }
};
