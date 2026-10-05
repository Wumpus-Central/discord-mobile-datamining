// _runtime/01530_react.js
import _mod1531 from "metro/01531__.js";
import react from "00019_react.js";

export const useRoute = function useRoute() {
  const context = react.useContext(_mod1531.NavigationRouteContext);
  if (undefined === context) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Couldn't find a route object. Is your component inside a screen in a navigator?");
    throw error;
  } else {
    return context;
  }
};
