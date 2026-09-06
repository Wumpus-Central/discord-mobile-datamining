// === Module 12765: ForumPlatformHooks ===

// Module 12765 (ForumPlatformHooks)
import NavigationRouteUtils from "NavigationRouteUtils" /* 4417 */;
import RootNavigationRef from "RootNavigationRef" /* 4418 */;
import ForumChannelSeenManagerDefault from "ForumChannelSeenManager" /* 7900 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/forums/ForumPlatformHooks.native.tsx");

export default {
  useForumChannelSeenManager(guildId) {
    guildId = guildId.guildId;
    const channelId = guildId.channelId;
    let callback;
    const ref = callback.useRef(null);
    const items = [channelId];
    callback = callback.useCallback(() => {
      const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
      if (null != rootNavigationRef) {
        if (rootNavigationRef.isReady()) {
          const currentRoute = rootNavigationRef.getCurrentRoute();
          const coerceChannelRouteResult = NavigationRouteUtils.coerceChannelRoute(currentRoute);
          let tmp5 = null != coerceChannelRouteResult;
          if (tmp5) {
            tmp5 = coerceChannelRouteResult.params.channelId === channelId;
          }
          const current = ref.current;
          if (current != null) {
            const result = current.handleReactNavigationFocus(tmp5);
          }
          const tmpResult = NavigationRouteUtils;
        }
      }
    }, items);
    const effect = callback.useEffect(() => {
      const rootNavigationRef = guildId(ref[1]).getRootNavigationRef();
      if (null != rootNavigationRef) {
        if (rootNavigationRef.isReady()) {
          rootNavigationRef.addListener("state", callback);
          return () => {
            rootNavigationRef.removeListener("state", callback);
          };
        }
      }
    });
    const items1 = [channelId, guildId, callback];
    const layoutEffect = callback.useLayoutEffect(() => {
      ref.current = new ForumChannelSeenManagerDefault({ guildId, channelId });
      let current = ref.current;
      current.initialize();
      callback();
      return () => {
        const current = ref.current;
        if (current != null) {
          current.terminate();
        }
        ref.current = null;
      };
    }, items1);
    return ref.current;
  }
};