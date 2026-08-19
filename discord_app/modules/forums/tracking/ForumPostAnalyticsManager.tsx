// === Module 7520: handleThreadCreate ===

// Module 7520 (handleThreadCreate)
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import initializeDefault from "initialize" /* 5038 */;
import handleThreadCreateOrUpdate from "handleThreadCreateOrUpdate" /* 4969 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;

let require = fn;
initializeDefault;
class ForumPostAnalyticsManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.readStateSnapshots = {};
    applyArgumentsResult.actions = {
      CHANNEL_SELECT(arg0) {
            return applyArgumentsResult.handleChannelSelect(arg0);
          },
      THREAD_CREATE(arg0) {
            return applyArgumentsResult.handleThreadCreate(arg0);
          }
    };
    applyArgumentsResult.handleChannelSelect = function handleChannelSelect(channelId) {
      channelId = channelId.channelId;
      if (null != channelId) {
        const channel = closure_1_5.getChannel(channelId);
        if (tmp2) {
          applyArgumentsResult.readStateSnapshots = {};
          applyArgumentsResult.processForumChannel(channel.guild_id, channelId);
        }
        tmp2 = null != channel && channel.isForumLikeChannel();
      }
    };
    applyArgumentsResult.processForumChannel = function processForumChannel(guild_id, channelId) {
      const threadsForParent = closure_1_3.getThreadsForParent(guild_id, channelId);
      const keys = DISCORD_EPOCHDefault.keys(threadsForParent);
      const item = keys.forEach((item, index) => {
        const forumPostReadStatesById = closure_1_0(closure_1_2[5]).getForumPostReadStatesById(item);
        if (null != forumPostReadStatesById) {
          readStateSnapshots.readStateSnapshots[item] = forumPostReadStatesById;
        }
        const obj = closure_1_0(closure_1_2[5]);
      });
    };
    applyArgumentsResult.getReadStateSnapshotAnalytics = function getReadStateSnapshotAnalytics(id) {
      return applyArgumentsResult.readStateSnapshots[id];
    };
    return applyArgumentsResult;
  }
}
ForumPostAnalyticsManager.prototype["handleThreadCreate"] = function handleThreadCreate(channel) {
  channel = channel.channel;
  if (channel.isForumPost()) {
    const self = this;
    const obj = { isNew: null, hasUnreads: null };
    const tmp2 = channel.ownerId !== id.getId();
    obj[0] = tmp2;
    obj[1] = tmp2;
    this.readStateSnapshots[channel.id] = obj;
  }
};
const forumPostAnalyticsManager = new ForumPostAnalyticsManager();
const result = require("obj132").fileFinishedImporting("modules/forums/tracking/ForumPostAnalyticsManager.tsx");

export default forumPostAnalyticsManager;