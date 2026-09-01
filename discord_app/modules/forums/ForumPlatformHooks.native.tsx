// === Module 12303: ? ===

// Module 12303
import closure_3 from "noop" /* 19 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/forums/ForumPlatformHooks.native.tsx");

export default {
  useForumChannelSeenManager(guildId) {
    guildId = guildId.guildId;
    const channelId = guildId.channelId;
    let ref;
    let callback;
    ref = callback.useRef(null);
    const items = [channelId];
    callback = callback.useCallback(() => {
      const rootNavigationRef = guildId(ref[1]).getRootNavigationRef();
      if (null != rootNavigationRef) {
        if (rootNavigationRef.isReady()) {
          const currentRoute = rootNavigationRef.getCurrentRoute();
          const coerceChannelRouteResult = guildId(ref[2]).coerceChannelRoute(currentRoute);
          let tmp5 = null != coerceChannelRouteResult;
          if (tmp5) {
            tmp5 = coerceChannelRouteResult.params.channelId === channelId;
          }
          const current = ref.current;
          if (current != null) {
            const result = current.handleReactNavigationFocus(tmp5);
          }
          const tmpResult = guildId(ref[2]);
        }
      }
    }, items);
    const effect = callback.useEffect(() => {
      const rootNavigationRef = guildId(ref[1]).getRootNavigationRef();
      if (null != rootNavigationRef) {
        if (rootNavigationRef.isReady()) {
          rootNavigationRef.addListener("state", callback);
          return () => {
            rootNavigationRef.removeListener("state", closure_1_3);
          };
        }
      }
    });
    const items1 = [channelId, guildId, callback];
    const layoutEffect = callback.useLayoutEffect(() => {
      ref.current = new channelId(ref[3])({ guildId, channelId });
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