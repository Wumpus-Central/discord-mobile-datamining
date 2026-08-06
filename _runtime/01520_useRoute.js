// _runtime/01520_useRoute.js
import noop from "noop";
import { context } from "01521_context.js";

const require = arg1;

export const useRoute = function useRoute() {
  const context = React.useContext(context.NavigationRouteContext);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find a route object. Is your component inside a screen in a navigator?");
    throw error;
  } else {
    return context;
  }
};