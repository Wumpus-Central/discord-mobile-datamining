// === Module 1591: ? ===

// Module 1591
import extractPathFromURL from "extractPathFromURL" /* 1592 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Linking: c3, Platform } = get_ActivityIndicator);

export const useLinking = function useLinking(ref, enabled) {
  _require = ref;
  let flag = enabled.enabled;
  if (flag === undefined) {
    flag = true;
  }
  const prefixes = enabled.prefixes;
  let filter = enabled.filter;
  const config = enabled.config;
  let current = enabled.getInitialURL;
  if (current === undefined) {
    current = function f() {
      const items = [
        filter.getInitialURL(),
        new Promise((arg0) => {
          const timerId = setTimeout(arg0, 150);
        })
      ];
      return Promise.race(items);
    };
  }
  let fn2 = enabled.subscribe;
  if (fn2 === undefined) {
    fn2 = function l(arg0) {
      closure_0 = arg0;
      callback = function callback(event) {
        return closure_0(event.url);
      };
      closure_2 = filter.addEventListener("url", callback);
      const removeEventListener = filter.removeEventListener;
      let bindResult;
      if (removeEventListener != null) {
        bindResult = removeEventListener.bind(filter);
      }
      filter = bindResult;
      return () => {
        let remove;
        if (closure_2 != null) {
          remove = obj.remove;
        }
        if (remove) {
          obj.remove();
        } else if (bindResult != null) {
          tmp2("url", callback);
        }
      };
    };
  }
  let getStateFromPath = enabled.getStateFromPath;
  if (getStateFromPath === undefined) {
    getStateFromPath = require("BaseNavigationContainer").getStateFromPath;
  }
  let getActionFromState = enabled.getActionFromState;
  if (getActionFromState === undefined) {
    getActionFromState = require("BaseNavigationContainer").getActionFromState;
  }
  let items = [flag, require("BaseNavigationContainer").useNavigationIndependentTree()];
  const effect = prefixes.useEffect(() => {

  }, items);
  prefixes.useRef(flag);
  prefixes.useRef(prefixes);
  prefixes.useRef(filter);
  prefixes.useRef(config);
  prefixes.useRef(current);
  prefixes.useRef(getStateFromPath);
  closure_15 = prefixes.useRef(getActionFromState);
  const effect1 = prefixes.useEffect(() => {
    closure_9.current = flag;
    closure_10.current = prefixes;
    closure_11.current = filter;
    closure_12.current = config;
    closure_13.current = current;
    closure_14.current = getStateFromPath;
    closure_15.current = getActionFromState;
  });
  let callback = prefixes.useCallback((AUTO_DISMISS) => {
    if (AUTO_DISMISS) {
      if (!ref3.current) {
        const extractPathFromURLResult = extractPathFromURL.extractPathFromURL(ref2.current, AUTO_DISMISS);
        if (undefined !== extractPathFromURLResult) {
          try {
            return ref6.current(extractPathFromURLResult, ref4.current);
          } catch (tmp7) {
            const _console = console;
            console.error(tmp7);
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
      if (null != currentResult) {
        if (typeof currentResult !== "string") {
          return currentResult.then((result) => callback(result));
        }
      }
      closure_0 = callback(currentResult);
    }
    const obj = {
      then(fn) {
        if (fn) {
          let tmp2 = fn(tmp);
        } else {
          tmp2 = tmp;
        }
        return Promise.resolve(tmp2);
      },
      catch() {
        return obj;
      }
    };
    return obj;
  }, items1);
  const effect2 = prefixes.useEffect(() => fn2((arg0) => {
    if (flag) {
      current = ref.current;
      if (current) {
        const tmp4 = callback(arg0);
      }
      if (current) {
        if (tmp4) {
          const currentResult = ref3.current(tmp4, ref2.current);
          if (undefined !== currentResult) {
            try {
              current.dispatch(currentResult);
            } catch (tmp11) {
              let message = tmp11;
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
              console.warn("An error occurred when trying to handle the link '" + tmp + "': " + message);
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