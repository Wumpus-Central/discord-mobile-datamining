// === Module 16578: handleChannelPreload ===

// Module 16578 (handleChannelPreload)
import initializeDefault from "initialize" /* 5038 */;
import loadForumPostData from "loadForumPostData" /* 7269 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import { isStaticChannelRoute } from "set" /* 1398 */;

require = fn;
initializeDefault;
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
      loadForumPostData.preloadForumThreads(channel);
    }
    tmp3 = null != channel && channel.isForumLikeChannel();
  }
};
const forumManager = new ForumManager();
const result = require("obj132").fileFinishedImporting("modules/forums/ForumManager.tsx");

export default forumManager;