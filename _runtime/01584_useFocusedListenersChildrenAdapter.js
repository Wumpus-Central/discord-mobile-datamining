// _runtime/01584_useFocusedListenersChildrenAdapter.js
import noop from "00019_noop.js";

const require = arg1;

export const useFocusedListenersChildrenAdapter = function useFocusedListenersChildrenAdapter(navigation) {
  navigation = navigation.navigation;
  const focusedListeners = navigation.focusedListeners;
  let addListener;
  addListener = addListener.useContext(navigation(focusedListeners[1]).NavigationBuilderContext).addListener;
  const items = [focusedListeners, navigation];
  const callback = addListener.useCallback((fn) => {
    if (navigation.isFocused()) {
      for (const item10012 of focusedListeners) {
        let item10012Result = item10012(arg0);
        let handled = item10012Result.handled;
        if (handled) {
          let obj = { handled: null, result: null };
          obj[0] = handled;
          obj[1] = tmp5;
          obj.return();
          return obj;
        }
      }
      obj = { handled: true, result: null };
      obj[1] = fn(navigation);
      return obj;
    } else {
      return { handled: false, result: null };
    }
  }, items);
  const items1 = [addListener, callback];
  const effect = addListener.useEffect(() => {
    let tmpResult;
    if (addListener != null) {
      tmpResult = tmp("focus", callback);
    }
    return tmpResult;
  }, items1);
};