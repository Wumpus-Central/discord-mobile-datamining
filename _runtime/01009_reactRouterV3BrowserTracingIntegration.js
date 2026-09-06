// _runtime/01009_reactRouterV3BrowserTracingIntegration.js
import _mod682 from "metro/00682__.js";
import feedbackAsyncIntegration from "00889_feedbackAsyncIntegration.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const reactRouterV3BrowserTracingIntegration = function reactRouterV3BrowserTracingIntegration(
  instrumentNavigation,
) {
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
    let f108154 = arg0;
    f108154.afterAllSetup(arg0);
    let _location = closure_4;
    if (closure_4) {
      _location = result(889).WINDOW.location;
    }
    if (_location) {
      const _location2 = result(889).WINDOW.location;
      f108154 = (name) => {
        let str = arg1;
        if (arg1 === undefined) {
          str = "url";
        }
        let obj = { name, attributes: null };
        obj = {
          [closure_3_0(closure_3_1[1]).SEMANTIC_ATTRIBUTE_SENTRY_OP]: "pageload",
          [closure_3_0(closure_3_1[1]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.pageload.react.reactrouter_v3",
        };
        obj[_mod682.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = str;
        obj.attributes = obj;
        result = obj.startBrowserTracingPageLoadSpan(f108154, obj);
      };
      const pathname = _location2.pathname;
      let obj = { location: _location2, routes };
      closure_3(obj, (arg0, arg1, routes) => {
        if (!arg0) {
          if (routes) {
            const arr = routes.routes || [];
            const _Array = Array;
            str2 = "";
            if (Array.isArray(arr)) {
              str2 = "";
              if (0 !== arr.length) {
                const found = arr.filter((path) => path.path);
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
                str2 = substr.reduce((acc, path) => {
                  path = path.path;
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
                let tmp8 = f120409(str2, "route");
              }
              return tmp8;
            }
            tmp8 = f120409(str2);
          }
        }
        return f120409(str2);
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
          const f120409 = (name) => {
            let str = arg1;
            if (arg1 === undefined) {
              str = "url";
            }
            result(889);
            let obj = { name, attributes: null };
            obj = {
              [closure_3_0(closure_3_1[1]).SEMANTIC_ATTRIBUTE_SENTRY_OP]: "navigation",
              [closure_3_0(closure_3_1[1]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.navigation.react.reactrouter_v3",
            };
            obj[result(682).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = str;
            obj.attributes = obj;
            result = obj.startBrowserTracingNavigationSpan(f120409, obj);
          };
          let obj = { location: action, routes };
          closure_2_3(obj, (arg0, arg1, routes) => {
            if (!arg0) {
              if (routes) {
                const arr = routes.routes || [];
                const _Array = Array;
                str2 = "";
                if (Array.isArray(arr)) {
                  str2 = "";
                  if (0 !== arr.length) {
                    const found = arr.filter((path) => path.path);
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
                    str2 = substr.reduce((acc, path) => {
                      path = path.path;
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
                    let tmp8 = f120409(str2, "route");
                  }
                  return tmp8;
                }
                tmp8 = f120409(str2);
              }
            }
            return f120409(str2);
          });
        }
      });
    }
  };
  return obj;
};
