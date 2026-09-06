// _runtime/00679_symbolicateStackTrace.js
import TurboModuleRegistry from "00862_TurboModuleRegistry.js";

require = arg1;
const dependencyMap = arg6;
function getDevServer() {
  try {
    const Devtools = TurboModuleRegistry.ReactNativeLibraries.Devtools;
    let devServer;
    if (null !== Devtools) {
      if (undefined !== obj) {
        devServer = obj.getDevServer();
      }
    }
    return devServer;
  } catch (err) {
    return tmp;
  }
}
let fn = this;
if (this) {
  fn = this.__awaiter;
}
if (!fn) {
  fn = (arg0, arg1, arg2, arg3) => {
    closure_0 = arg0;
    closure_1 = arg1;
    let _Promise = arg2;
    closure_3 = arg3;
    if (!arg2) {
      _Promise = Promise;
    }
    _Promise = new _Promise((fn, arg1) => {
      closure_0 = fn;
      closure_1 = arg1;
      function fulfilled(result) {
        try {
          step(iter.next(result));
        } catch (tmp5) {
          closure_1(tmp5);
        }
      }
      function rejected(arg0) {
        try {
          step(iter.throw(arg0));
        } catch (tmp5) {
          closure_1(tmp5);
        }
      }
      let iter = rejected;
      function step(done) {
        if (done.done) {
          closure_0(done.value);
        } else {
          let tmp = done.value;
          closure_0 = tmp;
          if (!(tmp instanceof Promise)) {
            tmp = new tmp((fn) => {
              fn(value);
            });
          }
          tmp.then(fulfilled, iter);
        }
      }
      let items = closure_1;
      if (!closure_1) {
        items = [];
      }
      iter = iter.apply(closure_0, items);
      const iter2 = iter.next();
      value = iter2.value;
      if (iter2.done) {
        fn(value);
      } else {
        closure_0 = value;
        let tmp3 = value;
        if (!(value instanceof fulfilled)) {
          tmp3 = new tmp3((fn) => {
            fn(value);
          });
        }
        tmp3.then(fulfilled, rejected);
      }
    });
    return _Promise;
  };
}

export const fetchSourceContext = function fetchSourceContext(arg0) {
  closure_0 = arg0;
  return fn(this, undefined, undefined, function* () {
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c0 = 2;
        if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          const promise = new Promise((fn) => {
            stack = fn;
            try {
              let obj = stack(680);
              const stealthXhr = obj.createStealthXhr();
              if (stealthXhr) {
                const tmp8 = (function getSentryMetroSourceContextUrl() {
                  const tmp = closure_1_3();
                  if (tmp) {
                    const _HermesInternal = HermesInternal;
                    return "" + tmp.url + "__sentry/context";
                  }
                })();
                if (tmp8) {
                  stealthXhr.open("POST", tmp9, true);
                  stealthXhr.setRequestHeader("Content-Type", "application/json");
                  let _JSON = JSON;
                  obj = { stack };
                  stealthXhr.send(JSON.stringify(obj));
                  stealthXhr.onreadystatechange = () => {
                    if (stealthXhr.readyState === c0(closure_3_1[0]).XHR_READYSTATE_DONE) {
                      if (200 !== stealthXhr.status) {
                        closure_0(stack);
                      }
                      try {
                        const _JSON = JSON;
                        const parsed = JSON.parse(stealthXhr.responseText);
                        const _Array = Array;
                        if (Array.isArray(parsed.stack)) {
                          closure_0(parsed.stack);
                        } else {
                          closure_0(stack);
                        }
                      } catch (err) {
                        closure_0(stack);
                      }
                    }
                  };
                  stealthXhr.onerror = () => {
                    closure_0(stack);
                  };
                } else {
                  const debug = stack(682).debug;
                  debug.error("Could not fetch source context. No dev server URL found.");
                  fn(stack);
                }
              } else {
                fn(stack);
              }
            } catch (tmp21) {
              const debug2 = stack(682).debug;
              debug2.error("Could not fetch source context.", tmp21);
              tmp2(stack);
            }
          });
          c0 = 3;
          obj = { value: promise, done: true };
          return obj;
        }
      } catch (tmp9) {
        c0 = tmp;
        throw tmp9;
      }
    }
  });
};
export const parseErrorStack = function parseErrorStack(arg0) {
  if (TurboModuleRegistry.ReactNativeLibraries.Devtools) {
    const Devtools = TurboModuleRegistry.ReactNativeLibraries.Devtools;
    return Devtools.parseErrorStack(arg0);
  } else {
    const _Error = Error;
    const error = new Error("React Native Devtools not available.");
    throw error;
  }
};
export const symbolicateStackTrace = function symbolicateStackTrace(arg0, arg1) {
  if (TurboModuleRegistry.ReactNativeLibraries.Devtools) {
    const Devtools = TurboModuleRegistry.ReactNativeLibraries.Devtools;
    return Devtools.symbolicateStackTrace(arg0, arg1);
  } else {
    const _Error = Error;
    const error = new Error("React Native Devtools not available.");
    throw error;
  }
};
export { getDevServer };
