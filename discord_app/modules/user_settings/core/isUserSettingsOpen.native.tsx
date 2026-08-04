// discord_app/modules/user_settings/core/isUserSettingsOpen.native.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";

const require = arg1;
function isUserSettingsOpen() {
  const rootNavigationRef = require(4045) /* getRootNavigationRef */.getRootNavigationRef();
  const tmp = null == rootNavigationRef || !rootNavigationRef.isReady();
  let tmp2 = !tmp;
  if (!tmp) {
    const rootState = rootNavigationRef.getRootState();
    let routes;
    if (rootState != null) {
      routes = rootState.routes;
    }
    let someResult = null != routes;
    if (someResult) {
      routes = rootState.routes;
      someResult = routes.some((name) => {
        let tmp = "settings" === name.name;
        if (!tmp) {
          const state = name.state;
          let routes;
          if (state != null) {
            routes = state.routes;
          }
          let someResult = null != routes;
          if (someResult) {
            routes = state.routes;
            someResult = routes.some((name) => {
              let tmp = "settings" === name.name;
              if (!tmp) {
                const state = name.state;
                let routes;
                if (state != null) {
                  routes = state.routes;
                }
                let someResult = null != routes;
                if (someResult) {
                  routes = state.routes;
                  someResult = routes.some((name) => {
                    let tmp = "settings" === name.name;
                    if (!tmp) {
                      const state = name.state;
                      let routes;
                      if (state != null) {
                        routes = state.routes;
                      }
                      let someResult = null != routes;
                      if (someResult) {
                        routes = state.routes;
                        someResult = routes.some((name) => {
                          let tmp = "settings" === name.name;
                          if (!tmp) {
                            const state = name.state;
                            let routes;
                            if (state != null) {
                              routes = state.routes;
                            }
                            let someResult = null != routes;
                            if (someResult) {
                              routes = state.routes;
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
const result = require("getRootNavigationRef").fileFinishedImporting("modules/user_settings/core/isUserSettingsOpen.native.tsx");

export { isUserSettingsOpen };
export const useIsUserSettingsOpen = function useIsUserSettingsOpen() {
  let require;
  let tmp2;
  [tmp2, require] = callback(React.useState(isUserSettingsOpen), 2);
  const effect = React.useEffect(() => {
    function handleStateChange() {
      if (null != rootNavigationRef) {
        const rootState = rootNavigationRef.getRootState();
        let routes;
        if (rootState != null) {
          routes = rootState.routes;
        }
        let someResult = null != routes;
        if (someResult) {
          routes = rootState.routes;
          someResult = routes.some((name) => {
            let tmp = "settings" === name.name;
            if (!tmp) {
              const state = name.state;
              let routes;
              if (state != null) {
                routes = state.routes;
              }
              let someResult = null != routes;
              if (someResult) {
                routes = state.routes;
                someResult = routes.some((name) => {
                  let tmp = "settings" === name.name;
                  if (!tmp) {
                    const state = name.state;
                    let routes;
                    if (state != null) {
                      routes = state.routes;
                    }
                    let someResult = null != routes;
                    if (someResult) {
                      routes = state.routes;
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
        rootNavigationRef(someResult);
      }
    }
    const rootNavigationRef = outer1_0(outer1_1[2]).getRootNavigationRef();
    if (null != rootNavigationRef) {
      rootNavigationRef.addListener("state", handleStateChange);
      return () => {
        rootNavigationRef.removeListener("state", handleStateChange);
      };
    }
    const obj = outer1_0(outer1_1[2]);
  }, []);
  return tmp2;
};