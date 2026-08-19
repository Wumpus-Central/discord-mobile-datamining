// discord_app/modules/forums/ForumManager.tsx
import initializeDefault from "../../lib/AutomaticLifecycleManager.tsx";
import loadForumPostData from "ForumPostDataLoader.tsx";
import ensureGuildLoaded from "../../stores/ChannelStore.tsx";
import { isStaticChannelRoute } from "../channel/ChannelConstants.tsx";

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