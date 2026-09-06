// discord_app/modules/guild_themes/native/useRoutedActiveGuildTheme.tsx
import NavigationRouteUtils from "../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import RootNavigationRef from "../../main_tabs_v2/RootNavigationRef.native.tsx";
import GuildThemeGuildIdOverrideContextDefault from "GuildThemeGuildIdOverrideContext.tsx";
import GuildThemeResolver from "../GuildThemeResolver.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
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
      }
      return guildId;
    }
  }
}
function getActiveGuildThemeGuildIdSnapshot() {
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
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
            const mapped = routes.map(NavigationRouteUtils.coerceMainRoute);
            found = mapped.find((item) => null != item);
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
const ME = fn(1074).ME;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_themes/native/useRoutedActiveGuildTheme.tsx");

export default function useRoutedActiveGuildTheme() {
  const context = noop.useContext(GuildThemeGuildIdOverrideContextDefault);
  [tmp4, require] = _slicedToArray(noop.useState(getActiveGuildThemeGuildIdSnapshot), 2);
  const effect = noop.useEffect(() => {
    const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
    if (null != rootNavigationRef) {
      function handleStateChange() {
        closure_1_0(getActiveGuildThemeGuildIdSnapshot());
      }
      closure_1_0(getActiveGuildThemeGuildIdSnapshot());
      return rootNavigationRef.addListener("state", handleStateChange);
    }
  }, []);
  if (undefined !== context) {
    let tmp7 = null;
    if (context !== ME) {
      tmp7 = context;
    }
    tmp4 = tmp7;
  }
  const tmp3 = _slicedToArray(noop.useState(getActiveGuildThemeGuildIdSnapshot), 2);
  return GuildThemeResolver.useActiveGuildThemeForGuildId(tmp4);
}
