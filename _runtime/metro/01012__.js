// _runtime/metro/01012__.js
import pickSplat from "../01011_pickSplat.js";

require = arg1;
let dependencyMap = arg6;
function createAsyncHandlerProxy(arg0, item10034, item10008, processResolvedRoutes) {
  _require = item10034;
  dependencyMap = item10008;
  const proxy = new Proxy(arg0, {
    apply(apply, arg1, arg2) {
      const tmp = (function captureCurrentLocation() {
        const navigationContext = closure_0(1011).getNavigationContext();
        if (navigationContext) {
          let tmp11 = null;
          if (navigationContext.targetPath) {
            const obj3 = { pathname: navigationContext.targetPath, search: "", hash: "", state: null, key: "default" };
            tmp11 = obj3;
          }
          return tmp11;
        } else {
          if (undefined !== closure_0(886).WINDOW) {
            try {
              const _location = closure_0(886).WINDOW.location;
              if (_location) {
                const obj5 = { pathname: null, search: null, hash: null, state: null, key: "default" };
                ({ pathname: obj2.pathname, search } = tmp7);
                if (!search) {
                  search = "";
                }
                obj5.search = search;
                let str = _location.hash;
                if (!str) {
                  str = "";
                }
                obj5.hash = str;
                return obj5;
              }
              tmp7 = _location;
            } catch (err) {
              if (tmp2(tmp[2]).DEBUG_BUILD) {
                const debug = tmp2(tmp[3]).debug;
                debug.warn("[React Router] Could not access window.location");
              }
            }
          }
          return null;
        }
        const obj = closure_0(1011);
      })();
      let navigationContext = pickSplat.getNavigationContext();
      if (navigationContext) {
        let span = navigationContext.span;
      } else {
        span = pickSplat.getActiveRootSpan();
        const tmp2Result = pickSplat;
      }
      const applyResult = apply.apply(arg1, arg2);
      closure_3 = tmp;
      if (tmp2Result2.isThenable(applyResult)) {
        applyResult
          .then((result) => {
            if (Array.isArray(result)) {
              closure_2(result, closure_0, closure_3, span);
            }
          })
          .catch((error) => {
            if (closure_0(1004).DEBUG_BUILD) {
              const debug = closure_0(681).debug;
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
          processResolvedRoutes(applyResult, closure_0, tmp, span);
        }
      }
      return applyResult;
    },
  });
  const result = require("00681__.js").addNonEnumerableProperty(proxy, "__sentry_proxied__", true);
  return proxy;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
function checkRouteForAsyncHandler(item10034, processResolvedRoutes) {
  if (item10034.handle) {
    if (typeof item10034.handle === "object") {
      const _Object = Object;
      const keys = Object.keys(item10034.handle);
      for (const item10008 of keys) {
        let tmp3 = arg0.handle[item10008];
        let tmp4 = tmp3;
        let __sentry_proxied__ = typeof tmp3 !== "function";
        if (typeof tmp3 === "function") {
          __sentry_proxied__ = tmp4.__sentry_proxied__;
        }
        if (!__sentry_proxied__) {
          arg0.handle[item10008] = createAsyncHandlerProxy(tmp4, arg0, item10008, arg1);
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
export function handleAsyncHandlerResult(promise, key, arg2, fn, length, height) {
  _require = key;
  dependencyMap = arg2;
  closure_2 = fn;
  closure_3 = length;
  closure_4 = height;
  if (obj.isThenable(promise)) {
    promise
      .then((result) => {
        if (Array.isArray(result)) {
          closure_2(result, closure_0, closure_3, span);
        }
      })
      .catch((error) => {
        if (closure_0(1004).DEBUG_BUILD) {
          const debug = closure_0(681).debug;
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
      fn(promise, key, tmp, height);
    }
  }
}
