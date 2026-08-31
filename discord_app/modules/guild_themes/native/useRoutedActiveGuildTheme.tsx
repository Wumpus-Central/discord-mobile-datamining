// === Module 4301: getGuildIdFromNavigationState ===

// Module 4301 (getGuildIdFromNavigationState)
import coerceMainRoute from "coerceMainRoute" /* 4302 */;
import getRootNavigationRef from "getRootNavigationRef" /* 4303 */;
import contextDefault from "context" /* 4328 */;
import resolveSavedActiveGuildTheme from "resolveSavedActiveGuildTheme" /* 4329 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { ME } from "ME" /* 676 */;

require = arg1;
function getGuildIdFromNavigationState(routes) {
  if (null != routes) {
    routes = routes.routes;
    if (null != routes) {
      let guildId;
      if (routes[routes.index] != null) {
        const params = tmp.params;
        if (params != null) {
          guildId = params.guildId;
        }
      }
      if (null == guildId) {
        let state;
        if (tmp != null) {
          state = tmp.state;
        }
        guildId = getGuildIdFromNavigationState(state);
        const tmp3 = getGuildIdFromNavigationState;
      }
      return guildId;
    }
  }
}
function getActiveGuildThemeGuildIdSnapshot() {
  const rootNavigationRef = getRootNavigationRef.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      const rootState = rootNavigationRef.getRootState();
      let tmp4;
      if (null != rootState) {
        let routes = rootState.routes;
        if (null != routes) {
          let guildId;
          if (routes[rootState.index] != null) {
            const params = tmp5.params;
            if (params != null) {
              guildId = params.guildId;
            }
          }
          if (null == guildId) {
            let state;
            if (tmp5 != null) {
              state = tmp5.state;
            }
            let tmp8;
            if (null != state) {
              const routes2 = state.routes;
              if (null != routes2) {
                let guildId1;
                if (routes2[state.index] != null) {
                  const params2 = tmp9.params;
                  if (params2 != null) {
                    guildId1 = params2.guildId;
                  }
                }
                if (null == guildId1) {
                  let state1;
                  if (tmp9 != null) {
                    state1 = tmp9.state;
                  }
                  guildId1 = getGuildIdFromNavigationState(state1);
                  const tmp11 = getGuildIdFromNavigationState;
                }
                tmp8 = guildId1;
              }
            }
            guildId = tmp8;
          }
          tmp4 = guildId;
        }
      }
      if (null == tmp4) {
        let found;
        if (rootState != null) {
          routes = rootState.routes;
          if (routes != null) {
            const mapped = routes.map(coerceMainRoute.coerceMainRoute);
            found = mapped.find((arg0) => null != arg0);
          }
        }
        let state2;
        if (found != null) {
          state2 = found.state;
        }
        let tmp15;
        if (null != state2) {
          const routes3 = state2.routes;
          if (null != routes3) {
            let guildId2;
            if (routes3[state2.index] != null) {
              const params3 = tmp16.params;
              if (params3 != null) {
                guildId2 = params3.guildId;
              }
            }
            if (null == guildId2) {
              let state3;
              if (tmp16 != null) {
                state3 = tmp16.state;
              }
              let tmp19;
              if (null != state3) {
                const routes4 = state3.routes;
                if (null != routes4) {
                  let guildId3;
                  if (routes4[state3.index] != null) {
                    const params4 = tmp20.params;
                    if (params4 != null) {
                      guildId3 = params4.guildId;
                    }
                  }
                  if (null == guildId3) {
                    let state4;
                    if (tmp20 != null) {
                      state4 = tmp20.state;
                    }
                    guildId3 = getGuildIdFromNavigationState(state4);
                    const tmp22 = getGuildIdFromNavigationState;
                  }
                  tmp19 = guildId3;
                }
              }
              guildId2 = tmp19;
            }
            tmp15 = guildId2;
          }
        }
        tmp4 = tmp15;
      }
      let tmp24 = null;
      if (null != tmp4) {
        tmp24 = null;
        if (tmp4 !== ME) {
          tmp24 = tmp4;
        }
      }
      return tmp24;
    }
  }
  return null;
}
const result = require("set").fileFinishedImporting("modules/guild_themes/native/useRoutedActiveGuildTheme.tsx");

export default function useRoutedActiveGuildTheme() {
  const context = React.useContext(contextDefault);
  [tmp4, require] = callback(React.useState(getActiveGuildThemeGuildIdSnapshot), 2);
  const effect = React.useEffect(() => {
    const rootNavigationRef = closure_1_0(closure_1_2[4]).getRootNavigationRef();
    if (null != rootNavigationRef) {
      function handleStateChange() {
        callback(closure_1_7());
      }
      callback(closure_1_7());
      return rootNavigationRef.addListener("state", handleStateChange);
    }
    const obj = closure_1_0(closure_1_2[4]);
  }, []);
  if (undefined !== context) {
    let tmp7 = null;
    if (context !== ME) {
      tmp7 = context;
    }
    tmp4 = tmp7;
  }
  const tmp3 = callback(React.useState(getActiveGuildThemeGuildIdSnapshot), 2);
  return resolveSavedActiveGuildTheme.useActiveGuildThemeForGuildId(tmp4);
};