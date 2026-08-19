// === Module 1144: reactRouterV3BrowserTracingIntegration ===

// Module 1144 (reactRouterV3BrowserTracingIntegration)
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 1024 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.reactRouterV3BrowserTracingIntegration = function reactRouterV3BrowserTracingIntegration(instrumentNavigation) {
  let obj = {};
  const merged = Object.assign(instrumentNavigation);
  obj.instrumentPageLoad = false;
  obj.instrumentNavigation = false;
  let result = obj.browserTracingIntegration(obj);
  require = result;
  ({ history: dependencyMap, routes: closure_2, match: closure_3, instrumentPageLoad } = instrumentNavigation);
  closure_4 = undefined === instrumentPageLoad || instrumentPageLoad;
  instrumentNavigation = instrumentNavigation.instrumentNavigation;
  closure_5 = undefined === instrumentNavigation || instrumentNavigation;
  obj = {};
  const merged1 = Object.assign(result);
  obj.afterAllSetup = function afterAllSetup(arg0) {
    let f103592 = arg0;
    f103592.afterAllSetup(arg0);
    let _location = closure_4;
    if (closure_4) {
      _location = result(dependencyMap[0]).WINDOW.location;
    }
    if (_location) {
      const _location2 = result(dependencyMap[0]).WINDOW.location;
      f103592 = (name) => {
        let str = arg1;
        if (arg1 === undefined) {
          str = "url";
        }
        let obj = result(dependencyMap[0]);
        obj = { [closure_2_0(closure_2_1[1]).SEMANTIC_ATTRIBUTE_SENTRY_OP]: "pageload", [closure_2_0(closure_2_1[1]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.pageload.react.reactrouter_v3" };
        obj[result(dependencyMap[1]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = str;
        result = obj.startBrowserTracingPageLoadSpan(f103592, obj);
      };
      let pathname = _location2.pathname;
      let obj = { location: null, routes: null };
      obj[0] = _location2;
      obj[1] = closure_2;
      callback(obj, (arg0, arg1, routes) => {
        if (!arg0) {
          if (routes) {
            const arr = routes.routes || [];
            const _Array = Array;
            let str2 = "";
            if (Array.isArray(arr)) {
              str2 = "";
              if (0 !== arr.length) {
                const found = arr.filter((item, index) => item.path);
                let diff = found.length - 1;
                let num2 = -1;
                if (0 <= diff) {
                  while (true) {
                    let path = found[diff].path;
                    let startsWithResult;
                    if (path != null) {
                      startsWithResult = path.startsWith("/");
                    }
                    num2 = diff;
                    if (startsWithResult) {
                      break;
                    } else {
                      diff = diff - 1;
                      num2 = -1;
                      if (0 > diff) {
                        break;
                      }
                    }
                  }
                }
                const substr = found.slice(num2);
                str2 = substr.reduce((acc, item, index) => {
                  const path = item.path;
                  let combined = path;
                  if ("/" !== acc) {
                    combined = path;
                    if ("" !== acc) {
                      const _HermesInternal = HermesInternal;
                      combined = "/" + path;
                    }
                  }
                  return "" + acc + combined;
                }, "");
              }
            }
            if (0 !== str2.length) {
              if ("/*" !== str2) {
                let tmp8 = f115531(str2, "route");
              }
              return tmp8;
            }
            tmp8 = f115531(str2);
          }
        }
        return f115531(str2);
      });
    }
    let listen = closure_5;
    if (closure_5) {
      listen = pathname.listen;
    }
    if (listen) {
      pathname.listen((action) => {
        let tmp = "PUSH" !== action.action;
        if (tmp) {
          tmp = "POP" !== action.action;
        }
        if (!tmp) {
          const f115531 = (name) => {
            let str = arg1;
            if (arg1 === undefined) {
              str = "url";
            }
            let obj = f103592(pathname[0]);
            obj = { [closure_2_0(closure_2_1[1]).SEMANTIC_ATTRIBUTE_SENTRY_OP]: "navigation", [closure_2_0(closure_2_1[1]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.navigation.react.reactrouter_v3" };
            obj[f103592(pathname[1]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = str;
            result = obj.startBrowserTracingNavigationSpan(f115531, obj);
          };
          pathname = action.pathname;
          let obj = { location: null, routes: null };
          obj[0] = action;
          obj[1] = closure_1_2;
          closure_1_3(obj, (arg0, arg1, routes) => {
            if (!arg0) {
              if (routes) {
                const arr = routes.routes || [];
                const _Array = Array;
                let str2 = "";
                if (Array.isArray(arr)) {
                  str2 = "";
                  if (0 !== arr.length) {
                    const found = arr.filter((item, index) => item.path);
                    let diff = found.length - 1;
                    let num2 = -1;
                    if (0 <= diff) {
                      while (true) {
                        let path = found[diff].path;
                        let startsWithResult;
                        if (path != null) {
                          startsWithResult = path.startsWith("/");
                        }
                        num2 = diff;
                        if (startsWithResult) {
                          break;
                        } else {
                          diff = diff - 1;
                          num2 = -1;
                          if (0 > diff) {
                            break;
                          }
                        }
                      }
                    }
                    const substr = found.slice(num2);
                    str2 = substr.reduce((acc, item, index) => {
                      const path = item.path;
                      let combined = path;
                      if ("/" !== acc) {
                        combined = path;
                        if ("" !== acc) {
                          const _HermesInternal = HermesInternal;
                          combined = "/" + path;
                        }
                      }
                      return "" + acc + combined;
                    }, "");
                  }
                }
                if (0 !== str2.length) {
                  if ("/*" !== str2) {
                    let tmp8 = f115531(str2, "route");
                  }
                  return tmp8;
                }
                tmp8 = f115531(str2);
              }
            }
            return f115531(str2);
          });
        }
      });
    }
  };
  return obj;
};