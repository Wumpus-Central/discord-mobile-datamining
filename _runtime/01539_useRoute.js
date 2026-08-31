// _runtime/01539_useRoute.js
import context2 from "01540_context.js";
import closure_2 from "00019_noop.js";

require = arg1;

export const useRoute = function useRoute() {
  const context = React.useContext(context2.NavigationRouteContext);
  if (undefined === context) {
    const _Error = Error;
    error = new Error("Couldn't find a route object. Is your component inside a screen in a navigator?");
    throw error;
  } else {
    return context;
  }
};