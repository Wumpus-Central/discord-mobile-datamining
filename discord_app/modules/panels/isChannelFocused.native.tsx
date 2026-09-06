// discord_app/modules/panels/isChannelFocused.native.tsx
import RootNavigationRef from "../main_tabs_v2/RootNavigationRef.native.tsx";
import getInitialNavigationStateDefault from "../main_tabs_v2/native/getInitialNavigationState.tsx";
import useChatLayout from "../chat/native/useChatLayout.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import ChannelRTCStore from "../calls/ChannelRTCStore.tsx";
import NavigationHistoryStore from "../main_tabs_v2/native/NavigationHistoryStore.tsx";
import VoicePanelStore from "../voice_panel/VoicePanelStore.tsx";

const useChatLayoutDefault = useChatLayout;

const NavigationRouteUtils = params(4417);
require = fn;
function getFocusedChannelId() {
  let params = require;
  let paramsResult3 = dependencyMap;
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  const isChatLockedOpen = useChatLayout.getChatLayout().isChatLockedOpen;
  let tmp2 = null;
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      const currentRoute = rootNavigationRef.getCurrentRoute();
      const coerceChannelRouteResult = NavigationRouteUtils.coerceChannelRoute(currentRoute);
      if (tmp2 != coerceChannelRouteResult) {
        return coerceChannelRouteResult.params.channelId;
      } else if (isChatLockedOpen) {
        const coerceGuildsRouteResult = NavigationRouteUtils.coerceGuildsRoute(currentRoute);
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
      const paramsResult = NavigationRouteUtils;
    }
  }
  if (tmp2 !== c9) {
    return c9;
  } else {
    const tmp19 = getInitialNavigationStateDefault();
    let routes2 = NavigationRouteUtils;
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
      routes2 = NavigationRouteUtils;
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
      params = NavigationRouteUtils.coerceGuildsRoute;
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
      const paramsResult2 = NavigationRouteUtils;
    }
  }
}
const CHANNEL_PREFIX = fn(7328).CHANNEL_PREFIX;
let c9 = null;
const size = fn(2);
const result = size.fileFinishedImporting("modules/panels/isChannelFocused.native.tsx");

export { getFocusedChannelId };
export const isChannelFocused = function isChannelFocused() {
  return null != getFocusedChannelId();
};
export const useIsChannelFocused = function useIsChannelFocused() {
  const tmp = _slicedToArray(
    noop.useState(() => null != getFocusedChannelId()),
    2,
  );
  closure_0 = tmp[1];
  const items = [useChatLayoutDefault()];
  const effect = noop.useEffect(() => {
    closure_0(null != getFocusedChannelId());
  }, items);
  const effect1 = noop.useEffect(() => {
    function handleStateChange() {
      rootNavigationRef(null != getFocusedChannelId());
    }
    const rootNavigationRef = closure_0(dependencyMap[7]).getRootNavigationRef();
    if (null != rootNavigationRef) {
      rootNavigationRef.addListener("state", handleStateChange);
      return () => {
        rootNavigationRef.removeListener("state", handleStateChange);
      };
    }
    const obj = closure_0(dependencyMap[7]);
  }, []);
  return tmp[0];
};
export const isChannelFocusedForReadStateAck = function isChannelFocusedForReadStateAck(channelId, arg1) {
  if (ChannelRTCStore.getChatOpen(channelId)) {
    return true;
  } else {
    const state = VoicePanelStore.getState();
    if (state.isVoicePanelFullscreen()) {
      return false;
    } else if (getFocusedChannelId() === channelId) {
      return true;
    } else {
      if (null != arg1) {
        const lastFocusedTimestampForHistoryItem = NavigationHistoryStore.getLastFocusedTimestampForHistoryItem(
          CHANNEL_PREFIX + channelId,
        );
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
