// === Module 16908: handleChannelPreload ===

// Module 16908 (handleChannelPreload)
import initializeDefault from "initialize" /* 5454 */;
import loadForumPostData from "loadForumPostData" /* 6117 */;
import closure_2 from "ensureGuildLoaded" /* 1387 */;
import { isStaticChannelRoute } from "set" /* 1394 */;

require = arg1;
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
      const obj2 = loadForumPostData;
    }
    tmp3 = null != channel && channel.isForumLikeChannel();
  }
};
const forumManager = new ForumManager();
const result = require("set").fileFinishedImporting("modules/forums/ForumManager.tsx");

export default forumManager;