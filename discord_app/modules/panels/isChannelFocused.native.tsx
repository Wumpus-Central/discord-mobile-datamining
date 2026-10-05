// discord_app/modules/panels/isChannelFocused.native.tsx
import NavigationRouteUtils from "../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import RootNavigationRef from "../main_tabs_v2/RootNavigationRef.native.tsx";
import getInitialNavigationStateDefault from "../main_tabs_v2/native/getInitialNavigationState.tsx";
import useChatLayout from "../chat/native/useChatLayout.tsx";
import NavigationHistoryStore2 from "../main_tabs_v2/native/NavigationHistoryStore.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../_runtime/00019_react.js";
import ChannelRTCStore from "../calls/ChannelRTCStore.tsx";
import VoicePanelStore from "../voice_panel/VoicePanelStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const useChatLayoutDefault = useChatLayout;
const NavigationHistoryStore = NavigationHistoryStore2;

function getFocusedChannelId() {
  const obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  const obj3 = useChatLayout;
  const isChatLockedOpen = obj3.getChatLayout().isChatLockedOpen;
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      const currentRoute = rootNavigationRef.getCurrentRoute();
      const tmpResult = NavigationRouteUtils;
      const coerceChannelRouteResult = tmpResult.coerceChannelRoute(currentRoute);
      if (null != coerceChannelRouteResult) {
        return coerceChannelRouteResult.params.channelId;
      } else if (isChatLockedOpen) {
        const tmpResult5 = NavigationRouteUtils;
        const coerceGuildsRouteResult = tmpResult5.coerceGuildsRoute(currentRoute);
        let tmp6;
        if (null != coerceGuildsRouteResult) {
          const params = coerceGuildsRouteResult.params;
          let channelId;
          if (params != null) {
            channelId = params.channelId;
          }
          tmp6 = channelId;
        }
        return tmp6;
      }
    }
  }
  let tmp8 = channelId2;
  if (null === channelId2) {
    const tmp23 = getInitialNavigationStateDefault();
    let tmp9;
    const coerceMainRoute = NavigationRouteUtils.coerceMainRoute;
    NavigationRouteUtils;
    if (tmp23 != null) {
      const routes = tmp23.routes;
      if (routes != null) {
        let num;
        if (tmp23 != null) {
          num = tmp23.index;
        }
        if (num == null) {
          num = 0;
        }
        tmp9 = routes[num];
      }
    }
    const coerceMainRouteResult = coerceMainRoute(tmp9);
    let tmp11;
    if (null != coerceMainRouteResult) {
      const tmpResult7 = NavigationRouteUtils;
      if (isChatLockedOpen) {
        const state3 = coerceMainRouteResult.state;
        let tmp16;
        const coerceTabsRoute = tmpResult7.coerceTabsRoute;
        if (state3 != null) {
          const routes3 = state3.routes;
          if (routes3 != null) {
            const state4 = coerceMainRouteResult.state;
            let num3;
            if (state4 != null) {
              num3 = state4.index;
            }
            if (num3 == null) {
              num3 = 0;
            }
            tmp16 = routes3[num3];
          }
        }
        const coerceTabsRouteResult = coerceTabsRoute(tmp16);
        if (null != coerceTabsRouteResult) {
          const state5 = coerceTabsRouteResult.state;
          let tmp19;
          const coerceGuildsRoute = NavigationRouteUtils.coerceGuildsRoute;
          NavigationRouteUtils;
          if (state5 != null) {
            const routes4 = state5.routes;
            if (routes4 != null) {
              const state6 = coerceTabsRouteResult.state;
              let num4;
              if (state6 != null) {
                num4 = state6.index;
              }
              if (num4 == null) {
                num4 = 0;
              }
              tmp19 = routes4[num4];
            }
          }
          const coerceGuildsRouteResult1 = coerceGuildsRoute(tmp19);
          if (null != coerceGuildsRouteResult1) {
            const params3 = coerceGuildsRouteResult1.params;
            let channelId1;
            if (params3 != null) {
              channelId1 = params3.channelId;
            }
            tmp11 = channelId1;
          }
        }
      } else {
        const state = coerceMainRouteResult.state;
        let tmp13;
        const coerceChannelRoute = tmpResult7.coerceChannelRoute;
        if (state != null) {
          const routes2 = state.routes;
          if (routes2 != null) {
            const state2 = coerceMainRouteResult.state;
            let num2;
            if (state2 != null) {
              num2 = state2.index;
            }
            if (num2 == null) {
              num2 = 0;
            }
            tmp13 = routes2[num2];
          }
        }
        const coerceChannelRouteResult1 = coerceChannelRoute(tmp13);
        if (null != coerceChannelRouteResult1) {
          const params2 = coerceChannelRouteResult1.params;
          channelId2 = undefined;
          if (params2 != null) {
            channelId2 = params2.channelId;
          }
          tmp11 = channelId2;
        }
      }
    }
    channelId2 = tmp11;
    tmp8 = tmp11;
  }
  return tmp8;
}
const CHANNEL_PREFIX = NavigationHistoryStore2.CHANNEL_PREFIX;
let channelId2 = null;
function isChannelFocused() {
  return null != getFocusedChannelId();
}
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let closure_0;
      let first;
      let first1;
      let tmp10;
      let tmp11;
      let tmp7;
      let tmp8;
      let obj = require("react");
      const cResult = obj.c(6);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function u() {
          return null != getFocusedChannelId();
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      [first1, _require] = react.useState(first);
      const tmp6 = useChatLayoutDefault();
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function o() {
          closure_0(null != getFocusedChannelId());
        };
        cResult[1] = fn2;
        tmp7 = fn2;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] !== tmp6) {
        const items = [tmp6];
        cResult[2] = tmp6;
        cResult[3] = items;
        tmp8 = items;
      } else {
        tmp8 = cResult[3];
      }
      const effect = react.useEffect(tmp7, tmp8);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const fn3 = function c() {
          const obj = closure_0(dependencyMap[7]);
          const rootNavigationRef = obj.getRootNavigationRef();
          if (null != rootNavigationRef) {
            function handleStateChange() {
              rootNavigationRef(null != getFocusedChannelId());
            }
            rootNavigationRef.addListener("state", handleStateChange);
            return () => {
              rootNavigationRef.removeListener("state", handleStateChange);
            };
          }
        };
        const items1 = [];
        cResult[4] = fn3;
        cResult[5] = items1;
        tmp11 = items1;
        tmp10 = fn3;
      } else {
        tmp10 = cResult[4];
        tmp11 = cResult[5];
      }
      const effect1 = react.useEffect(tmp10, tmp11);
      return first1;
    }
  : () => {
      let closure_0;
      let first;
      [first, closure_0] = react.useState(() => null != getFocusedChannelId());
      const items = [useChatLayoutDefault()];
      const effect = react.useEffect(() => {
        closure_0(null != getFocusedChannelId());
      }, items);
      const effect1 = react.useEffect(() => {
        function handleStateChange() {
          rootNavigationRef(null != getFocusedChannelId());
        }
        const obj = closure_0(dependencyMap[7]);
        const rootNavigationRef = obj.getRootNavigationRef();
        if (null != rootNavigationRef) {
          rootNavigationRef.addListener("state", handleStateChange);
          return () => {
            rootNavigationRef.removeListener("state", handleStateChange);
          };
        }
      }, []);
      return first;
    };
const result = size.fileFinishedImporting("modules/panels/isChannelFocused.native.tsx");

export { getFocusedChannelId };
export { isChannelFocused };
export const useIsChannelFocused = tmp2;
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
