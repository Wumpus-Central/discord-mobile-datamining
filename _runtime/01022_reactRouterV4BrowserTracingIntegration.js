// === Module 1022: reactRouterV4BrowserTracingIntegration ===

// Module 1022 (reactRouterV4BrowserTracingIntegration)
import _mod693 from "module_693" /* 693 */;
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 900 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;

let _require, activeSpan, attr, computedMatch, createElement, currentScope, dependencyMap, isExact, obj1, op, rootSpan, setTransactionNameResult, str2, str3, tmp2, tmp2Result, tmp2Result1, tmp2Result2, updateNameResult;

function instrumentReactRouter(f134637, arg1, arg2, location, reactrouter_v4) {
  let obj2;
  let tmp5;
  let tmp6;
  _require = f134637;
  dependencyMap = reactrouter_v4;
  let items = _slicedToArray;
  if (_slicedToArray === undefined) {
    items = [];
  }
  let closure_3 = react;
  function normalizeTransactionName(pathname) {
    if (0 !== items.length) {
      if (react) {
        const tmp3 = matchRoutes(tmp, pathname, tmp8);
        for (const item10011 of tmp3) {
          if (item10011.match.isExact) {
            items = [item10011.match.path, ];
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
    let pathname;
    if (location.location) {
      pathname = location.location.pathname;
    } else {
      let tmp = _require;
      if (require("feedbackAsyncIntegration").WINDOW.location) {
        pathname = tmp(900).WINDOW.location.pathname;
      }
    }
    if (pathname) {
      let tmp3 = items;
      const tmp7 = _require;
      const tmp8 = dependencyMap;
      [tmp5, tmp6] = items(normalizeTransactionName(pathname), 2);
      let obj = { name: tmp5, attributes: obj2 };
      obj2 = {};
      const tmp4 = items(normalizeTransactionName(pathname), 2);
      const startBrowserTracingPageLoadSpan = require("feedbackAsyncIntegration").startBrowserTracingPageLoadSpan;
      let str = "pageload";
      obj2[require("module_693").SEMANTIC_ATTRIBUTE_SENTRY_OP] = "pageload";
      const tmp10 = globalThis;
      let _HermesInternal = HermesInternal;
      require("feedbackAsyncIntegration");
      obj2[require("module_693").SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.pageload.react." + reactrouter_v4;
      obj2[require("module_693").SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = tmp6;
      let result = startBrowserTracingPageLoadSpan(f134637, obj);
    }
  }
  const tmp12 = arg2 && location.listen;
  if (tmp12) {
    location.listen((pathname, arg1) => {
      let obj2;
      let tmp6;
      let tmp7;
      const tmp = arg1;
      if (tmp) {
        if ("PUSH" === arg1) {
          [tmp6, tmp7] = normalizeTransactionName(pathname.pathname);
          _slicedToArray(normalizeTransactionName(pathname.pathname), 2);
          const obj = { name: tmp6, attributes: obj2 };
          obj2 = {};
          const startBrowserTracingNavigationSpan = feedbackAsyncIntegration.startBrowserTracingNavigationSpan;
          obj2[_mod693.SEMANTIC_ATTRIBUTE_SENTRY_OP] = "navigation";
          const _HermesInternal = HermesInternal;
          feedbackAsyncIntegration;
          obj2[_mod693.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.navigation.react." + reactrouter_v4;
          obj2[_mod693.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = tmp7;
          const result = startBrowserTracingNavigationSpan(closure_0, obj);
        }
      }
    });
  }
}
function matchRoutes(pathname, search, arg2) {
  const f82840 = (path) => {
    let match;
    if (path.path) {
      match = closure_1(search, path);
    } else if (items.length) {
      match = arr[arr.length - 1].match;
    } else {
      match = { path: "/", url: "/", params: {}, isExact: "/" === search };
    }
    if (match) {
      const obj = { route: path, match };
      items.push(obj);
      if (path.routes) {
        const routes = path.routes;
        items = undefined;
        if (items === undefined) {
          items = [];
        }
        routes.some(f82840);
      }
    }
    return match;
  };
  let closure_0 = search;
  let closure_1 = arg2;
  let items = arg3;
  if (arg3 === undefined) {
    items = [];
  }
  pathname.some(f82840);
  return items;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const reactRouterV4BrowserTracingIntegration = function reactRouterV4BrowserTracingIntegration(instrumentNavigation) {
  let instrumentPageLoad;
  const obj = { instrumentPageLoad: false, instrumentNavigation: false };
  const browserTracingIntegration = feedbackAsyncIntegration.browserTracingIntegration;
  feedbackAsyncIntegration;
  const merged = Object.assign(instrumentNavigation);
  const result = browserTracingIntegration(obj);
  const require = result;
  ({ history: dependencyMap, routes: _slicedToArray, matchPath: react, instrumentPageLoad } = instrumentNavigation);
  let closure_4 = undefined === instrumentPageLoad || instrumentPageLoad;
  instrumentNavigation = instrumentNavigation.instrumentNavigation;
  let closure_5 = undefined === instrumentNavigation || instrumentNavigation;
  const obj2 = {
    afterAllSetup(f134637) {
      require.afterAllSetup(f134637);
      instrumentReactRouter(f134637, closure_4, closure_5, dependencyMap, "reactrouter_v4", _slicedToArray, react);
    }
  };
  const merged1 = Object.assign(result);
  return obj2;
};
export const reactRouterV5BrowserTracingIntegration = function reactRouterV5BrowserTracingIntegration(instrumentNavigation) {
  let instrumentPageLoad;
  const obj = { instrumentPageLoad: false, instrumentNavigation: false };
  const browserTracingIntegration = feedbackAsyncIntegration.browserTracingIntegration;
  feedbackAsyncIntegration;
  const merged = Object.assign(instrumentNavigation);
  const result = browserTracingIntegration(obj);
  const require = result;
  ({ history: dependencyMap, routes: _slicedToArray, matchPath: react, instrumentPageLoad } = instrumentNavigation);
  let closure_4 = undefined === instrumentPageLoad || instrumentPageLoad;
  instrumentNavigation = instrumentNavigation.instrumentNavigation;
  let closure_5 = undefined === instrumentNavigation || instrumentNavigation;
  const obj2 = {
    afterAllSetup(f134637) {
      require.afterAllSetup(f134637);
      instrumentReactRouter(f134637, closure_4, closure_5, dependencyMap, "reactrouter_v5", _slicedToArray, react);
    }
  };
  const merged1 = Object.assign(result);
  return obj2;
};
export const withSentryRouting = function withSentryRouting(displayName) {
  _require = displayName;
  const tmp = displayName.displayName || displayName.name;
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
        if (rootSpan) {
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
      createElement = closure_3.createElement;
      merged = Object.assign(displayName);
      return createElement(closure_0, obj1);
    }
  }
  WrappedRoute.displayName = "sentryRoute(" + tmp + ")";
  let obj = require("module_1016");
  obj.hoistNonReactStatics(WrappedRoute, displayName);
  return WrappedRoute;
};