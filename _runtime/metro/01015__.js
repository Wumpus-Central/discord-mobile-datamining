// _runtime/metro/01015__.js
import pickSplat from "../01014_pickSplat.js";

require = arg1;
let dependencyMap = arg6;
function createAsyncHandlerProxy(arg0, item10034, item10008, processResolvedRoutes) {
  _require = item10034;
  dependencyMap = item10008;
  const proxy = new Proxy(arg0, {
    apply(apply, arg1, arg2) {
      let tmp = (function captureCurrentLocation() {
        let obj = closure_0(1014);
        const navigationContext = obj.getNavigationContext();
        let targetPath;
        if (navigationContext != null) {
          targetPath = navigationContext.targetPath;
        }
        if (targetPath) {
          obj = { pathname: navigationContext.targetPath, search: "", hash: "", state: null, key: "default" };
          return obj;
        } else {
          if (undefined !== tmp4(889).WINDOW) {
            try {
              const _location = tmp4(889).WINDOW.location;
              if (_location) {
                obj = { pathname: null, search: null, hash: null, state: null, key: "default" };
                ({ pathname: obj2.pathname, search } = tmp8);
                if (!search) {
                  search = "";
                }
                obj.search = search;
                let str = _location.hash;
                if (!str) {
                  str = "";
                }
                obj.hash = str;
                return obj;
              }
              tmp8 = _location;
            } catch (err) {
              if (tmp2(tmp[2]).DEBUG_BUILD) {
                const debug = tmp2(tmp[3]).debug;
                debug.warn("[React Router] Could not access window.location");
              }
            }
          }
          return null;
        }
      })();
      let navigationContext = pickSplat.getNavigationContext();
      if (navigationContext) {
        let span = navigationContext.span;
      } else {
        let tmp2Result = tmp2(1014);
        span = tmp2Result.getActiveRootSpan();
      }
      const applyResult = apply.apply(arg1, arg2);
      closure_3 = tmp;
      tmp2Result = tmp2(682);
      if (tmp2Result.isThenable(applyResult)) {
        applyResult
          .then((result) => {
            if (Array.isArray(result)) {
              closure_2(result, closure_0, closure_3, span);
            }
          })
          .catch((error) => {
            if (closure_0(1007).DEBUG_BUILD) {
              const debug = closure_0(682).debug;
              const _HermesInternal = HermesInternal;
              debug.warn("Error resolving async handler '" + dependencyMap + "' for route", closure_0, error);
            }
          });
        const nextPromise = applyResult.then((result) => {
          if (Array.isArray(result)) {
            closure_2(result, closure_0, closure_3, span);
          }
        });
      } else {
        const _Array = Array;
        if (Array.isArray(applyResult)) {
          processResolvedRoutes(applyResult, tmp5, tmp, span);
        }
      }
      return applyResult;
    },
  });
  const result = require("00682__.js").addNonEnumerableProperty(proxy, "__sentry_proxied__", true);
  return proxy;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
function checkRouteForAsyncHandler(item10034, processResolvedRoutes) {
  if (item10034.handle) {
    if (typeof item10034.handle === "object") {
      const _Object = Object;
      const keys = Object.keys(item10034.handle);
      for (const item10008 of keys) {
        let tmp2 = item10008;
        let tmp3 = arg0.handle[item10008];
        let tmp4 = tmp3;
        let __sentry_proxied__ = typeof tmp3 !== "function";
        if (typeof tmp3 === "function") {
          __sentry_proxied__ = tmp4.__sentry_proxied__;
        }
        if (!__sentry_proxied__) {
          arg0.handle[tmp2] = createAsyncHandlerProxy(tmp4, arg0, item10008, arg1);
        }
        continue;
      }
    }
  }
  if (Array.isArray(item10034.children)) {
    const children = item10034.children;
    for (const item10034 of children) {
      let tmp14 = checkRouteForAsyncHandler(item10034, arg1);
      continue;
    }
  }
}

export { checkRouteForAsyncHandler };
export { createAsyncHandlerProxy };
export const handleAsyncHandlerResult = function handleAsyncHandlerResult(promise, arg1, arg2, fn, arg4, arg5) {
  _require = arg1;
  dependencyMap = arg2;
  closure_2 = fn;
  closure_3 = arg4;
  closure_4 = arg5;
  if (obj.isThenable(promise)) {
    promise
      .then((result) => {
        if (Array.isArray(result)) {
          closure_2(result, closure_0, closure_3, span);
        }
      })
      .catch((error) => {
        if (closure_0(1007).DEBUG_BUILD) {
          const debug = closure_0(682).debug;
          const _HermesInternal = HermesInternal;
          debug.warn("Error resolving async handler '" + dependencyMap + "' for route", closure_0, error);
        }
      });
    const nextPromise = promise.then((result) => {
      if (Array.isArray(result)) {
        closure_2(result, closure_0, closure_3, span);
      }
    });
  } else {
    const _Array = Array;
    if (Array.isArray(promise)) {
      fn(promise, arg1, tmp, arg5);
    }
  }
};
