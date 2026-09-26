// === Module 17129: ForumManager ===

// Module 17129 (ForumManager)
import ForumPostDataLoader from "ForumPostDataLoader" /* 6722 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6539 */;

require = fn;
const isStaticChannelRoute = fn(2052).isStaticChannelRoute;
class ForumManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.actions = { CHANNEL_PRELOAD: applyArgumentsResult.handleChannelPreload };
    return applyArgumentsResult;
  }
}
ForumManager.prototype["handleChannelPreload"] = function handleChannelPreload(channelId) {
  channelId = channelId.channelId;
  if (!isStaticChannelRoute(channelId)) {
    const channel = ChannelStore.getChannel(channelId);
    if (tmp3) {
      ForumPostDataLoader.preloadForumThreads(channel);
    }
    tmp3 = null != channel && channel.isForumLikeChannel();
  }
};
const forumManager = new ForumManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/ForumManager.tsx");

export default forumManager;