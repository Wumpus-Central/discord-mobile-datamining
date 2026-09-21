// === Module 1010: tanstackRouterBrowserTracingIntegration ===

// Module 1010 (tanstackRouterBrowserTracingIntegration)
import _mod682 from "module_682" /* 682 */;
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 889 */;

const require = globalThis.__r;

require = arg1;
let dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const tanstackRouterBrowserTracingIntegration = function tanstackRouterBrowserTracingIntegration(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  _require = arg0;
  let obj3 = {};
  let merged = Object.assign(obj);
  obj3.instrumentNavigation = false;
  obj3.instrumentPageLoad = false;
  const result = require("feedbackAsyncIntegration").browserTracingIntegration(obj3);
  dependencyMap = result;
  const instrumentPageLoad = obj.instrumentPageLoad;
  closure_2 = undefined === instrumentPageLoad || instrumentPageLoad;
  const instrumentNavigation = obj.instrumentNavigation;
  closure_3 = undefined === instrumentNavigation || instrumentNavigation;
  let obj4 = {};
  const merged1 = Object.assign(result);
  obj4.afterAllSetup = function afterAllSetup(f110547) {
    let obj3 = f110547;
    _undefined.afterAllSetup(f110547);
    const _location = obj3(_undefined[0]).WINDOW.location;
    if (closure_2) {
      if (_location) {
        ({ options, matchRoutes } = obj3);
        let matchRoutesResult = matchRoutes(_location.pathname, options.parseSearch(_location.search), { preload: false, throwOnError: false });
        let routeId;
        if (matchRoutesResult[matchRoutesResult.length - 1] != null) {
          routeId = tmp5.routeId;
        }
        let forEach;
        if ("__root__" !== routeId) {
          forEach = tmp5;
        }
        let obj = { name: forEach ? forEach.routeId : _location.pathname, attributes: null };
        let obj2 = {};
        obj2[tmp2(_undefined[1]).SEMANTIC_ATTRIBUTE_SENTRY_OP] = "pageload";
        obj2[tmp2(_undefined[1]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.pageload.react.tanstack_router";
        let str4 = "url";
        if (forEach) {
          str4 = "route";
        }
        obj2[tmp2(_undefined[1]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = str4;
        obj3 = {};
        if (forEach) {
          let _Object = Object;
          let entries = Object.entries(forEach.params);
          forEach = entries.forEach;
          let item = forEach((arg0) => {
            [tmp, tmp2] = arg0;
            obj2["url.path.params." + tmp] = tmp2;
            obj2["url.path.parameter." + tmp] = tmp2;
            obj2["params." + tmp] = tmp2;
          });
          let tmp9 = obj3;
        } else {
          tmp9 = obj3;
        }
        const merged = Object.assign(tmp9);
        obj.attributes = obj2;
        obj = tmp2(_undefined[0]).startBrowserTracingPageLoadSpan(f110547, obj);
        const tmp2Result = tmp2(_undefined[0]);
      }
    }
    if (closure_3) {
      const subscription = obj3.subscribe("onBeforeNavigate", (fromLocation) => {
        if (fromLocation.fromLocation) {
          if (fromLocation.toLocation.state !== fromLocation.fromLocation.state) {
            let matchRoutesResult = obj3.matchRoutes(fromLocation.toLocation.pathname, fromLocation.toLocation.search, { preload: false, throwOnError: false });
            let routeId;
            if (matchRoutesResult[matchRoutesResult.length - 1] != null) {
              routeId = tmp6.routeId;
            }
            let tmp2;
            if ("__root__" !== routeId) {
              tmp2 = tmp6;
            }
            let obj2 = { name: tmp2 ? tmp2.routeId : feedbackAsyncIntegration.WINDOW.location.pathname, attributes: null };
            obj3 = {};
            obj3[_mod682.SEMANTIC_ATTRIBUTE_SENTRY_OP] = "navigation";
            obj3[_mod682.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.navigation.react.tanstack_router";
            let str4 = "url";
            if (tmp2) {
              str4 = "route";
            }
            obj3[_mod682.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = str4;
            obj2.attributes = obj3;
            obj3 = feedbackAsyncIntegration.startBrowserTracingNavigationSpan(obj3, obj2);
            dependencyMap = obj3.subscribe("onResolved", (toLocation) => {
              dependencyMap();
              if (closure_0) {
                const matchRoutesResult = obj3.matchRoutes(toLocation.toLocation.pathname, toLocation.toLocation.search, { preload: false, throwOnError: false });
                let routeId;
                if (matchRoutesResult[matchRoutesResult.length - 1] != null) {
                  routeId = tmp4.routeId;
                }
                let forEach;
                if ("__root__" !== routeId) {
                  forEach = tmp4;
                }
                if (forEach) {
                  closure_0.updateName(forEach.routeId);
                  const attr = closure_0.setAttribute(closure_0(682).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "route");
                  const obj2 = {};
                  if (forEach) {
                    const _Object = Object;
                    const entries = Object.entries(forEach.params);
                    forEach = entries.forEach;
                    const item = forEach((arg0) => {
                      [tmp, tmp2] = arg0;
                      obj2["url.path.params." + tmp] = tmp2;
                      obj2["url.path.parameter." + tmp] = tmp2;
                      obj2["params." + tmp] = tmp2;
                    });
                    let tmp12 = obj2;
                  } else {
                    tmp12 = obj2;
                  }
                  closure_0.setAttributes(tmp12);
                }
              }
            });
          }
        }
      });
    }
  };
  return obj4;
};