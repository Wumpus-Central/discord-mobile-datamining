// === Module 1055: reactNativeNavigationIntegration ===

// Module 1055 (reactNativeNavigationIntegration)
const self = this;
const require = arg1;
let dependencyMap = arg6;
const ReactNativeNavigation = "ReactNativeNavigation";
arg5.INTEGRATION_NAME = "ReactNativeNavigation";
arg5.reactNativeNavigationIntegration = (enableTabsInstrumentation) => {
  ({ navigation, routeChangeTimeoutMs } = enableTabsInstrumentation);
  if (routeChangeTimeoutMs === undefined) {
    routeChangeTimeoutMs = 1000;
  }
  let flag = enableTabsInstrumentation.enableTabsInstrumentation;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = enableTabsInstrumentation.ignoreEmptyBackNavigationTransactions;
  if (flag2 === undefined) {
    flag2 = true;
  }
  dependencyMap = undefined;
  c3 = undefined;
  c4 = undefined;
  let defaultIdleOptions;
  c7 = undefined;
  let pushRecentComponentId;
  let discardLatestNavigationSpan;
  let clearStateChangeTimeout;
  closure_5 = [];
  defaultIdleOptions = flag2(1025).defaultIdleOptions;
  c7 = null;
  function startIdleNavigationSpan() {
    if (_undefined2) {
      if (typeof discardLatestNavigationSpan !== "function") {
        HermesBuiltin.throwTypeError();
      }
      if (tmp) {
        if (obj.isSentrySpan(_undefined2)) {
          _undefined2._sampled = false;
        }
        _undefined2.end();
        _undefined2 = undefined;
        obj = flag2(_undefined[5]);
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
    if (null != _undefined) {
      beforeStartSpan = _undefined.options.beforeStartSpan;
    }
    if (beforeStartSpan) {
      const options = _undefined.options;
      let beforeStartSpanResult = options.beforeStartSpan(flag2(_undefined[0]).getDefaultIdleNavigationSpanOptions());
      const obj4 = flag2(_undefined[0]);
    } else {
      beforeStartSpanResult = flag2(_undefined[0]).getDefaultIdleNavigationSpanOptions();
      const obj3 = flag2(_undefined[0]);
    }
    const result = flag2(_undefined[0]).startIdleNavigationSpan(beforeStartSpanResult, defaultIdleOptions);
    _undefined2 = result;
    if (null != result) {
      const attr = _undefined2.setAttribute(flag2(_undefined[2]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, flag2(_undefined[3]).SPAN_ORIGIN_AUTO_NAVIGATION_REACT_NATIVE_NAVIGATION);
    }
    if (flag2) {
      const obj5 = flag2(_undefined[4]);
      const result1 = obj5.ignoreEmptyBackNavigation(flag2(_undefined[2]).getClient(), _undefined2);
      const obj6 = flag2(_undefined[2]);
    }
    closure_0 = _undefined2;
    const obj2 = flag2(_undefined[0]);
    const obj7 = flag2(_undefined[4]);
    const client = flag2(_undefined[2]).getClient();
    const result2 = obj7.ignoreEmptyRouteChangeTransactions(client, _undefined2, flag2(_undefined[0]).DEFAULT_NAVIGATION_SPAN_NAME, () => c4 === closure_0);
    timeout = setTimeout(discardLatestNavigationSpan.bind(c3), closure_0);
  }
  let result = navigation.events().registerCommandListener(startIdleNavigationSpan);
  if (flag) {
    let result1 = navigation.events().registerBottomTabPressedListener(startIdleNavigationSpan);
    const eventsResult1 = navigation.events();
  }
  const eventsResult = navigation.events();
  let result2 = navigation.events().registerComponentWillAppearListener((componentId) => {
    if (_undefined2) {
      if (_null) {
        if (componentId.componentId === _null.componentId) {
          if (typeof discardLatestNavigationSpan !== "function") {
            HermesBuiltin.throwTypeError();
          }
          if (_undefined2) {
            if (obj6.isSentrySpan(_undefined2)) {
              _undefined2._sampled = false;
            }
            _undefined2.end();
            _undefined2 = undefined;
            obj6 = flag2(_undefined[5]);
          }
          if (typeof clearStateChangeTimeout !== "function") {
            HermesBuiltin.throwTypeError();
          }
          if (undefined !== c3) {
            const _clearTimeout2 = clearTimeout;
            clearTimeout(c3);
            c3 = undefined;
          }
        }
      }
      if (typeof clearStateChangeTimeout !== "function") {
        HermesBuiltin.throwTypeError();
      }
      if (undefined !== c3) {
        const _clearTimeout = clearTimeout;
        clearTimeout(c3);
        c3 = undefined;
      }
      const hasItem = arr.includes(componentId.componentId);
      let obj = flag2(_undefined[2]);
      if (obj.spanToJSON(_undefined2).description === flag2(_undefined[0]).DEFAULT_NAVIGATION_SPAN_NAME) {
        _undefined2.updateName(componentId.componentName);
      }
      obj = { "route.name": null, "route.component_id": null, "route.component_type": null, "route.has_been_seen": null, "previous_route.name": null, "previous_route.component_id": null, "previous_route.component_type": null };
      ({ componentName: obj2[0], componentId: obj2[1], componentType: obj2[2] } = componentId);
      obj[3] = hasItem;
      let componentName;
      if (null != _null) {
        componentName = _null.componentName;
      }
      obj[4] = componentName;
      componentId = undefined;
      if (null != _null) {
        componentId = _null.componentId;
      }
      obj[5] = componentId;
      let componentType;
      if (null != _null) {
        componentType = _null.componentType;
      }
      obj[6] = componentType;
      obj[flag2(_undefined[2]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = "component";
      obj[flag2(_undefined[2]).SEMANTIC_ATTRIBUTE_SENTRY_OP] = "navigation";
      _undefined2.setAttributes(obj);
      if (null != _undefined) {
        _undefined.setCurrentRoute(componentId.componentName);
      }
      obj = { category: "navigation", type: "navigation", message: null, data: null };
      const _HermesInternal = HermesInternal;
      obj[2] = "Navigation to " + componentId.componentName;
      let componentName1;
      if (null != _null) {
        componentName1 = _null.componentName;
      }
      obj1 = { from: null, to: null };
      obj1[0] = componentName1;
      obj1[1] = componentId.componentName;
      obj[3] = obj1;
      flag2(_undefined[2]).addBreadcrumb(obj);
      if (typeof pushRecentComponentId !== "function") {
        HermesBuiltin.throwTypeError();
      }
      arr = arr.push(componentId.componentId);
      if (arr.length > 200) {
        arr = arr.slice(arr.length - 200);
      }
      _null = componentId;
      _undefined2 = undefined;
      const obj3 = flag2(_undefined[2]);
    }
  });
  pushRecentComponentId = function pushRecentComponentId(arg0) {

  };
  discardLatestNavigationSpan = function discardLatestNavigationSpan() {
    if (_undefined2) {
      if (obj.isSentrySpan(_undefined2)) {
        _undefined2._sampled = false;
      }
      _undefined2.end();
      _undefined2 = undefined;
      obj = flag2(_undefined[5]);
    }
    if (typeof clearStateChangeTimeout !== "function") {
      HermesBuiltin.throwTypeError();
    }
    if (undefined !== c3) {
      const _clearTimeout = clearTimeout;
      clearTimeout(c3);
      c3 = undefined;
    }
  };
  clearStateChangeTimeout = function clearStateChangeTimeout() {

  };
  return {
    name: routeChangeTimeoutMs,
    afterAllSetup(getIntegrationByName) {
      let obj = flag2(_undefined[1]);
      const reactNativeTracingIntegration = obj.getReactNativeTracingIntegration(getIntegrationByName);
      if (reactNativeTracingIntegration) {
        obj = { finalTimeout: null, idleTimeout: null };
        obj[0] = reactNativeTracingIntegration.options.finalTimeoutMs;
        obj[1] = reactNativeTracingIntegration.options.idleTimeoutMs;
      }
    }
  };
};