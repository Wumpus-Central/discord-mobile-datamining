// === Module 4735: useRoutedActiveGuildTheme ===

// Module 4735 (useRoutedActiveGuildTheme)
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4736 */;
import RootNavigationRef from "RootNavigationRef" /* 4737 */;
import reactDefault from "react" /* 4762 */;
import GuildThemeResolver from "GuildThemeResolver" /* 4763 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

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
        if (routes[routes.index] != null) {
          state = tmp.state;
        }
        guildId = getGuildIdFromNavigationState(state);
      }
      return guildId;
    }
  }
}
function getActiveGuildThemeGuildIdSnapshot() {
  const obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      const rootState = rootNavigationRef.getRootState();
      let tmp4;
      if (null != rootState) {
        const routes = rootState.routes;
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
            if (routes[rootState.index] != null) {
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
                  if (routes2[state.index] != null) {
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
          const routes1 = rootState.routes;
          if (routes1 != null) {
            const mapped = routes1.map(NavigationRouteUtils.coerceMainRoute);
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
              if (routes3[state2.index] != null) {
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
                    if (routes4[state3.index] != null) {
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
const ME = Constants.ME;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp4;
  let tmp5;
  let tmp6;
  let obj = react2;
  const cResult = obj.c(2);
  const context = react.useContext(reactDefault);
  [tmp4, require] = _slicedToArray(react.useState(getActiveGuildThemeGuildIdSnapshot), 2);
  const tmp3 = _slicedToArray(react.useState(getActiveGuildThemeGuildIdSnapshot), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l() {
      const obj = RootNavigationRef;
      const rootNavigationRef = obj.getRootNavigationRef();
      if (null != rootNavigationRef) {
        require(getActiveGuildThemeGuildIdSnapshot());
        return rootNavigationRef.addListener("state", function handleStateChange() {
          closure_1_0(getActiveGuildThemeGuildIdSnapshot());
        });
      }
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp5 = fn;
    tmp6 = items;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const effect = react.useEffect(tmp5, tmp6);
  if (undefined !== context) {
    let tmp9 = null;
    if (context !== ME) {
      tmp9 = context;
    }
    tmp4 = tmp9;
  }
  return tmp4;
}) : (() => {
  let tmp3;
  const context = react.useContext(reactDefault);
  [tmp3, require] = react.useState(getActiveGuildThemeGuildIdSnapshot);
  _slicedToArray(react.useState(getActiveGuildThemeGuildIdSnapshot), 2);
  const effect = react.useEffect(() => {
    const obj = RootNavigationRef;
    const rootNavigationRef = obj.getRootNavigationRef();
    if (null != rootNavigationRef) {
      function handleStateChange() {
        closure_1_0(getActiveGuildThemeGuildIdSnapshot());
      }
      require(getActiveGuildThemeGuildIdSnapshot());
      return rootNavigationRef.addListener("state", handleStateChange);
    }
  }, []);
  if (undefined !== context) {
    let tmp6 = null;
    if (context !== ME) {
      tmp6 = context;
    }
    tmp3 = tmp6;
  }
  return tmp3;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const tmp = closure_8();
  const obj = GuildThemeResolver;
  return obj.useActiveGuildThemeForGuildId(tmp);
}) : (() => {
  const tmp = closure_8();
  const obj = GuildThemeResolver;
  return obj.useActiveGuildThemeForGuildId(tmp);
});
const result = size.fileFinishedImporting("modules/guild_themes/native/useRoutedActiveGuildTheme.tsx");

export default tmp2;