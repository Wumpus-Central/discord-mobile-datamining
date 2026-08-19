// discord_app/modules/user_settings/core/isUserSettingsOpen.native.tsx
import getRootNavigationRef from "../../main_tabs_v2/RootNavigationRef.native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../_runtime/00019_noop.js";

require = fn;
function isUserSettingsOpen() {
  const rootNavigationRef = getRootNavigationRef.getRootNavigationRef();
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
      someResult = routes.some((item, index) => {
        let tmp = "settings" === item.name;
        if (!tmp) {
          const state = item.state;
          let routes;
          if (state != null) {
            routes = state.routes;
          }
          let someResult = null != routes;
          if (someResult) {
            routes = state.routes;
            someResult = routes.some((item, index) => {
              let tmp = "settings" === item.name;
              if (!tmp) {
                const state = item.state;
                let routes;
                if (state != null) {
                  routes = state.routes;
                }
                let someResult = null != routes;
                if (someResult) {
                  routes = state.routes;
                  someResult = routes.some((item, index) => {
                    let tmp = "settings" === item.name;
                    if (!tmp) {
                      const state = item.state;
                      let routes;
                      if (state != null) {
                        routes = state.routes;
                      }
                      let someResult = null != routes;
                      if (someResult) {
                        routes = state.routes;
                        someResult = routes.some((item, index) => {
                          let tmp = "settings" === item.name;
                          if (!tmp) {
                            const state = item.state;
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
const result = require("obj132").fileFinishedImporting("modules/user_settings/core/isUserSettingsOpen.native.tsx");

export { isUserSettingsOpen };
export const useIsUserSettingsOpen = function useIsUserSettingsOpen() {
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
          someResult = routes.some((item, index) => {
            let tmp = "settings" === item.name;
            if (!tmp) {
              const state = item.state;
              let routes;
              if (state != null) {
                routes = state.routes;
              }
              let someResult = null != routes;
              if (someResult) {
                routes = state.routes;
                someResult = routes.some((item, index) => {
                  let tmp = "settings" === item.name;
                  if (!tmp) {
                    const state = item.state;
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
    const rootNavigationRef = getRootNavigationRef.getRootNavigationRef();
    if (null != rootNavigationRef) {
      rootNavigationRef.addListener("state", handleStateChange);
      return () => {
        rootNavigationRef.removeListener("state", handleStateChange);
      };
    }
  }, []);
  return tmp2;
};