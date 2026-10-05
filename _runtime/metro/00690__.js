// _runtime/metro/00690__.js
import ReactNativeLibraries from "../00873_ReactNativeLibraries.js";

let c0, stack;

function getDevServer() {
  try {
    const Devtools = ReactNativeLibraries.ReactNativeLibraries.Devtools;
    let devServer;
    if (null !== Devtools) {
      if (undefined !== Devtools) {
        devServer = obj.getDevServer();
      }
    }
    return devServer;
  } catch (err) {}
}
const fn =
  (this && this.__awaiter) ||
  ((arg0, arg1, arg2, arg3) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let _Promise = arg2;
    const Promise = arg2;
    let closure_3 = arg3;
    if (!arg2) {
      let tmp = globalThis;
      _Promise = Promise;
    }
    const _Promise1 = new _Promise(function (fn, arg1) {
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
          fn(done.value);
        } else {
          let tmp1 = done.value;
          const value = tmp1;
          if (!(tmp1 instanceof Promise)) {
            const self = this;
            const self2 = this;
            tmp1 = new tmp((fn) => {
              fn(value);
            });
          }
          tmp1.then(fulfilled, iter);
        }
      }
      let items = closure_1;
      const tmp = iter;
      const apply = iter.apply;
      const tmp2 = closure_0;
      if (!closure_1) {
        items = [];
      }
      iter = apply(tmp2, items);
      const iter2 = iter.next();
      let value = iter2.value;
      if (iter2.done) {
        const tmp5 = fn(value);
      } else {
        let tmp32 = value;
        if (!(value instanceof fulfilled)) {
          let self = this;
          let self2 = this;
          tmp32 = new tmp3((fn) => {
            fn(value);
          });
        }
        tmp32.then(fulfilled, rejected);
      }
    });
    return _Promise1;
  });

export const fetchSourceContext = function fetchSourceContext(value) {
  let closure_0 = value;
  return fn(this, undefined, undefined, function* () {
    let tmp6;
    if (c0 === 2) {
      c0 = 3;
      const str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else {
      const tmp7 = value;
      if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c0 = 2;
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const tmp3 = globalThis;
            const self = this;
            const self2 = this;
            const promise = new Promise((fn) => {
              function getSentryMetroSourceContextUrl() {
                const tmp = closure_1_3();
                if (tmp) {
                  const _HermesInternal = HermesInternal;
                  return "" + tmp.url + "__sentry/context";
                }
              }
              stack = fn;
              try {
                let tmp = stack;
                const obj = stack(closure_1_1[0]);
                const stealthXhr = obj.createStealthXhr();
                if (stealthXhr) {
                  const tmp6 = getSentryMetroSourceContextUrl();
                  if (tmp6) {
                    stealthXhr.open("POST", tmp7, true);
                    stealthXhr.setRequestHeader("Content-Type", "application/json");
                    let _JSON = JSON;
                    const obj2 = { stack };
                    stealthXhr.send(JSON.stringify(obj2));
                    stealthXhr.onreadystatechange = () => {
                      if (stealthXhr.readyState === c0(closure_3_1[0]).XHR_READYSTATE_DONE) {
                        if (200 !== stealthXhr.status) {
                          fn(stack);
                        }
                        try {
                          const _JSON = JSON;
                          const parsed = JSON.parse(stealthXhr.responseText);
                          const _Array = Array;
                          if (Array.isArray(parsed.stack)) {
                            fn(parsed.stack);
                          } else {
                            fn(stack);
                          }
                        } catch (err) {
                          fn(stack);
                        }
                      }
                    };
                    stealthXhr.onerror = () => {
                      fn(stack);
                    };
                  } else {
                    const debug = stack(closure_1_1[1]).debug;
                    debug.error("Could not fetch source context. No dev server URL found.");
                    fn(stack);
                  }
                } else {
                  fn(stack);
                }
              } catch (tmp19) {
                const debug2 = stack(closure_1_1[1]).debug;
                debug2.error("Could not fetch source context.", tmp19);
                fn(stack);
              }
            });
            c0 = 3;
            let obj = { value: promise, done: true };
            return obj;
          }
        } catch (tmp6) {
          c0 = 3;
          throw tmp6;
        }
      }
    }
  });
};
export const parseErrorStack = function parseErrorStack(arg0) {
  if (ReactNativeLibraries.ReactNativeLibraries.Devtools) {
    const Devtools = ReactNativeLibraries.ReactNativeLibraries.Devtools;
    return Devtools.parseErrorStack(arg0);
  } else {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("React Native Devtools not available.");
    throw error;
  }
};
export const symbolicateStackTrace = function symbolicateStackTrace(arg0, arg1) {
  if (ReactNativeLibraries.ReactNativeLibraries.Devtools) {
    const Devtools = ReactNativeLibraries.ReactNativeLibraries.Devtools;
    return Devtools.symbolicateStackTrace(arg0, arg1);
  } else {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("React Native Devtools not available.");
    throw error;
  }
};
export { getDevServer };
