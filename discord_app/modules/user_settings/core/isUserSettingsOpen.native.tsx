// === Module 13587: isUserSettingsOpen ===

// Module 13587 (isUserSettingsOpen)
import RootNavigationRef from "RootNavigationRef" /* 4743 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function isUserSettingsOpen() {
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  const tmp = null == rootNavigationRef || !rootNavigationRef.isReady();
  let tmp2 = !tmp;
  if (!tmp) {
    const rootState = rootNavigationRef.getRootState();
    let routes1;
    if (rootState != null) {
      routes1 = rootState.routes;
    }
    let someResult = null != routes1;
    if (someResult) {
      const routes = rootState.routes;
      someResult = routes.some((name) => {
        let tmp = "settings" === name.name;
        if (!tmp) {
          state = name.state;
          let routes1;
          if (state != null) {
            routes1 = state.routes;
          }
          let someResult = null != routes1;
          if (someResult) {
            const routes = state.routes;
            someResult = routes.some((name) => {
              let tmp = "settings" === name.name;
              if (!tmp) {
                state = name.state;
                let routes1;
                if (state != null) {
                  routes1 = state.routes;
                }
                let someResult = null != routes1;
                if (someResult) {
                  const routes = state.routes;
                  someResult = routes.some((name) => {
                    let tmp = "settings" === name.name;
                    if (!tmp) {
                      state = name.state;
                      let routes1;
                      if (state != null) {
                        routes1 = state.routes;
                      }
                      let someResult = null != routes1;
                      if (someResult) {
                        const routes = state.routes;
                        someResult = routes.some((name) => {
                          let tmp = "settings" === name.name;
                          if (!tmp) {
                            state = name.state;
                            let routes1;
                            if (state != null) {
                              routes1 = state.routes;
                            }
                            let someResult = null != routes1;
                            if (someResult) {
                              const routes = state.routes;
                              someResult = routes.some(() => { ... });
                            }
                            tmp = someResult;
                          }
                          return tmp;
                        });
                      }
                      tmp = someResult;
                    }
                    return tmp;
                  });
                }
                tmp = someResult;
              }
              return tmp;
            });
          }
          tmp = someResult;
        }
        return tmp;
      });
    }
    tmp2 = someResult;
  }
  return tmp2;
}
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/core/isUserSettingsOpen.native.tsx");

export { isUserSettingsOpen };
export const useIsUserSettingsOpen = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = require("c").c(2);
  const tmp2 = _slicedToArray(noop.useState(isUserSettingsOpen), 2);
  _require = tmp2[1];
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      const rootNavigationRef = closure_0(dependencyMap[2]).getRootNavigationRef();
      if (null != rootNavigationRef) {
        function handleStateChange() {
          if (null != rootNavigationRef) {
            const rootState = rootNavigationRef.getRootState();
            let routes1;
            if (rootState != null) {
              routes1 = rootState.routes;
            }
            let someResult = null != routes1;
            if (someResult) {
              const routes = rootState.routes;
              someResult = routes.some((name) => {
                let tmp = "settings" === name.name;
                if (!tmp) {
                  state = name.state;
                  let routes1;
                  if (state != null) {
                    routes1 = state.routes;
                  }
                  let someResult = null != routes1;
                  if (someResult) {
                    const routes = state.routes;
                    someResult = routes.some((name) => {
                      let tmp = "settings" === name.name;
                      if (!tmp) {
                        state = name.state;
                        let routes1;
                        if (state != null) {
                          routes1 = state.routes;
                        }
                        let someResult = null != routes1;
                        if (someResult) {
                          const routes = state.routes;
                          someResult = routes.some(() => { ... });
                        }
                        tmp = someResult;
                      }
                      return tmp;
                    });
                  }
                  tmp = someResult;
                }
                return tmp;
              });
            }
            closure_0(someResult);
          }
        }
        rootNavigationRef.addListener("state", handleStateChange);
        return () => {
          rootNavigationRef.removeListener("state", handleStateChange);
        };
      }
      const obj = closure_0(dependencyMap[2]);
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp3 = fn;
    tmp4 = items;
  } else {
    [tmp3, tmp4] = cResult;
  }
  const effect = noop.useEffect(tmp3, tmp4);
  return tmp2[0];
}) : (() => {
  [tmp2, require] = noop.useState(isUserSettingsOpen);
  const effect = noop.useEffect(() => {
    function handleStateChange() {
      if (null != rootNavigationRef) {
        const rootState = rootNavigationRef.getRootState();
        let routes1;
        if (rootState != null) {
          routes1 = rootState.routes;
        }
        let someResult = null != routes1;
        if (someResult) {
          let routes = rootState.routes;
          someResult = routes.some((name) => {
            let tmp = "settings" === name.name;
            if (!tmp) {
              state = name.state;
              let routes1;
              if (state != null) {
                routes1 = state.routes;
              }
              let someResult = null != routes1;
              if (someResult) {
                const routes = state.routes;
                someResult = routes.some((name) => {
                  let tmp = "settings" === name.name;
                  if (!tmp) {
                    state = name.state;
                    let routes1;
                    if (state != null) {
                      routes1 = state.routes;
                    }
                    let someResult = null != routes1;
                    if (someResult) {
                      const routes = state.routes;
                      someResult = routes.some(() => { ... });
                    }
                    tmp = someResult;
                  }
                  return tmp;
                });
              }
              tmp = someResult;
            }
            return tmp;
          });
        }
        _require(someResult);
      }
    }
    const rootNavigationRef = require("RootNavigationRef").getRootNavigationRef();
    if (null != rootNavigationRef) {
      rootNavigationRef.addListener("state", handleStateChange);
      return () => {
        rootNavigationRef.removeListener("state", handleStateChange);
      };
    }
    const obj = require("RootNavigationRef");
  }, []);
  return tmp2;
});