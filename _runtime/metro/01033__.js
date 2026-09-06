// === Module 1033: ? ===

// Module 1033
import RN_GLOBAL_OBJ from "RN_GLOBAL_OBJ" /* 681 */;
import _mod682 from "module_682" /* 682 */;
import _mod987 from "module_987" /* 987 */;
import patchAppRegistryRunApplication from "patchAppRegistryRunApplication" /* 1018 */;
import SEMANTIC_ATTRIBUTE_SENTRY_SOURCE from "SEMANTIC_ATTRIBUTE_SENTRY_SOURCE" /* 1022 */;
import startIdleSpan from "startIdleSpan" /* 1025 */;
import _mod1031 from "module_1031" /* 1031 */;

require = arg1;
const dependencyMap = arg6;
const ReactNavigation = "ReactNavigation";

export const INTEGRATION_NAME = "ReactNavigation";
export const reactNavigationIntegration = () => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let num = obj.routeChangeTimeoutMs;
  if (num === undefined) {
    num = 1000;
  }
  let flag = obj.enableTimeToInitialDisplay;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = obj.ignoreEmptyBackNavigationTransactions;
  if (flag2 === undefined) {
    flag2 = true;
  }
  let flag3 = obj.enableTimeToInitialDisplayForPreloadedRoutes;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let flag4 = obj.useDispatchedActionData;
  if (flag4 === undefined) {
    flag4 = false;
  }
  let flag5 = obj.useFullPathsForNavigationRoutes;
  if (flag5 === undefined) {
    flag5 = false;
  }
  let current;
  let reactNativeTracingIntegration;
  let merged;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  let startIdleNavigationSpan;
  let updateLatestNavigationSpanWithCurrentRoute;
  let pushRecentRouteKey;
  let _discardLatestTransaction;
  let clearStateChangeTimeout;
  obj = num(flag[0]).defaultIdleOptions;
  c12 = false;
  closure_13 = [];
  if (flag) {
    let NATIVE = num(flag[1]).NATIVE;
    const nativeReactNavigationNewFrameTracking = NATIVE.initNativeReactNavigationNewFrameTracking();
    nativeReactNavigationNewFrameTracking.catch((error) => {
      const debug = num(flag[2]).debug;
      debug.error("" + flag2 + " Failed to initialize native new frame tracking: " + error);
    });
  }
  startIdleNavigationSpan = function startIdleNavigationSpan(data) {
    flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    closure_0 = undefined;
    if (flag4) {
      let noop;
      if (null != data) {
        noop = data.data.noop;
      }
      if (noop) {
        const debug3 = num(flag[2]).debug;
        const _HermesInternal3 = HermesInternal;
        debug3.log("" + flag2 + " Navigation action is a noop, not starting navigation span.");
      }
    }
    if (flag4) {
      let type;
      if (null != data) {
        type = data.data.action.type;
      }
    }
    if (flag4) {
      if (tmp4) {
        const items = ["PRELOAD", "SET_PARAMS", "OPEN_DRAWER", "CLOSE_DRAWER", "TOGGLE_DRAWER"];
        if (items.includes(tmp4)) {
          const debug2 = num(flag[2]).debug;
          const _HermesInternal2 = HermesInternal;
          debug2.log("" + flag2 + " Navigation action is " + tmp4 + ", not starting navigation span.");
        }
      }
    }
    if (_undefined) {
      const debug = num(flag[2]).debug;
      const _HermesInternal = HermesInternal;
      debug.log("" + flag2 + " A transaction was detected that turned out to be a noop, discarding.");
      if (typeof _discardLatestTransaction === "function") {
        if (_undefined) {
          obj = num(flag[10]);
          if (obj.isSentrySpan(_undefined)) {
            _undefined._sampled = false;
          }
          _undefined.end();
          _undefined = undefined;
        }
        if (c9) {
          c9 = undefined;
        }
        if (typeof clearStateChangeTimeout === "function") {
          if (undefined !== timeout) {
            const _clearTimeout = clearTimeout;
            clearTimeout(timeout);
            timeout = undefined;
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    let beforeStartSpan;
    if (null != reactNativeTracingIntegration) {
      beforeStartSpan = reactNativeTracingIntegration.options.beforeStartSpan;
    }
    if (beforeStartSpan) {
      const options = reactNativeTracingIntegration.options;
      let beforeStartSpanResult = options.beforeStartSpan(num(flag[0]).getDefaultIdleNavigationSpanOptions());
      const obj4 = num(flag[0]);
    } else {
      beforeStartSpanResult = num(flag[0]).getDefaultIdleNavigationSpanOptions();
      const obj3 = num(flag[0]);
    }
    const result = num(flag[0]).startIdleNavigationSpan(beforeStartSpanResult, Object.assign(Object.assign({}, obj), { isAppRestart: flag }));
    _undefined = result;
    if (null != result) {
      const attr = _undefined.setAttribute(num(flag[2]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, num(flag[6]).SPAN_ORIGIN_AUTO_NAVIGATION_REACT_NAVIGATION);
    }
    if (null != _undefined) {
      const attr1 = _undefined.setAttribute(num(flag[7]).SEMANTIC_ATTRIBUTE_NAVIGATION_ACTION_TYPE, tmp4);
    }
    if (flag2) {
      const obj5 = num(flag[8]);
      const result1 = obj5.ignoreEmptyBackNavigation(num(flag[2]).getClient(), _undefined);
      const obj6 = num(flag[2]);
    }
    closure_0 = _undefined;
    const obj2 = num(flag[0]);
    const obj7 = num(flag[8]);
    const client = num(flag[2]).getClient();
    const result2 = obj7.ignoreEmptyRouteChangeTransactions(client, _undefined, num(flag[0]).DEFAULT_NAVIGATION_SPAN_NAME, () => c8 === closure_0);
    let tmp52 = flag;
    if (flag) {
      tmp52 = _undefined;
    }
    if (tmp52) {
      const NATIVE = num(flag[1]).NATIVE;
      NATIVE.setActiveSpanId(_undefined.spanContext().spanId);
      obj = { op: "navigation.processing", name: "Navigation dispatch to navigation cancelled or screen mounted", startTime: null };
      const obj9 = num(flag[2]);
      obj.startTime = num(flag[2]).spanToJSON(_undefined).start_timestamp;
      const startInactiveSpanResult = obj9.startInactiveSpan(obj);
      c9 = startInactiveSpanResult;
      const attr2 = startInactiveSpanResult.setAttribute(num(flag[2]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, num(flag[6]).SPAN_ORIGIN_AUTO_NAVIGATION_REACT_NAVIGATION);
      const obj11 = num(flag[2]);
    }
    timeout = setTimeout(_discardLatestTransaction, closure_0);
  };
  updateLatestNavigationSpanWithCurrentRoute = function updateLatestNavigationSpanWithCurrentRoute() {
    let state1;
    _mod682;
    obj = current;
    if (current) {
      const currentRoute = obj.getCurrentRoute();
      if (currentRoute) {
        if (_undefined) {
          const NATIVE = tmp(866).NATIVE;
          const result = tmp(1034).addTimeToInitialDisplayFallback(_undefined.spanContext().spanId, NATIVE.getNewScreenTimeToDisplay());
          if (tmp5) {
            if (tmp5.key === currentRoute.key) {
              const debug4 = tmp(682).debug;
              const _HermesInternal6 = HermesInternal;
              debug4.log("[" + ReactNavigation + "] Navigation state changed, but route is the same as previous.");
              if (typeof pushRecentRouteKey === "function") {
                closure_13.push(tmp77);
                if (closure_13.length > 200) {
                  closure_13 = closure_13.slice(closure_13.length - 200);
                }
                merged = currentRoute;
                _undefined = undefined;
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
          }
          let name = currentRoute.name;
          const hasItem = closure_13.includes(currentRoute.key);
          if (flag5) {
            let state = current.getState();
            let name1;
            if (state) {
              const items = [];
              if (state) {
                do {
                  let index = state.index;
                  let num2 = 0;
                  if (null !== index) {
                    num2 = 0;
                    if (undefined !== index) {
                      num2 = index;
                    }
                  }
                  let tmp27 = state.routes[num2];
                  name = undefined;
                  if (null != tmp27) {
                    name = tmp27.name;
                  }
                  if (name) {
                    let arr = items.push(tmp27.name);
                  }
                  state1 = undefined;
                  if (null != tmp27) {
                    state1 = tmp27.state;
                  }
                  state = state1;
                } while (state1);
              }
              let joined;
              if (items.length > 0) {
                joined = items.join("/");
              }
              name1 = joined;
            }
            if (!name1) {
              name1 = currentRoute.name;
            }
            name = name1;
          }
          if (null != _undefined2) {
            const _HermesInternal4 = HermesInternal;
            _undefined2.updateName("Navigation dispatch to screen " + name + " mounted");
          }
          if (null != _undefined2) {
            obj = { code: _mod682.SPAN_STATUS_OK };
            _undefined2.setStatus(obj);
          }
          if (null != _undefined2) {
            _undefined2.end(tmp4);
          }
          _undefined2 = undefined;
          let obj3 = _mod682;
          if (obj3.spanToJSON(_undefined).description === startIdleSpan.DEFAULT_NAVIGATION_SPAN_NAME) {
            _undefined.updateName(name);
          }
          obj = { "route.name": name, "route.key": currentRoute.key, "route.has_been_seen": hasItem, "previous_route.name": null, "previous_route.key": null };
          let name2;
          if (null != tmp5) {
            name2 = tmp5.name;
          }
          obj["previous_route.name"] = name2;
          let key;
          if (null != tmp5) {
            key = tmp5.key;
          }
          obj["previous_route.key"] = key;
          obj[SEMANTIC_ATTRIBUTE_SENTRY_SOURCE.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = "component";
          obj[_mod682.SEMANTIC_ATTRIBUTE_SENTRY_OP] = "navigation";
          _undefined.setAttributes(obj);
          if (typeof clearStateChangeTimeout === "function") {
            if (undefined !== c10) {
              const _clearTimeout = clearTimeout;
              clearTimeout(c10);
              c10 = undefined;
            }
            const obj1 = { category: "navigation", type: "navigation", message: null, data: null };
            const _HermesInternal5 = HermesInternal;
            obj1.message = "Navigation to " + name;
            let name3;
            if (null != tmp5) {
              name3 = tmp5.name;
            }
            const obj2 = { from: name3, to: name };
            obj1.data = obj2;
            tmp45(682).addBreadcrumb(obj1);
            if (null != reactNativeTracingIntegration) {
              reactNativeTracingIntegration.setCurrentRoute(name);
            }
            if (typeof pushRecentRouteKey === "function") {
              closure_13.push(tmp66);
              if (closure_13.length > 200) {
                closure_13 = closure_13.slice(closure_13.length - 200);
              }
              merged = currentRoute;
              if (tmp21) {
                const _Object = Object;
                const _Object2 = Object;
                obj3 = { name };
                merged = Object.assign(Object.assign({}, currentRoute), obj3);
              }
              _undefined = undefined;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
            const tmp45Result = tmp45(682);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
          tmp21 = flag5;
          const tmpResult = tmp(1034);
        } else {
          const debug3 = tmp(682).debug;
          const _HermesInternal3 = HermesInternal;
          debug3.log("[" + ReactNavigation + "] Navigation state changed, but navigation transaction was not started on dispatch.");
        }
      } else {
        const debug2 = tmp(682).debug;
        const _HermesInternal2 = HermesInternal;
        debug2.log("[" + ReactNavigation + "] Navigation state changed, but no route is rendered.");
      }
    } else {
      const debug = tmp(682).debug;
      const _HermesInternal = HermesInternal;
      debug.warn("" + ReactNavigation + " Missing navigation container ref. Route transactions will not be sent.");
    }
  };
  pushRecentRouteKey = function pushRecentRouteKey(arg0) {

  };
  _discardLatestTransaction = function _discardLatestTransaction() {
    if (_undefined) {
      if (obj.isSentrySpan(_undefined)) {
        _undefined._sampled = false;
      }
      _undefined.end();
      _undefined = undefined;
      obj = _mod987;
    }
    if (c9) {
      c9 = undefined;
    }
  };
  clearStateChangeTimeout = function clearStateChangeTimeout() {

  };
  obj = {
    name: flag2,
    afterAllSetup(getIntegrationByName) {
      obj = _mod1031;
      reactNativeTracingIntegration = obj.getReactNativeTracingIntegration(getIntegrationByName);
      if (reactNativeTracingIntegration) {
        obj = { finalTimeout: reactNativeTracingIntegration.options.finalTimeoutMs, idleTimeout: reactNativeTracingIntegration.options.idleTimeoutMs };
      }
      if (!c12) {
        const appRegistryIntegration = patchAppRegistryRunApplication.getAppRegistryIntegration(getIntegrationByName);
        if (!tmp6) {
          appRegistryIntegration.onRunApplication(() => {
            if (closure_1_12) {
              const debug = num(flag[2]).debug;
              debug.log("[ReactNavigationIntegration] Starting new idle navigation span based on runApplication call.");
              startIdleNavigationSpan(undefined, true);
            }
          });
        }
        startIdleNavigationSpan();
        if (current) {
          updateLatestNavigationSpanWithCurrentRoute();
          c12 = true;
        }
        tmp6 = null === appRegistryIntegration || undefined === appRegistryIntegration;
        const tmpResult = patchAppRegistryRunApplication;
      }
    },
    registerNavigationContainer(navigationContainerRef) {
      if (RN_GLOBAL_OBJ.RN_GLOBAL_OBJ.__sentry_rn_v5_registered) {
        const debug = tmp(682).debug;
        const _HermesInternal = HermesInternal;
        debug.log("" + ReactNavigation + " Instrumentation already exists, but registering again...");
      }
      current = navigationContainerRef;
      if (tmpResult.isPlainObject(navigationContainerRef)) {
        current = navigationContainerRef;
        if ("current" in navigationContainerRef) {
          current = navigationContainerRef.current;
        }
      }
      if (current !== current) {
        if (current) {
          current.addListener("__unsafe_action__", startIdleNavigationSpan);
          current.addListener("state", updateLatestNavigationSpanWithCurrentRoute);
          tmp(681).RN_GLOBAL_OBJ.__sentry_rn_v5_registered = true;
          if (!c12) {
            if (c8) {
              tmp15();
              c12 = true;
            } else {
              const debug4 = tmp(682).debug;
              const _HermesInternal4 = HermesInternal;
              debug4.log("" + ReactNavigation + " Navigation container registered, but integration has not been setup yet.");
            }
          }
          tmp15 = updateLatestNavigationSpanWithCurrentRoute;
        } else {
          const debug3 = tmp(682).debug;
          const _HermesInternal3 = HermesInternal;
          debug3.warn("" + ReactNavigation + " Received invalid navigation container ref!");
        }
      } else {
        const debug2 = tmp(682).debug;
        const _HermesInternal2 = HermesInternal;
        debug2.log("" + ReactNavigation + " Navigation container ref is the same as the one already registered.");
      }
    },
    options: { routeChangeTimeoutMs: num, enableTimeToInitialDisplay: flag, ignoreEmptyBackNavigationTransactions: flag2, enableTimeToInitialDisplayForPreloadedRoutes: flag3, useDispatchedActionData: flag4, useFullPathsForNavigationRoutes: flag5 }
  };
  return obj;
};
export const getReactNavigationIntegration = function getReactNavigationIntegration(getIntegrationByName) {
  return getIntegrationByName.getIntegrationByName(ReactNavigation);
};