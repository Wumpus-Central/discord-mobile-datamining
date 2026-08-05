// _runtime/01144_reactRouterV3BrowserTracingIntegration.js
let require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.reactRouterV3BrowserTracingIntegration = function reactRouterV3BrowserTracingIntegration(instrumentNavigation) {
  let closure_2;
  let closure_3;
  let dependencyMap;
  let instrumentPageLoad;
  let obj = require("01024_feedbackAsyncIntegration.js") /* feedbackAsyncIntegration */;
  obj = {};
  const merged = Object.assign(instrumentNavigation);
  obj.instrumentPageLoad = false;
  obj.instrumentNavigation = false;
  let result = obj.browserTracingIntegration(obj);
  require = result;
  ({ history: dependencyMap, routes: closure_2, match: closure_3, instrumentPageLoad } = instrumentNavigation);
  let closure_4 = undefined === instrumentPageLoad || instrumentPageLoad;
  instrumentNavigation = instrumentNavigation.instrumentNavigation;
  let closure_5 = undefined === instrumentNavigation || instrumentNavigation;
  obj = {};
  const merged1 = Object.assign(result);
  obj.afterAllSetup = function afterAllSetup(arg0) {
    let f102430 = arg0;
    f102430.afterAllSetup(arg0);
    let _location = closure_4;
    if (closure_4) {
      _location = result(outer1_1[0]).WINDOW.location;
    }
    if (_location) {
      const _location2 = result(outer1_1[0]).WINDOW.location;
      f102430 = (name) => {
        let str = arg1;
        if (arg1 === undefined) {
          str = "url";
        }
        let obj = result(outer2_1[0]);
        obj = { name, attributes: obj };
        obj = { [outer2_0(outer2_1[1]).SEMANTIC_ATTRIBUTE_SENTRY_OP]: "pageload", [outer2_0(outer2_1[1]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.pageload.react.reactrouter_v3" };
        obj[result(outer2_1[1]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = str;
        result = obj.startBrowserTracingPageLoadSpan(f102430, obj);
      };
      let pathname;
      pathname = _location2.pathname;
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
                const found = arr.filter((path) => path.path);
                let diff = found.length - 1;
                let num2 = -1;
                if (0 <= diff) {
                  while (true) {
                    let path = found[diff].path;
                    let tmp4 = diff;
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
                str2 = substr.reduce((arg0, path) => {
                  path = path.path;
                  let combined = path;
                  if ("/" !== arg0) {
                    combined = path;
                    if ("" !== arg0) {
                      const _HermesInternal = HermesInternal;
                      combined = "/" + path;
                    }
                  }
                  return "" + arg0 + combined;
                }, "");
              }
            }
            if (0 !== str2.length) {
              if ("/*" !== str2) {
                let tmp8 = f114212(str2, "route");
              }
              return tmp8;
            }
            tmp8 = f114212(str2);
          }
        }
        return f114212(str2);
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
          const f114212 = (name) => {
            let str = arg1;
            if (arg1 === undefined) {
              str = "url";
            }
            let obj = f102430(pathname[0]);
            obj = { name, attributes: obj };
            obj = { [outer2_0(outer2_1[1]).SEMANTIC_ATTRIBUTE_SENTRY_OP]: "navigation", [outer2_0(outer2_1[1]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.navigation.react.reactrouter_v3" };
            obj[f102430(pathname[1]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = str;
            const result = obj.startBrowserTracingNavigationSpan(f114212, obj);
          };
          const pathname = action.pathname;
          let obj = { location: null, routes: null };
          obj[0] = action;
          obj[1] = outer1_2;
          outer1_3(obj, (arg0, arg1, routes) => {
            if (!arg0) {
              if (routes) {
                const arr = routes.routes || [];
                const _Array = Array;
                let str2 = "";
                if (Array.isArray(arr)) {
                  str2 = "";
                  if (0 !== arr.length) {
                    const found = arr.filter((path) => path.path);
                    let diff = found.length - 1;
                    let num2 = -1;
                    if (0 <= diff) {
                      while (true) {
                        let path = found[diff].path;
                        let tmp4 = diff;
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
                    str2 = substr.reduce((arg0, path) => {
                      path = path.path;
                      let combined = path;
                      if ("/" !== arg0) {
                        combined = path;
                        if ("" !== arg0) {
                          const _HermesInternal = HermesInternal;
                          combined = "/" + path;
                        }
                      }
                      return "" + arg0 + combined;
                    }, "");
                  }
                }
                if (0 !== str2.length) {
                  if ("/*" !== str2) {
                    let tmp8 = f114212(str2, "route");
                  }
                  return tmp8;
                }
                tmp8 = f114212(str2);
              }
            }
            return f114212(str2);
          });
        }
      });
    }
  };
  return obj;
};