// === Module 1065: wrapExpoRouter ===

// Module 1065 (wrapExpoRouter)
import _mod693 from "module_693" /* 693 */;
import SPAN_ORIGIN_AUTO_INTERACTION from "SPAN_ORIGIN_AUTO_INTERACTION" /* 1032 */;

require = arg1;
const dependencyMap = arg6;

export function wrapExpoRouter(prefetch) {
  let prefetch1;
  if (null != prefetch) {
    prefetch1 = prefetch.prefetch;
  }
  if (prefetch1) {
    if (prefetch.__sentryPrefetchWrapped) {
      return prefetch;
    } else {
      prefetch = prefetch.prefetch;
      closure_0 = prefetch.bind(prefetch);
      prefetch.prefetch = (pathname) => {
        let str = pathname;
        if (typeof pathname !== "string") {
          if (pathname) {
            pathname = typeof pathname === "object";
          }
          if (pathname) {
            pathname = "pathname" in pathname;
          }
          if (pathname) {
            pathname = pathname.pathname;
          }
          str = "unknown";
          if (pathname) {
            str = pathname.pathname;
          }
        }
        const obj4 = { op: "navigation.prefetch", name: "Prefetch " + str, attributes: null };
        const obj5 = { "sentry.origin": SPAN_ORIGIN_AUTO_INTERACTION.SPAN_ORIGIN_AUTO_EXPO_ROUTER_PREFETCH, "route.href": null, "route.name": null };
        let json = pathname;
        if (typeof pathname !== "string") {
          const _JSON = JSON;
          json = JSON.stringify(pathname);
        }
        obj5["route.href"] = json;
        obj5["route.name"] = str;
        obj4.attributes = obj5;
        const startInactiveSpanResult = _mod693.startInactiveSpan(obj4);
        try {
          const tmp8 = startInactiveSpanResult(pathname);
          if (tmp8) {
            if (typeof promise === "object") {
              if ("then" in promise) {
                if (typeof promise.then === "function") {
                  let catchPromise = promise.then((result) => {
                    if (null != startInactiveSpanResult) {
                      const obj2 = { code: startInactiveSpanResult(693).SPAN_STATUS_OK };
                      startInactiveSpanResult.setStatus(obj2);
                    }
                    if (null != startInactiveSpanResult) {
                      startInactiveSpanResult.end();
                    }
                    return result;
                  }).catch((error) => {
                    if (null != startInactiveSpanResult) {
                      const obj2 = { code: startInactiveSpanResult(693).SPAN_STATUS_ERROR, message: null };
                      const _String = String;
                      obj2.message = String(error);
                      startInactiveSpanResult.setStatus(obj2);
                    }
                    if (null != startInactiveSpanResult) {
                      startInactiveSpanResult.end();
                    }
                    throw error;
                  });
                  const nextPromise = promise.then((result) => {
                    if (null != startInactiveSpanResult) {
                      const obj2 = { code: startInactiveSpanResult(693).SPAN_STATUS_OK };
                      startInactiveSpanResult.setStatus(obj2);
                    }
                    if (null != startInactiveSpanResult) {
                      startInactiveSpanResult.end();
                    }
                    return result;
                  });
                }
                return catchPromise;
              }
            }
          }
          if (null != startInactiveSpanResult) {
            const obj6 = { code: _mod693.SPAN_STATUS_OK };
            startInactiveSpanResult.setStatus(obj6);
          }
          if (null != startInactiveSpanResult) {
            startInactiveSpanResult.end();
          }
          catchPromise = tmp8;
        } catch (tmp16) {
          if (null != obj) {
            const obj7 = { code: tmp3(tmp2[0]).SPAN_STATUS_ERROR, message: obj2.String(tmp16) };
            obj.setStatus(obj7);
          }
          if (null != obj) {
            obj.end();
          }
          throw tmp16;
        }
      };
      prefetch.__sentryPrefetchWrapped = true;
      return prefetch;
    }
  } else {
    return prefetch;
  }
}