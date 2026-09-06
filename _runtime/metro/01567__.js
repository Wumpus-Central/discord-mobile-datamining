// === Module 1567: ? ===

// Module 1567
import NavigationBuilderContext from "NavigationBuilderContext" /* 1513 */;
import noop from "module_19" /* 19 */;

require = arg1;

export const useFocusedListenersChildrenAdapter = function useFocusedListenersChildrenAdapter(navigation) {
  navigation = navigation.navigation;
  const focusedListeners = navigation.focusedListeners;
  const addListener = noop.useContext(NavigationBuilderContext.NavigationBuilderContext).addListener;
  const items = [focusedListeners, navigation];
  const callback = noop.useCallback((fn) => {
    if (navigation.isFocused()) {
      for (const item10012 of focusedListeners) {
        let item10012Result = item10012(arg0);
        let handled = item10012Result.handled;
        if (handled) {
          let obj = { handled, result: tmp5 };
          obj.return();
          return obj;
        }
      }
      obj = { handled: true, result: fn(navigation) };
      return obj;
    } else {
      return { handled: false, result: null };
    }
  }, items);
  const items1 = [addListener, callback];
  const effect = noop.useEffect(() => {
    let tmpResult;
    if (addListener != null) {
      tmpResult = tmp("focus", callback);
    }
    return tmpResult;
  }, items1);
};