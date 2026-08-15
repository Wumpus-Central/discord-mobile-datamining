// _runtime/00814_getDevServer.js
import { TurboModuleRegistry } from "00997_TurboModuleRegistry.js";
const require = arg1;
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
    let closure_0 = arg0;
    let closure_1 = arg1;
    let _Promise = arg2;
    let closure_3 = arg3;
    if (!arg2) {
      _Promise = Promise;
    }
    _Promise = new _Promise((arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      function fulfilled(arg0) {
        try {
          step(iter.next(arg0));
        } catch (tmp5) {
          callback2(tmp5);
        }
      }
      function rejected(arg0) {
        try {
          step(iter.throw(arg0));
        } catch (tmp5) {
          callback2(tmp5);
        }
      }
      let iter = rejected;
      function step(done) {
        if (done.done) {
          callback(done.value);
        } else {
          let tmp = done.value;
          callback = tmp;
          if (!(tmp instanceof fulfilled)) {
            tmp = new tmp((arg0) => {
              arg0(closure_0);
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
      const value = iter2.value;
      if (iter2.done) {
        arg0(value);
      } else {
        closure_0 = value;
        let tmp3 = value;
        if (!(value instanceof fulfilled)) {
          tmp3 = new tmp3((arg0) => {
            arg0(closure_0);
          });
        }
        tmp3.then(fulfilled, rejected);
      }
    });
    return _Promise;
  };
}
arg5.fetchSourceContext = function fetchSourceContext(c4) {
  let closure_0 = c4;
  return fn(this, undefined, undefined, function*() {
    if (c0 === 2) {
      c0 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c0 = 2;
        if (arg0 === 1) {
          c0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          const promise = new Promise((arg0) => {
            let closure_0 = arg0;
            try {
              let obj = v3(outer1_1[0]);
              const stealthXhr = obj.createStealthXhr();
              if (stealthXhr) {
                const tmp8 = (function getSentryMetroSourceContextUrl() {
                  const tmp = callback2();
                  if (tmp) {
                    const _HermesInternal = HermesInternal;
                    return "" + tmp.url + "__sentry/context";
                  }
                })();
                if (tmp8) {
                  stealthXhr.open("POST", tmp9, true);
                  stealthXhr.setRequestHeader("Content-Type", "application/json");
                  let _JSON = JSON;
                  obj = { stack: null };
                  obj[0] = closure_0;
                  stealthXhr.send(JSON.stringify(obj));
                  stealthXhr.onreadystatechange = () => {
                    if (stealthXhr.readyState === callback(outer2_1[0]).XHR_READYSTATE_DONE) {
                      if (200 !== tmp2.status) {
                        callback(callback);
                      }
                      try {
                        const _JSON = JSON;
                        const parsed = JSON.parse(tmp2.responseText);
                        const _Array = Array;
                        if (Array.isArray(parsed.stack)) {
                          tmp9(parsed.stack);
                        } else {
                          tmp9(callback);
                        }
                      } catch (err) {
                        callback(callback);
                      }
                    }
                  };
                  stealthXhr.onerror = () => {
                    callback(callback);
                  };
                } else {
                  const debug = v3(outer1_1[1]).debug;
                  debug.error("Could not fetch source context. No dev server URL found.");
                  arg0(closure_0);
                }
              } else {
                arg0(closure_0);
              }
            } catch (tmp21) {
              const debug2 = v3(outer1_1[1]).debug;
              debug2.error("Could not fetch source context.", tmp21);
              tmp2(closure_0);
            }
          });
          c0 = 3;
          obj = { value: null, done: true };
          obj[0] = promise;
          return obj;
        }
      } catch (tmp9) {
        c0 = tmp;
        throw tmp9;
      }
    }
  });
};
arg5.parseErrorStack = function parseErrorStack(arg0) {
  if (TurboModuleRegistry.ReactNativeLibraries.Devtools) {
    const Devtools = tmp(997).ReactNativeLibraries.Devtools;
    return Devtools.parseErrorStack(arg0);
  } else {
    const _Error = Error;
    const error = new Error("React Native Devtools not available.");
    throw error;
  }
  tmp = require;
};
arg5.symbolicateStackTrace = function symbolicateStackTrace(arg0, arg1) {
  if (TurboModuleRegistry.ReactNativeLibraries.Devtools) {
    const Devtools = tmp(997).ReactNativeLibraries.Devtools;
    return Devtools.symbolicateStackTrace(arg0, arg1);
  } else {
    const _Error = Error;
    const error = new Error("React Native Devtools not available.");
    throw error;
  }
  tmp = require;
};
arg5.getDevServer = getDevServer;