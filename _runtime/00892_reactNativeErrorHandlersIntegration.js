// _runtime/00892_reactNativeErrorHandlersIntegration.js
import _mod689 from "metro/00689__.js";
import RN_GLOBAL_OBJ from "00692_RN_GLOBAL_OBJ.js";
import _mod693 from "metro/00693__.js";

let c2, c3;

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
let obj = {
  onUnhandled(id, originalException) {
    let obj2;
    let syntheticError;
    obj = {
      data: obj2,
      originalException,
      syntheticException: syntheticError,
      mechanism: { handled: true, type: "onunhandledrejection" },
    };
    obj2 = { id };
    const captureException = _mod693.captureException;
    _mod693;
    syntheticError = undefined;
    const obj3 = _mod689;
    if (!obj3.isErrorLike(originalException)) {
      const tmpResult = _mod689;
      syntheticError = tmpResult.createSyntheticError();
    }
    captureException(originalException, obj);
  },
  onHandled(displayId) {},
};

export const reactNativeErrorHandlersIntegration = (arg0) => {
  obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let obj2 = {
    name: "ReactNativeErrorHandlers",
    setupOnce() {
      function setupUnhandledRejectionsTracking(patchGlobalPromise) {
        function attachUnhandledRejectionHandler() {
          obj = closure_1_0(closure_1_1[4]);
          const result = obj.requireRejectionTracking();
          const obj2 = { allRejections: true, onUnhandled: closure_1_3.onUnhandled, onHandled: closure_1_3.onHandled };
          result.enable(obj2);
        }
        try {
          obj = closure_1_0(closure_1_1[0]);
          if (obj.isHermesEnabled()) {
            const _HermesInternal = closure_1_0(closure_1_1[1]).RN_GLOBAL_OBJ.HermesInternal;
            let prop;
            if (null !== _HermesInternal) {
              if (undefined !== tmp7) {
                prop = _HermesInternal.enablePromiseRejectionTracker;
              }
            }
            if (prop) {
              let _HermesInternal1;
              if (null !== closure_1_0(closure_1_1[1]).RN_GLOBAL_OBJ) {
                if (undefined !== closure_1_0(closure_1_1[1]).RN_GLOBAL_OBJ) {
                  _HermesInternal1 = closure_1_0(closure_1_1[1]).RN_GLOBAL_OBJ.HermesInternal;
                }
              }
              let hasPromise;
              if (null !== _HermesInternal1) {
                if (undefined !== _HermesInternal1) {
                  hasPromise = tmp18.hasPromise;
                }
              }
              let obj2 = hasPromise;
              let callResult;
              if (null !== hasPromise) {
                if (undefined !== obj2) {
                  callResult = obj2.call(_HermesInternal1);
                }
              }
              if (callResult) {
                const debug3 = closure_1_0(closure_1_1[2]).debug;
                debug3.log("Using Hermes native promise rejection tracking");
                const _HermesInternal2 = closure_1_0(closure_1_1[1]).RN_GLOBAL_OBJ.HermesInternal;
                const obj3 = { allRejections: true, onUnhandled: null, onHandled: null };
                ({ onUnhandled: obj7.onUnhandled, onHandled: obj7.onHandled } = closure_1_3);
                let result = _HermesInternal2.enablePromiseRejectionTracker(obj3);
                const debug4 = closure_1_0(closure_1_1[2]).debug;
                debug4.log("Unhandled promise rejections will be caught by Sentry.");
              }
            }
          }
          const tmp2Result = closure_1_0(closure_1_1[0]);
          if (tmp2Result.isWeb()) {
            const debug2 = closure_1_0(closure_1_1[2]).debug;
            debug2.log("Using Browser JS promise rejection tracking for React Native Web");
            const tmp2Result4 = closure_1_0(closure_1_1[2]);
            const result1 = tmp2Result4.addGlobalUnhandledRejectionInstrumentationHandler((originalException) => {
              let syntheticError;
              obj = {
                originalException,
                syntheticException: syntheticError,
                mechanism: { handled: false, type: "onunhandledrejection" },
              };
              const captureException = closure_1_0(closure_1_1[2]).captureException;
              closure_1_0(closure_1_1[2]);
              syntheticError = undefined;
              const obj2 = closure_1_0(closure_1_1[3]);
              if (!obj2.isErrorLike(originalException)) {
                const tmpResult = closure_1_0(closure_1_1[3]);
                syntheticError = tmpResult.createSyntheticError();
              }
              captureException(originalException, obj);
            });
          } else {
            const tmp29 = patchGlobalPromise;
            if (tmp29) {
              const tmp2Result5 = closure_1_0(closure_1_1[4]);
              tmp2Result5.polyfillPromise();
              attachUnhandledRejectionHandler();
              const tmp2Result6 = closure_1_0(closure_1_1[4]);
              tmp2Result6.checkPromiseAndWarn();
            } else {
              const debug = closure_1_0(closure_1_1[2]).debug;
              debug.log("Unhandled promise rejections will not be caught by Sentry.");
            }
          }
        } catch (err) {
          const debug5 = closure_1_0(closure_1_1[2]).debug;
          debug5.warn(
            "Failed to set up promise rejection tracking. Unhandled promise rejections will not be caught by Sentry.See https://docs.sentry.io/platforms/react-native/troubleshooting/ for more details.",
          );
        }
      }
      const merged = Object.assign({ onerror: true, onunhandledrejection: true, patchGlobalPromise: true }, obj);
      if (merged.onunhandledrejection) {
        setupUnhandledRejectionsTracking(merged.patchGlobalPromise);
      }
      if (merged.onerror) {
        let c0 = false;
        const _ErrorUtils = RN_GLOBAL_OBJ.RN_GLOBAL_OBJ.ErrorUtils;
        if (_ErrorUtils) {
          let callResult;
          if (null !== _ErrorUtils.getGlobalHandler) {
            if (undefined !== _ErrorUtils.getGlobalHandler) {
              callResult = getGlobalHandler.call(_ErrorUtils);
            }
          }
          _ErrorUtils.setGlobalHandler((arg0, arg1) => {
            let closure_0 = arg0;
            let closure_1 = arg1;
            return closure_1_2(undefined, undefined, undefined, function* () {
              let currentScope;
              if (c3 === 2) {
                c3 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp3 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  return { value: "IconComponent", done: null };
                }
              } else {
                try {
                  let client;
                  let obj7;
                  let closure_2;
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
                      let c1 = 0;
                      c0 = tmp;
                      client = undefined;
                      obj7 = undefined;
                      closure_2 = undefined;
                      if (closure_1) {
                        const tmp22 = c0;
                        if (tmp22) {
                          const debug2 = originalException(closure_1[2]).debug;
                          debug2.log("Encountered multiple fatals in a row. The latest:", originalException);
                          c3 = 3;
                          const obj6 = { value: undefined, done: true };
                          return obj6;
                        } else {
                          c0 = true;
                        }
                      }
                      const obj4 = originalException(closure_1[2]);
                      client = obj4.getClient();
                      if (client) {
                        obj7 = { originalException, attachments: currentScope.getScopeData().attachments };
                        const obj8 = originalException(closure_1[2]);
                        currentScope = obj8.getCurrentScope();
                        c2 = 1;
                        c3 = 1;
                        const obj9 = { value: client.eventFromException(originalException, obj7), done: false };
                        return obj9;
                      } else {
                        let debug = originalException(closure_1[2]).debug;
                        const errorResult = debug.error(
                          "Sentry client is missing, the error event might be lost.",
                          originalException,
                        );
                        c1(originalException, closure_1);
                        c3 = 3;
                        const obj10 = { value: undefined, done: true };
                        return obj10;
                      }
                    }
                  } else if (arg0 === 1) {
                    c3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    const obj11 = { value, done: true };
                    return obj11;
                  } else {
                    closure_2 = value;
                    if (closure_129_1) {
                      closure_2.level = "fatal";
                      const obj2 = originalException(closure_1[2]);
                      const result = obj2.addExceptionMechanism(closure_2, { handled: false, type: "onerror" });
                    } else {
                      closure_2.level = "error";
                      obj = originalException(closure_1[2]);
                      const result1 = obj.addExceptionMechanism(closure_2, { handled: true, type: "generic" });
                    }
                    client.captureEvent(closure_2, obj7);
                    const flush = client.flush;
                    const num3 = client.getOptions().shutdownTimeout || 2000;
                    const flushResult = flush(num3);
                    flushResult.then(
                      () => {
                        c1(originalException, closure_1_1);
                      },
                      (arg0) => {
                        const debug = originalException(closure_1_1[2]).debug;
                        debug.error(
                          "[ReactNativeErrorHandlers] Error while flushing the event cache after uncaught error.",
                          arg0,
                        );
                      },
                    );
                    c3 = 3;
                    return { value: "IconComponent", done: null };
                  }
                } catch (tmp39) {
                  c3 = 3;
                  throw tmp39;
                }
              }
            });
          });
        } else {
          let debug = _mod693.debug;
          debug.warn("ErrorUtils not found. Can be caused by different environment for example react-native-web.");
        }
      }
    },
  };
  return obj2;
};
