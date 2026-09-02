// _runtime/01147_createAsyncHandlerProxy.js
const require = arg1;
let dependencyMap = arg6;
function createAsyncHandlerProxy(arg0, item10034, item10008, closure_1_18) {
  const _require = item10034;
  dependencyMap = item10008;
  closure_2 = closure_1_18;
  const proxy = new Proxy(arg0, {
    apply(apply) {
      let tmp = (function captureCurrentLocation() {
        let obj = callback(1146);
        const navigationContext = obj.getNavigationContext();
        let targetPath;
        if (navigationContext != null) {
          targetPath = navigationContext.targetPath;
        }
        if (targetPath) {
          obj = { pathname: null, search: "", hash: "", state: null, key: "default" };
          obj[0] = navigationContext.targetPath;
          return obj;
        } else {
          if (undefined !== tmp4(1021).WINDOW) {
            try {
              const _location = tmp4(1021).WINDOW.location;
              if (_location) {
                obj = { pathname: null, search: null, hash: null, state: null, key: "default" };
                ({ pathname: obj2[0], search } = tmp8);
                if (!search) {
                  search = "";
                }
                obj[1] = search;
                let str = _location.hash;
                if (!str) {
                  str = "";
                }
                obj[2] = str;
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
      let navigationContext = item10034(item10008[0]).getNavigationContext();
      if (navigationContext) {
        let span = navigationContext.span;
      } else {
        let tmp2Result = tmp2(tmp3[0]);
        span = tmp2Result.getActiveRootSpan();
      }
      const applyResult = apply.apply(arg1, arg2);
      closure_3 = tmp;
      tmp2Result = tmp2(tmp3[3]);
      if (tmp2Result.isThenable(applyResult)) {
        applyResult
          .then((arg0) => {
            if (Array.isArray(arg0)) {
              closure_2(arg0, closure_0, closure_3, span);
              const tmp = closure_2;
            }
          })
          .catch((arg0) => {
            if (callback(1139).DEBUG_BUILD) {
              const debug = callback(814).debug;
              const _HermesInternal = HermesInternal;
              debug.warn("Error resolving async handler '" + dependencyMap + "' for route", callback, arg0);
            }
          });
        const nextPromise = applyResult.then((arg0) => {
          if (Array.isArray(arg0)) {
            closure_2(arg0, closure_0, closure_3, span);
            const tmp = closure_2;
          }
        });
      } else {
        const _Array = Array;
        if (Array.isArray(applyResult)) {
          closure_2(applyResult, tmp5, tmp, span);
        }
      }
      return applyResult;
    },
  });
  const result = require("00814_registerSpanErrorInstrumentation.js").addNonEnumerableProperty(
    proxy,
    "__sentry_proxied__",
    true,
  );
  return proxy;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
function checkRouteForAsyncHandler(item10034, closure_1_18) {
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
          let tmp18 = tmp3;
          __sentry_proxied__ = tmp4.__sentry_proxied__;
        }
        if (!__sentry_proxied__) {
          let tmp5 = item10008;
          let tmp6 = createAsyncHandlerProxy;
          let tmp7 = tmp3;
          let tmp8 = arg0;
          let tmp9 = tmp2;
          let tmp10 = arg1;
          arg0.handle[tmp2] = createAsyncHandlerProxy(tmp4, arg0, item10008, arg1);
        }
        continue;
      }
    }
  }
  if (Array.isArray(item10034.children)) {
    const children = item10034.children;
    for (const item10034 of children) {
      let tmp13 = checkRouteForAsyncHandler;
      let tmp14 = checkRouteForAsyncHandler(item10034, arg1);
      continue;
    }
  }
}
arg5.checkRouteForAsyncHandler = checkRouteForAsyncHandler;
arg5.createAsyncHandlerProxy = createAsyncHandlerProxy;
arg5.handleAsyncHandlerResult = function handleAsyncHandlerResult(promise) {
  const _require = arg1;
  dependencyMap = arg2;
  closure_2 = arg3;
  closure_3 = arg4;
  closure_4 = arg5;
  if (obj.isThenable(promise)) {
    promise
      .then((arg0) => {
        if (Array.isArray(arg0)) {
          closure_2(arg0, closure_0, closure_3, span);
          const tmp = closure_2;
        }
      })
      .catch((arg0) => {
        if (callback(1139).DEBUG_BUILD) {
          const debug = callback(814).debug;
          const _HermesInternal = HermesInternal;
          debug.warn("Error resolving async handler '" + dependencyMap + "' for route", callback, arg0);
        }
      });
    const nextPromise = promise.then((arg0) => {
      if (Array.isArray(arg0)) {
        closure_2(arg0, closure_0, closure_3, span);
        const tmp = closure_2;
      }
    });
  } else {
    const _Array = Array;
    if (Array.isArray(promise)) {
      arg3(promise, arg1, tmp, arg5);
    }
  }
};
