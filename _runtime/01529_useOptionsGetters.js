// _runtime/01529_useOptionsGetters.js
import closure_2 from "00019_noop.js";

const require = arg1;

export const useOptionsGetters = function useOptionsGetters(key) {
  key = key.key;
  const options = key.options;
  const navigation = key.navigation;
  closure_3 = undefined;
  closure_4 = undefined;
  let onOptionsChange;
  let addOptionsGetter;
  let callback;
  let callback1;
  let callback2;
  closure_3 = navigation.useRef(options);
  closure_4 = navigation.useRef({});
  onOptionsChange = navigation.useContext(key(options[1]).NavigationBuilderContext).onOptionsChange;
  addOptionsGetter = navigation.useContext(key(options[2]).NavigationStateContext).addOptionsGetter;
  const items = [navigation, onOptionsChange];
  callback = navigation.useCallback(() => {
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
      const tmp = onOptionsChange;
    }
  }, items);
  const items1 = [options];
  const insertionEffect = navigation.useInsertionEffect(() => {
    closure_3.current = options;
  }, items1);
  const items2 = [navigation, options, callback];
  const effect = navigation.useEffect(() => {
    callback();
    let addListenerResult;
    if (navigation != null) {
      addListenerResult = navigation.addListener("focus", callback);
    }
    return addListenerResult;
  }, items2);
  callback1 = navigation.useCallback(() => {
    for (const key10004 in closure_4.current) {
      let tmp3 = key10004;
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
  callback2 = navigation.useCallback(() => {
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
  const effect1 = navigation.useEffect(() => {
    let tmpResult;
    if (addOptionsGetter != null) {
      tmpResult = tmp(key, callback2);
    }
    return tmpResult;
  }, items4);
  const items5 = [callback];
  return {
    addOptionsGetter: navigation.useCallback((arg0, arg1) => {
      closure_0 = arg0;
      closure_4.current[arg0] = arg1;
      callback();
      return () => {
        delete tmp2[tmp];
        closure_1_7();
      };
    }, items5),
    getCurrentOptions: callback2
  };
};