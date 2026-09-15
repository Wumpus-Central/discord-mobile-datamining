// === Module 1526: context1 ===

// Module 1526 (context1)
import _mod1527 from "module_1527" /* 1527 */;
import noop from "module_19" /* 19 */;

require = arg1;
let context = noop.createContext(undefined);
const context1 = noop.createContext(undefined);

export const FocusedRouteKeyContext = context;
export const IsFocusedContext = context1;
export const useIsFocused = function useIsFocused() {
  let context = noop.useContext(context1);
  const navigation = _mod1527.useNavigation();
  closure_1 = tmp3;
  const items = [undefined !== context, navigation];
  if (context == null) {
    context = noop.useSyncExternalStore(noop.useCallback((arg0) => {
      if (closure_1) {
        return () => {

        };
      } else {
        closure_0 = navigation.addListener("focus", arg0);
        closure_1 = navigation.addListener("blur", arg0);
        return () => {
          closure_0();
          closure_1();
        };
      }
    }, items), navigation.isFocused, navigation.isFocused);
  }
  return context;
};