// === Module 16206: handleChannelPreload ===

// Module 16206 (handleChannelPreload)
import ensureGuildLoaded from "ensureGuildLoaded";
import { isStaticChannelRoute } from "set";
import "initialize";

const require = arg1;
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
    channel = channel.getChannel(channelId);
    if (tmp3) {
      require(6068) /* loadForumPostData */.preloadForumThreads(channel);
      const obj2 = require(6068) /* loadForumPostData */;
    }
    tmp3 = null != channel && channel.isForumLikeChannel();
  }
};
const forumManager = new ForumManager();
const result = require("initialize").fileFinishedImporting("modules/forums/ForumManager.tsx");

export default forumManager;