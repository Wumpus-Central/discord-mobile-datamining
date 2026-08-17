// _runtime/01540_useRoute.js
import context2 from "context" /* 1541 */;
import closure_2 from "noop" /* 19 */;

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