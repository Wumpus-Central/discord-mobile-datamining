// === Module 1011: instrumentReactRouter ===

// Module 1011 (instrumentReactRouter)
import _mod682 from "module_682" /* 682 */;
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 889 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

function instrumentReactRouter(f108154, arg1, arg2, location, reactrouter_v4, arg5, arg6) {
  _require = f108154;
  dependencyMap = reactrouter_v4;
  let items = arg5;
  if (arg5 === undefined) {
    items = [];
  }
  closure_3 = arg6;
  function normalizeTransactionName(pathname) {
    if (0 !== items.length) {
      if (closure_3) {
        const tmp4 = matchRoutes(tmp, pathname, tmp2);
        for (const item10012 of tmp4) {
          if (item10012.match.isExact) {
            items = [item10012.match.path, ];
            let str = "route";
            items[1] = "route";
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
      if (require("feedbackAsyncIntegration").WINDOW.location) {
        pathname = tmp(889).WINDOW.location.pathname;
      }
      tmp = _require;
    }
    if (pathname) {
      [tmp5, tmp6] = items(normalizeTransactionName(pathname), 2);
      require("feedbackAsyncIntegration");
      let obj = { name: tmp5, attributes: null };
      obj = {};
      obj[require("module_682").SEMANTIC_ATTRIBUTE_SENTRY_OP] = "pageload";
      let _HermesInternal = HermesInternal;
      obj[require("module_682").SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.pageload.react." + reactrouter_v4;
      obj[require("module_682").SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = tmp6;
      obj.attributes = obj;
      let result = obj.startBrowserTracingPageLoadSpan(f108154, obj);
      let tmp4 = items(normalizeTransactionName(pathname), 2);
    }
  }
  let listen = arg2;
  if (arg2) {
    listen = location.listen;
  }
  if (listen) {
    location.listen((pathname, arg1) => {
      if (arg1) {
        if ("PUSH" === arg1) {
          [tmp5, tmp6] = _slicedToArray(normalizeTransactionName(pathname.pathname), 2);
          let obj = { name: tmp5, attributes: null };
          obj = {};
          obj[_mod682.SEMANTIC_ATTRIBUTE_SENTRY_OP] = "navigation";
          const _HermesInternal = HermesInternal;
          obj[_mod682.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.navigation.react." + closure_1;
          obj[_mod682.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = tmp6;
          obj.attributes = obj;
          const result = obj.startBrowserTracingNavigationSpan(closure_0, obj);
          const tmp4 = _slicedToArray(normalizeTransactionName(pathname.pathname), 2);
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
      let match = closure_1_1(closure_1_0, path);
    } else {
      let arr = closure_1_2;
      if (closure_1_2.length) {
        match = arr[arr.length - 1].match;
      } else {
        match = { path: "/", url: "/", params: {}, isExact: "/" === closure_1_0 };
      }
    }
    if (match) {
      items = closure_1_2;
      let obj = { route: path, match };
      arr = closure_1_2.push(obj);
      if (path.routes) {
        let routes = path.routes;
        items = undefined;
        closure_0 = closure_1_0;
        closure_1 = closure_1_1;
        if (items === undefined) {
          items = [];
        }
        routes.some((path) => {
          if (path.path) {
            let match = closure_1_1(closure_1_0, path);
          } else {
            let arr = closure_1_2;
            if (closure_1_2.length) {
              match = arr[arr.length - 1].match;
            } else {
              match = { path: "/", url: "/", params: {}, isExact: "/" === closure_1_0 };
            }
          }
          if (match) {
            items = closure_1_2;
            let obj = { route: path, match };
            arr = closure_1_2.push(obj);
            if (path.routes) {
              let routes = path.routes;
              items = undefined;
              closure_0 = closure_1_0;
              closure_1 = closure_1_1;
              if (items === undefined) {
                items = [];
              }
              routes.some((path) => {
                if (path.path) {
                  let match = closure_1_1(closure_1_0, path);
                } else {
                  let arr = closure_1_2;
                  if (closure_1_2.length) {
                    match = arr[arr.length - 1].match;
                  } else {
                    match = { path: "/", url: "/", params: {}, isExact: "/" === closure_1_0 };
                  }
                }
                if (match) {
                  items = closure_1_2;
                  let obj = { route: path, match };
                  arr = closure_1_2.push(obj);
                  if (path.routes) {
                    let routes = path.routes;
                    items = undefined;
                    closure_0 = closure_1_0;
                    closure_1 = closure_1_1;
                    if (items === undefined) {
                      items = [];
                    }
                    routes.some((path) => {
                      if (path.path) {
                        let match = closure_1_1(closure_1_0, path);
                      } else {
                        let arr = closure_1_2;
                        if (closure_1_2.length) {
                          match = arr[arr.length - 1].match;
                        } else {
                          match = { path: "/", url: "/", params: {}, isExact: "/" === closure_1_0 };
                        }
                      }
                      if (match) {
                        items = closure_1_2;
                        let obj = { route: path, match };
                        arr = closure_1_2.push(obj);
                        if (path.routes) {
                          let routes = path.routes;
                          items = undefined;
                          closure_0 = closure_1_0;
                          closure_1 = closure_1_1;
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
  let obj = {};
  const merged = Object.assign(instrumentNavigation);
  obj.instrumentPageLoad = false;
  obj.instrumentNavigation = false;
  const result = obj.browserTracingIntegration(obj);
  const require = result;
  ({ history: dependencyMap, routes: _slicedToArray, matchPath: noop, instrumentPageLoad } = instrumentNavigation);
  closure_4 = undefined === instrumentPageLoad || instrumentPageLoad;
  instrumentNavigation = instrumentNavigation.instrumentNavigation;
  closure_5 = undefined === instrumentNavigation || instrumentNavigation;
  obj = {};
  const merged1 = Object.assign(result);
  obj.afterAllSetup = function afterAllSetup(f108154) {
    result.afterAllSetup(f108154);
    instrumentReactRouter(f108154, closure_4, closure_5, dependencyMap, "reactrouter_v4", _slicedToArray, noop);
  };
  return obj;
};
export const reactRouterV5BrowserTracingIntegration = function reactRouterV5BrowserTracingIntegration(instrumentNavigation) {
  let obj = {};
  const merged = Object.assign(instrumentNavigation);
  obj.instrumentPageLoad = false;
  obj.instrumentNavigation = false;
  const result = obj.browserTracingIntegration(obj);
  const require = result;
  ({ history: dependencyMap, routes: _slicedToArray, matchPath: noop, instrumentPageLoad } = instrumentNavigation);
  closure_4 = undefined === instrumentPageLoad || instrumentPageLoad;
  instrumentNavigation = instrumentNavigation.instrumentNavigation;
  closure_5 = undefined === instrumentNavigation || instrumentNavigation;
  obj = {};
  const merged1 = Object.assign(result);
  obj.afterAllSetup = function afterAllSetup(f108154) {
    result.afterAllSetup(f108154);
    instrumentReactRouter(f108154, closure_4, closure_5, dependencyMap, "reactrouter_v5", _slicedToArray, noop);
  };
  return obj;
};
export const withSentryRouting = function withSentryRouting(displayName) {
  _require = displayName;
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
        tmp3 = closure_1;
        obj = closure_0(closure_1[3]);
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
      return closure_3.createElement(closure_0, obj);
    }
  }
  WrappedRoute.displayName = "sentryRoute(" + displayName.displayName || displayName.name + ")";
  require("module_1005").hoistNonReactStatics(WrappedRoute, displayName);
  return WrappedRoute;
};