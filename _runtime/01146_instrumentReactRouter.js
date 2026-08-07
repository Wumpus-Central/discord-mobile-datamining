// _runtime/01146_instrumentReactRouter.js
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { registerSpanErrorInstrumentation } from "00817_registerSpanErrorInstrumentation.js";
import { feedbackAsyncIntegration } from "01024_feedbackAsyncIntegration.js";
import { getStatics } from "01140_getStatics.js";

function instrumentReactRouter(f102704, arg1, arg2, location) {
  let tmp5;
  let tmp6;
  const _require = f102704;
  const dependencyMap = arg4;
  let items = arg5;
  if (arg5 === undefined) {
    items = [];
  }
  let closure_3 = arg6;
  function normalizeTransactionName(pathname) {
    let items;
    if (0 !== items.length) {
      if (closure_3) {
        const tmp3 = outer1_5(tmp, pathname, tmp8);
        for (const item10011 of tmp3) {
          let tmp6 = item10011;
          if (item10011.match.isExact) {
            items = [item10011.match.path, ];
            let str = "route";
            items[1] = "route";
            let tmp7 = obj;
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
      if (_feedbackAsyncIntegration.WINDOW.location) {
        pathname = tmp(1024).WINDOW.location.pathname;
      }
      tmp = _require;
    }
    if (pathname) {
      [tmp5, tmp6] = items(normalizeTransactionName(pathname), 2);
      let obj = _feedbackAsyncIntegration;
      obj = { name: null, attributes: null };
      obj[0] = tmp5;
      obj = {};
      obj[_registerSpanErrorInstrumentation.SEMANTIC_ATTRIBUTE_SENTRY_OP] = "pageload";
      let _HermesInternal = HermesInternal;
      obj[_registerSpanErrorInstrumentation.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.pageload.react." + arg4;
      obj[_registerSpanErrorInstrumentation.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = tmp6;
      obj[1] = obj;
      let result = obj.startBrowserTracingPageLoadSpan(f102704, obj);
      let tmp4 = items(normalizeTransactionName(pathname), 2);
    }
  }
  let listen = arg2;
  if (arg2) {
    listen = location.listen;
  }
  if (listen) {
    location.listen((pathname) => {
      let tmp5;
      let tmp6;
      if (arg1) {
        if ("PUSH" === arg1) {
          [tmp5, tmp6] = items(normalizeTransactionName(pathname.pathname), 2);
          let obj = callback(1024);
          obj = { name: null, attributes: null };
          obj[0] = tmp5;
          obj = {};
          obj[callback(817).SEMANTIC_ATTRIBUTE_SENTRY_OP] = "navigation";
          const _HermesInternal = HermesInternal;
          obj[callback(817).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.navigation.react." + dependencyMap;
          obj[callback(817).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = tmp6;
          obj[1] = obj;
          const result = obj.startBrowserTracingNavigationSpan(callback, obj);
          const tmp4 = items(normalizeTransactionName(pathname.pathname), 2);
        }
      }
    });
  }
}
function matchRoutes(pathname, search, arg2) {
  let closure_0 = search;
  let closure_1 = arg2;
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
  let _slicedToArray;
  let dependencyMap;
  let instrumentPageLoad;
  let noop;
  let obj = feedbackAsyncIntegration;
  obj = {};
  const merged = Object.assign(instrumentNavigation);
  obj.instrumentPageLoad = false;
  obj.instrumentNavigation = false;
  const result = obj.browserTracingIntegration(obj);
  require = result;
  ({ history: dependencyMap, routes: _slicedToArray, matchPath: noop, instrumentPageLoad } = instrumentNavigation);
  let closure_4 = undefined === instrumentPageLoad || instrumentPageLoad;
  instrumentNavigation = instrumentNavigation.instrumentNavigation;
  let closure_5 = undefined === instrumentNavigation || instrumentNavigation;
  obj = {};
  const merged1 = Object.assign(result);
  obj.afterAllSetup = function afterAllSetup(arg0) {
    closure_0.afterAllSetup(arg0);
    callback(arg0, callback, closure_5, closure_1, "reactrouter_v4", closure_2, closure_3);
  };
  return obj;
};
export const reactRouterV5BrowserTracingIntegration = function reactRouterV5BrowserTracingIntegration(instrumentNavigation) {
  let _slicedToArray;
  let dependencyMap;
  let instrumentPageLoad;
  let noop;
  let obj = feedbackAsyncIntegration;
  obj = {};
  const merged = Object.assign(instrumentNavigation);
  obj.instrumentPageLoad = false;
  obj.instrumentNavigation = false;
  const result = obj.browserTracingIntegration(obj);
  require = result;
  ({ history: dependencyMap, routes: _slicedToArray, matchPath: noop, instrumentPageLoad } = instrumentNavigation);
  let closure_4 = undefined === instrumentPageLoad || instrumentPageLoad;
  instrumentNavigation = instrumentNavigation.instrumentNavigation;
  let closure_5 = undefined === instrumentNavigation || instrumentNavigation;
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
        tmp3 = outer1_1;
        obj = closure_0(outer1_1[3]);
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
      return outer1_3.createElement(closure_0, obj);
    }
  }
  WrappedRoute.displayName = "sentryRoute(" + displayName.displayName || displayName.name + ")";
  _getStatics.hoistNonReactStatics(WrappedRoute, displayName);
  return WrappedRoute;
};