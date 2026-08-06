// _runtime/01523_useNavigation.js
import noop from "noop";
import { NavigationContainerRefContext } from "01511_NavigationContainerRefContext.js";
import { NavigationContext } from "01524_NavigationContext.js";

const require = arg1;

export const useNavigation = function useNavigation() {
  const context = React.useContext(NavigationContainerRefContext.NavigationContainerRefContext);
  let context1 = React.useContext(NavigationContext.NavigationContext);
  if (undefined === context1) {
    if (undefined === context) {
      const _Error = Error;
      const error = new Error("Couldn't find a navigation object. Is your component inside NavigationContainer?");
      throw error;
    }
  }
  if (context1 == null) {
    context1 = context;
  }
  return context1;
};