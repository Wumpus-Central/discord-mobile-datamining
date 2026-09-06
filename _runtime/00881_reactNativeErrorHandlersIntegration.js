// _runtime/00881_reactNativeErrorHandlersIntegration.js
import _mod678 from "metro/00678__.js";
import RN_GLOBAL_OBJ from "00681_RN_GLOBAL_OBJ.js";
import _mod682 from "metro/00682__.js";

require = arg1;
let dependencyMap = arg6;
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
let data = {
  onUnhandled(id, originalException) {
    data = { data: null, originalException, syntheticException: null, mechanism: null };
    data = { id };
    data.data = data;
    let syntheticError;
    if (!obj4.isErrorLike(originalException)) {
      syntheticError = _mod678.createSyntheticError();
      const tmpResult = _mod678;
    }
    data.syntheticException = syntheticError;
    data.mechanism = { handled: true, type: "onunhandledrejection" };
    data.captureException(originalException, data);
  },
  onHandled(displayId) {

  }
};

export () => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  obj = {
    name: "ReactNativeErrorHandlers",
    setupOnce() {
      const merged = Object.assign({ onerror: true, onunhandledrejection: true, patchGlobalPromise: true }, obj);
      if (merged.onunhandledrejection) {
        (function setupUnhandledRejectionsTracking(patchGlobalPromise) {
          try {
            obj = c0(_undefined[0]);
            if (obj.isHermesEnabled()) {
              let _HermesInternal = tmp3(tmp5[1]).RN_GLOBAL_OBJ.HermesInternal;
              let prop;
              if (null !== _HermesInternal) {
                if (undefined !== tmp8) {
                  prop = _HermesInternal.enablePromiseRejectionTracker;
                }
              }
              if (prop) {
                _HermesInternal = undefined;
                if (null !== tmp3(tmp5[1]).RN_GLOBAL_OBJ) {
                  if (undefined !== tmp3(tmp5[1]).RN_GLOBAL_OBJ) {
                    _HermesInternal = tmp3(tmp5[1]).RN_GLOBAL_OBJ.HermesInternal;
                  }
                }
                let hasPromise;
                if (null !== _HermesInternal) {
                  if (undefined !== tmp19) {
                    hasPromise = tmp19.hasPromise;
                  }
                }
                if (null !== hasPromise) {
                  if (undefined !== tmp23) {
                    const call = tmp23.call;
                    if (typeof call === "unknown") {
                      let callResult = tmp23();
                    } else {
                      callResult = call(_HermesInternal);
                    }
                  }
                }
                if (undefined) {
                  const debug3 = tmp3(tmp5[2]).debug;
                  debug3.log("Using Hermes native promise rejection tracking");
                  const _HermesInternal2 = tmp3(tmp5[1]).RN_GLOBAL_OBJ.HermesInternal;
                  obj = { allRejections: true, onUnhandled: null, onHandled: null };
                  ({ onUnhandled: obj6.onUnhandled, onHandled: obj6.onHandled } = closure_1_3);
                  let result = _HermesInternal2.enablePromiseRejectionTracker(obj);
                  const debug4 = tmp3(tmp5[2]).debug;
                  debug4.log("Unhandled promise rejections will be caught by Sentry.");
                }
              }
            }
            let tmp3Result = tmp3(tmp5[0]);
            if (tmp3Result.isWeb()) {
              const debug2 = tmp3(tmp5[2]).debug;
              debug2.log("Using Browser JS promise rejection tracking for React Native Web");
              tmp3Result = tmp3(tmp5[2]);
              const result1 = tmp3Result.addGlobalUnhandledRejectionInstrumentationHandler((originalException) => {
                closure_1_0(682);
                obj = { originalException, syntheticException: null, mechanism: null };
                let syntheticError;
                if (!obj3.isErrorLike(originalException)) {
                  syntheticError = closure_1_0(678).createSyntheticError();
                  const tmpResult = closure_1_0(678);
                }
                obj.syntheticException = syntheticError;
                obj.mechanism = { handled: false, type: "onunhandledrejection" };
                obj.captureException(originalException, obj);
              });
            } else if (patchGlobalPromise) {
              tmp3(tmp5[4]).polyfillPromise();
              (function attachUnhandledRejectionHandler() {
                obj = closure_1_0(882);
                const result = obj.requireRejectionTracking();
                obj = { allRejections: true, onUnhandled: closure_1_3.onUnhandled, onHandled: closure_1_3.onHandled };
                result.enable(obj);
              })();
              const tmp3Result1 = tmp3(tmp5[4]);
              tmp3(tmp5[4]).checkPromiseAndWarn();
              const tmp3Result2 = tmp3(tmp5[4]);
            } else {
              const debug = tmp3(tmp5[2]).debug;
              debug.log("Unhandled promise rejections will not be caught by Sentry.");
            }
          } catch (err) {
            const debug5 = c0(_undefined[2]).debug;
            debug5.warn("Failed to set up promise rejection tracking. Unhandled promise rejections will not be caught by Sentry.See https://docs.sentry.io/platforms/react-native/troubleshooting/ for more details.");
          }
        })(merged.patchGlobalPromise);
      }
      if (merged.onerror) {
        c0 = false;
        const _ErrorUtils = RN_GLOBAL_OBJ.RN_GLOBAL_OBJ.ErrorUtils;
        if (_ErrorUtils) {
          if (null !== _ErrorUtils.getGlobalHandler) {
            if (undefined !== getGlobalHandler) {
              let call = getGlobalHandler.call;
              typeof call === "unknown" ? getGlobalHandler() : call(_ErrorUtils);
            }
          }
          c1 = tmp7;
          _ErrorUtils.setGlobalHandler((arg0, arg1) => {
            closure_0 = arg0;
            closure_1 = arg1;
            return closure_1_2(undefined, undefined, undefined, function*(arg0, value) {
              if (c3 === 2) {
                c3 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp4 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  obj = { value, done: true };
                  return obj;
                } else {
                  return { value: "HermesInternal", done: null };
                }
              } else {
                try {
                  c3 = 2;
                  if (0 === c2) {
                    if (arg0 === 1) {
                      c3 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c3 = 3;
                      obj = { value, done: true };
                      return obj;
                    } else {
                      dependencyMap = 0;
                      c0 = tmp2;
                      closure_128_0 = undefined;
                      closure_128_1 = undefined;
                      closure_128_2 = undefined;
                      if (dependencyMap) {
                        if (c0) {
                          const debug2 = originalException(682).debug;
                          debug2.log("Encountered multiple fatals in a row. The latest:", originalException);
                          c3 = 3;
                          let obj1 = { value: undefined, done: true };
                          return obj1;
                        } else {
                          c0 = true;
                        }
                      }
                      let obj3 = originalException(682);
                      const client = obj3.getClient();
                      closure_128_0 = client;
                      if (client) {
                        const obj2 = { originalException, attachments: null };
                        const currentScope = originalException(682).getCurrentScope();
                        obj2.attachments = currentScope.getScopeData().attachments;
                        closure_128_1 = obj2;
                        c2 = 1;
                        c3 = 1;
                        obj3 = { value: client.eventFromException(originalException, obj2), done: false };
                        return obj3;
                      } else {
                        let debug = originalException(682).debug;
                        debug.error("Sentry client is missing, the error event might be lost.", originalException);
                        dependencyMap(originalException, dependencyMap);
                        c3 = 3;
                        const obj4 = { value: undefined, done: true };
                        return obj4;
                      }
                    }
                  } else if (arg0 === 1) {
                    c3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    const obj5 = { value, done: true };
                    return obj5;
                  } else {
                    closure_128_2 = value;
                    if (closure_129_1) {
                      tmp48.level = "fatal";
                      obj1 = originalException(682);
                      const result = obj1.addExceptionMechanism(closure_128_2, { handled: false, type: "onerror" });
                    } else {
                      tmp48.level = "error";
                      obj = originalException(682);
                      const result1 = obj.addExceptionMechanism(closure_128_2, { handled: true, type: "generic" });
                    }
                    closure_128_0.captureEvent(closure_128_2, closure_128_1);
                    let num3 = closure_128_0.getOptions().shutdownTimeout;
                    if (!num3) {
                      num3 = 2000;
                    }
                    closure_128_0.flush(num3).then(() => {
                      dependencyMap(originalException, closure_1_1);
                    }, (arg0) => {
                      const debug = originalException(682).debug;
                      debug.error("[ReactNativeErrorHandlers] Error while flushing the event cache after uncaught error.", arg0);
                    });
                    c3 = 3;
                    return { value: "HermesInternal", done: null };
                  }
                } catch (tmp40) {
                  c3 = tmp;
                  throw tmp40;
                }
              }
            });
          });
        } else {
          let debug = tmp3(682).debug;
          debug.warn("ErrorUtils not found. Can be caused by different environment for example react-native-web.");
        }
        tmp3 = require;
      }
    }
  };
  return obj;
}