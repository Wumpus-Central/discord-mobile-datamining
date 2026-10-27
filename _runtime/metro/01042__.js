// _runtime/metro/01042__.js
import RN_GLOBAL_OBJ from "../00692_RN_GLOBAL_OBJ.js";
import _mod693 from "00693__.js";
import NativeModules from "../00878_NativeModules.js";
import _mod996 from "00996__.js";
import patchAppRegistryRunApplication from "../01027_patchAppRegistryRunApplication.js";
import SEMANTIC_ATTRIBUTE_SENTRY_SOURCE from "../01031_SEMANTIC_ATTRIBUTE_SENTRY_SOURCE.js";
import startIdleSpan from "../01034_startIdleSpan.js";
import _mod1040 from "01040__.js";
import asyncExpiringMap from "../01043_asyncExpiringMap.js";

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
  let flag6 = obj.enablePrefetchTracking;
  if (flag6 === undefined) {
    flag6 = false;
  }
  let current;
  let reactNativeTracingIntegration;
  let merged;
  c9 = undefined;
  c10 = undefined;
  c11 = undefined;
  let startIdleNavigationSpan;
  let updateLatestNavigationSpanWithCurrentRoute;
  let pushRecentRouteKey;
  let _discardLatestTransaction;
  let clearStateChangeTimeout;
  let obj2 = num(flag[0]).defaultIdleOptions;
  c13 = false;
  closure_14 = [];
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
    let str8;
    c1 = undefined;
    closure_2 = undefined;
    if (flag4) {
      let noop;
      if (null != data) {
        noop = data.data.noop;
      }
      if (noop) {
        const debug4 = num(flag[2]).debug;
        const _HermesInternal5 = HermesInternal;
        debug4.log("" + flag2 + " Navigation action is a noop, not starting navigation span.");
      }
    }
    if (flag4) {
      let type;
      if (null != data) {
        type = data.data.action.type;
      }
    }
    if (flag6) {
      if ("PRELOAD" === tmp4) {
        let action;
        if (null != data) {
          action = data.data.action;
        }
        let payload;
        if (null != action) {
          payload = action.payload;
        }
        str8 = "Unknown Route";
        if (payload) {
          str8 = "Unknown Route";
          if (typeof payload === "object") {
            str8 = "Unknown Route";
            if ("name" in payload) {
              str8 = "Unknown Route";
              if (typeof payload.name === "string") {
                str8 = payload.name;
              }
            }
          }
        }
        const debug3 = num(flag[2]).debug;
        const _HermesInternal3 = HermesInternal;
        debug3.log("" + flag2 + " Starting prefetch span for route: " + str8);
        const obj10 = { op: "navigation.prefetch", name: null, attributes: null };
        const _HermesInternal4 = HermesInternal;
        obj10.name = "Prefetch " + str8;
        const obj12 = { "route.name": str8 };
        obj10.attributes = obj12;
        const startInactiveSpanResult = num(flag[2]).startInactiveSpan(obj10);
        c1 = startInactiveSpanResult;
        let startInactiveSpanResult1 = startInactiveSpanResult;
        const _setTimeout = setTimeout;
        let timeout = setTimeout(() => {
          if (c10 === _undefined) {
            const debug = _mod693.debug;
            const _HermesInternal = HermesInternal;
            debug.log("" + ReactNavigation + " Prefetch span timed out for route: " + str8);
            if (null != _undefined) {
              obj2 = { code: _mod693.SPAN_STATUS_OK };
              _undefined.setStatus(obj2);
            }
            if (null != _undefined) {
              _undefined.end();
            }
            c10 = undefined;
          }
        }, str8);
        const obj13 = num(flag[2]);
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
      let debug = num(flag[2]).debug;
      let _HermesInternal = HermesInternal;
      debug.log("" + flag2 + " A transaction was detected that turned out to be a noop, discarding.");
      if (typeof _discardLatestTransaction === "function") {
        if (_undefined) {
          if (obj.isSentrySpan(_undefined)) {
            _undefined._sampled = false;
          }
          _undefined.end();
          _undefined = undefined;
          obj = num(flag[10]);
        }
        if (startInactiveSpanResult1) {
          startInactiveSpanResult1 = undefined;
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
    obj2 = num(flag[0]);
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
    const result = obj2.startIdleNavigationSpan(
      beforeStartSpanResult,
      Object.assign(Object.assign({}, obj2), { isAppRestart: flag }),
    );
    _undefined = result;
    if (null != result) {
      const attr = _undefined.setAttribute(
        num(flag[2]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN,
        num(flag[6]).SPAN_ORIGIN_AUTO_NAVIGATION_REACT_NAVIGATION,
      );
    }
    if (null != _undefined) {
      const attr1 = _undefined.setAttribute(num(flag[7]).SEMANTIC_ATTRIBUTE_NAVIGATION_ACTION_TYPE, tmp4);
    }
    if (closure_2) {
      const obj5 = num(flag[8]);
      const result1 = obj5.ignoreEmptyBackNavigation(num(flag[2]).getClient(), _undefined);
      const obj6 = num(flag[2]);
    }
    closure_2 = _undefined;
    const obj7 = num(flag[8]);
    const client = num(flag[2]).getClient();
    const result2 = obj7.ignoreEmptyRouteChangeTransactions(
      client,
      _undefined,
      num(flag[0]).DEFAULT_NAVIGATION_SPAN_NAME,
      () => c9 === closure_2,
    );
    let tmp52 = c1;
    if (c1) {
      tmp52 = _undefined;
    }
    if (tmp52) {
      const NATIVE = num(flag[1]).NATIVE;
      NATIVE.setActiveSpanId(_undefined.spanContext().spanId);
      const obj14 = {
        op: "navigation.processing",
        name: "Navigation dispatch to navigation cancelled or screen mounted",
        startTime: null,
      };
      const obj9 = num(flag[2]);
      obj14.startTime = num(flag[2]).spanToJSON(_undefined).start_timestamp;
      startInactiveSpanResult1 = obj9.startInactiveSpan(obj14);
      const attr2 = startInactiveSpanResult1.setAttribute(
        num(flag[2]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN,
        num(flag[6]).SPAN_ORIGIN_AUTO_NAVIGATION_REACT_NAVIGATION,
      );
      const obj11 = num(flag[2]);
    }
    timeout = setTimeout(_discardLatestTransaction, str8);
    const obj8 = num(flag[2]);
  };
  updateLatestNavigationSpanWithCurrentRoute = function updateLatestNavigationSpanWithCurrentRoute() {
    let state1;
    _mod693;
    if (current) {
      const currentRoute = current.getCurrentRoute();
      if (currentRoute) {
        if (_undefined) {
          const NATIVE = NativeModules.NATIVE;
          const result = asyncExpiringMap.addTimeToInitialDisplayFallback(
            _undefined.spanContext().spanId,
            NATIVE.getNewScreenTimeToDisplay(),
          );
          if (tmp5) {
            if (tmp5.key === currentRoute.key) {
              const debug4 = _mod693.debug;
              const _HermesInternal6 = HermesInternal;
              debug4.log("[" + ReactNavigation + "] Navigation state changed, but route is the same as previous.");
              if (typeof pushRecentRouteKey === "function") {
                closure_14.push(tmp77);
                if (closure_14.length > 200) {
                  closure_14 = closure_14.slice(closure_14.length - 200);
                }
                merged = currentRoute;
                _undefined = undefined;
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
          }
          let name = currentRoute.name;
          const hasItem = closure_14.includes(currentRoute.key);
          if (flag5) {
            let state = current.getState();
            let name2;
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
                  let name1;
                  if (null != tmp27) {
                    name1 = tmp27.name;
                  }
                  if (name1) {
                    let arr4 = items.push(tmp27.name);
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
            obj2 = { code: _mod693.SPAN_STATUS_OK };
            _undefined2.setStatus(obj2);
          }
          if (null != _undefined2) {
            _undefined2.end(tmp4);
          }
          _undefined2 = undefined;
          const tmpResult = asyncExpiringMap;
          if (obj4.spanToJSON(_undefined).description === startIdleSpan.DEFAULT_NAVIGATION_SPAN_NAME) {
            _undefined.updateName(name);
          }
          const obj3 = {
            "route.name": name,
            "route.key": currentRoute.key,
            "route.has_been_seen": hasItem,
            "previous_route.name": null,
            "previous_route.key": null,
          };
          let name3;
          if (null != tmp5) {
            name3 = tmp5.name;
          }
          obj3["previous_route.name"] = name3;
          let key;
          if (null != tmp5) {
            key = tmp5.key;
          }
          obj3["previous_route.key"] = key;
          obj3[SEMANTIC_ATTRIBUTE_SENTRY_SOURCE.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = "component";
          obj3[_mod693.SEMANTIC_ATTRIBUTE_SENTRY_OP] = "navigation";
          _undefined.setAttributes(obj3);
          if (typeof clearStateChangeTimeout === "function") {
            if (undefined !== c11) {
              const _clearTimeout = clearTimeout;
              clearTimeout(c11);
              c11 = undefined;
            }
            const obj5 = { category: "navigation", type: "navigation", message: null, data: null };
            const _HermesInternal5 = HermesInternal;
            obj5.message = "Navigation to " + name;
            let name4;
            if (null != tmp5) {
              name4 = tmp5.name;
            }
            const obj6 = { from: name4, to: name };
            obj5.data = obj6;
            _mod693.addBreadcrumb(obj5);
            if (null != reactNativeTracingIntegration) {
              reactNativeTracingIntegration.setCurrentRoute(name);
            }
            if (typeof pushRecentRouteKey === "function") {
              closure_14.push(tmp66);
              if (closure_14.length > 200) {
                closure_14 = closure_14.slice(closure_14.length - 200);
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
            const tmp45Result = _mod693;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
          obj4 = _mod693;
        } else {
          const debug3 = _mod693.debug;
          const _HermesInternal3 = HermesInternal;
          debug3.log(
            "[" +
              ReactNavigation +
              "] Navigation state changed, but navigation transaction was not started on dispatch.",
          );
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
  pushRecentRouteKey = function pushRecentRouteKey(arg0) {};
  _discardLatestTransaction = function _discardLatestTransaction() {
    if (_undefined) {
      if (obj.isSentrySpan(_undefined)) {
        _undefined._sampled = false;
      }
      _undefined.end();
      _undefined = undefined;
      obj = _mod996;
    }
    if (c10) {
      c10 = undefined;
    }
  };
  clearStateChangeTimeout = function clearStateChangeTimeout() {};
  obj2 = {
    name: flag2,
    afterAllSetup(client) {
      reactNativeTracingIntegration = _mod1040.getReactNativeTracingIntegration(client);
      if (reactNativeTracingIntegration) {
        obj2 = {
          finalTimeout: reactNativeTracingIntegration.options.finalTimeoutMs,
          idleTimeout: reactNativeTracingIntegration.options.idleTimeoutMs,
        };
      }
      if (!c13) {
        const appRegistryIntegration = patchAppRegistryRunApplication.getAppRegistryIntegration(client);
        if (!tmp6) {
          appRegistryIntegration.onRunApplication(() => {
            if (closure_1_13) {
              const debug = num(flag[2]).debug;
              debug.log("[ReactNavigationIntegration] Starting new idle navigation span based on runApplication call.");
              startIdleNavigationSpan(undefined, true);
            }
          });
        }
        startIdleNavigationSpan();
        if (current) {
          updateLatestNavigationSpanWithCurrentRoute();
          c13 = true;
        }
        tmp6 = null === appRegistryIntegration || undefined === appRegistryIntegration;
        const tmpResult = patchAppRegistryRunApplication;
      }
    },
    registerNavigationContainer(navigationContainerRef) {
      if (RN_GLOBAL_OBJ.RN_GLOBAL_OBJ.__sentry_rn_v5_registered) {
        const debug = _mod693.debug;
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
          RN_GLOBAL_OBJ.RN_GLOBAL_OBJ.__sentry_rn_v5_registered = true;
          if (!c13) {
            if (c9) {
              updateLatestNavigationSpanWithCurrentRoute();
              c13 = true;
            } else {
              const debug4 = _mod693.debug;
              const _HermesInternal4 = HermesInternal;
              debug4.log(
                "" + ReactNavigation + " Navigation container registered, but integration has not been setup yet.",
              );
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
      tmpResult = _mod693;
    },
    options: {
      routeChangeTimeoutMs: num,
      enableTimeToInitialDisplay: flag,
      ignoreEmptyBackNavigationTransactions: flag2,
      enableTimeToInitialDisplayForPreloadedRoutes: flag3,
      useDispatchedActionData: flag4,
      useFullPathsForNavigationRoutes: flag5,
      enablePrefetchTracking: flag6,
    },
  };
  return obj2;
};
export const getReactNavigationIntegration = function getReactNavigationIntegration(getIntegrationByName) {
  return getIntegrationByName.getIntegrationByName(ReactNavigation);
};
