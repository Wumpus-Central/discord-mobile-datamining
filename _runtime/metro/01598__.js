// === Module 1598: ? ===

// Module 1598
import _toArray from "_toArray" /* 1599 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;

const require = globalThis.__r;
let _require;

let Platform;
let c3;
({ Linking: c3, Platform } = react_native);

export const useLinking = function useLinking(ref, enabled) {
  _require = ref;
  let flag = enabled.enabled;
  if (flag === undefined) {
    flag = true;
  }
  const prefixes = enabled.prefixes;
  const filter = enabled.filter;
  const config = enabled.config;
  let current = enabled.getInitialURL;
  if (current === undefined) {
    current = function f() {
      const f135347 = (arg0) => {
        const timerId = setTimeout(arg0, 150);
      };
      const items = [filter.getInitialURL(), new Promise(f135347)];
      new Promise(f135347);
      return race(items);
    };
  }
  let fn2 = enabled.subscribe;
  if (fn2 === undefined) {
    fn2 = function l(arg0) {
      let closure_0 = arg0;
      callback = function callback(event) {
        return closure_0(event.url);
      };
      let closure_2 = filter.addEventListener("url", callback);
      const removeEventListener = filter.removeEventListener;
      let bindResult;
      if (removeEventListener != null) {
        bindResult = removeEventListener.bind(filter);
      }
      return () => {
        let remove;
        if (closure_2 != null) {
          remove = closure_2.remove;
        }
        if (remove) {
          closure_2.remove();
        } else if (bindResult != null) {
          tmp2("url", callback);
        }
      };
    };
  }
  let getStateFromPath = enabled.getStateFromPath;
  if (getStateFromPath === undefined) {
    let tmp = _require;
    let tmp2 = flag;
    getStateFromPath = require("BaseNavigationContainer").getStateFromPath;
  }
  let getActionFromState = enabled.getActionFromState;
  if (getActionFromState === undefined) {
    let tmp4 = flag;
    getActionFromState = require("BaseNavigationContainer").getActionFromState;
  }
  let obj = require("BaseNavigationContainer");
  let items = [flag, obj.useNavigationIndependentTree()];
  const effect = prefixes.useEffect(() => {

  }, items);
  ref = prefixes.useRef(flag);
  const ref2 = prefixes.useRef(prefixes);
  const ref3 = prefixes.useRef(filter);
  const ref4 = prefixes.useRef(config);
  const ref5 = prefixes.useRef(current);
  const ref6 = prefixes.useRef(getStateFromPath);
  let closure_15 = prefixes.useRef(getActionFromState);
  const effect1 = prefixes.useEffect(() => {
    ref.current = flag;
    ref2.current = prefixes;
    ref3.current = filter;
    ref4.current = config;
    ref5.current = current;
    ref6.current = getStateFromPath;
    closure_15.current = getActionFromState;
  });
  let callback = prefixes.useCallback((AUTO_DISMISS) => {
    const tmp = AUTO_DISMISS;
    if (tmp) {
      if (!ref3.current) {
        const obj2 = _toArray;
        const extractPathFromURLResult = obj2.extractPathFromURL(ref2.current, AUTO_DISMISS);
        if (undefined !== extractPathFromURLResult) {
          try {
            return ref6.current(extractPathFromURLResult, ref4.current);
          } catch (tmp8) {
            const _console = console;
            console.error(tmp8);
          }
        }
      }
    }
  }, []);
  const items1 = [callback];
  const items2 = [flag, callback, ref, fn2];
  const getInitialState = prefixes.useCallback(() => {
    if (ref.current) {
      const currentResult = ref5.current();
      let tmp2 = null;
      if (null != currentResult) {
        if (typeof currentResult !== "string") {
          return currentResult.then((result) => callback(result));
        }
      }
      let closure_0 = callback(currentResult);
    }
    const obj = {
      then(fn) {
        let tmp2;
        if (fn) {
          tmp2 = fn(closure_0);
        } else {
          tmp2 = closure_0;
        }
        return resolve(tmp2);
      },
      catch: () => obj
    };
    return obj;
  }, items1);
  const effect2 = prefixes.useEffect(() => fn2((arg0) => {
    if (flag) {
      let tmp4;
      current = ref.current;
      if (current) {
        tmp4 = callback(arg0);
      }
      if (current) {
        if (tmp4) {
          const currentResult = ref3.current(tmp4, ref2.current);
          if (undefined !== currentResult) {
            try {
              current.dispatch(currentResult);
            } catch (tmp11) {
              let message = tmp11;
              const _console = console;
              if (typeof tmp11 === "object") {
                message = tmp11;
                if (null != tmp11) {
                  message = tmp11;
                  if ("message" in tmp11) {
                    message = tmp11.message;
                  }
                }
              }
              const _HermesInternal = HermesInternal;
              warn("An error occurred when trying to handle the link '" + arg0 + "': " + message);
            }
          } else {
            current.resetRoot(tmp4);
          }
        }
      }
    }
  }), items2);
  return { getInitialState };
};