// _runtime/01145_tanstackRouterBrowserTracingIntegration.js
const require = arg1;
let dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.tanstackRouterBrowserTracingIntegration = function tanstackRouterBrowserTracingIntegration(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  dependencyMap = undefined;
  closure_2 = undefined;
  closure_3 = undefined;
  const _require = arg0;
  obj = {};
  let merged = Object.assign(obj);
  obj.instrumentNavigation = false;
  obj.instrumentPageLoad = false;
  let result = require("01024_feedbackAsyncIntegration.js").browserTracingIntegration(obj);
  dependencyMap = result;
  const instrumentPageLoad = obj.instrumentPageLoad;
  closure_2 = undefined === instrumentPageLoad || instrumentPageLoad;
  const instrumentNavigation = obj.instrumentNavigation;
  closure_3 = undefined === instrumentNavigation || instrumentNavigation;
  obj = {};
  const merged1 = Object.assign(result);
  obj.afterAllSetup = function afterAllSetup(f105591) {
    obj1 = f105591;
    _undefined.afterAllSetup(f105591);
    const _location = callback(_undefined[0]).WINDOW.location;
    if (closure_2) {
      if (_location) {
        ({ options, matchRoutes } = obj1);
        let matchRoutesResult = matchRoutes(_location.pathname, options.parseSearch(_location.search), { preload: false, throwOnError: false });
        let routeId;
        if (matchRoutesResult[matchRoutesResult.length - 1] != null) {
          routeId = tmp5.routeId;
        }
        let forEach;
        if ("__root__" !== routeId) {
          forEach = tmp5;
        }
        let result = { name: null, attributes: null };
        result[0] = forEach ? forEach.routeId : _location.pathname;
        let obj = {};
        obj[tmp2(tmp3[1]).SEMANTIC_ATTRIBUTE_SENTRY_OP] = "pageload";
        obj[tmp2(tmp3[1]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.pageload.react.tanstack_router";
        let str4 = "url";
        if (forEach) {
          str4 = "route";
        }
        obj[tmp2(tmp3[1]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = str4;
        obj1 = undefined;
        obj1 = {};
        if (forEach) {
          let _Object = Object;
          let entries = Object.entries(forEach.params);
          forEach = entries.forEach;
          let item = forEach((arg0) => {
            [tmp, tmp2] = arg0;
            obj["url.path.params." + tmp] = tmp2;
            obj["url.path.parameter." + tmp] = tmp2;
            obj["params." + tmp] = tmp2;
          });
          let tmp9 = obj1;
        } else {
          tmp9 = obj1;
        }
        const merged = Object.assign(tmp9);
        result[1] = obj;
        result = tmp2(tmp3[0]).startBrowserTracingPageLoadSpan(f105591, result);
        const tmp2Result = tmp2(tmp3[0]);
      }
    }
    if (closure_3) {
      const subscription = obj1.subscribe("onBeforeNavigate", (fromLocation) => {
        if (fromLocation.fromLocation) {
          if (fromLocation.toLocation.state !== fromLocation.fromLocation.state) {
            let matchRoutesResult = obj1.matchRoutes(fromLocation.toLocation.pathname, fromLocation.toLocation.search, { preload: false, throwOnError: false });
            let routeId;
            if (matchRoutesResult[matchRoutesResult.length - 1] != null) {
              routeId = tmp6.routeId;
            }
            let tmp2;
            if ("__root__" !== routeId) {
              tmp2 = tmp6;
            }
            let obj = obj1(1024);
            obj = { name: null, attributes: null };
            obj[0] = tmp2 ? tmp2.routeId : obj1(1024).WINDOW.location.pathname;
            obj = {};
            obj[obj1(817).SEMANTIC_ATTRIBUTE_SENTRY_OP] = "navigation";
            obj[obj1(817).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.navigation.react.tanstack_router";
            let str4 = "url";
            if (tmp2) {
              str4 = "route";
            }
            obj[obj1(817).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = str4;
            obj[1] = obj;
            obj1 = obj.startBrowserTracingNavigationSpan(obj1, obj);
            closure_1 = obj1.subscribe("onResolved", (toLocation) => {
              callback();
              if (obj) {
                const matchRoutesResult = closure_0.matchRoutes(toLocation.toLocation.pathname, toLocation.toLocation.search, { preload: false, throwOnError: false });
                let routeId;
                if (matchRoutesResult[matchRoutesResult.length - 1] != null) {
                  routeId = tmp4.routeId;
                }
                let forEach;
                if ("__root__" !== routeId) {
                  forEach = tmp4;
                }
                if (forEach) {
                  obj.updateName(forEach.routeId);
                  const attr = obj.setAttribute(obj1(closure_2_1[1]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "route");
                  obj = undefined;
                  obj = {};
                  if (forEach) {
                    const _Object = Object;
                    const entries = Object.entries(forEach.params);
                    forEach = entries.forEach;
                    const item = forEach((arg0) => {
                      [tmp, tmp2] = arg0;
                      obj["url.path.params." + tmp] = tmp2;
                      obj["url.path.parameter." + tmp] = tmp2;
                      obj["params." + tmp] = tmp2;
                    });
                    let tmp12 = obj;
                  } else {
                    tmp12 = obj;
                  }
                  obj.setAttributes(tmp12);
                }
              }
            });
            const obj4 = obj1;
            const tmp5 = obj1;
          }
        }
      });
    }
  };
  return obj;
};