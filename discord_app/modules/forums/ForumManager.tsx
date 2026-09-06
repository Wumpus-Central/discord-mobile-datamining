// === Module 17366: handleChannelPreload ===

// Module 17366 (handleChannelPreload)
import initializeDefault from "initialize" /* 7118 */;
import loadForumPostData from "loadForumPostData" /* 7304 */;
import closure_2 from "ensureGuildLoaded" /* 1957 */;
import { isStaticChannelRoute } from "set" /* 1964 */;

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