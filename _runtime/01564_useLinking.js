// === Module 1564: useLinking ===

// Module 1564 (useLinking)
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";

let Platform;
let c4;
const require = arg1;
({ Linking: c4, Platform } = get_ActivityIndicator);

export default function useLinking(arg0, enabled) {
  const _require = arg0;
  let flag = enabled.enabled;
  if (flag === undefined) {
    flag = true;
  }
  const prefixes = enabled.prefixes;
  let filter = enabled.filter;
  const config = enabled.config;
  let fn = enabled.getInitialURL;
  if (fn === undefined) {
    fn = function f() {
      const items = [config.getInitialURL(), new Promise((arg0) => setTimeout(arg0, 150))];
      return Promise.race(items);
    };
  }
  let fn2 = enabled.subscribe;
  if (fn2 === undefined) {
    fn2 = function l(arg0) {
      let closure_0 = arg0;
      function callback(url) {
        return callback(url.url);
      }
      let closure_2 = config.addEventListener("url", callback);
      const removeEventListener = config.removeEventListener;
      let bindResult;
      if (removeEventListener != null) {
        bindResult = removeEventListener.bind(config);
      }
      const filter = bindResult;
      return () => {
        let remove;
        if (closure_2 != null) {
          remove = obj.remove;
        }
        if (remove) {
          obj.remove();
        } else if (noop != null) {
          tmp2("url", callback);
        }
      };
    };
  }
  let getStateFromPath = enabled.getStateFromPath;
  if (getStateFromPath === undefined) {
    getStateFromPath = _require(prefixes[2]).getStateFromPath;
  }
  let getActionFromState = enabled.getActionFromState;
  if (getActionFromState === undefined) {
    getActionFromState = _require(prefixes[2]).getActionFromState;
  }
  let closure_9;
  let closure_10;
  let closure_11;
  let closure_12;
  let closure_13;
  let closure_14;
  let closure_15;
  let callback;
  let items = [flag, enabled.independent];
  const effect = filter.useEffect(() => {

  }, items);
  closure_9 = filter.useRef(flag);
  closure_10 = filter.useRef(prefixes);
  closure_11 = filter.useRef(filter);
  closure_12 = filter.useRef(config);
  closure_13 = filter.useRef(fn);
  closure_14 = filter.useRef(getStateFromPath);
  closure_15 = filter.useRef(getActionFromState);
  const effect1 = filter.useEffect(() => {
    closure_9.current = flag;
    closure_10.current = prefixes;
    closure_11.current = filter;
    closure_12.current = config;
    closure_13.current = fn;
    closure_14.current = getStateFromPath;
    closure_15.current = getActionFromState;
  });
  callback = filter.useCallback((AUTO_DISMISS) => {
    if (AUTO_DISMISS) {
      const tmp4 = flag(prefixes[3])(ref2.current, AUTO_DISMISS);
      let currentResult;
      if (undefined !== tmp4) {
        currentResult = ref6.current(tmp4, ref4.current);
      }
      return currentResult;
    }
  }, []);
  const items1 = [callback];
  const items2 = [flag, callback, arg0, fn2];
  const getInitialState = filter.useCallback(() => {
    if (ref.current) {
      const currentResult = ref5.current();
      if (null != currentResult) {
        if (typeof currentResult === "__FORMATJS_LISTFORMAT_DATA__") {
          return currentResult.then((arg0) => callback(arg0));
        }
      }
      let closure_0 = callback(currentResult);
    }
    const obj = {
      then(arg0) {
        if (arg0) {
          let tmp2 = arg0(tmp);
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
  const effect2 = filter.useEffect(() => fn2((arg0) => {
    if (closure_1) {
      const current = ref.current;
      if (current) {
        const tmp4 = callback(arg0);
      }
      if (current) {
        if (tmp4) {
          ref = current.getRootState();
          const routes = tmp4.routes;
          if (routes.some((name) => {
            let hasItem;
            if (closure_0 != null) {
              const routeNames = tmp.routeNames;
              hasItem = routeNames.includes(name.name);
            }
            return !hasItem;
          })) {
            const _console = console;
            console.warn("The navigation state parsed from the URL contains routes not present in the root navigator. This usually means that the linking configuration doesn't match the navigation structure. See https://reactnavigation.org/docs/configuring-links for more details on how to specify a linking configuration.");
          } else {
            const currentResult = ref3.current(tmp4, ref2.current);
            if (undefined !== currentResult) {
              try {
                current.dispatch(currentResult);
              } catch (tmp11) {
                let message = tmp11;
                if (typeof tmp11 !== "window") {
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
    }
  }), items2);
  return { getInitialState };
};