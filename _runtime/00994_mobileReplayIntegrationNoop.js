// _runtime/00994_mobileReplayIntegrationNoop.js
import NativeModules from "00866_NativeModules.js";

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
const MobileReplay = "MobileReplay";
const options = {
  maskAllText: true,
  maskAllImages: true,
  maskAllVectors: true,
  enableExperimentalViewRenderer: false,
  enableViewRendererV2: true,
  enableFastViewRendering: false,
  screenshotStrategy: "pixelCopy",
};
function mobileReplayIntegrationNoop() {}

export const MOBILE_REPLAY_INTEGRATION_NAME = "MobileReplay";
export const mobileReplayIntegration = () => {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = options;
  }
  _require = tmp;
  let currentReplayId;
  function updateCachedReplayId(arg0) {
    currentReplayId = arg0;
  }
  let obj = require("metro/00867__.js");
  if (obj.isExpoGo()) {
    let debug = tmp2(tmp3[1]).debug;
    let _HermesInternal = HermesInternal;
    debug.warn(
      "[Sentry] " + MobileReplay + " is not supported in Expo Go. Use EAS Build or `expo prebuild` to enable it.",
    );
  }
  let tmp2Result = tmp2(tmp3[0]);
  if (tmp2Result.notMobileOs()) {
    let debug2 = tmp2(tmp3[1]).debug;
    let _HermesInternal2 = HermesInternal;
    debug2.warn("[Sentry] " + MobileReplay + " is not supported on this platform.");
  }
  tmp2Result = tmp2(tmp3[0]);
  if (!tmp2Result.isExpoGo()) {
    if (!tmp2Result1.notMobileOs()) {
      let _Object = Object;
      let _Object2 = Object;
      const merged = Object.assign(Object.assign({}, options), tmp);
      if (tmp13) {
        merged.enableViewRendererV2 = tmp.enableExperimentalViewRenderer;
      }
      currentReplayId = null;
      obj = {
        name: MobileReplay,
        setup(on) {
          if (obj.hasHooks(on)) {
            let NATIVE = tmp(866).NATIVE;
            currentReplayId = NATIVE.getCurrentReplayId();
            on.on("createDsc", (replay_id) => {
              if (!replay_id.replay_id) {
                let tmp = currentReplayId;
                if (null === currentReplayId) {
                  const NATIVE = closure_0(currentReplayId[2]).NATIVE;
                  currentReplayId = NATIVE.getCurrentReplayId();
                  tmp = currentReplayId;
                  if (currentReplayId) {
                    tmp = currentReplayId;
                  }
                }
                if (tmp) {
                  replay_id.replay_id = tmp;
                }
              }
            });
            on.on("processMetric", (attributes) => {
              let tmp = currentReplayId;
              if (null === currentReplayId) {
                const NATIVE = closure_0(currentReplayId[2]).NATIVE;
                currentReplayId = NATIVE.getCurrentReplayId();
                tmp = currentReplayId;
                if (currentReplayId) {
                  tmp = currentReplayId;
                }
              }
              if (tmp) {
                attributes.attributes = attributes.attributes || {};
                attributes.attributes.replay_id = tmp;
              }
            });
            on.on("beforeAddBreadcrumb", tmp(996).enrichXhrBreadcrumbsForMobileReplay);
          }
        },
        processEvent(arg0, arg1) {
          closure_0 = arg0;
          closure_1 = arg1;
          return updateCachedReplayId(this, undefined, undefined, function* (arg0, value) {
            if (c5 === 2) {
              c5 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp6 === 3) {
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
                c5 = 2;
                let isHardCrashResult = c4;
                if (0 === c4) {
                  if (arg0 === 1) {
                    c5 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c5 = 3;
                    obj = { value, done: true };
                    return obj;
                  } else {
                    closure_128_0 = undefined;
                    currentReplayId = undefined;
                    const exception = value.exception;
                    let values;
                    if (null !== exception) {
                      if (undefined !== exception) {
                        values = exception.values;
                      }
                    }
                    if (values) {
                      if (value.exception.values.length > 0) {
                        if (isHardCrashResult.beforeErrorSampling) {
                          c3 = 1;
                          if (false === obj7.beforeErrorSampling(value, tmp3)) {
                            const debug5 = value(tmp3[1]).debug;
                            const _HermesInternal5 = HermesInternal;
                            debug5.log(
                              "[Sentry] " +
                                MobileReplay +
                                " not sent; beforeErrorSampling conditions not met for event " +
                                value.event_id +
                                ".",
                            );
                            c3 = 0;
                            c5 = 3;
                            const obj1 = { value, done: true };
                            return obj1;
                          } else {
                            c3 = 0;
                          }
                        }
                        obj7 = isHardCrashResult;
                      }
                    }
                    c5 = 3;
                    const obj2 = { value, done: true };
                    return obj2;
                  }
                } else if (1 === isHardCrashResult) {
                  c3 = 0;
                  closure_128_2 = tmp80;
                  const debug4 = value(tmp3[1]).debug;
                  const _HermesInternal4 = HermesInternal;
                  debug4.error(
                    "[Sentry] " +
                      MobileReplay +
                      " beforeErrorSampling callback threw an error, proceeding with replay capture",
                    closure_128_2,
                  );
                } else if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  closure_128_0 = value;
                  if (closure_128_0) {
                    tmp80(closure_128_0);
                    const debug3 = value(tmp3[1]).debug;
                    const _HermesInternal3 = HermesInternal;
                    debug3.log(
                      "[Sentry] " +
                        MobileReplay +
                        " Captured recording replay " +
                        closure_128_0 +
                        " for event " +
                        closure_129_0.event_id +
                        ".",
                    );
                    let contexts = closure_129_0.contexts;
                    if (!contexts) {
                      contexts = {};
                    }
                    closure_129_0.contexts = contexts;
                    const _Object3 = Object;
                    const _Object4 = Object;
                    const obj4 = { replay_id: closure_128_0 };
                    closure_129_0.contexts.replay = Object.assign(
                      Object.assign({}, closure_129_0.contexts.replay),
                      obj4,
                    );
                    c5 = 3;
                  } else {
                    const NATIVE = value(tmp3[2]).NATIVE;
                    currentReplayId = NATIVE.getCurrentReplayId();
                    if (!currentReplayId) {
                      tmp80(null);
                      const debug = value(tmp3[1]).debug;
                      const _HermesInternal = HermesInternal;
                      debug.log("[Sentry] " + MobileReplay + " not sampled for event " + closure_129_0.event_id + ".");
                    }
                  }
                  tmp80(currentReplayId);
                  const debug2 = value(tmp3[1]).debug;
                  const _HermesInternal2 = HermesInternal;
                  debug2.log(
                    "[Sentry] " +
                      MobileReplay +
                      " assign already recording replay " +
                      currentReplayId +
                      " for event " +
                      closure_129_0.event_id +
                      ".",
                  );
                  let contexts1 = closure_129_0.contexts;
                  if (!contexts1) {
                    contexts1 = {};
                  }
                  closure_129_0.contexts = contexts1;
                  const _Object = Object;
                  const _Object2 = Object;
                  const obj5 = { replay_id: currentReplayId };
                  closure_129_0.contexts.replay = Object.assign(Object.assign({}, closure_129_0.contexts.replay), obj5);
                }
                const NATIVE2 = value(tmp3[2]).NATIVE;
                isHardCrashResult = value(tmp3[3]).isHardCrash(closure_129_0);
                NATIVE2.captureReplay(isHardCrashResult);
                c4 = 2;
                c5 = 1;
                const obj8 = value(tmp3[3]);
              } catch (tmp80) {
                if (tmp4 === c3) {
                  c5 = tmp2;
                  throw tmp80;
                } else {
                  c4 = tmp;
                }
              }
            }
          });
        },
        options: merged,
        getReplayId() {
          let tmp = currentReplayId;
          if (null === currentReplayId) {
            const NATIVE = NativeModules.NATIVE;
            currentReplayId = NATIVE.getCurrentReplayId();
            tmp = currentReplayId;
            if (currentReplayId) {
              tmp = currentReplayId;
            }
          }
          return tmp;
        },
      };
      return obj;
    }
    tmp2Result1 = tmp2(tmp3[0]);
  }
  if (typeof mobileReplayIntegrationNoop === "function") {
    obj = {
      name: MobileReplay,
      options,
      getReplayId() {
        return null;
      },
    };
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
