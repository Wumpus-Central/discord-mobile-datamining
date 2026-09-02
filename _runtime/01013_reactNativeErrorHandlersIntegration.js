// _runtime/01013_reactNativeErrorHandlersIntegration.js
import createSyntheticError from "00810_createSyntheticError.js";
import registerSpanErrorInstrumentation from "00814_registerSpanErrorInstrumentation.js";

require = arg1;
const dependencyMap = arg6;
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
    _Promise = new _Promise((arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
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
let obj = {
  onUnhandled(id, originalException) {
    obj = registerSpanErrorInstrumentation;
    obj = { data: obj, originalException, syntheticException: null, mechanism: null };
    obj = { id };
    let syntheticError;
    if (!obj4.isErrorLike(originalException)) {
      syntheticError = createSyntheticError.createSyntheticError();
      const tmpResult = createSyntheticError;
    }
    obj[2] = syntheticError;
    obj[3] = { handled: true, type: "onunhandledrejection" };
    obj.captureException(originalException, obj);
  },
  onHandled(displayId, error) {},
};
arg5.reactNativeErrorHandlersIntegration = () => {
  obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  obj = {
    name: "ReactNativeErrorHandlers",
    setupOnce() {
      const merged = Object.assign({ onerror: true, onunhandledrejection: true, patchGlobalPromise: true }, c0);
      if (merged.onunhandledrejection) {
        (function setupUnhandledRejectionsTracking(patchGlobalPromise) {
          try {
            obj = callback(_undefined[0]);
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
                  ({ onUnhandled: obj6[1], onHandled: obj6[2] } = closure_3);
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
                obj = callback(814);
                obj = { originalException, syntheticException: null, mechanism: null };
                let syntheticError;
                if (!obj3.isErrorLike(originalException)) {
                  syntheticError = callback(810).createSyntheticError();
                  const tmpResult = callback(810);
                }
                obj[1] = syntheticError;
                obj[2] = { handled: false, type: "onunhandledrejection" };
                obj.captureException(originalException, obj);
              });
            } else if (patchGlobalPromise) {
              tmp3(tmp5[4]).polyfillPromise();
              (function attachUnhandledRejectionHandler() {
                obj = callback(1014);
                const result = obj.requireRejectionTracking();
                obj = { allRejections: true, onUnhandled: closure_3.onUnhandled, onHandled: closure_3.onHandled };
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
            const debug5 = callback(_undefined[2]).debug;
            debug5.warn(
              "Failed to set up promise rejection tracking. Unhandled promise rejections will not be caught by Sentry.See https://docs.sentry.io/platforms/react-native/troubleshooting/ for more details.",
            );
          }
        })(merged.patchGlobalPromise);
      }
      if (merged.onerror) {
        c0 = false;
        const _ErrorUtils = obj(closure_1_1[1]).RN_GLOBAL_OBJ.ErrorUtils;
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
            return closure_1_2(undefined, undefined, undefined, function* () {
              if (c3 === 2) {
                c3 = 3;
                HermesBuiltin.throwTypeError();
              } else if (tmp4 === 3) {
                if (arg0 === 1) {
                  throw arg1;
                } else if (arg0 === 2) {
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  return { value: "HermesInternal", done: null };
                }
              } else {
                try {
                  c3 = 2;
                  if (0 === closure_2) {
                    if (arg0 === 1) {
                      c3 = 3;
                      throw arg1;
                    } else if (arg0 === 2) {
                      c3 = 3;
                      obj = { value: null, done: true };
                      obj[0] = arg1;
                      return obj;
                    } else {
                      let obj2 = 0;
                      let client = tmp2;
                      client = undefined;
                      obj2 = undefined;
                      closure_2 = undefined;
                      if (closure_1_1) {
                        if (c0) {
                          const debug2 = _true(814).debug;
                          debug2.log("Encountered multiple fatals in a row. The latest:", c0);
                          c3 = 3;
                          obj1 = { value: null, done: true };
                          obj1[0] = undefined;
                          return obj1;
                        } else {
                          c0 = true;
                        }
                      }
                      let obj3 = _true(814);
                      client = obj3.getClient();
                      if (client) {
                        obj2 = { originalException: null, attachments: null };
                        obj2[0] = c0;
                        const currentScope = _true(814).getCurrentScope();
                        obj2[1] = currentScope.getScopeData().attachments;
                        closure_2 = 1;
                        c3 = 1;
                        obj3 = { value: null, done: false };
                        obj3[0] = client.eventFromException(c0, obj2);
                        return obj3;
                      } else {
                        let debug = _true(814).debug;
                        debug.error("Sentry client is missing, the error event might be lost.", c0);
                        closure_1_1(c0, closure_1_1);
                        c3 = 3;
                        const obj4 = { value: null, done: true };
                        obj4[0] = undefined;
                        return obj4;
                      }
                    }
                  } else if (arg0 === 1) {
                    c3 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    const obj5 = { value: null, done: true };
                    obj5[0] = arg1;
                    return obj5;
                  } else {
                    closure_2 = arg1;
                    if (obj2) {
                      tmp49.level = "fatal";
                      obj1 = _true(814);
                      const result = obj1.addExceptionMechanism(closure_2, { handled: false, type: "onerror" });
                    } else {
                      tmp49.level = "error";
                      obj = _true(814);
                      const result1 = obj.addExceptionMechanism(closure_2, { handled: true, type: "generic" });
                    }
                    client.captureEvent(closure_2, obj2);
                    let num3 = client.getOptions().shutdownTimeout;
                    if (!num3) {
                      num3 = 2000;
                    }
                    client.flush(num3).then(
                      () => {
                        obj2(client, obj2);
                      },
                      (arg0) => {
                        const debug = client(obj2[2]).debug;
                        debug.error(
                          "[ReactNativeErrorHandlers] Error while flushing the event cache after uncaught error.",
                          arg0,
                        );
                      },
                    );
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
          let debug = tmp3(tmp4[2]).debug;
          debug.warn("ErrorUtils not found. Can be caused by different environment for example react-native-web.");
        }
        tmp3 = obj;
        tmp4 = closure_1_1;
      }
    },
  };
  return obj;
};
