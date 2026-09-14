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
    return new _Promise((fn, arg1) => {
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
          let tmp1 = done.value;
          closure_0 = tmp1;
          if (!(tmp1 instanceof Promise)) {
            tmp1 = new tmp((fn) => {
              fn(value);
            });
          }
          tmp1.then(fulfilled, iter);
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
        let tmp32 = value;
        if (!(value instanceof fulfilled)) {
          tmp32 = new tmp3((fn) => {
            fn(value);
          });
        }
        tmp32.then(fulfilled, rejected);
      }
    });
  };
}
let obj = {
  onUnhandled(id, originalException) {
    const obj2 = { data: { id }, originalException, syntheticException: null, mechanism: null };
    obj = _mod682;
    const obj3 = { id };
    let syntheticError;
    if (!obj4.isErrorLike(originalException)) {
      syntheticError = _mod678.createSyntheticError();
      const tmpResult = _mod678;
    }
    obj2.syntheticException = syntheticError;
    obj2.mechanism = { handled: true, type: "onunhandledrejection" };
    obj.captureException(originalException, obj2);
    obj4 = _mod678;
  },
  onHandled(displayId) {

  }
};

export (arg0) => {
  if (arg0 === undefined) {
    obj = {};
  }
  return {
    name: "ReactNativeErrorHandlers",
    setupOnce() {
      const merged = Object.assign({ onerror: true, onunhandledrejection: true, patchGlobalPromise: true }, obj);
      if (merged.onunhandledrejection) {
        (function setupUnhandledRejectionsTracking(patchGlobalPromise) {
          try {
            if (obj.isHermesEnabled()) {
              const _HermesInternal = c0(_undefined[1]).RN_GLOBAL_OBJ.HermesInternal;
              let prop;
              if (null !== _HermesInternal) {
                if (undefined !== tmp8) {
                  prop = _HermesInternal.enablePromiseRejectionTracker;
                }
              }
              if (prop) {
                let _HermesInternal1;
                if (null !== c0(_undefined[1]).RN_GLOBAL_OBJ) {
                  if (undefined !== c0(_undefined[1]).RN_GLOBAL_OBJ) {
                    _HermesInternal1 = c0(_undefined[1]).RN_GLOBAL_OBJ.HermesInternal;
                  }
                }
                let hasPromise;
                if (null !== _HermesInternal1) {
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
                      callResult = call(_HermesInternal1);
                    }
                  }
                }
                if (undefined) {
                  const debug3 = c0(_undefined[2]).debug;
                  debug3.log("Using Hermes native promise rejection tracking");
                  const _HermesInternal2 = c0(_undefined[1]).RN_GLOBAL_OBJ.HermesInternal;
                  ({ onUnhandled: obj6.onUnhandled, onHandled: obj6.onHandled } = closure_1_3);
                  let result = _HermesInternal2.enablePromiseRejectionTracker({ allRejections: true, onUnhandled: null, onHandled: null });
                  const debug4 = c0(_undefined[2]).debug;
                  debug4.log("Unhandled promise rejections will be caught by Sentry.");
                  let obj2 = { allRejections: true, onUnhandled: null, onHandled: null };
                }
              }
            }
            obj = c0(_undefined[0]);
            if (tmp3Result.isWeb()) {
              const debug2 = c0(_undefined[2]).debug;
              debug2.log("Using Browser JS promise rejection tracking for React Native Web");
              const result1 = c0(_undefined[2]).addGlobalUnhandledRejectionInstrumentationHandler((originalException) => {
                const obj2 = { originalException, syntheticException: null, mechanism: null };
                obj = closure_1_0(682);
                let syntheticError;
                if (!obj3.isErrorLike(originalException)) {
                  syntheticError = closure_1_0(678).createSyntheticError();
                  const tmpResult = closure_1_0(678);
                }
                obj2.syntheticException = syntheticError;
                obj2.mechanism = { handled: false, type: "onunhandledrejection" };
                obj.captureException(originalException, obj2);
                obj3 = closure_1_0(678);
              });
              const tmp3Result4 = c0(_undefined[2]);
            } else if (patchGlobalPromise) {
              c0(_undefined[4]).polyfillPromise();
              (function attachUnhandledRejectionHandler() {
                const result = closure_1_0(882).requireRejectionTracking();
                result.enable({ allRejections: true, onUnhandled: closure_1_3.onUnhandled, onHandled: closure_1_3.onHandled });
              })();
              const tmp3Result5 = c0(_undefined[4]);
              c0(_undefined[4]).checkPromiseAndWarn();
              const tmp3Result6 = c0(_undefined[4]);
            } else {
              const debug = c0(_undefined[2]).debug;
              debug.log("Unhandled promise rejections will not be caught by Sentry.");
            }
            tmp3Result = c0(_undefined[0]);
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
            return closure_1_2(undefined, undefined, undefined, function*() {
              if (c3 === 2) {
                c3 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp4 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  const obj3 = { value, done: true };
                  return obj3;
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
                      const obj5 = { value, done: true };
                      return obj5;
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
                          const obj6 = { value: undefined, done: true };
                          return obj6;
                        } else {
                          c0 = true;
                        }
                      }
                      const client = originalException(682).getClient();
                      closure_128_0 = client;
                      if (client) {
                        const obj7 = { originalException, attachments: null };
                        const currentScope = originalException(682).getCurrentScope();
                        obj7.attachments = currentScope.getScopeData().attachments;
                        closure_128_1 = obj7;
                        c2 = 1;
                        c3 = 1;
                        const obj9 = { value: client.eventFromException(originalException, obj7), done: false };
                        return obj9;
                      } else {
                        let debug = originalException(682).debug;
                        debug.error("Sentry client is missing, the error event might be lost.", originalException);
                        dependencyMap(originalException, dependencyMap);
                        c3 = 3;
                        const obj10 = { value: undefined, done: true };
                        return obj10;
                      }
                      const obj4 = originalException(682);
                    }
                  } else if (arg0 === 1) {
                    c3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    const obj11 = { value, done: true };
                    return obj11;
                  } else {
                    closure_128_2 = value;
                    if (closure_129_1) {
                      tmp48.level = "fatal";
                      const result = originalException(682).addExceptionMechanism(closure_128_2, { handled: false, type: "onerror" });
                      const obj2 = originalException(682);
                    } else {
                      tmp48.level = "error";
                      const result1 = originalException(682).addExceptionMechanism(closure_128_2, { handled: true, type: "generic" });
                      obj = originalException(682);
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
          let debug = _mod682.debug;
          debug.warn("ErrorUtils not found. Can be caused by different environment for example react-native-web.");
        }
      }
    }
  };
}