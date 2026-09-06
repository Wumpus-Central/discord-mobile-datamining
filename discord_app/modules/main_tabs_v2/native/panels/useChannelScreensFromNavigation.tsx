// discord_app/modules/main_tabs_v2/native/panels/useChannelScreensFromNavigation.tsx
import NavigationRouteUtils from "../../helpers/NavigationRouteUtils.native.tsx";
import RootNavigationRef from "../../RootNavigationRef.native.tsx";
import useChatLayoutDefault from "../../../chat/native/useChatLayout.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import SelectedChannelStore from "../../../../stores/SelectedChannelStore.tsx";
import SelectedGuildStore from "../../../../stores/SelectedGuildStore.tsx";

require = fn;
function getActiveTabsRoute(coerceTabsRouteResult) {
  if (null != coerceTabsRouteResult) {
    const state3 = coerceTabsRouteResult.state;
    let tmp3;
    if (state3 != null) {
      const state = coerceTabsRouteResult.state;
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
        let obj = {
          key: "resolved",
          name: coerceTabsRouteResult.params.screen,
          params: coerceTabsRouteResult.params.params,
        };
        return obj;
      } else {
        obj = RootNavigationRef;
        const rootNavigationRef = obj.getRootNavigationRef();
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
  let obj = NavigationRouteUtils;
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
            obj = { index: 0, type: BACKGROUND_SAVED, guildId, channelId, showCreateThread: false };
            const items = [obj];
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
      obj = { index: items.length, type: null, guildId: null, channelId: null, showCreateThread: null };
      obj.type = obj.DEFAULT;
      obj.guildId = coerceChannelRouteResult.params.guildId;
      obj.channelId = coerceChannelRouteResult.params.channelId;
      obj.showCreateThread = coerceChannelRouteResult.params.showCreateThread;
      let arr = items.push(obj);
    }
  }
  if (isChatLockedOpen.isChatLockedOpen) {
    const arr2 = resolveBackgroundScreen(state);
    if (arr2.length > 0) {
      const items1 = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(arr2, 0);
      arraySpreadResult = HermesBuiltin.arraySpread(
        items.map((item) => {
          const obj = {};
          const merged = Object.assign(item);
          obj.index = item.index + arr2.length;
          return obj;
        }),
        arraySpreadResult,
      );
      return items1;
    }
  }
  let tmp8 = items;
  if (items.length <= 0) {
    tmp8 = resolveBackgroundScreen(state);
  }
  return tmp8;
}
const ME = fn(1074).ME;
const isStaticChannelRoute = fn(1964).isStaticChannelRoute;
const ChannelScreenType = {
  DEFAULT: 0,
  [0]: "DEFAULT",
  BACKGROUND_SAVED: 1,
  [1]: "BACKGROUND_SAVED",
  FALLBACK_RENDERED: 2,
  [2]: "FALLBACK_RENDERED",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/useChannelScreensFromNavigation.tsx");

export default function useChannelScreensFromNavigation(arg0) {
  closure_0 = arg0;
  const tmp = useChatLayoutDefault();
  importDefault = tmp;
  [tmp3, dependencyMap] = callback(
    noop.useState(() => {
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
    }),
    2,
  );
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
    const state = closure_0.getState();
    callback(resolveChannelScreens(state, closure_1), state);
  }, items);
  let items1 = [arg0, callback];
  const effect1 = noop.useEffect(() => {
    function handleStateChange(data) {
      callback(resolveChannelScreens(data.data.state, handleStateChange(4420).getChatLayout()), data.data.state);
    }
    handleStateChange.addListener("state", handleStateChange);
    return () => {
      handleStateChange.removeListener("state", handleStateChange);
    };
  }, items1);
  return tmp3;
}
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
