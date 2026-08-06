// discord_app/modules/main_tabs_v2/native/panels/useChannelScreensFromNavigation.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import ensureGuildLoaded from "ensureGuildLoaded";
import handleConnectionOpen from "handleConnectionOpen";
import closure_7 from "handleConnectionOpen";
import { ME } from "ME";
import { isStaticChannelRoute } from "set";
import { useChatLayout } from "../../../chat/native/useChatLayout.tsx";
import { navigationToRootTabHelper } from "../../helpers/NavigationRouteUtils.native.tsx";
import { getRootNavigationRef } from "../../RootNavigationRef.native.tsx";

const require = arg1;
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
        let obj = { key: "resolved", name: null, params: null };
        obj[1] = coerceTabsRouteResult.params.screen;
        obj[2] = coerceTabsRouteResult.params.params;
        return obj;
      } else {
        obj = getRootNavigationRef;
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
function resolveBackgroundScreen(index) {
  let obj = navigationToRootTabHelper;
  const coerceTabsRouteResult = obj.coerceTabsRoute(index.routes[0]);
  if (null == coerceTabsRouteResult) {
    return [];
  } else {
    const tmp11 = getActiveTabsRoute(coerceTabsRouteResult);
    if (null == tmp11) {
      return [];
    } else {
      const coerceGuildsRouteResult = navigationToRootTabHelper.coerceGuildsRoute(tmp11);
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
            if (null == channel.getChannel(channelId)) {
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
            obj = { index: 0, type: null, guildId: null, channelId: null, showCreateThread: false };
            obj[1] = BACKGROUND_SAVED;
            obj[2] = guildId;
            obj[3] = channelId;
            const items = [obj];
            return items;
          }
          BACKGROUND_SAVED = obj.BACKGROUND_SAVED;
        }
      }
      const tmpResult = navigationToRootTabHelper;
    }
  }
}
function resolveChannelScreens(index, isChatLockedOpen) {
  const items = [];
  for (let num = 0; num <= index.index; num = num + 1) {
    let tmp = arr2;
    let tmp2 = dependencyMap;
    let obj = arr2(4135);
    let coerceChannelRouteResult = obj.coerceChannelRoute(index.routes[num]);
    let tmp4 = num;
    if (null != coerceChannelRouteResult) {
      obj = { index: null, type: null, guildId: null, channelId: null, showCreateThread: null };
      obj[0] = items.length;
      let tmp5 = obj;
      obj[1] = obj.DEFAULT;
      obj[2] = coerceChannelRouteResult.params.guildId;
      obj[3] = coerceChannelRouteResult.params.channelId;
      obj[4] = coerceChannelRouteResult.params.showCreateThread;
      let arr = items.push(obj);
    }
  }
  if (isChatLockedOpen.isChatLockedOpen) {
    arr2 = resolveBackgroundScreen(index);
    if (arr2.length > 0) {
      const items1 = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(arr2, 0);
      arraySpreadResult = HermesBuiltin.arraySpread(items.map((index) => {
        const obj = {};
        const merged = Object.assign(index);
        obj.index = index.index + arr2.length;
        return obj;
      }), arraySpreadResult);
      return items1;
    }
  }
  let tmp8 = items;
  if (items.length <= 0) {
    tmp8 = resolveBackgroundScreen(index);
  }
  return tmp8;
}
let obj = { DEFAULT: 0, [0]: "DEFAULT", BACKGROUND_SAVED: 1, [1]: "BACKGROUND_SAVED", FALLBACK_RENDERED: 2, [2]: "FALLBACK_RENDERED" };
const result = require("ensureGuildLoaded").fileFinishedImporting("modules/main_tabs_v2/native/panels/useChannelScreensFromNavigation.tsx");

export default function useChannelScreensFromNavigation(arg0) {
  let dependencyMap;
  let tmp3;
  let closure_0 = arg0;
  const tmp = useChatLayout();
  importDefault = tmp;
  [tmp3, dependencyMap] = callback(React.useState(() => {
    const arr = outer1_13(store.getState(), closure_1);
    if (arr.length > 0) {
      return arr;
    } else {
      let guildId = outer1_7.getGuildId();
      const channelId = outer1_6.getChannelId();
      if (null == channelId) {
        let items = [];
      } else {
        const obj = { index: 0, type: null, guildId: null, channelId: null };
        obj[1] = outer1_10.FALLBACK_RENDERED;
        if (guildId == null) {
          guildId = outer1_8;
        }
        obj[2] = guildId;
        obj[3] = channelId;
        items = [obj];
      }
    }
  }), 2);
  callback = React.useCallback((arg0, arg1) => {
    if (null != arg0) {
      if (arg0.length > 0) {
        callback(arg0);
      }
    }
    const coerceTabsRouteResult = store(outer1_2[8]).coerceTabsRoute(arg1.routes[0]);
    let tmp4;
    if (null != coerceTabsRouteResult) {
      const tmp6 = outer1_11(coerceTabsRouteResult);
      if (null != tmp6) {
        const coerceGuildsRouteResult = store(outer1_2[8]).coerceGuildsRoute(tmp6);
        let guildId;
        if (coerceGuildsRouteResult != null) {
          const params = coerceGuildsRouteResult.params;
          if (params != null) {
            guildId = params.guildId;
          }
        }
        tmp4 = guildId;
        const tmpResult = store(outer1_2[8]);
      }
    }
    store = tmp4;
    callback((arg0) => {
      if (0 === arg0.length) {
        return arg0;
      } else {
        if (null == closure_0) {
          let items1 = arg0;
          if (arg0[0].type !== outer1_10.FALLBACK_RENDERED) {
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
  const effect = React.useEffect(() => {
    const state = store.getState();
    callback(outer1_13(state, closure_1), state);
  }, items);
  let items1 = [arg0, callback];
  const effect1 = React.useEffect(() => {
    function handleStateChange(data) {
      callback(outer1_13(data.data.state, handleStateChange(outer1_2[9]).getChatLayout()), data.data.state);
    }
    handleStateChange.addListener("state", handleStateChange);
    return () => {
      handleStateChange.removeListener("state", handleStateChange);
    };
  }, items1);
  return tmp3;
};
export const ChannelScreenType = obj;
export { getActiveTabsRoute };
export const isActiveTabsGuilds = function isActiveTabsGuilds(state) {
  const coerceTabsRouteResult = navigationToRootTabHelper.coerceTabsRoute(state.routes[0]);
  if (null == coerceTabsRouteResult) {
    return false;
  } else {
    const tmp5 = getActiveTabsRoute(coerceTabsRouteResult);
    let tmp6 = null != tmp5;
    if (tmp6) {
      tmp6 = null != tmp(4135).coerceGuildsRoute(tmp5);
      const tmpResult = tmp(4135);
    }
    return tmp6;
  }
  const obj = navigationToRootTabHelper;
  tmp = require;
};