// _runtime/metro/01066__.js
import _mod693 from "00693__.js";
import _mod998 from "00998__.js";
import DEFAULT_NAVIGATION_SPAN_NAME from "../01036_DEFAULT_NAVIGATION_SPAN_NAME.js";
import _mod1042 from "01042__.js";

let _null, _undefined, componentId;

const self = this;
const ReactNativeNavigation = "ReactNativeNavigation";

export const INTEGRATION_NAME = "ReactNativeNavigation";
export const reactNativeNavigationIntegration = (enableTabsInstrumentation) => {
  let routeChangeTimeoutMs;
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
  let reactNativeTracingIntegration;
  let c3;
  let c4;
  let pushRecentComponentId;
  let discardLatestNavigationSpan;
  let clearStateChangeTimeout;
  let closure_5 = [];
  let obj2 = flag2(reactNativeTracingIntegration[0]).defaultIdleOptions;
  let c7 = null;
  function startIdleNavigationSpan() {
    let beforeStartSpanResult;
    let c4;
    let closure_3;
    let timeout;
    if (_undefined) {
      if (typeof discardLatestNavigationSpan === "function") {
        if (tmp) {
          const obj = flag2(reactNativeTracingIntegration[5]);
          if (obj.isSentrySpan(_undefined)) {
            _undefined._sampled = false;
          }
          _undefined.end();
          _undefined = undefined;
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
    const startIdleNavigationSpan = flag2(reactNativeTracingIntegration[0]).startIdleNavigationSpan;
    flag2(reactNativeTracingIntegration[0]);
    if (null != reactNativeTracingIntegration) {
      beforeStartSpan1 = reactNativeTracingIntegration.options.beforeStartSpan;
    }
    if (beforeStartSpan1) {
      const options = reactNativeTracingIntegration.options;
      const beforeStartSpan = options.beforeStartSpan;
      const obj3 = flag2(reactNativeTracingIntegration[0]);
      beforeStartSpanResult = beforeStartSpan(obj3.getDefaultIdleNavigationSpanOptions());
    } else {
      obj2 = flag2(reactNativeTracingIntegration[0]);
      beforeStartSpanResult = obj2.getDefaultIdleNavigationSpanOptions();
    }
    const result = startIdleNavigationSpan(beforeStartSpanResult, obj2);
    _undefined = result;
    if (null != result) {
      const setAttribute = _undefined.setAttribute;
      const attr = setAttribute(
        flag2(reactNativeTracingIntegration[2]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN,
        flag2(reactNativeTracingIntegration[3]).SPAN_ORIGIN_AUTO_NAVIGATION_REACT_NATIVE_NAVIGATION,
      );
    }
    if (flag2) {
      const ignoreEmptyBackNavigation = flag2(reactNativeTracingIntegration[4]).ignoreEmptyBackNavigation;
      flag2(reactNativeTracingIntegration[4]);
      const obj4 = flag2(reactNativeTracingIntegration[2]);
      const result1 = ignoreEmptyBackNavigation(obj4.getClient(), _undefined);
    }
    let closure_0 = _undefined;
    const ignoreEmptyRouteChangeTransactions = flag2(
      reactNativeTracingIntegration[4],
    ).ignoreEmptyRouteChangeTransactions;
    flag2(reactNativeTracingIntegration[4]);
    const obj5 = flag2(reactNativeTracingIntegration[2]);
    const client = obj5.getClient();
    const result2 = ignoreEmptyRouteChangeTransactions(
      client,
      _undefined,
      flag2(reactNativeTracingIntegration[0]).DEFAULT_NAVIGATION_SPAN_NAME,
      () => c4 === closure_0,
    );
    timeout = setTimeout(discardLatestNavigationSpan.bind(c3), closure_0);
  }
  const eventsResult = navigation.events();
  let result = eventsResult.registerCommandListener(startIdleNavigationSpan);
  if (flag) {
    const eventsResult1 = navigation.events();
    let result1 = eventsResult1.registerBottomTabPressedListener(startIdleNavigationSpan);
  }
  const eventsResult2 = navigation.events();
  let result2 = eventsResult2.registerComponentWillAppearListener((componentId) => {
    let componentName;
    let componentType;
    let obj8;
    const tmp = _undefined;
    if (tmp) {
      const tmp3 = _null;
      if (tmp3) {
        if (componentId.componentId === _null.componentId) {
          if (typeof discardLatestNavigationSpan === "function") {
            const tmp54 = _undefined;
            if (tmp54) {
              const obj5 = _mod998;
              if (obj5.isSentrySpan(_undefined)) {
                _undefined._sampled = false;
              }
              _undefined.end();
              _undefined = undefined;
            }
            if (typeof clearStateChangeTimeout === "function") {
              if (undefined !== c3) {
                const _clearTimeout2 = clearTimeout;
                clearTimeout(c3);
                c3 = undefined;
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
      }
      if (typeof clearStateChangeTimeout === "function") {
        if (undefined !== c3) {
          const _clearTimeout = clearTimeout;
          clearTimeout(c3);
          c3 = undefined;
        }
        const hasItem = closure_5.includes(componentId.componentId);
        const obj = _mod693;
        if (obj.spanToJSON(_undefined).description === DEFAULT_NAVIGATION_SPAN_NAME.DEFAULT_NAVIGATION_SPAN_NAME) {
          _undefined.updateName(componentId.componentName);
        }
        const obj3 = {
          "route.name": null,
          "route.component_id": null,
          "route.component_type": null,
          "route.has_been_seen": hasItem,
          "previous_route.name": componentName,
          "previous_route.component_id": componentId,
          "previous_route.component_type": componentType,
        };
        ({
          componentName: obj2["route.name"],
          componentId: obj2["route.component_id"],
          componentType: obj2["route.component_type"],
        } = componentId);
        componentName = undefined;
        const setAttributes = _undefined.setAttributes;
        if (null != _null) {
          componentName = _null.componentName;
        }
        componentId = undefined;
        if (null != _null) {
          componentId = _null.componentId;
        }
        componentType = undefined;
        if (null != _null) {
          componentType = _null.componentType;
        }
        obj3[_mod693.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = "component";
        obj3[_mod693.SEMANTIC_ATTRIBUTE_SENTRY_OP] = "navigation";
        setAttributes(obj3);
        if (null != reactNativeTracingIntegration) {
          reactNativeTracingIntegration.setCurrentRoute(componentId.componentName);
        }
        const _HermesInternal = HermesInternal;
        const obj4 = {
          category: "navigation",
          type: "navigation",
          message: "Navigation to " + componentId.componentName,
          data: obj8,
        };
        const addBreadcrumb = _mod693.addBreadcrumb;
        _mod693;
        let componentName1;
        if (null != _null) {
          componentName1 = _null.componentName;
        }
        obj8 = { from: componentName1, to: componentId.componentName };
        addBreadcrumb(obj4);
        if (typeof pushRecentComponentId === "function") {
          closure_5.push(tmp47);
          if (closure_5.length > 200) {
            closure_5 = closure_5.slice(closure_5.length - 200);
          }
          _null = componentId;
          _undefined = undefined;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  });
  pushRecentComponentId = function pushRecentComponentId(arg0) {};
  discardLatestNavigationSpan = function discardLatestNavigationSpan() {
    const tmp = _undefined;
    if (tmp) {
      const obj = _mod998;
      if (obj.isSentrySpan(_undefined)) {
        _undefined._sampled = false;
      }
      _undefined.end();
      _undefined = undefined;
    }
    if (typeof clearStateChangeTimeout === "function") {
      if (undefined !== c3) {
        const _clearTimeout = clearTimeout;
        clearTimeout(c3);
        c3 = undefined;
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  clearStateChangeTimeout = function clearStateChangeTimeout() {};
  let obj = {
    name: routeChangeTimeoutMs,
    afterAllSetup(getIntegrationByName) {
      const obj = _mod1042;
      reactNativeTracingIntegration = obj.getReactNativeTracingIntegration(getIntegrationByName);
    },
  };
  return obj;
};
