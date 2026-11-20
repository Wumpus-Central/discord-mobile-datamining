// === Module 19385: ForumManager ===

// Module 19385 (ForumManager)
import ForumPostDataLoader from "ForumPostDataLoader" /* 11553 */;
import ChannelStore from "ChannelStore" /* 4643 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7364 */;

require = fn;
const isStaticChannelRoute = fn(4650).isStaticChannelRoute;
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