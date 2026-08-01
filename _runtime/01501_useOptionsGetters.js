// === Module 1501: useOptionsGetters ===

// Module 1501 (useOptionsGetters)
import noop from "noop";


export default function useOptionsGetters(key) {
  key = key.key;
  const options = key.options;
  const navigation = key.navigation;
  let closure_3;
  let closure_4;
  let onOptionsChange;
  let addOptionsGetter;
  let callback;
  let callback1;
  let callback2;
  closure_3 = navigation.useRef(options);
  closure_4 = navigation.useRef({});
  onOptionsChange = navigation.useContext(key(options[1])).onOptionsChange;
  addOptionsGetter = navigation.useContext(key(options[2])).addOptionsGetter;
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
  const items1 = [navigation, options, callback];
  const effect = navigation.useEffect(() => {
    closure_3.current = options;
    callback();
    let addListenerResult;
    if (navigation != null) {
      addListenerResult = navigation.addListener("focus", callback);
    }
    return addListenerResult;
  }, items1);
  callback1 = navigation.useCallback(() => {
    for (const key10004 in closure_4.current) {
      let tmp3 = key10004;
      let current2 = closure_4.current;
      let tmp4 = closure_4;
      if (!current2.hasOwnProperty(key10004)) {
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
  const items2 = [navigation, callback1];
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
  }, items2);
  const items3 = [callback2, addOptionsGetter, key];
  const effect1 = navigation.useEffect(() => {
    let tmpResult;
    if (addOptionsGetter != null) {
      tmpResult = tmp(key, callback2);
    }
    return tmpResult;
  }, items3);
  const items4 = [callback];
  return {
    addOptionsGetter: navigation.useCallback((arg0, arg1) => {
      let closure_0 = arg0;
      closure_4.current[arg0] = arg1;
      callback();
      return () => {
        delete tmp2[tmp];
        outer1_7();
      };
    }, items4),
    getCurrentOptions: callback2
  };
};