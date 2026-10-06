// _runtime/01020_reactRouterV3BrowserTracingIntegration.js
import _mod693 from "metro/00693__.js";
import feedbackAsyncIntegration from "00900_feedbackAsyncIntegration.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const reactRouterV3BrowserTracingIntegration = function reactRouterV3BrowserTracingIntegration(
  instrumentNavigation,
) {
  let closure_2;
  let closure_3;
  let instrumentPageLoad;
  let routes;
  let tmp = feedbackAsyncIntegration;
  let obj = { instrumentPageLoad: false, instrumentNavigation: false };
  const browserTracingIntegration = tmp.browserTracingIntegration;
  const merged = Object.assign(instrumentNavigation);
  let result = browserTracingIntegration(obj);
  require = result;
  ({ history: dependencyMap, routes: closure_2, match: closure_3, instrumentPageLoad } = instrumentNavigation);
  let closure_4 = undefined === instrumentPageLoad || instrumentPageLoad;
  instrumentNavigation = instrumentNavigation.instrumentNavigation;
  let closure_5 = undefined === instrumentNavigation || instrumentNavigation;
  let obj2 = {
    afterAllSetup(arg0) {
      let closure_0 = arg0;
      closure_0.afterAllSetup(arg0);
      const _location = closure_4 && feedbackAsyncIntegration.WINDOW.location;
      if (_location) {
        const _location2 = feedbackAsyncIntegration.WINDOW.location;
        const f134854 = (name) => {
          let obj3;
          let str = arg1;
          if (arg1 === undefined) {
            str = "url";
          }
          const obj2 = { name, attributes: obj3 };
          const obj = feedbackAsyncIntegration;
          obj3 = {
            [closure_3_0(closure_3_1[1]).SEMANTIC_ATTRIBUTE_SENTRY_OP]: "pageload",
            [closure_3_0(closure_3_1[1]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.pageload.react.reactrouter_v3",
          };
          obj3[_mod693.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = str;
          require = obj.startBrowserTracingPageLoadSpan(f134854, obj2);
        };
        const pathname = _location2.pathname;
        let obj = { location: _location2, routes };
        closure_3(obj, (arg0, arg1, routes) => {
          const tmp = arg0;
          if (!tmp) {
            const tmp2 = routes;
            if (tmp2) {
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
                let tmp9;
                if ("/*" !== str2) {
                  tmp9 = f150220(str2, "route");
                }
                return tmp9;
              }
              tmp9 = f150220(str2);
            }
          }
          return f150220(str2);
        });
      }
      const listen = closure_5 && dependencyMap.listen;
      if (listen) {
        dependencyMap.listen((action) => {
          let tmp = "PUSH" !== action.action;
          if (tmp) {
            let str = "POP";
            tmp = "POP" !== action.action;
          }
          if (!tmp) {
            const f150220 = (name) => {
              let obj3;
              let str = arg1;
              if (arg1 === undefined) {
                str = "url";
              }
              const obj2 = { name, attributes: obj3 };
              const obj = closure_0(closure_3_1[0]);
              obj3 = {
                [closure_3_0(closure_3_1[1]).SEMANTIC_ATTRIBUTE_SENTRY_OP]: "navigation",
                [closure_3_0(closure_3_1[1]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.navigation.react.reactrouter_v3",
              };
              obj3[closure_0(closure_3_1[1]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = str;
              result = obj.startBrowserTracingNavigationSpan(f150220, obj2);
            };
            let str2 = action.pathname;
            let obj = { location: action, routes };
            closure_3(obj, (arg0, arg1, routes) => {
              const tmp = arg0;
              if (!tmp) {
                const tmp2 = routes;
                if (tmp2) {
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
                    let tmp9;
                    if ("/*" !== str2) {
                      tmp9 = f150220(str2, "route");
                    }
                    return tmp9;
                  }
                  tmp9 = f150220(str2);
                }
              }
              return f150220(str2);
            });
          }
        });
      }
    },
  };
  const merged1 = Object.assign(result);
  return obj2;
};
