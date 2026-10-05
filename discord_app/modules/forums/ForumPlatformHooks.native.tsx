// === Module 12435: ForumPlatformHooks ===

// Module 12435 (ForumPlatformHooks)
import NavigationRouteUtils from "NavigationRouteUtils" /* 4736 */;
import RootNavigationRef from "RootNavigationRef" /* 4737 */;
import ForumChannelSeenManagerDefault from "ForumChannelSeenManager" /* 7543 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let obj = {
  useForumChannelSeenManager(guildId) {
    guildId = guildId.guildId;
    const channelId = guildId.channelId;
    let callback;
    const ref = callback.useRef(null);
    const items = [channelId];
    callback = callback.useCallback(() => {
      const obj = RootNavigationRef;
      const rootNavigationRef = obj.getRootNavigationRef();
      if (null != rootNavigationRef) {
        if (rootNavigationRef.isReady()) {
          const currentRoute = rootNavigationRef.getCurrentRoute();
          const tmpResult = NavigationRouteUtils;
          const coerceChannelRouteResult = tmpResult.coerceChannelRoute(currentRoute);
          const current = ref.current;
          const tmp5 = null != coerceChannelRouteResult && coerceChannelRouteResult.params.channelId === channelId;
          if (current != null) {
            const result = current.handleReactNavigationFocus(tmp5);
          }
        }
      }
    }, items);
    const effect = callback.useEffect(() => {
      const obj = guildId(ref[1]);
      const rootNavigationRef = obj.getRootNavigationRef();
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
      const obj = { guildId, channelId };
      ref.current = new ForumChannelSeenManagerDefault(obj);
      let current = ref.current;
      new ForumChannelSeenManagerDefault(obj);
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
let result = size.fileFinishedImporting("modules/forums/ForumPlatformHooks.native.tsx");

export default obj;