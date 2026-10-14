// discord_app/modules/panels/isChannelFocused.native.tsx
import RootNavigationRef from "../main_tabs_v2/RootNavigationRef.native.tsx";
import getInitialNavigationStateDefault from "../main_tabs_v2/native/getInitialNavigationState.tsx";
import useChatLayout from "../chat/native/useChatLayout.tsx";
import getChannelDetailsFromRouteDefault from "../navigation/native/getChannelDetailsFromRoute.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import ChannelRTCStore from "../calls/ChannelRTCStore.tsx";
import NavigationHistoryStore from "../main_tabs_v2/native/NavigationHistoryStore.tsx";
import VoicePanelStore from "../voice_panel/VoicePanelStore.tsx";

const require = globalThis.__r;
const useChatLayoutDefault = useChatLayout;

const NavigationRouteUtils = params(4978);
require = fn;
function getFocusedChannelId() {
  let params = require;
  let paramsResult1 = dependencyMap;
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  const isChatLockedOpen = useChatLayout.getChatLayout().isChatLockedOpen;
  let tmp2 = null;
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      return _slicedToArray(
        getChannelDetailsFromRouteDefault(rootNavigationRef.getCurrentRoute(), isChatLockedOpen),
        2,
      )[1];
    }
  }
  if (tmp2 !== c9) {
    return c9;
  } else {
    const tmp17 = getInitialNavigationStateDefault();
    let routes2 = NavigationRouteUtils;
    let tmp6;
    if (tmp17 != tmp2) {
      const routes = tmp17.routes;
      if (routes != tmp2) {
        let num2;
        if (tmp17 != tmp2) {
          num2 = tmp17.index;
        }
        if (num2 == tmp2) {
          num2 = 0;
        }
        tmp6 = routes[num2];
      }
    }
    let num3 = routes2.coerceMainRoute(tmp6);
    if (tmp2 == num3) {
      c9 = tmp7;
    } else {
      routes2 = NavigationRouteUtils;
      if (!isChatLockedOpen) {
        const state = num3.state;
        let tmp8;
        if (state != tmp2) {
          const routes3 = state.routes;
          if (routes3 != tmp2) {
            const state2 = num3.state;
            let num4;
            if (state2 != tmp2) {
              num4 = state2.index;
            }
            if (num4 == tmp2) {
              num4 = 0;
            }
            tmp8 = routes3[num4];
          }
        }
        const coerceChannelRouteResult = routes2.coerceChannelRoute(tmp8);
        if (tmp2 != coerceChannelRouteResult) {
          const params2 = coerceChannelRouteResult.params;
          let channelId;
          if (params2 != tmp2) {
            channelId = params2.channelId;
          }
          tmp7 = channelId;
        }
      }
    }
    const state3 = num3.state;
    let tmp11;
    if (state3 != tmp2) {
      const routes4 = state3.routes;
      if (routes4 != tmp2) {
        const state4 = num3.state;
        num3 = undefined;
        if (state4 != tmp2) {
          num3 = state4.index;
        }
        if (num3 == tmp2) {
          num3 = 0;
        }
        tmp11 = routes4[num3];
      }
    }
    const coerceTabsRouteResult = routes2.coerceTabsRoute(tmp11);
    if (tmp2 != coerceTabsRouteResult) {
      params = NavigationRouteUtils.coerceGuildsRoute;
      routes2 = coerceTabsRouteResult.state;
      let tmp14;
      if (routes2 != tmp2) {
        routes2 = routes2.routes;
        if (routes2 != tmp2) {
          num3 = coerceTabsRouteResult.state;
          let num5;
          if (num3 != tmp2) {
            num5 = num3.index;
          }
          if (num5 == tmp2) {
            num5 = 0;
          }
          tmp14 = routes2[num5];
        }
      }
      paramsResult1 = params(tmp14);
      if (tmp2 != paramsResult1) {
        params = paramsResult1.params;
        tmp2 = params == tmp2;
        paramsResult1 = undefined;
        if (!tmp2) {
          paramsResult1 = params.channelId;
        }
        tmp7 = paramsResult1;
      }
      const paramsResult = NavigationRouteUtils;
    }
  }
}
const CHANNEL_PREFIX = fn(6079).CHANNEL_PREFIX;
let c9 = null;
const ReactCompilerGating = fn(558);
function isChannelFocused() {
  return null != getFocusedChannelId();
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/panels/isChannelFocused.native.tsx");

export { getFocusedChannelId };
export { isChannelFocused };
export const useIsChannelFocused = ReactCompilerGating.isReactCompilerEnabled()
  ? function useIsChannelFocused() {
      const cResult = require("c").c(6);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function s() {
          return null != getFocusedChannelId();
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      const tmp4 = _slicedToArray(noop.useState(first), 2);
      _require = tmp4[1];
      const tmp5 = useChatLayoutDefault();
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function o() {
          closure_0(null != getFocusedChannelId());
        };
        cResult[1] = fn2;
        let tmp6 = fn2;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] !== tmp5) {
        const items = [tmp5];
        cResult[2] = tmp5;
        cResult[3] = items;
        let tmp7 = items;
      } else {
        tmp7 = cResult[3];
      }
      const effect = noop.useEffect(tmp6, tmp7);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const fn3 = function c() {
          const rootNavigationRef = closure_0(dependencyMap[7]).getRootNavigationRef();
          if (null != rootNavigationRef) {
            function handleStateChange() {
              rootNavigationRef(null != getFocusedChannelId());
            }
            rootNavigationRef.addListener("state", handleStateChange);
            return () => {
              rootNavigationRef.removeListener("state", handleStateChange);
            };
          }
          const obj = closure_0(dependencyMap[7]);
        };
        const items1 = [];
        cResult[4] = fn3;
        cResult[5] = items1;
        let tmp10 = items1;
        let tmp9 = fn3;
      } else {
        tmp9 = cResult[4];
        tmp10 = cResult[5];
      }
      const effect1 = noop.useEffect(tmp9, tmp10);
      return tmp4[0];
    }
  : function useIsChannelFocused() {
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
