// _runtime/01021_tanstackRouterBrowserTracingIntegration.js
import _mod693 from "metro/00693__.js";
import feedbackAsyncIntegration from "00900_feedbackAsyncIntegration.js";

const require = globalThis.__r;
let _require, closure_0, dependencyMap;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const tanstackRouterBrowserTracingIntegration = function tanstackRouterBrowserTracingIntegration(arg0) {
  let _undefined;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  _require = arg0;
  let tmp = require("feedbackAsyncIntegration");
  let obj2 = { instrumentNavigation: false, instrumentPageLoad: false };
  const browserTracingIntegration = tmp.browserTracingIntegration;
  let merged = Object.assign(obj);
  let result = browserTracingIntegration(obj2);
  dependencyMap = result;
  const instrumentPageLoad = obj.instrumentPageLoad;
  let closure_2 = undefined === instrumentPageLoad || instrumentPageLoad;
  const instrumentNavigation = obj.instrumentNavigation;
  let closure_3 = undefined === instrumentNavigation || instrumentNavigation;
  let obj3 = {
    afterAllSetup(f134637) {
      let matchRoutes;
      let obj2;
      let options;
      closure_0 = f134637;
      _undefined.afterAllSetup(f134637);
      let tmp2 = closure_0;
      let _location = closure_0(_undefined[0]).WINDOW.location;
      if (closure_2) {
        if (_location) {
          let tmp11;
          let tmp5 = closure_0;
          ({ options, matchRoutes } = closure_0);
          let matchRoutesResult = matchRoutes(_location.pathname, options.parseSearch(_location.search), {
            preload: false,
            throwOnError: false,
          });
          let tmp6 = matchRoutesResult[matchRoutesResult.length - 1];
          let tmp7 = null;
          let routeId;
          if (tmp6 != null) {
            routeId = tmp6.routeId;
          }
          const str = "__root__";
          let tmp9;
          if ("__root__" !== routeId) {
            tmp9 = tmp6;
          }
          let obj = { name: tmp9 ? tmp9.routeId : _location.pathname, attributes: obj2 };
          obj2 = {};
          const startBrowserTracingPageLoadSpan = tmp2(_undefined[0]).startBrowserTracingPageLoadSpan;
          const str2 = "pageload";
          obj2[tmp2(_undefined[1]).SEMANTIC_ATTRIBUTE_SENTRY_OP] = "pageload";
          obj2[tmp2(_undefined[1]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.pageload.react.tanstack_router";
          let str4 = "url";
          tmp2(_undefined[0]);
          let SEMANTIC_ATTRIBUTE_SENTRY_SOURCE = tmp2(_undefined[1]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE;
          if (tmp9) {
            str4 = "route";
          }
          obj2[SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = str4;
          let obj3 = {};
          if (tmp9) {
            let tmp12 = globalThis;
            let _Object = Object;
            let entries = Object.entries(tmp9.params);
            let item = entries.forEach((item) => {
              let tmp;
              let tmp2;
              [tmp, tmp2] = item;
              obj2["url.path.params." + tmp] = tmp2;
              obj2["url.path.parameter." + tmp] = tmp2;
              obj2["params." + tmp] = tmp2;
            });
            tmp11 = obj3;
          } else {
            tmp11 = obj3;
          }
          const merged = Object.assign(tmp11);
          const result = startBrowserTracingPageLoadSpan(f134637, obj);
        }
      }
      if (closure_3) {
        const subscription = closure_0.subscribe("onBeforeNavigate", (fromLocation) => {
          let obj2;
          if (fromLocation.fromLocation) {
            if (fromLocation.toLocation.state !== fromLocation.fromLocation.state) {
              let matchRoutesResult = closure_0.matchRoutes(
                fromLocation.toLocation.pathname,
                fromLocation.toLocation.search,
                { preload: false, throwOnError: false },
              );
              let tmp7 = matchRoutesResult[matchRoutesResult.length - 1];
              let routeId;
              const obj3 = closure_0;
              if (tmp7 != null) {
                routeId = tmp7.routeId;
              }
              let tmp2;
              if ("__root__" !== routeId) {
                tmp2 = tmp7;
              }
              const _location = feedbackAsyncIntegration.WINDOW.location;
              const obj = { name: tmp2 ? tmp2.routeId : _location.pathname, attributes: obj2 };
              obj2 = {};
              const startBrowserTracingNavigationSpan = feedbackAsyncIntegration.startBrowserTracingNavigationSpan;
              obj2[_mod693.SEMANTIC_ATTRIBUTE_SENTRY_OP] = "navigation";
              obj2[_mod693.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.navigation.react.tanstack_router";
              let str4 = "url";
              const SEMANTIC_ATTRIBUTE_SENTRY_SOURCE = _mod693.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE;
              const tmp6 = closure_0;
              if (tmp2) {
                str4 = "route";
              }
              obj2[SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = str4;
              closure_0 = startBrowserTracingNavigationSpan(tmp6, obj);
              let closure_1 = obj3.subscribe("onResolved", (toLocation) => {
                const tmp = closure_1();
                if (closure_0) {
                  const tmp2 = toLocation;
                  const matchRoutesResult = closure_2_0.matchRoutes(
                    toLocation.toLocation.pathname,
                    toLocation.toLocation.search,
                    { preload: false, throwOnError: false },
                  );
                  let routeId;
                  if (matchRoutesResult[matchRoutesResult.length - 1] != null) {
                    routeId = tmp4.routeId;
                  }
                  let tmp7;
                  if ("__root__" !== routeId) {
                    tmp7 = tmp4;
                  }
                  if (tmp7) {
                    let tmp12;
                    closure_0.updateName(tmp7.routeId);
                    const attr = closure_0.setAttribute(
                      closure_0(_undefined[1]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE,
                      "route",
                    );
                    const obj2 = {};
                    const setAttributes = closure_0.setAttributes;
                    if (tmp7) {
                      const _Object = Object;
                      const entries = Object.entries(tmp7.params);
                      const item = entries.forEach((item) => {
                        let tmp;
                        let tmp2;
                        [tmp, tmp2] = item;
                        obj2["url.path.params." + tmp] = tmp2;
                        obj2["url.path.parameter." + tmp] = tmp2;
                        obj2["params." + tmp] = tmp2;
                      });
                      tmp12 = obj2;
                    } else {
                      tmp12 = obj2;
                    }
                    setAttributes(tmp12);
                  }
                }
              });
            }
          }
        });
      }
    },
  };
  const merged1 = Object.assign(result);
  return obj3;
};
