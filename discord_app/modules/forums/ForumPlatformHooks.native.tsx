// discord_app/modules/forums/ForumPlatformHooks.native.tsx
import noop from "../../../_runtime/00019_noop.js";

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/forums/ForumPlatformHooks.native.tsx");

export default {
  useForumChannelSeenManager(guildId) {
    guildId = guildId.guildId;
    const channelId = guildId.channelId;
    let callback;
    const ref = callback.useRef(null);
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
      const obj = guildId(ref[1]);
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
      const obj = guildId(ref[1]);
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