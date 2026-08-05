import { isHermesEnabled } from "01002_isHermesEnabled.js";
// _runtime/01129_mobileReplayIntegrationNoop.js
let require = arg1;
let dependencyMap = arg6;
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
const MobileReplay = "MobileReplay";
let closure_4 = { maskAllText: true, maskAllImages: true, maskAllVectors: true, enableExperimentalViewRenderer: false, enableViewRendererV2: true, enableFastViewRendering: false, screenshotStrategy: "pixelCopy" };
function mobileReplayIntegrationNoop() {

}
arg5.MOBILE_REPLAY_INTEGRATION_NAME = "MobileReplay";
arg5.mobileReplayIntegration = () => {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = closure_4;
  }
  const require = tmp;
  let dependencyMap;
  function updateCachedReplayId(arg0, arg1, arg2, arg3) {
    let closure_1 = arg0;
  }
  let obj = isHermesEnabled /* isHermesEnabled */;
  if (obj.isExpoGo()) {
    let debug = tmp2(817).debug;
    let _HermesInternal = HermesInternal;
    debug.warn("[Sentry] " + MobileReplay + " is not supported in Expo Go. Use EAS Build or `expo prebuild` to enable it.");
  }
  let tmp2Result = tmp2(1002);
  if (tmp2Result.notMobileOs()) {
    let debug2 = tmp2(817).debug;
    let _HermesInternal2 = HermesInternal;
    debug2.warn("[Sentry] " + MobileReplay + " is not supported on this platform.");
  }
  tmp2Result = tmp2(1002);
  if (!tmp2Result.isExpoGo()) {
    if (!tmp2Result1.notMobileOs()) {
      let _Object = Object;
      let _Object2 = Object;
      const merged = Object.assign(Object.assign({}, closure_4), tmp);
      if (tmp13) {
        merged.enableViewRendererV2 = tmp.enableExperimentalViewRenderer;
      }
      dependencyMap = null;
      obj = { name: null, setup: null, processEvent: null, options: null, getReplayId: null };
      obj[0] = MobileReplay;
      obj[1] = function setup(on) {
        if (obj.hasHooks(on)) {
          let NATIVE = tmp(tmp2[2]).NATIVE;
          let currentReplayId = NATIVE.getCurrentReplayId();
          on.on("createDsc", (replay_id) => {
            if (!replay_id.replay_id) {
              let tmp = currentReplayId;
              if (null === currentReplayId) {
                const NATIVE = outer1_0(1001).NATIVE;
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
              const NATIVE = outer1_0(1001).NATIVE;
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
          on.on("beforeAddBreadcrumb", tmp(tmp2[5]).enrichXhrBreadcrumbsForMobileReplay);
        }
      };
      obj[2] = function processEvent(arg0, arg1) {
        let closure_0 = arg0;
        let closure_1 = arg1;
        return updateCachedReplayId(this, undefined, undefined, function*() {
          if (c5 === 2) {
            c5 = 3;
            HermesBuiltin.throwTypeError();
          } else if (tmp6 === 3) {
            if (arg0 === 1) {
              throw arg1;
            } else if (arg0 === 2) {
              let obj = { value: null, done: true };
              obj[0] = arg1;
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
                  throw arg1;
                } else if (arg0 === 2) {
                  c5 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  let dependencyMap = tmp3;
                  let lib = isHardCrashResult;
                  lib = undefined;
                  dependencyMap = undefined;
                  const exception = outer1_0.exception;
                  let values;
                  if (null !== exception) {
                    if (undefined !== exception) {
                      values = exception.values;
                    }
                  }
                  if (values) {
                    if (outer1_0.exception.values.length > 0) {
                      if (outer1_0.beforeErrorSampling) {
                        let c3 = 1;
                        if (false === obj7.beforeErrorSampling(outer1_0, outer1_1)) {
                          const debug5 = lib(817).debug;
                          const _HermesInternal5 = HermesInternal;
                          debug5.log("[Sentry] " + outer2_3 + " not sent; beforeErrorSampling conditions not met for event " + outer1_0.event_id + ".");
                          c3 = 0;
                          c5 = 3;
                          const obj1 = { value: null, done: true };
                          obj1[0] = outer1_0;
                          return obj1;
                        } else {
                          c3 = 0;
                        }
                      }
                      obj7 = outer1_0;
                    }
                  }
                  c5 = 3;
                  const obj2 = { value: null, done: true };
                  obj2[0] = outer1_0;
                  return obj2;
                }
              } else if (1 === isHardCrashResult) {
                c3 = 0;
                const debug4 = lib(817).debug;
                const _HermesInternal4 = HermesInternal;
                debug4.error("[Sentry] " + outer2_3 + " beforeErrorSampling callback threw an error, proceeding with replay capture", closure_2);
              } else if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj3 = { value: null, done: true };
                obj3[0] = arg1;
                return obj3;
              } else {
                lib = arg1;
                if (lib) {
                  outer1_2(lib);
                  const debug3 = lib(817).debug;
                  const _HermesInternal3 = HermesInternal;
                  debug3.log("[Sentry] " + outer2_3 + " Captured recording replay " + lib + " for event " + lib.event_id + ".");
                  let contexts = lib.contexts;
                  if (!contexts) {
                    contexts = {};
                  }
                  lib.contexts = contexts;
                  const _Object3 = Object;
                  const _Object4 = Object;
                  const obj4 = { replay_id: null };
                  obj4[0] = lib;
                  lib.contexts.replay = Object.assign(Object.assign({}, lib.contexts.replay), obj4);
                  c5 = 3;
                  const tmp46 = lib;
                } else {
                  const NATIVE = lib(1001).NATIVE;
                  dependencyMap = NATIVE.getCurrentReplayId();
                  if (!dependencyMap) {
                    outer1_2(null);
                    const debug = lib(817).debug;
                    const _HermesInternal = HermesInternal;
                    debug.log("[Sentry] " + outer2_3 + " not sampled for event " + lib.event_id + ".");
                  }
                }
                outer1_2(outer1_1);
                const debug2 = lib(817).debug;
                const _HermesInternal2 = HermesInternal;
                debug2.log("[Sentry] " + outer2_3 + " assign already recording replay " + outer1_1 + " for event " + lib.event_id + ".");
                let contexts1 = lib.contexts;
                if (!contexts1) {
                  contexts1 = {};
                }
                lib.contexts = contexts1;
                const _Object = Object;
                const _Object2 = Object;
                const obj5 = { replay_id: null };
                obj5[0] = dependencyMap;
                lib.contexts.replay = Object.assign(Object.assign({}, lib.contexts.replay), obj5);
                const tmp30 = lib;
              }
              const NATIVE2 = lib(1001).NATIVE;
              isHardCrashResult = lib(1013).isHardCrash(outer1_0);
              NATIVE2.captureReplay(isHardCrashResult);
              c4 = 2;
              c5 = 1;
              const obj8 = lib(1013);
            } catch (tmp80) {
              closure_2 = tmp80;
              if (tmp4 === c3) {
                c5 = tmp2;
                throw tmp80;
              } else {
                c4 = tmp;
              }
            }
          }
        });
      };
      obj[3] = merged;
      obj[4] = function getReplayId() {
        let tmp = currentReplayId;
        if (null === currentReplayId) {
          const NATIVE = tmp(_null[2]).NATIVE;
          currentReplayId = NATIVE.getCurrentReplayId();
          tmp = currentReplayId;
          if (currentReplayId) {
            tmp = currentReplayId;
          }
        }
        return tmp;
      };
      return obj;
    }
    tmp2Result1 = tmp2(1002);
  }
  if (typeof mobileReplayIntegrationNoop !== "function") {
    HermesBuiltin.throwTypeError();
  }
  obj = {
    name: MobileReplay,
    options: closure_4,
    getReplayId() {
      return null;
    }
  };
  return obj;
};