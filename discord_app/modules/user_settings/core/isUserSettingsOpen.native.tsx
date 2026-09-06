// discord_app/modules/user_settings/core/isUserSettingsOpen.native.tsx
import RootNavigationRef from "../../main_tabs_v2/RootNavigationRef.native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function isUserSettingsOpen() {
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/core/isUserSettingsOpen.native.tsx");

export { isUserSettingsOpen };
export const useIsUserSettingsOpen = function useIsUserSettingsOpen() {
  [tmp2, require] = _slicedToArray(noop.useState(isUserSettingsOpen), 2);
  const effect = noop.useEffect(() => {
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
        require(someResult);
      }
    }
    const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
    if (null != rootNavigationRef) {
      rootNavigationRef.addListener("state", handleStateChange);
      return () => {
        rootNavigationRef.removeListener("state", handleStateChange);
      };
    }
  }, []);
  return tmp2;
};