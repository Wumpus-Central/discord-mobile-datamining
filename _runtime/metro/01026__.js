// === Module 1026: ? ===

// Module 1026
import _mod693 from "module_693" /* 693 */;
import _mod1025 from "module_1025" /* 1025 */;

const require = globalThis.__r;
let _require, dependencyMap;

const f82998 = (error) => {
  if (item10034(item10008[2]).DEBUG_BUILD) {
    const debug = item10034(item10008[3]).debug;
    const _HermesInternal = HermesInternal;
    debug.warn("Error resolving async handler '" + closure_1 + "' for route", closure_0, error);
  }
};
function createAsyncHandlerProxy(arg0, item10034, item10008, processResolvedRoutes) {
  _require = item10034;
  dependencyMap = item10008;
  let obj = {
    apply(apply, arg1, arg2) {
      let span;
      function captureCurrentLocation() {
        let search;
        const obj = item10034(item10008[0]);
        const navigationContext = obj.getNavigationContext();
        let targetPath;
        if (navigationContext != null) {
          targetPath = navigationContext.targetPath;
        }
        if (targetPath) {
          return { pathname: navigationContext.targetPath, search: "", hash: "", state: null, key: "default" };
        } else {
          if (undefined !== item10034(item10008[1]).WINDOW) {
            try {
              const _location = item10034(item10008[1]).WINDOW.location;
              if (_location) {
                const obj5 = { pathname: null, search, hash: str, state: null, key: "default" };
                ({ pathname: obj2.pathname, search } = _location);
                if (!search) {
                  search = "";
                }
                return obj5;
              }
            } catch (err) {
              if (item10034(item10008[2]).DEBUG_BUILD) {
                const debug = item10034(item10008[3]).debug;
                debug.warn("[React Router] Could not access window.location");
              }
            }
          }
          return null;
        }
      }
      const tmp = captureCurrentLocation();
      let obj = _mod1025;
      let navigationContext = obj.getNavigationContext();
      if (navigationContext) {
        span = navigationContext.span;
      } else {
        const tmp2Result = _mod1025;
        span = tmp2Result.getActiveRootSpan();
      }
      const applyResult = apply.apply(arg1, arg2);
      let closure_3 = tmp;
      const tmp2Result2 = _mod693;
      if (tmp2Result2.isThenable(applyResult)) {
        const nextPromise = applyResult.then((result) => {
          if (Array.isArray(result)) {
            closure_2(result, closure_0, closure_3, span);
          }
        });
        nextPromise.catch(f82998);
      } else {
        const _Array = Array;
        if (Array.isArray(applyResult)) {
          processResolvedRoutes(applyResult, item10034, tmp, span);
        }
      }
      return applyResult;
    }
  };
  const proxy = new Proxy(arg0, obj);
  const obj2 = require("module_693");
  const result = obj2.addNonEnumerableProperty(proxy, "__sentry_proxied__", true);
  return proxy;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
function checkRouteForAsyncHandler(item10034, processResolvedRoutes) {
  if (item10034.handle) {
    if (typeof item10034.handle === "object") {
      const _Object = Object;
      const keys = Object.keys(item10034.handle);
      for (const item10008 of keys) {
        let tmp3 = item10034.handle[item10008];
        let tmp4 = tmp3;
        let __sentry_proxied__ = typeof tmp3 !== "function";
        if (!__sentry_proxied__) {
          __sentry_proxied__ = tmp4.__sentry_proxied__;
        }
        if (!__sentry_proxied__) {
          item10034.handle[item10008] = createAsyncHandlerProxy(tmp4, item10034, item10008, processResolvedRoutes);
        }
        continue;
      }
    }
  }
  if (Array.isArray(item10034.children)) {
    const children = item10034.children;
    for (const item10034 of children) {
      let tmp14 = checkRouteForAsyncHandler(item10034, processResolvedRoutes);
      continue;
    }
  }
}

export { checkRouteForAsyncHandler };
export { createAsyncHandlerProxy };
export const handleAsyncHandlerResult = function handleAsyncHandlerResult(promise, arg1, arg2, fn, arg4, arg5) {
  let closure_0;
  let closure_1;
  _require = arg1;
  dependencyMap = arg2;
  let closure_2 = fn;
  let closure_3 = arg4;
  let closure_4 = arg5;
  const obj = require("module_693");
  if (obj.isThenable(promise)) {
    const nextPromise = promise.then((result) => {
      if (Array.isArray(result)) {
        closure_2(result, closure_0, closure_3, span);
      }
    });
    nextPromise.catch(f82998);
  } else {
    const _Array = Array;
    if (Array.isArray(promise)) {
      fn(promise, arg1, arg4, arg5);
    }
  }
};