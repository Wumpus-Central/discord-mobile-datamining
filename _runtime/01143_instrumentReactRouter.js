// _runtime/01143_instrumentReactRouter.js
import feedbackAsyncIntegration from "01021_feedbackAsyncIntegration.js";
import closure_2 from "metro/00032__slicedToArray.js";
import closure_3 from "00019_noop.js";
import { feedbackAsyncIntegration } from "01021_feedbackAsyncIntegration.js";

function instrumentReactRouter(f107389, arg1, arg2, location) {
  const _require = f107389;
  dependencyMap = arg4;
  let items = arg5;
  if (arg5 === undefined) {
    items = [];
  }
  closure_3 = arg6;
  function normalizeTransactionName(pathname) {
    if (0 !== items.length) {
      if (closure_3) {
        const tmp4 = closure_1_5(tmp, pathname, tmp2);
        for (const item10012 of tmp4) {
          let tmp7 = item10012;
          if (item10012.match.isExact) {
            items = [item10012.match.path, ];
            let str = "route";
            items[1] = "route";
            let tmp8 = obj;
            obj.return();
            return items;
          }
        }
        const items1 = [pathname, "url"];
        return items1;
      }
    }
    const items2 = [pathname, "url"];
    return items2;
  }
  if (arg1) {
    if (location.location) {
      let pathname = location.location.pathname;
    } else {
      if (require("01021_feedbackAsyncIntegration.js").WINDOW.location) {
        pathname = tmp(1021).WINDOW.location.pathname;
      }
      tmp = _require;
    }
    if (pathname) {
      [tmp5, tmp6] = items(normalizeTransactionName(pathname), 2);
      let obj = feedbackAsyncIntegration;
      obj = { name: null, attributes: null };
      obj[0] = tmp5;
      obj = {};
      obj[require("00814_registerSpanErrorInstrumentation.js").SEMANTIC_ATTRIBUTE_SENTRY_OP] = "pageload";
      let _HermesInternal = HermesInternal;
      obj[require("00814_registerSpanErrorInstrumentation.js").SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.pageload.react." + arg4;
      obj[require("00814_registerSpanErrorInstrumentation.js").SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = tmp6;
      obj[1] = obj;
      let result = obj.startBrowserTracingPageLoadSpan(f107389, obj);
      let tmp4 = items(normalizeTransactionName(pathname), 2);
    }
  }
  let listen = arg2;
  if (arg2) {
    listen = location.listen;
  }
  if (listen) {
    location.listen((pathname) => {
      if (arg1) {
        if ("PUSH" === arg1) {
          [tmp5, tmp6] = items(normalizeTransactionName(pathname.pathname), 2);
          let obj = callback(1021);
          obj = { name: null, attributes: null };
          obj[0] = tmp5;
          obj = {};
          obj[callback(814).SEMANTIC_ATTRIBUTE_SENTRY_OP] = "navigation";
          const _HermesInternal = HermesInternal;
          obj[callback(814).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.navigation.react." + dependencyMap;
          obj[callback(814).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = tmp6;
          obj[1] = obj;
          const result = obj.startBrowserTracingNavigationSpan(callback, obj);
          const tmp4 = items(normalizeTransactionName(pathname.pathname), 2);
        }
      }
    });
  }
}
function matchRoutes(pathname, search, arg2) {
  closure_0 = search;
  closure_1 = arg2;
  let items = arg3;
  if (arg3 === undefined) {
    items = [];
  }
  pathname.some((path) => {
    if (path.path) {
      let match = callback(closure_0, path);
    } else {
      let arr = items;
      if (items.length) {
        match = arr[arr.length - 1].match;
      } else {
        match = { path: "/", url: "/", params: null, isExact: null };
        match[2] = {};
        match[3] = "/" === closure_0;
      }
    }
    if (match) {
      let obj = { route: null, match: null };
      obj[0] = path;
      obj[1] = match;
      arr = items.push(obj);
      if (path.routes) {
        let routes = path.routes;
        items = undefined;
        if (items === undefined) {
          items = [];
        }
        routes.some((path) => {
          if (path.path) {
            let match = callback(closure_0, path);
          } else {
            let arr = items;
            if (items.length) {
              match = arr[arr.length - 1].match;
            } else {
              match = { path: "/", url: "/", params: null, isExact: null };
              match[2] = {};
              match[3] = "/" === closure_0;
            }
          }
          if (match) {
            let obj = { route: null, match: null };
            obj[0] = path;
            obj[1] = match;
            arr = items.push(obj);
            if (path.routes) {
              let routes = path.routes;
              items = undefined;
              if (items === undefined) {
                items = [];
              }
              routes.some((path) => {
                if (path.path) {
                  let match = callback(closure_0, path);
                } else {
                  let arr = items;
                  if (items.length) {
                    match = arr[arr.length - 1].match;
                  } else {
                    match = { path: "/", url: "/", params: null, isExact: null };
                    match[2] = {};
                    match[3] = "/" === closure_0;
                  }
                }
                if (match) {
                  let obj = { route: null, match: null };
                  obj[0] = path;
                  obj[1] = match;
                  arr = items.push(obj);
                  if (path.routes) {
                    let routes = path.routes;
                    items = undefined;
                    if (items === undefined) {
                      items = [];
                    }
                    routes.some((path) => {
                      if (path.path) {
                        let match = callback(closure_0, path);
                      } else {
                        let arr = items;
                        if (items.length) {
                          match = arr[arr.length - 1].match;
                        } else {
                          match = { path: "/", url: "/", params: null, isExact: null };
                          match[2] = {};
                          match[3] = "/" === closure_0;
                        }
                      }
                      if (match) {
                        let obj = { route: null, match: null };
                        obj[0] = path;
                        obj[1] = match;
                        arr = items.push(obj);
                        if (path.routes) {
                          let routes = path.routes;
                          items = undefined;
                          if (items === undefined) {
                            items = [];
                          }
                          routes.some(() => { ... });
                        }
                      }
                      return match;
                    });
                  }
                }
                return match;
              });
            }
          }
          return match;
        });
      }
    }
    return match;
  });
  return items;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const reactRouterV4BrowserTracingIntegration = function reactRouterV4BrowserTracingIntegration(instrumentNavigation) {
  let obj = feedbackAsyncIntegration;
  obj = {};
  const merged = Object.assign(instrumentNavigation);
  obj.instrumentPageLoad = false;
  obj.instrumentNavigation = false;
  const result = obj.browserTracingIntegration(obj);
  require = result;
  ({ history: dependencyMap, routes: closure_2, matchPath: closure_3, instrumentPageLoad } = instrumentNavigation);
  closure_4 = undefined === instrumentPageLoad || instrumentPageLoad;
  instrumentNavigation = instrumentNavigation.instrumentNavigation;
  closure_5 = undefined === instrumentNavigation || instrumentNavigation;
  obj = {};
  const merged1 = Object.assign(result);
  obj.afterAllSetup = function afterAllSetup(arg0) {
    closure_0.afterAllSetup(arg0);
    callback(arg0, callback, closure_5, closure_1, "reactrouter_v4", closure_2, closure_3);
  };
  return obj;
};
export const reactRouterV5BrowserTracingIntegration = function reactRouterV5BrowserTracingIntegration(instrumentNavigation) {
  let obj = feedbackAsyncIntegration;
  obj = {};
  const merged = Object.assign(instrumentNavigation);
  obj.instrumentPageLoad = false;
  obj.instrumentNavigation = false;
  const result = obj.browserTracingIntegration(obj);
  require = result;
  ({ history: dependencyMap, routes: closure_2, matchPath: closure_3, instrumentPageLoad } = instrumentNavigation);
  closure_4 = undefined === instrumentPageLoad || instrumentPageLoad;
  instrumentNavigation = instrumentNavigation.instrumentNavigation;
  closure_5 = undefined === instrumentNavigation || instrumentNavigation;
  obj = {};
  const merged1 = Object.assign(result);
  obj.afterAllSetup = function afterAllSetup(arg0) {
    closure_0.afterAllSetup(arg0);
    callback(arg0, callback, closure_5, closure_1, "reactrouter_v5", closure_2, closure_3);
  };
  return obj;
};
export const withSentryRouting = function withSentryRouting(displayName) {
  const _require = displayName;
  class WrappedRoute {
    constructor(arg0) {
      isExact = undefined;
      if (displayName != null) {
        computedMatch = displayName.computedMatch;
        if (computedMatch != null) {
          isExact = computedMatch.isExact;
        }
      }
      if (isExact) {
        path = displayName.computedMatch.path;
        tmp2 = closure_0;
        tmp3 = closure_1_1;
        obj = closure_0(closure_1_1[3]);
        activeSpan = obj.getActiveSpan();
        rootSpan = activeSpan;
        if (activeSpan) {
          tmp2Result = tmp2(tmp3[3]);
          rootSpan = tmp2Result.getRootSpan(activeSpan);
        }
        tmp6 = undefined;
        if (rootSpan) {
          tmp2Result1 = tmp2(tmp3[3]);
          op = tmp2Result1.spanToJSON(rootSpan).op;
          str = "navigation";
          if ("navigation" === op) {
            tmp7 = rootSpan;
          } else {
            str2 = "pageload";
          }
          tmp6 = tmp7;
        }
        tmp2Result2 = tmp2(tmp3[3]);
        currentScope = tmp2Result2.getCurrentScope();
        setTransactionNameResult = currentScope.setTransactionName(path);
        if (tmp6) {
          updateNameResult = tmp6.updateName(path);
          str3 = "route";
          attr = tmp6.setAttribute(tmp2(tmp3[3]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "route");
        }
      }
      obj = {};
      merged = Object.assign(displayName);
      return closure_1_3.createElement(closure_0, obj);
    }
  }
  WrappedRoute.displayName = "sentryRoute(" + displayName.displayName || displayName.name + ")";
  require("01137_getStatics.js").hoistNonReactStatics(WrappedRoute, displayName);
  return WrappedRoute;
};