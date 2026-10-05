// === Module 1532: ? ===

// Module 1532
import _mod1533 from "module_1533" /* 1533 */;
import react from "react" /* 19 */;

let navigation;

let context = react.createContext(undefined);
const context1 = react.createContext(undefined);

export const FocusedRouteKeyContext = context;
export const IsFocusedContext = context1;
export const useIsFocused = function useIsFocused() {
  let context = react.useContext(context1);
  const obj = _mod1533;
  navigation = obj.useNavigation();
  let closure_1 = tmp3;
  const items = [undefined !== context, navigation];
  if (context == null) {
    context = react.useSyncExternalStore(react.useCallback((arg0) => {
      const tmp = closure_1;
      if (tmp) {
        return () => {

        };
      } else {
        let closure_0 = navigation.addListener("focus", arg0);
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