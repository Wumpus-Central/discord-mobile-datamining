// === Module 1011: instrumentReactRouter ===

// Module 1011 (instrumentReactRouter)
import _mod682 from "module_682" /* 682 */;
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 889 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

function instrumentReactRouter(f108679, arg1, arg2, location, reactrouter_v4) {
  _require = f108679;
  dependencyMap = reactrouter_v4;
  let items = _slicedToArray;
  if (_slicedToArray === undefined) {
    items = [];
  }
  closure_3 = noop;
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
      let tmp4 = items(normalizeTransactionName(pathname), 2);
      let obj2 = { name: tmp5, attributes: null };
      let obj3 = {};
      obj3[require("module_682").SEMANTIC_ATTRIBUTE_SENTRY_OP] = "pageload";
      let _HermesInternal = HermesInternal;
      obj3[require("module_682").SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.pageload.react." + reactrouter_v4;
      obj3[require("module_682").SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = tmp6;
      obj2.attributes = obj3;
      let result = require("feedbackAsyncIntegration").startBrowserTracingPageLoadSpan(f108679, obj2);
      let obj = require("feedbackAsyncIntegration");
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
          [tmp5, tmp6] = normalizeTransactionName(pathname.pathname);
          const tmp4 = _slicedToArray(normalizeTransactionName(pathname.pathname), 2);
          const obj2 = { name: tmp5, attributes: null };
          const obj3 = {};
          obj3[_mod682.SEMANTIC_ATTRIBUTE_SENTRY_OP] = "navigation";
          const _HermesInternal = HermesInternal;
          obj3[_mod682.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.navigation.react." + closure_1;
          obj3[_mod682.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = tmp6;
          obj2.attributes = obj3;
          const result = feedbackAsyncIntegration.startBrowserTracingNavigationSpan(closure_0, obj2);
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
    } else if (closure_1_2.length) {
      match = closure_1_2[closure_1_2.length - 1].match;
    } else {
      match = { path: "/", url: "/", params: {}, isExact: "/" === closure_1_0 };
    }
    if (match) {
      items = closure_1_2;
      let obj = { route: path, match };
      closure_1_2.push(obj);
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
          } else if (closure_1_2.length) {
            match = closure_1_2[closure_1_2.length - 1].match;
          } else {
            match = { path: "/", url: "/", params: {}, isExact: "/" === closure_1_0 };
          }
          if (match) {
            items = closure_1_2;
            let obj = { route: path, match };
            closure_1_2.push(obj);
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
                } else if (closure_1_2.length) {
                  match = closure_1_2[closure_1_2.length - 1].match;
                } else {
                  match = { path: "/", url: "/", params: {}, isExact: "/" === closure_1_0 };
                }
                if (match) {
                  items = closure_1_2;
                  let obj = { route: path, match };
                  closure_1_2.push(obj);
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
                      } else if (closure_1_2.length) {
                        match = closure_1_2[closure_1_2.length - 1].match;
                      } else {
                        match = { path: "/", url: "/", params: {}, isExact: "/" === closure_1_0 };
                      }
                      if (match) {
                        items = closure_1_2;
                        let obj = { route: path, match };
                        closure_1_2.push(obj);
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
  const obj2 = {};
  const merged = Object.assign(instrumentNavigation);
  obj2.instrumentPageLoad = false;
  obj2.instrumentNavigation = false;
  const result = feedbackAsyncIntegration.browserTracingIntegration(obj2);
  const require = result;
  ({ history: dependencyMap, routes: _slicedToArray, matchPath: noop, instrumentPageLoad } = instrumentNavigation);
  closure_4 = undefined === instrumentPageLoad || instrumentPageLoad;
  instrumentNavigation = instrumentNavigation.instrumentNavigation;
  closure_5 = undefined === instrumentNavigation || instrumentNavigation;
  const obj3 = {};
  const merged1 = Object.assign(result);
  obj3.afterAllSetup = function afterAllSetup(f108679) {
    result.afterAllSetup(f108679);
    instrumentReactRouter(f108679, closure_4, closure_5, dependencyMap, "reactrouter_v4", _slicedToArray, noop);
  };
  return obj3;
};
export const reactRouterV5BrowserTracingIntegration = function reactRouterV5BrowserTracingIntegration(instrumentNavigation) {
  const obj2 = {};
  const merged = Object.assign(instrumentNavigation);
  obj2.instrumentPageLoad = false;
  obj2.instrumentNavigation = false;
  const result = feedbackAsyncIntegration.browserTracingIntegration(obj2);
  const require = result;
  ({ history: dependencyMap, routes: _slicedToArray, matchPath: noop, instrumentPageLoad } = instrumentNavigation);
  closure_4 = undefined === instrumentPageLoad || instrumentPageLoad;
  instrumentNavigation = instrumentNavigation.instrumentNavigation;
  closure_5 = undefined === instrumentNavigation || instrumentNavigation;
  const obj3 = {};
  const merged1 = Object.assign(result);
  obj3.afterAllSetup = function afterAllSetup(f108679) {
    result.afterAllSetup(f108679);
    instrumentReactRouter(f108679, closure_4, closure_5, dependencyMap, "reactrouter_v5", _slicedToArray, noop);
  };
  return obj3;
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
      obj1 = {};
      merged = Object.assign(displayName);
      return closure_3.createElement(closure_0, obj1);
    }
  }
  WrappedRoute.displayName = "sentryRoute(" + displayName.displayName || displayName.name + ")";
  require("module_1005").hoistNonReactStatics(WrappedRoute, displayName);
  return WrappedRoute;
};