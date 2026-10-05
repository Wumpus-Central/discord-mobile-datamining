// === Module 1044: ? ===

// Module 1044
import RN_GLOBAL_OBJ from "RN_GLOBAL_OBJ" /* 692 */;
import _mod693 from "module_693" /* 693 */;
import _mod877 from "module_877" /* 877 */;
import _mod998 from "module_998" /* 998 */;
import _mod1029 from "module_1029" /* 1029 */;
import SEMANTIC_ATTRIBUTE_SENTRY_SOURCE from "SEMANTIC_ATTRIBUTE_SENTRY_SOURCE" /* 1033 */;
import DEFAULT_NAVIGATION_SPAN_NAME from "DEFAULT_NAVIGATION_SPAN_NAME" /* 1036 */;
import _mod1042 from "module_1042" /* 1042 */;
import _mod1045 from "module_1045" /* 1045 */;

let _undefined, _undefined2;

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
  let c8;
  let c9;
  let c10;
  let startIdleNavigationSpan;
  let updateLatestNavigationSpanWithCurrentRoute;
  let pushRecentRouteKey;
  let _discardLatestTransaction;
  let clearStateChangeTimeout;
  let tmp = num;
  let obj2 = num(flag[0]).defaultIdleOptions;
  let c12 = false;
  let closure_13 = [];
  const tmp2 = flag;
  if (flag) {
    let NATIVE = tmp(tmp2[1]).NATIVE;
    const nativeReactNavigationNewFrameTracking = NATIVE.initNativeReactNavigationNewFrameTracking();
    nativeReactNavigationNewFrameTracking.catch((error) => {
      const debug = num(flag[2]).debug;
      debug.error("" + flag2 + " Failed to initialize native new frame tracking: " + error);
    });
  }
  startIdleNavigationSpan = function startIdleNavigationSpan(data) {
    let beforeStartSpanResult;
    let c8;
    let closure_10;
    let obj7;
    let timeout;
    flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    let closure_0;
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
    const tmp7 = _undefined;
    if (tmp7) {
      const debug = num(flag[2]).debug;
      const _HermesInternal = HermesInternal;
      debug.log("" + flag2 + " A transaction was detected that turned out to be a noop, discarding.");
      if (typeof _discardLatestTransaction === "function") {
        const tmp14 = _undefined;
        if (tmp14) {
          const obj = num(flag[10]);
          if (obj.isSentrySpan(_undefined)) {
            _undefined._sampled = false;
          }
          _undefined.end();
          _undefined = undefined;
        }
        const tmp21 = c9;
        if (tmp21) {
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
    let beforeStartSpan1;
    startIdleNavigationSpan = num(flag[0]).startIdleNavigationSpan;
    num(flag[0]);
    if (null != reactNativeTracingIntegration) {
      beforeStartSpan1 = reactNativeTracingIntegration.options.beforeStartSpan;
    }
    if (beforeStartSpan1) {
      const options = reactNativeTracingIntegration.options;
      const beforeStartSpan = options.beforeStartSpan;
      const obj3 = num(flag[0]);
      beforeStartSpanResult = beforeStartSpan(obj3.getDefaultIdleNavigationSpanOptions());
    } else {
      obj2 = num(flag[0]);
      beforeStartSpanResult = obj2.getDefaultIdleNavigationSpanOptions();
    }
    const result = startIdleNavigationSpan(beforeStartSpanResult, Object.assign(Object.assign({}, obj2), { isAppRestart: flag }));
    _undefined = result;
    if (null != result) {
      const setAttribute = _undefined.setAttribute;
      const attr = setAttribute(num(flag[2]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, num(flag[6]).SPAN_ORIGIN_AUTO_NAVIGATION_REACT_NAVIGATION);
    }
    if (null != _undefined) {
      const attr1 = _undefined.setAttribute(num(flag[7]).SEMANTIC_ATTRIBUTE_NAVIGATION_ACTION_TYPE, tmp4);
    }
    const tmp46 = flag2;
    if (tmp46) {
      const ignoreEmptyBackNavigation = num(flag[8]).ignoreEmptyBackNavigation;
      num(flag[8]);
      const obj4 = num(flag[2]);
      const result1 = ignoreEmptyBackNavigation(obj4.getClient(), _undefined);
    }
    closure_0 = _undefined;
    const ignoreEmptyRouteChangeTransactions = num(flag[8]).ignoreEmptyRouteChangeTransactions;
    num(flag[8]);
    const obj5 = num(flag[2]);
    const client = obj5.getClient();
    const result2 = ignoreEmptyRouteChangeTransactions(client, _undefined, num(flag[0]).DEFAULT_NAVIGATION_SPAN_NAME, () => c8 === closure_0);
    const tmp57 = flag && _undefined;
    if (tmp57) {
      const NATIVE = num(flag[1]).NATIVE;
      NATIVE.setActiveSpanId(_undefined.spanContext().spanId);
      const obj6 = { op: "navigation.processing", name: "Navigation dispatch to navigation cancelled or screen mounted", startTime: obj7.spanToJSON(_undefined).start_timestamp };
      const startInactiveSpan = num(flag[2]).startInactiveSpan;
      num(flag[2]);
      obj7 = num(flag[2]);
      const startInactiveSpanResult = startInactiveSpan(obj6);
      c9 = startInactiveSpanResult;
      const setAttribute2 = startInactiveSpanResult.setAttribute;
      setAttribute2(num(flag[2]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, num(flag[6]).SPAN_ORIGIN_AUTO_NAVIGATION_REACT_NAVIGATION);
    }
    timeout = setTimeout(_discardLatestTransaction, closure_0);
  };
  updateLatestNavigationSpanWithCurrentRoute = function updateLatestNavigationSpanWithCurrentRoute() {
    let key;
    let name3;
    let obj6;
    _mod693;
    if (current) {
      const currentRoute = current.getCurrentRoute();
      if (currentRoute) {
        const tmp13 = _undefined;
        if (tmp13) {
          const addTimeToInitialDisplayFallback = _mod1045.addTimeToInitialDisplayFallback;
          _mod1045;
          const spanId = _undefined.spanContext().spanId;
          const NATIVE = _mod877.NATIVE;
          const result = addTimeToInitialDisplayFallback(spanId, NATIVE.getNewScreenTimeToDisplay());
          if (merged) {
            if (merged.key === currentRoute.key) {
              const debug4 = _mod693.debug;
              const _HermesInternal6 = HermesInternal;
              debug4.log("[" + ReactNavigation + "] Navigation state changed, but route is the same as previous.");
              if (typeof pushRecentRouteKey === "function") {
                closure_13.push(tmp79);
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
            let name2;
            if (state) {
              const items = [];
              while (state) {
                let index = state.index;
                let num2 = 0;
                if (null !== index) {
                  num2 = 0;
                  if (undefined !== index) {
                    num2 = index;
                  }
                }
                let tmp28 = state.routes[num2];
                let name1;
                if (null != tmp28) {
                  name1 = tmp28.name;
                }
                if (name1) {
                  let arr4 = items.push(tmp28.name);
                }
                let state1;
                if (null != tmp28) {
                  state1 = tmp28.state;
                }
                state = state1;
              }
              let joined;
              if (items.length > 0) {
                joined = items.join("/");
              }
              name2 = joined;
            }
            if (!name2) {
              name2 = currentRoute.name;
            }
            name = name2;
          }
          if (null != _undefined2) {
            const _HermesInternal4 = HermesInternal;
            _undefined2.updateName("Navigation dispatch to screen " + name + " mounted");
          }
          if (null != _undefined2) {
            const setStatus = _undefined2.setStatus;
            obj2 = { code: _mod693.SPAN_STATUS_OK };
            setStatus(obj2);
          }
          if (null != _undefined2) {
            _undefined2.end(tmp4);
          }
          _undefined2 = undefined;
          const obj3 = _mod693;
          if (obj3.spanToJSON(_undefined).description === DEFAULT_NAVIGATION_SPAN_NAME.DEFAULT_NAVIGATION_SPAN_NAME) {
            _undefined.updateName(name);
          }
          const obj4 = { "route.name": name, "route.key": currentRoute.key, "route.has_been_seen": hasItem, "previous_route.name": name3, "previous_route.key": key };
          name3 = undefined;
          const setAttributes = _undefined.setAttributes;
          if (null != merged) {
            name3 = tmp5.name;
          }
          key = undefined;
          if (null != merged) {
            key = tmp5.key;
          }
          obj4[SEMANTIC_ATTRIBUTE_SENTRY_SOURCE.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = "component";
          obj4[_mod693.SEMANTIC_ATTRIBUTE_SENTRY_OP] = "navigation";
          setAttributes(obj4);
          if (typeof clearStateChangeTimeout === "function") {
            if (undefined !== c10) {
              const _clearTimeout = clearTimeout;
              clearTimeout(c10);
              c10 = undefined;
            }
            const _HermesInternal5 = HermesInternal;
            const obj5 = { category: "navigation", type: "navigation", message: "Navigation to " + name, data: obj6 };
            const addBreadcrumb = _mod693.addBreadcrumb;
            _mod693;
            let name4;
            if (null != merged) {
              name4 = tmp5.name;
            }
            obj6 = { from: name4, to: name };
            addBreadcrumb(obj5);
            if (null != reactNativeTracingIntegration) {
              reactNativeTracingIntegration.setCurrentRoute(name);
            }
            if (typeof pushRecentRouteKey === "function") {
              closure_13.push(tmp68);
              if (closure_13.length > 200) {
                closure_13 = closure_13.slice(closure_13.length - 200);
              }
              merged = currentRoute;
              if (flag5) {
                const _Object = Object;
                const _Object2 = Object;
                const obj7 = { name };
                merged = Object.assign(Object.assign({}, currentRoute), obj7);
              }
              _undefined = undefined;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          const debug3 = _mod693.debug;
          const _HermesInternal3 = HermesInternal;
          debug3.log("[" + ReactNavigation + "] Navigation state changed, but navigation transaction was not started on dispatch.");
        }
      } else {
        const debug2 = _mod693.debug;
        const _HermesInternal2 = HermesInternal;
        debug2.log("[" + ReactNavigation + "] Navigation state changed, but no route is rendered.");
      }
    } else {
      const debug = _mod693.debug;
      const _HermesInternal = HermesInternal;
      debug.warn("" + ReactNavigation + " Missing navigation container ref. Route transactions will not be sent.");
    }
  };
  pushRecentRouteKey = function pushRecentRouteKey(arg0) {

  };
  _discardLatestTransaction = function _discardLatestTransaction() {
    const tmp = _undefined;
    if (tmp) {
      const obj = _mod998;
      if (obj.isSentrySpan(_undefined)) {
        _undefined._sampled = false;
      }
      _undefined.end();
      _undefined = undefined;
    }
    const tmp8 = c9;
    if (tmp8) {
      c9 = undefined;
    }
  };
  clearStateChangeTimeout = function clearStateChangeTimeout() {

  };
  obj2 = {
    name: flag2,
    afterAllSetup(client) {
      const obj = _mod1042;
      reactNativeTracingIntegration = obj.getReactNativeTracingIntegration(client);
      const tmp5 = c12;
      if (!tmp5) {
        const tmpResult = _mod1029;
        const appRegistryIntegration = tmpResult.getAppRegistryIntegration(client);
        const tmp7 = null === appRegistryIntegration || undefined === appRegistryIntegration;
        if (!tmp7) {
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
          flag = true;
          c12 = true;
        }
      }
    },
    registerNavigationContainer(navigationContainerRef) {
      if (RN_GLOBAL_OBJ.RN_GLOBAL_OBJ.__sentry_rn_v5_registered) {
        const debug = _mod693.debug;
        const _HermesInternal = HermesInternal;
        debug.log("" + ReactNavigation + " Instrumentation already exists, but registering again...");
      }
      current = navigationContainerRef;
      const tmpResult = _mod693;
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
          RN_GLOBAL_OBJ.RN_GLOBAL_OBJ.__sentry_rn_v5_registered = true;
          const tmp17 = c12;
          if (!tmp17) {
            if (c8) {
              updateLatestNavigationSpanWithCurrentRoute();
              c12 = true;
            } else {
              const debug4 = _mod693.debug;
              const _HermesInternal4 = HermesInternal;
              debug4.log("" + ReactNavigation + " Navigation container registered, but integration has not been setup yet.");
            }
          }
        } else {
          const debug3 = _mod693.debug;
          const _HermesInternal3 = HermesInternal;
          debug3.warn("" + ReactNavigation + " Received invalid navigation container ref!");
        }
      } else {
        const debug2 = _mod693.debug;
        const _HermesInternal2 = HermesInternal;
        debug2.log("" + ReactNavigation + " Navigation container ref is the same as the one already registered.");
      }
    },
    options: { routeChangeTimeoutMs: num, enableTimeToInitialDisplay: flag, ignoreEmptyBackNavigationTransactions: flag2, enableTimeToInitialDisplayForPreloadedRoutes: flag3, useDispatchedActionData: flag4, useFullPathsForNavigationRoutes: flag5 }
  };
  return obj2;
};
export const getReactNavigationIntegration = function getReactNavigationIntegration(getIntegrationByName) {
  return getIntegrationByName.getIntegrationByName(ReactNavigation);
};