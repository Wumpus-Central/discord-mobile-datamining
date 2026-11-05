// === Module 19785: ForumManager ===

// Module 19785 (ForumManager)
import ForumPostDataLoader from "ForumPostDataLoader" /* 7617 */;
import ChannelStore from "ChannelStore" /* 4992 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7426 */;

require = fn;
const isStaticChannelRoute = fn(4999).isStaticChannelRoute;
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