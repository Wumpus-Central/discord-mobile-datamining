const require = arg1;
const dependencyMap = arg6;
const ReactNavigation = "ReactNavigation";
arg5.INTEGRATION_NAME = "ReactNavigation";
arg5.reactNavigationIntegration = () => {
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
  let c5;
  let c6;
  let c7;
  let c8;
  let c9;
  let c10;
  let defaultIdleOptions;
  let c12;
  let closure_13;
  let startIdleNavigationSpan;
  let updateLatestNavigationSpanWithCurrentRoute;
  let pushRecentRouteKey;
  let _discardLatestTransaction;
  let clearStateChangeTimeout;
  defaultIdleOptions = num(flag[0]).defaultIdleOptions;
  c12 = false;
  closure_13 = [];
  if (flag) {
    let NATIVE = num(flag[1]).NATIVE;
    const nativeReactNavigationNewFrameTracking = NATIVE.initNativeReactNavigationNewFrameTracking();
    nativeReactNavigationNewFrameTracking.catch((arg0) => {
      const debug = num(flag[2]).debug;
      debug.error("" + flag2 + " Failed to initialize native new frame tracking: " + arg0);
    });
  }
  startIdleNavigationSpan = function startIdleNavigationSpan(data) {
    let flag = arg1;
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
    if (_undefined3) {
      const debug = num(flag[2]).debug;
      const _HermesInternal = HermesInternal;
      debug.log("" + flag2 + " A transaction was detected that turned out to be a noop, discarding.");
      if (typeof _discardLatestTransaction !== "function") {
        HermesBuiltin.throwTypeError();
      }
      if (_undefined3) {
        let obj = num(flag[10]);
        if (obj.isSentrySpan(_undefined3)) {
          _undefined3._sampled = false;
        }
        _undefined3.end();
        _undefined3 = undefined;
      }
      if (c9) {
        c9 = undefined;
      }
      if (typeof clearStateChangeTimeout !== "function") {
        HermesBuiltin.throwTypeError();
      }
      if (undefined !== timeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(timeout);
        timeout = undefined;
      }
    }
    let beforeStartSpan;
    if (null != _undefined2) {
      beforeStartSpan = _undefined2.options.beforeStartSpan;
    }
    if (beforeStartSpan) {
      const options = _undefined2.options;
      let beforeStartSpanResult = options.beforeStartSpan(num(flag[0]).getDefaultIdleNavigationSpanOptions());
      const obj4 = num(flag[0]);
    } else {
      beforeStartSpanResult = num(flag[0]).getDefaultIdleNavigationSpanOptions();
      const obj3 = num(flag[0]);
    }
    const result = num(flag[0]).startIdleNavigationSpan(beforeStartSpanResult, Object.assign(Object.assign({}, defaultIdleOptions), { isAppRestart: flag }));
    _undefined3 = result;
    if (null != result) {
      const attr = _undefined3.setAttribute(num(flag[2]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, num(flag[6]).SPAN_ORIGIN_AUTO_NAVIGATION_REACT_NAVIGATION);
    }
    if (null != _undefined3) {
      const attr1 = _undefined3.setAttribute(num(flag[7]).SEMANTIC_ATTRIBUTE_NAVIGATION_ACTION_TYPE, tmp4);
    }
    if (flag2) {
      const obj5 = num(flag[8]);
      const result1 = obj5.ignoreEmptyBackNavigation(num(flag[2]).getClient(), _undefined3);
      const obj6 = num(flag[2]);
    }
    closure_0 = _undefined3;
    const obj2 = num(flag[0]);
    const obj7 = num(flag[8]);
    const client = num(flag[2]).getClient();
    const result2 = obj7.ignoreEmptyRouteChangeTransactions(client, _undefined3, num(flag[0]).DEFAULT_NAVIGATION_SPAN_NAME, () => c8 === closure_0);
    let tmp52 = flag;
    if (flag) {
      tmp52 = _undefined3;
    }
    if (tmp52) {
      const NATIVE = num(flag[1]).NATIVE;
      NATIVE.setActiveSpanId(_undefined3.spanContext().spanId);
      obj = { op: "navigation.processing", name: "Navigation dispatch to navigation cancelled or screen mounted", startTime: null };
      const obj9 = num(flag[2]);
      obj[2] = num(flag[2]).spanToJSON(_undefined3).start_timestamp;
      const startInactiveSpanResult = obj9.startInactiveSpan(obj);
      c9 = startInactiveSpanResult;
      const attr2 = startInactiveSpanResult.setAttribute(num(flag[2]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, num(flag[6]).SPAN_ORIGIN_AUTO_NAVIGATION_REACT_NAVIGATION);
      const obj11 = num(flag[2]);
    }
    timeout = setTimeout(_discardLatestTransaction, closure_0);
  };
  updateLatestNavigationSpanWithCurrentRoute = function updateLatestNavigationSpanWithCurrentRoute() {
    let state1;
    num(flag[2]);
    let obj = _undefined;
    if (_undefined) {
      const currentRoute = obj.getCurrentRoute();
      if (currentRoute) {
        if (_undefined3) {
          const NATIVE = tmp(tmp2[1]).NATIVE;
          const result = tmp(tmp2[9]).addTimeToInitialDisplayFallback(_undefined3.spanContext().spanId, NATIVE.getNewScreenTimeToDisplay());
          if (tmp5) {
            if (tmp5.key === currentRoute.key) {
              const debug4 = tmp(tmp2[2]).debug;
              const _HermesInternal6 = HermesInternal;
              debug4.log("[" + flag2 + "] Navigation state changed, but route is the same as previous.");
              if (typeof pushRecentRouteKey !== "function") {
                HermesBuiltin.throwTypeError();
              }
              arr = arr.push(currentRoute.key);
              if (arr.length > 200) {
                arr = arr.slice(arr.length - 200);
              }
              let merged = currentRoute;
              _undefined3 = undefined;
            }
          }
          let name = currentRoute.name;
          const hasItem = arr.includes(currentRoute.key);
          if (flag5) {
            let state = _undefined.getState();
            let name1;
            if (state) {
              const items = [];
              if (state) {
                do {
                  let index = state.index;
                  let tmp26 = state;
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
                    arr = items.push(tmp27.name);
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
          if (null != _undefined4) {
            const _HermesInternal4 = HermesInternal;
            _undefined4.updateName("Navigation dispatch to screen " + name + " mounted");
          }
          if (null != _undefined4) {
            obj = { code: null };
            obj[0] = num(flag[2]).SPAN_STATUS_OK;
            _undefined4.setStatus(obj);
          }
          if (null != _undefined4) {
            _undefined4.end(tmp4);
          }
          _undefined4 = undefined;
          let obj3 = num(flag[2]);
          if (obj3.spanToJSON(_undefined3).description === num(flag[0]).DEFAULT_NAVIGATION_SPAN_NAME) {
            _undefined3.updateName(name);
          }
          obj = { "route.name": null, "route.key": null, "route.has_been_seen": null, "previous_route.name": null, "previous_route.key": null };
          obj[0] = name;
          obj[1] = currentRoute.key;
          obj[2] = hasItem;
          let name2;
          if (null != tmp5) {
            name2 = tmp5.name;
          }
          obj[3] = name2;
          let key;
          if (null != tmp5) {
            key = tmp5.key;
          }
          obj[4] = key;
          obj[num(flag[7]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = "component";
          obj[num(flag[2]).SEMANTIC_ATTRIBUTE_SENTRY_OP] = "navigation";
          _undefined3.setAttributes(obj);
          if (typeof clearStateChangeTimeout !== "function") {
            HermesBuiltin.throwTypeError();
          }
          if (undefined !== c10) {
            const _clearTimeout = clearTimeout;
            clearTimeout(c10);
            c10 = undefined;
          }
          const tmp21 = flag5;
          const tmpResult = tmp(tmp2[9]);
          const obj1 = { category: "navigation", type: "navigation", message: null, data: null };
          const _HermesInternal5 = HermesInternal;
          obj1[2] = "Navigation to " + name;
          let name3;
          if (null != tmp5) {
            name3 = tmp5.name;
          }
          const obj2 = { from: null, to: null };
          obj2[0] = name3;
          obj2[1] = name;
          obj1[3] = obj2;
          num(flag[2]).addBreadcrumb(obj1);
          if (null != _undefined2) {
            _undefined2.setCurrentRoute(name);
          }
          if (typeof pushRecentRouteKey !== "function") {
            HermesBuiltin.throwTypeError();
          }
          arr.push(currentRoute.key);
          if (arr.length > 200) {
            arr = arr.slice(arr.length - 200);
          }
          merged = currentRoute;
          if (tmp21) {
            const _Object = Object;
            const _Object2 = Object;
            obj3 = { name: null };
            obj3[0] = name;
            merged = Object.assign(Object.assign({}, currentRoute), obj3);
          }
          _undefined3 = undefined;
          const tmp45Result = num(flag[2]);
        } else {
          const debug3 = tmp(tmp2[2]).debug;
          const _HermesInternal3 = HermesInternal;
          debug3.log("[" + flag2 + "] Navigation state changed, but navigation transaction was not started on dispatch.");
        }
      } else {
        const debug2 = tmp(tmp2[2]).debug;
        const _HermesInternal2 = HermesInternal;
        debug2.log("[" + flag2 + "] Navigation state changed, but no route is rendered.");
      }
    } else {
      const debug = tmp(tmp2[2]).debug;
      const _HermesInternal = HermesInternal;
      debug.warn("" + flag2 + " Missing navigation container ref. Route transactions will not be sent.");
    }
  };
  pushRecentRouteKey = function pushRecentRouteKey(arg0) {

  };
  _discardLatestTransaction = function _discardLatestTransaction() {
    if (_undefined3) {
      if (obj.isSentrySpan(_undefined3)) {
        _undefined3._sampled = false;
      }
      _undefined3.end();
      _undefined3 = undefined;
      obj = num(flag[10]);
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
      let obj = num(flag[3]);
      const reactNativeTracingIntegration = obj.getReactNativeTracingIntegration(getIntegrationByName);
      if (reactNativeTracingIntegration) {
        obj = { finalTimeout: null, idleTimeout: null };
        obj[0] = reactNativeTracingIntegration.options.finalTimeoutMs;
        obj[1] = reactNativeTracingIntegration.options.idleTimeoutMs;
      }
      if (!c12) {
        const appRegistryIntegration = num(flag[4]).getAppRegistryIntegration(getIntegrationByName);
        if (!tmp6) {
          appRegistryIntegration.onRunApplication(() => {
            if (c12) {
              const debug = outer1_0(outer1_1[2]).debug;
              debug.log("[ReactNavigationIntegration] Starting new idle navigation span based on runApplication call.");
              callback(undefined, true);
            }
          });
        }
        startIdleNavigationSpan();
        if (c5) {
          updateLatestNavigationSpanWithCurrentRoute();
          c12 = true;
        }
        tmp6 = null === appRegistryIntegration || undefined === appRegistryIntegration;
        const tmpResult = num(flag[4]);
      }
    },
    registerNavigationContainer(navigationContainerRef) {
      if (num(flag[5]).RN_GLOBAL_OBJ.__sentry_rn_v5_registered) {
        const debug = tmp(tmp2[2]).debug;
        const _HermesInternal = HermesInternal;
        debug.log("" + flag2 + " Instrumentation already exists, but registering again...");
      }
      let current = navigationContainerRef;
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
          tmp(tmp2[5]).RN_GLOBAL_OBJ.__sentry_rn_v5_registered = true;
          if (!c12) {
            if (c8) {
              tmp15();
              c12 = true;
            } else {
              const debug4 = tmp(tmp2[2]).debug;
              const _HermesInternal4 = HermesInternal;
              debug4.log("" + flag2 + " Navigation container registered, but integration has not been setup yet.");
            }
          }
          tmp15 = updateLatestNavigationSpanWithCurrentRoute;
        } else {
          const debug3 = tmp(tmp2[2]).debug;
          const _HermesInternal3 = HermesInternal;
          debug3.warn("" + flag2 + " Received invalid navigation container ref!");
        }
      } else {
        const debug2 = tmp(tmp2[2]).debug;
        const _HermesInternal2 = HermesInternal;
        debug2.log("" + flag2 + " Navigation container ref is the same as the one already registered.");
      }
    },
    options: { routeChangeTimeoutMs: num, enableTimeToInitialDisplay: flag, ignoreEmptyBackNavigationTransactions: flag2, enableTimeToInitialDisplayForPreloadedRoutes: flag3, useDispatchedActionData: flag4, useFullPathsForNavigationRoutes: flag5 }
  };
  return obj;
};
arg5.getReactNavigationIntegration = function getReactNavigationIntegration(getIntegrationByName) {
  return getIntegrationByName.getIntegrationByName(ReactNavigation);
};