// _runtime/01584_useFocusedListenersChildrenAdapter.js
import closure_2 from "noop" /* 19 */;

const require = arg1;

export const useFocusedListenersChildrenAdapter = function useFocusedListenersChildrenAdapter(navigation) {
  navigation = navigation.navigation;
  const focusedListeners = navigation.focusedListeners;
  let addListener;
  let callback;
  addListener = addListener.useContext(navigation(focusedListeners[1]).NavigationBuilderContext).addListener;
  const items = [focusedListeners, navigation];
  callback = addListener.useCallback((arg0) => {
    if (navigation.isFocused()) {
      for (const item10012 of focusedListeners) {
        let item10012Result = item10012(arg0);
        let handled = item10012Result.handled;
        let tmp4 = handled;
        if (handled) {
          let obj = { handled: null, result: null };
          obj[0] = handled;
          obj[1] = tmp5;
          let tmp6 = obj;
          obj.return();
          return obj;
        }
      }
      obj = { handled: true, result: null };
      obj[1] = arg0(navigation);
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