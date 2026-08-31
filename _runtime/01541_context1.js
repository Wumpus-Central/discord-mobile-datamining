// _runtime/01541_context1.js
import importAllResult from "00019_noop.js";

const require = arg1;
let context = importAllResult.createContext(undefined);
const context1 = importAllResult.createContext(undefined);

export const FocusedRouteKeyContext = context;
export const IsFocusedContext = context1;
export const useIsFocused = function useIsFocused() {
  let context = importAllResult.useContext(context1);
  navigation = navigation(1542).useNavigation();
  dependencyMap = tmp3;
  const items = [undefined !== context, navigation];
  if (context == null) {
    context = importAllResult.useSyncExternalStore(importAllResult.useCallback((arg0) => {
      if (closure_1) {
        return () => {

        };
      } else {
        navigation = navigation.addListener("focus", arg0);
        closure_1 = navigation.addListener("blur", arg0);
        return () => {
          callback();
          callback2();
        };
      }
    }, items), navigation.isFocused, navigation.isFocused);
  }
  return context;
};