// === Module 10198: getFocusedChannelId ===

// Module 10198 (getFocusedChannelId)
import coerceMainRoute from "coerceMainRoute" /* 4332 */;
import getRootNavigationRef from "getRootNavigationRef" /* 4333 */;
import getInitialGuildStateDefault from "getInitialGuildState" /* 4334 */;
import useChatLayout from "useChatLayout" /* 4335 */;
import useChatLayoutDefault from "useChatLayout" /* 4335 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "getParticipants" /* 4494 */;
import closure_6 from "getIdFromHistoryItem" /* 6182 */;
import { CHANNEL_PREFIX } from "getIdFromHistoryItem" /* 6182 */;
import closure_8 from "withEqualityFn" /* 4729 */;

require = arg1;
function getFocusedChannelId() {
  let params = require;
  let paramsResult3 = dependencyMap;
  const rootNavigationRef = getRootNavigationRef.getRootNavigationRef();
  const obj = getRootNavigationRef;
  const isChatLockedOpen = useChatLayout.getChatLayout().isChatLockedOpen;
  let tmp2 = null;
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      const currentRoute = rootNavigationRef.getCurrentRoute();
      const coerceChannelRouteResult = coerceMainRoute.coerceChannelRoute(currentRoute);
      if (tmp2 != coerceChannelRouteResult) {
        return coerceChannelRouteResult.params.channelId;
      } else if (isChatLockedOpen) {
        const coerceGuildsRouteResult = coerceMainRoute.coerceGuildsRoute(currentRoute);
        let tmp6;
        if (tmp2 != coerceGuildsRouteResult) {
          const params2 = coerceGuildsRouteResult.params;
          let channelId;
          if (params2 != tmp2) {
            channelId = params2.channelId;
          }
          tmp6 = channelId;
        }
        return tmp6;
      }
      const paramsResult = coerceMainRoute;
    }
  }
  if (tmp2 !== c9) {
    return c9;
  } else {
    const tmp19 = getInitialGuildStateDefault();
    let routes2 = coerceMainRoute;
    let tmp8;
    if (tmp19 != tmp2) {
      const routes = tmp19.routes;
      if (routes != tmp2) {
        let num;
        if (tmp19 != tmp2) {
          num = tmp19.index;
        }
        if (num == tmp2) {
          num = 0;
        }
        tmp8 = routes[num];
      }
    }
    let num2 = routes2.coerceMainRoute(tmp8);
    if (tmp2 == num2) {
      c9 = tmp9;
    } else {
      routes2 = coerceMainRoute;
      if (!isChatLockedOpen) {
        const state = num2.state;
        let tmp10;
        if (state != tmp2) {
          const routes3 = state.routes;
          if (routes3 != tmp2) {
            const state2 = num2.state;
            let num3;
            if (state2 != tmp2) {
              num3 = state2.index;
            }
            if (num3 == tmp2) {
              num3 = 0;
            }
            tmp10 = routes3[num3];
          }
        }
        const coerceChannelRouteResult1 = routes2.coerceChannelRoute(tmp10);
        if (tmp2 != coerceChannelRouteResult1) {
          const params3 = coerceChannelRouteResult1.params;
          let channelId1;
          if (params3 != tmp2) {
            channelId1 = params3.channelId;
          }
          tmp9 = channelId1;
        }
      }
    }
    const state3 = num2.state;
    let tmp13;
    if (state3 != tmp2) {
      const routes4 = state3.routes;
      if (routes4 != tmp2) {
        const state4 = num2.state;
        num2 = undefined;
        if (state4 != tmp2) {
          num2 = state4.index;
        }
        if (num2 == tmp2) {
          num2 = 0;
        }
        tmp13 = routes4[num2];
      }
    }
    const coerceTabsRouteResult = routes2.coerceTabsRoute(tmp13);
    if (tmp2 != coerceTabsRouteResult) {
      params = coerceMainRoute.coerceGuildsRoute;
      routes2 = coerceTabsRouteResult.state;
      let tmp16;
      if (routes2 != tmp2) {
        routes2 = routes2.routes;
        if (routes2 != tmp2) {
          num2 = coerceTabsRouteResult.state;
          let num4;
          if (num2 != tmp2) {
            num4 = num2.index;
          }
          if (num4 == tmp2) {
            num4 = 0;
          }
          tmp16 = routes2[num4];
        }
      }
      paramsResult3 = params(tmp16);
      if (tmp2 != paramsResult3) {
        params = paramsResult3.params;
        tmp2 = params == tmp2;
        paramsResult3 = undefined;
        if (!tmp2) {
          paramsResult3 = params.channelId;
        }
        tmp9 = paramsResult3;
      }
      const paramsResult2 = coerceMainRoute;
    }
  }
}
let c9 = null;
const result = require("set").fileFinishedImporting("modules/panels/isChannelFocused.native.tsx");

export { getFocusedChannelId };
export const isChannelFocused = function isChannelFocused() {
  return null != getFocusedChannelId();
};
export const useIsChannelFocused = function useIsChannelFocused() {
  const tmp = callback(React.useState(() => null != callback2()), 2);
  closure_0 = tmp[1];
  const items = [useChatLayoutDefault()];
  const effect = React.useEffect(() => {
    callback(null != closure_1_10());
  }, items);
  const effect1 = React.useEffect(() => {
    function handleStateChange() {
      rootNavigationRef(null != closure_1_10());
    }
    const rootNavigationRef = callback(closure_1_2[7]).getRootNavigationRef();
    if (null != rootNavigationRef) {
      rootNavigationRef.addListener("state", handleStateChange);
      return () => {
        rootNavigationRef.removeListener("state", handleStateChange);
      };
    }
    const obj = callback(closure_1_2[7]);
  }, []);
  return tmp[0];
};
export const isChannelFocusedForReadStateAck = function isChannelFocusedForReadStateAck(channelId, arg1) {
  if (chatOpen.getChatOpen(channelId)) {
    return true;
  } else {
    state = state.getState();
    if (state.isVoicePanelFullscreen()) {
      return false;
    } else if (getFocusedChannelId() === channelId) {
      return true;
    } else {
      if (null != arg1) {
        lastFocusedTimestampForHistoryItem = lastFocusedTimestampForHistoryItem.getLastFocusedTimestampForHistoryItem(CHANNEL_PREFIX + channelId);
        if (null != lastFocusedTimestampForHistoryItem) {
          if (lastFocusedTimestampForHistoryItem >= arg1) {
            return true;
          }
        }
      }
      return false;
    }
  }
};