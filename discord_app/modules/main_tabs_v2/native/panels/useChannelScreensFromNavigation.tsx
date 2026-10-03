// === Module 15923: useChannelScreensFromNavigation ===

// Module 15923 (useChannelScreensFromNavigation)
import NavigationRouteUtils from "NavigationRouteUtils" /* 4736 */;
import RootNavigationRef from "RootNavigationRef" /* 4737 */;
import useChatLayoutDefault from "useChatLayout" /* 4739 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4699 */;

const require = globalThis.__r;

require = fn;
function getActiveTabsRoute(coerceTabsRouteResult) {
  if (null != coerceTabsRouteResult) {
    const state3 = coerceTabsRouteResult.state;
    let tmp3;
    if (state3 != null) {
      state = coerceTabsRouteResult.state;
      let index;
      if (state != null) {
        index = state.index;
      }
      if (index == null) {
        const state2 = coerceTabsRouteResult.state;
        let length;
        if (state2 != null) {
          length = state2.routes.length;
        }
        index = length - 1;
      }
      tmp3 = state3.routes[index];
    }
    if (null != tmp3) {
      return tmp3;
    } else {
      const params = coerceTabsRouteResult.params;
      let screen;
      if (params != null) {
        screen = params.screen;
      }
      if (null != screen) {
        const obj2 = { key: "resolved", name: coerceTabsRouteResult.params.screen, params: coerceTabsRouteResult.params.params };
        return obj2;
      } else {
        const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
        let isReadyResult;
        if (rootNavigationRef != null) {
          isReadyResult = rootNavigationRef.isReady();
        }
        if (true === isReadyResult) {
          return rootNavigationRef.getCurrentRoute();
        }
      }
    }
  }
}
function resolveBackgroundScreen(state) {
  const obj = NavigationRouteUtils;
  const coerceTabsRouteResult = obj.coerceTabsRoute(state.routes[0]);
  if (null == coerceTabsRouteResult) {
    return [];
  } else {
    const tmp11 = getActiveTabsRoute(coerceTabsRouteResult);
    if (null == tmp11) {
      return [];
    } else {
      const coerceGuildsRouteResult = NavigationRouteUtils.coerceGuildsRoute(tmp11);
      if (null == coerceGuildsRouteResult) {
        return [];
      } else {
        const params3 = coerceGuildsRouteResult.params;
        if (params3 != null) {
          const guildId = params3.guildId;
        }
        const params = coerceGuildsRouteResult.params;
        let channelId;
        if (params != null) {
          channelId = params.channelId;
        }
        if (null == channelId) {
          return [];
        } else {
          if (!isStaticChannelRoute(channelId)) {
            if (null == ChannelStore.getChannel(channelId)) {
              return [];
            }
          }
          const params2 = coerceGuildsRouteResult.params;
          let search;
          if (params2 != null) {
            search = params2.search;
          }
          if (search != null) {
            if (search) {
              let BACKGROUND_SAVED = obj.FALLBACK_RENDERED;
            }
            const obj2 = { index: 0, type: BACKGROUND_SAVED, guildId, channelId, showCreateThread: false };
            const items = [obj2];
            return items;
          }
          BACKGROUND_SAVED = obj.BACKGROUND_SAVED;
        }
      }
      const tmpResult = NavigationRouteUtils;
    }
  }
}
function resolveChannelScreens(state, isChatLockedOpen) {
  const items = [];
  for (let num = 0; num <= state.index; num = num + 1) {
    let obj = NavigationRouteUtils;
    let coerceChannelRouteResult = obj.coerceChannelRoute(state.routes[num]);
    if (null != coerceChannelRouteResult) {
      let obj2 = { index: items.length, type: null, guildId: null, channelId: null, showCreateThread: null };
      obj2.type = obj.DEFAULT;
      obj2.guildId = coerceChannelRouteResult.params.guildId;
      obj2.channelId = coerceChannelRouteResult.params.channelId;
      obj2.showCreateThread = coerceChannelRouteResult.params.showCreateThread;
      let arr = items.push(obj2);
    }
  }
  if (isChatLockedOpen.isChatLockedOpen) {
    const arr2 = resolveBackgroundScreen(state);
    if (arr2.length > 0) {
      const items1 = [];
      HermesBuiltin.arraySpread(items.map((item) => {
        const obj = {};
        const merged = Object.assign(item);
        obj.index = item.index + arr2.length;
        return obj;
      }), HermesBuiltin.arraySpread(arr2, 0));
      return items1;
    }
  }
  let tmp8 = items;
  if (items.length <= 0) {
    tmp8 = resolveBackgroundScreen(state);
  }
  return tmp8;
}
const ME = fn(1085).ME;
const isStaticChannelRoute = fn(2058).isStaticChannelRoute;
const ChannelScreenType = { DEFAULT: 0, [0]: "DEFAULT", BACKGROUND_SAVED: 1, [1]: "BACKGROUND_SAVED", FALLBACK_RENDERED: 2, [2]: "FALLBACK_RENDERED" };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/useChannelScreensFromNavigation.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const _require = arg0;
  const cResult = require("c").c(11);
  const tmp2 = useChatLayoutDefault();
  importDefault = tmp2;
  if (cResult[0] === tmp2) {
    if (cResult[1] === arg0) {
      let tmp3 = cResult[2];
    }
    const tmp5 = _slicedToArray(noop.useState(tmp3), 2);
    dependencyMap = tmp5[1];
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function o(arg0, arg1) {
        if (null != arg0) {
          if (arg0.length > 0) {
            closure_2(arg0);
          }
        }
        const coerceTabsRouteResult = NavigationRouteUtils.coerceTabsRoute(arg1.routes[0]);
        let tmp4;
        if (null != coerceTabsRouteResult) {
          const tmp6 = getActiveTabsRoute(coerceTabsRouteResult);
          if (null != tmp6) {
            const coerceGuildsRouteResult = NavigationRouteUtils.coerceGuildsRoute(tmp6);
            let guildId;
            if (coerceGuildsRouteResult != null) {
              const params = coerceGuildsRouteResult.params;
              if (params != null) {
                guildId = params.guildId;
              }
            }
            tmp4 = guildId;
            const tmpResult = NavigationRouteUtils;
          }
        }
        guildId = tmp4;
        closure_2((arg0) => {
          if (0 === arg0.length) {
            return arg0;
          } else {
            if (null == guildId) {
              let items1 = arg0;
              if (arg0[0].type !== constants.FALLBACK_RENDERED) {
                const obj = {};
                const merged = Object.assign(arg0[0]);
                obj.type = tmp3.FALLBACK_RENDERED;
                const items = [obj];
                items1 = items;
              }
            }
            items1 = [];
          }
        });
      };
      cResult[3] = fn2;
      let tmp7 = fn2;
    } else {
      tmp7 = cResult[3];
    }
    _slicedToArray = tmp7;
    if (cResult[4] === tmp2) {
      if (cResult[5] === arg0) {
        let tmp8 = cResult[6];
        let tmp9 = cResult[7];
      }
      const effect = noop.useEffect(tmp8, tmp9);
      if (cResult[8] !== arg0) {
        class A {
          constructor() {
            handleStateChange = function handleStateChange(data) {
              closure_1_3(resolveChannelScreens(data.data.state, handleStateChange(closure_2[11]).getChatLayout()), data.data.state);
            };
            addListenerResult = handleStateChange.addListener("state", handleStateChange);
            return () => {
              handleStateChange.removeListener("state", handleStateChange);
            };
          }
        }
        let items = [arg0, tmp7];
        cResult[8] = arg0;
        cResult[9] = A;
        cResult[10] = items;
        let tmp12 = items;
      } else {
        class A {
          constructor() {
            handleStateChange = function handleStateChange(data) {
              closure_1_3(resolveChannelScreens(data.data.state, handleStateChange(closure_2[11]).getChatLayout()), data.data.state);
            };
            addListenerResult = handleStateChange.addListener("state", handleStateChange);
            return () => {
              handleStateChange.removeListener("state", handleStateChange);
            };
          }
        }
        tmp12 = cResult[10];
      }
      const effect1 = noop.useEffect(A, tmp12);
      return tmp5[0];
    }
    class R {
      constructor() {
        state = closure_0.getState();
        tmp2 = closure_3(resolveChannelScreens(state, closure_1), state);
        return;
      }
    }
    let items1 = [arg0, tmp2, tmp7];
    cResult[4] = tmp2;
    cResult[5] = arg0;
    cResult[6] = R;
    cResult[7] = items1;
    tmp9 = items1;
    tmp8 = R;
  }
  const fn = function l() {
    const arr = resolveChannelScreens(closure_0.getState(), closure_1);
    if (arr.length > 0) {
      return arr;
    } else {
      let guildId = SelectedGuildStore.getGuildId();
      const channelId = SelectedChannelStore.getChannelId();
      if (null == channelId) {
        let items = [];
      } else {
        const obj = { index: 0, type: null, guildId: null, channelId: null };
        obj.type = obj.FALLBACK_RENDERED;
        if (guildId == null) {
          guildId = ME;
        }
        obj.guildId = guildId;
        obj.channelId = channelId;
        items = [obj];
      }
    }
  };
  cResult[1] = arg0;
  cResult[2] = fn;
  tmp3 = fn;
  let obj = require("c");
}) : ((arg0) => {
  closure_0 = arg0;
  const tmp = useChatLayoutDefault();
  importDefault = tmp;
  [tmp3, dependencyMap] = callback(noop.useState(() => {
    const arr = resolveChannelScreens(closure_0.getState(), closure_1);
    if (arr.length > 0) {
      return arr;
    } else {
      let guildId = SelectedGuildStore.getGuildId();
      const channelId = SelectedChannelStore.getChannelId();
      if (null == channelId) {
        let items = [];
      } else {
        const obj = { index: 0, type: null, guildId: null, channelId: null };
        obj.type = obj.FALLBACK_RENDERED;
        if (guildId == null) {
          guildId = ME;
        }
        obj.guildId = guildId;
        obj.channelId = channelId;
        items = [obj];
      }
    }
  }), 2);
  callback = noop.useCallback((arg0, arg1) => {
    if (null != arg0) {
      if (arg0.length > 0) {
        dependencyMap(arg0);
      }
    }
    const coerceTabsRouteResult = NavigationRouteUtils.coerceTabsRoute(arg1.routes[0]);
    let tmp4;
    if (null != coerceTabsRouteResult) {
      const tmp6 = getActiveTabsRoute(coerceTabsRouteResult);
      if (null != tmp6) {
        const coerceGuildsRouteResult = NavigationRouteUtils.coerceGuildsRoute(tmp6);
        let guildId;
        if (coerceGuildsRouteResult != null) {
          const params = coerceGuildsRouteResult.params;
          if (params != null) {
            guildId = params.guildId;
          }
        }
        tmp4 = guildId;
        const tmpResult = NavigationRouteUtils;
      }
    }
    guildId = tmp4;
    dependencyMap((arg0) => {
      if (0 === arg0.length) {
        return arg0;
      } else {
        if (null == guildId) {
          let items1 = arg0;
          if (arg0[0].type !== constants.FALLBACK_RENDERED) {
            const obj = {};
            const merged = Object.assign(arg0[0]);
            obj.type = tmp3.FALLBACK_RENDERED;
            const items = [obj];
            items1 = items;
          }
        }
        items1 = [];
      }
    });
  }, []);
  let items = [arg0, tmp, callback];
  const effect = noop.useEffect(() => {
    state = closure_0.getState();
    callback(resolveChannelScreens(state, closure_1), state);
  }, items);
  let items1 = [arg0, callback];
  const effect1 = noop.useEffect(() => {
    function handleStateChange(data) {
      callback(resolveChannelScreens(data.data.state, handleStateChange(4739).getChatLayout()), data.data.state);
    }
    handleStateChange.addListener("state", handleStateChange);
    return () => {
      handleStateChange.removeListener("state", handleStateChange);
    };
  }, items1);
  return tmp3;
});
export { ChannelScreenType };
export { getActiveTabsRoute };
export const isActiveTabsGuilds = function isActiveTabsGuilds(state) {
  const coerceTabsRouteResult = NavigationRouteUtils.coerceTabsRoute(state.routes[0]);
  if (null == coerceTabsRouteResult) {
    return false;
  } else {
    const tmp5 = getActiveTabsRoute(coerceTabsRouteResult);
    let tmp6 = null != tmp5;
    if (tmp6) {
      tmp6 = null != NavigationRouteUtils.coerceGuildsRoute(tmp5);
      const tmpResult = NavigationRouteUtils;
    }
    return tmp6;
  }
};