// === Module 6837: isChannelFocused ===

// Module 6837 (isChannelFocused)
import RootNavigationRef from "RootNavigationRef" /* 5187 */;
import getInitialNavigationStateDefault from "getInitialNavigationState" /* 5188 */;
import useChatLayout from "useChatLayout" /* 5189 */;
import getChannelDetailsFromRouteDefault from "getChannelDetailsFromRoute" /* 6840 */;
import hasSecondaryViewChatDefault from "hasSecondaryViewChat" /* 6841 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6807 */;
import NavigationHistoryStore from "NavigationHistoryStore" /* 6838 */;
import VoicePanelStore from "VoicePanelStore" /* 6839 */;

const require = globalThis.__r;
const useChatLayoutDefault = useChatLayout;

const NavigationRouteUtils = params(5186);
require = fn;
function getFocusedChannelId() {
  let params = require;
  let paramsResult2 = dependencyMap;
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  const isChatLockedOpen = useChatLayout.getChatLayout().isChatLockedOpen;
  let tmp2 = null;
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      const rootState = rootNavigationRef.getRootState();
      const result = NavigationRouteUtils.coerceChannelSecondaryViewChatRoute(rootState.routes[rootState.index]);
      let channelId;
      if (result != tmp2) {
        channelId = result.params.channelId;
      }
      if (tmp2 != channelId) {
        return channelId;
      } else {
        return _slicedToArray(getChannelDetailsFromRouteDefault(rootNavigationRef.getCurrentRoute(), isChatLockedOpen), 2)[1];
      }
      const paramsResult = NavigationRouteUtils;
    }
  }
  if (tmp2 !== c9) {
    return c9;
  } else {
    const tmp20 = getInitialNavigationStateDefault();
    let routes2 = NavigationRouteUtils;
    let tmp9;
    if (tmp20 != tmp2) {
      const routes = tmp20.routes;
      if (routes != tmp2) {
        let num2;
        if (tmp20 != tmp2) {
          num2 = tmp20.index;
        }
        if (num2 == tmp2) {
          num2 = 0;
        }
        tmp9 = routes[num2];
      }
    }
    let num3 = routes2.coerceMainRoute(tmp9);
    if (tmp2 == num3) {
      c9 = tmp10;
    } else {
      routes2 = NavigationRouteUtils;
      if (!isChatLockedOpen) {
        const state = num3.state;
        let tmp11;
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
            tmp11 = routes3[num4];
          }
        }
        const coerceChannelRouteResult = routes2.coerceChannelRoute(tmp11);
        if (tmp2 != coerceChannelRouteResult) {
          const params2 = coerceChannelRouteResult.params;
          let channelId1;
          if (params2 != tmp2) {
            channelId1 = params2.channelId;
          }
          tmp10 = channelId1;
        }
      }
    }
    const state3 = num3.state;
    let tmp14;
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
        tmp14 = routes4[num3];
      }
    }
    const coerceTabsRouteResult = routes2.coerceTabsRoute(tmp14);
    if (tmp2 != coerceTabsRouteResult) {
      params = NavigationRouteUtils.coerceGuildsRoute;
      routes2 = coerceTabsRouteResult.state;
      let tmp17;
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
          tmp17 = routes2[num5];
        }
      }
      paramsResult2 = params(tmp17);
      if (tmp2 != paramsResult2) {
        params = paramsResult2.params;
        tmp2 = params == tmp2;
        paramsResult2 = undefined;
        if (!tmp2) {
          paramsResult2 = params.channelId;
        }
        tmp10 = paramsResult2;
      }
      const paramsResult1 = NavigationRouteUtils;
    }
  }
}
const CHANNEL_PREFIX = fn(6838).CHANNEL_PREFIX;
let c9 = null;
const ReactCompilerGating = fn(558);
function isChannelFocused() {
  return null != getFocusedChannelId();
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/panels/isChannelFocused.native.tsx");

export { getFocusedChannelId };
export { isChannelFocused };
export const useIsChannelFocused = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsChannelFocused() {
  const cResult = require("c").c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function u() {
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
}) : (function useIsChannelFocused() {
  const tmp = _slicedToArray(noop.useState(() => null != getFocusedChannelId()), 2);
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
});
export const isChannelFocusedForReadStateAck = function isChannelFocusedForReadStateAck(channelId, arg1) {
  if (ChannelRTCStore.getChatOpen(channelId)) {
    return true;
  } else {
    const state = VoicePanelStore.getState();
    if (state.isVoicePanelFullscreen()) {
      return false;
    } else if (hasSecondaryViewChatDefault(channelId)) {
      const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
      let tmp12 = null != rootNavigationRef && rootNavigationRef.isReady();
      if (tmp12) {
        const rootState = rootNavigationRef.getRootState();
        const result = NavigationRouteUtils.coerceChannelSecondaryViewChatRoute(rootState.routes[rootState.index]);
        channelId = undefined;
        if (result != null) {
          channelId = result.params.channelId;
        }
        tmp12 = channelId === channelId;
        const tmp10Result = NavigationRouteUtils;
      }
      return tmp12;
    } else if (getFocusedChannelId() === channelId) {
      return true;
    } else {
      if (null != arg1) {
        const lastFocusedTimestampForHistoryItem = NavigationHistoryStore.getLastFocusedTimestampForHistoryItem(CHANNEL_PREFIX + channelId);
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