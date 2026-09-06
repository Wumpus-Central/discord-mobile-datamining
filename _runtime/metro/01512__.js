// === Module 1512: ? ===

// Module 1512
import get_getKey from "get getKey" /* 1500 */;
import NavigationBuilderContext from "NavigationBuilderContext" /* 1513 */;
import noop from "module_19" /* 19 */;

require = arg1;

export const useOptionsGetters = function useOptionsGetters(key) {
  key = key.key;
  const options = key.options;
  const navigation = key.navigation;
  noop.useRef(options);
  closure_4 = noop.useRef({});
  const onOptionsChange = noop.useContext(NavigationBuilderContext.NavigationBuilderContext).onOptionsChange;
  const addOptionsGetter = noop.useContext(get_getKey.NavigationStateContext).addOptionsGetter;
  const items = [navigation, onOptionsChange];
  const callback = noop.useCallback(() => {
    let flag;
    if (navigation != null) {
      flag = navigation.isFocused();
    }
    if (flag == null) {
      flag = true;
    }
    if (flag) {
      flag = !Object.keys(closure_4.current).length;
    }
    if (flag) {
      let current = ref.current;
      if (current == null) {
        current = {};
      }
      onOptionsChange(current);
    }
  }, items);
  const items1 = [options];
  const insertionEffect = noop.useInsertionEffect(() => {
    closure_3.current = options;
  }, items1);
  const items2 = [navigation, options, callback];
  const effect = noop.useEffect(() => {
    callback();
    let addListenerResult;
    if (navigation != null) {
      addListenerResult = navigation.addListener("focus", callback);
    }
    return addListenerResult;
  }, items2);
  const callback1 = noop.useCallback(() => {
    for (const key10004 in closure_4.current) {
      if (!(key10004 in closure_4.current)) {
        continue;
      } else {
        let current = tmp4.current;
        let tmp = current[key10004];
        let tmpResult;
        if (tmp != null) {
          tmpResult = tmp();
        }
        if (null === tmpResult) {
          continue;
        } else {
          return tmpResult;
        }
      }
      continue;
    }
    return null;
  }, []);
  const items3 = [navigation, callback1];
  const callback2 = noop.useCallback(() => {
    let isFocusedResult;
    if (navigation != null) {
      isFocusedResult = navigation.isFocused();
    }
    if (isFocusedResult != null) {
      if (!isFocusedResult) {
        return null;
      }
    }
    let current = callback1();
    if (null === current) {
      current = ref.current;
    }
    return current;
  }, items3);
  const items4 = [callback2, addOptionsGetter, key];
  const effect1 = noop.useEffect(() => {
    let tmpResult;
    if (addOptionsGetter != null) {
      tmpResult = tmp(key, callback2);
    }
    return tmpResult;
  }, items4);
  const obj = { addOptionsGetter: null, getCurrentOptions: callback2 };
  const items5 = [callback];
  obj.addOptionsGetter = noop.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    closure_4.current[arg0] = arg1;
    callback();
    return () => {
      delete tmp2[tmp];
      callback();
    };
  }, items5);
  return obj;
};