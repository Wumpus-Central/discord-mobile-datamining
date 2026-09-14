// _runtime/metro/01055__.js
import _mod682 from "00682__.js";
import _mod987 from "00987__.js";
import startIdleSpan from "../01025_startIdleSpan.js";
import _mod1031 from "01031__.js";

const self = this;
require = arg1;
const dependencyMap = arg6;
const ReactNativeNavigation = "ReactNativeNavigation";

export const INTEGRATION_NAME = "ReactNativeNavigation";
export const reactNativeNavigationIntegration = (enableTabsInstrumentation) => {
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
  c3 = undefined;
  c4 = undefined;
  let pushRecentComponentId;
  let discardLatestNavigationSpan;
  let clearStateChangeTimeout;
  closure_5 = [];
  flag2(reactNativeTracingIntegration[0]).defaultIdleOptions;
  enableTabsInstrumentation = null;
  function startIdleNavigationSpan() {
    if (_undefined) {
      if (typeof discardLatestNavigationSpan === "function") {
        if (tmp) {
          if (obj.isSentrySpan(_undefined)) {
            _undefined._sampled = false;
          }
          _undefined.end();
          _undefined = undefined;
          obj = flag2(reactNativeTracingIntegration[5]);
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
    obj2 = flag2(reactNativeTracingIntegration[0]);
    let beforeStartSpan;
    if (null != reactNativeTracingIntegration) {
      beforeStartSpan = reactNativeTracingIntegration.options.beforeStartSpan;
    }
    if (beforeStartSpan) {
      const options = reactNativeTracingIntegration.options;
      let beforeStartSpanResult = options.beforeStartSpan(
        flag2(reactNativeTracingIntegration[0]).getDefaultIdleNavigationSpanOptions(),
      );
      const obj4 = flag2(reactNativeTracingIntegration[0]);
    } else {
      beforeStartSpanResult = flag2(reactNativeTracingIntegration[0]).getDefaultIdleNavigationSpanOptions();
      const obj3 = flag2(reactNativeTracingIntegration[0]);
    }
    const result = obj2.startIdleNavigationSpan(beforeStartSpanResult, obj2);
    _undefined = result;
    if (null != result) {
      const attr = _undefined.setAttribute(
        flag2(reactNativeTracingIntegration[2]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN,
        flag2(reactNativeTracingIntegration[3]).SPAN_ORIGIN_AUTO_NAVIGATION_REACT_NATIVE_NAVIGATION,
      );
    }
    if (flag2) {
      const obj5 = flag2(reactNativeTracingIntegration[4]);
      const result1 = obj5.ignoreEmptyBackNavigation(flag2(reactNativeTracingIntegration[2]).getClient(), _undefined);
      const obj6 = flag2(reactNativeTracingIntegration[2]);
    }
    closure_0 = _undefined;
    const obj7 = flag2(reactNativeTracingIntegration[4]);
    const client = flag2(reactNativeTracingIntegration[2]).getClient();
    const result2 = obj7.ignoreEmptyRouteChangeTransactions(
      client,
      _undefined,
      flag2(reactNativeTracingIntegration[0]).DEFAULT_NAVIGATION_SPAN_NAME,
      () => c4 === closure_0,
    );
    timeout = setTimeout(discardLatestNavigationSpan.bind(c3), closure_0);
    const obj8 = flag2(reactNativeTracingIntegration[2]);
  }
  let result = navigation.events().registerCommandListener(startIdleNavigationSpan);
  if (flag) {
    let result1 = navigation.events().registerBottomTabPressedListener(startIdleNavigationSpan);
    const eventsResult1 = navigation.events();
  }
  const eventsResult = navigation.events();
  let result2 = navigation.events().registerComponentWillAppearListener((componentId) => {
    if (_undefined) {
      if (enableTabsInstrumentation) {
        if (componentId.componentId === enableTabsInstrumentation.componentId) {
          if (typeof discardLatestNavigationSpan === "function") {
            if (_undefined) {
              if (obj6.isSentrySpan(_undefined)) {
                _undefined._sampled = false;
              }
              _undefined.end();
              _undefined = undefined;
              obj6 = _mod987;
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
        if (obj.spanToJSON(_undefined).description === startIdleSpan.DEFAULT_NAVIGATION_SPAN_NAME) {
          _undefined.updateName(componentId.componentName);
        }
        const obj4 = {
          "route.name": null,
          "route.component_id": null,
          "route.component_type": null,
          "route.has_been_seen": null,
          "previous_route.name": null,
          "previous_route.component_id": null,
          "previous_route.component_type": null,
        };
        ({
          componentName: obj2["route.name"],
          componentId: obj2["route.component_id"],
          componentType: obj2["route.component_type"],
        } = componentId);
        obj4["route.has_been_seen"] = hasItem;
        let componentName;
        if (null != enableTabsInstrumentation) {
          componentName = enableTabsInstrumentation.componentName;
        }
        obj4["previous_route.name"] = componentName;
        componentId = undefined;
        if (null != enableTabsInstrumentation) {
          componentId = enableTabsInstrumentation.componentId;
        }
        obj4["previous_route.component_id"] = componentId;
        let componentType;
        if (null != enableTabsInstrumentation) {
          componentType = enableTabsInstrumentation.componentType;
        }
        obj4["previous_route.component_type"] = componentType;
        obj4[_mod682.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = "component";
        obj4[_mod682.SEMANTIC_ATTRIBUTE_SENTRY_OP] = "navigation";
        _undefined.setAttributes(obj4);
        if (null != reactNativeTracingIntegration) {
          reactNativeTracingIntegration.setCurrentRoute(componentId.componentName);
        }
        obj = _mod682;
        const obj5 = { category: "navigation", type: "navigation", message: null, data: null };
        const _HermesInternal = HermesInternal;
        obj5.message = "Navigation to " + componentId.componentName;
        let componentName1;
        if (null != enableTabsInstrumentation) {
          componentName1 = enableTabsInstrumentation.componentName;
        }
        const obj9 = { from: componentName1, to: componentId.componentName };
        obj5.data = obj9;
        _mod682.addBreadcrumb(obj5);
        if (typeof pushRecentComponentId === "function") {
          closure_5.push(tmp45);
          if (closure_5.length > 200) {
            closure_5 = closure_5.slice(closure_5.length - 200);
          }
          enableTabsInstrumentation = componentId;
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
    if (_undefined) {
      if (obj.isSentrySpan(_undefined)) {
        _undefined._sampled = false;
      }
      _undefined.end();
      _undefined = undefined;
      obj = _mod987;
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
  return {
    name: routeChangeTimeoutMs,
    afterAllSetup(getIntegrationByName) {
      reactNativeTracingIntegration = _mod1031.getReactNativeTracingIntegration(getIntegrationByName);
      if (reactNativeTracingIntegration) {
        obj2 = {
          finalTimeout: reactNativeTracingIntegration.options.finalTimeoutMs,
          idleTimeout: reactNativeTracingIntegration.options.idleTimeoutMs,
        };
      }
    },
  };
};
