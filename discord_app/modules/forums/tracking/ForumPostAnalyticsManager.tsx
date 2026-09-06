// === Module 7773: ForumPostAnalyticsManager ===

// Module 7773 (ForumPostAnalyticsManager)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import ActiveThreadsStore from "ActiveThreadsStore" /* 5507 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7118 */;

let require = fn;
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
        const channel = ChannelStore.getChannel(channelId);
        if (tmp2) {
          applyArgumentsResult.readStateSnapshots = {};
          applyArgumentsResult.processForumChannel(channel.guild_id, channelId);
        }
        tmp2 = null != channel && channel.isForumLikeChannel();
      }
    };
    applyArgumentsResult.processForumChannel = function processForumChannel(guild_id, channelId) {
      const threadsForParent = ActiveThreadsStore.getThreadsForParent(guild_id, channelId);
      const keys = SnowflakeUtilsDefault.keys(threadsForParent);
      const item = keys.forEach((item) => {
        const forumPostReadStatesById = applyArgumentsResult(dependencyMap[5]).getForumPostReadStatesById(item);
        if (null != forumPostReadStatesById) {
          readStateSnapshots.readStateSnapshots[item] = forumPostReadStatesById;
        }
        const obj = applyArgumentsResult(dependencyMap[5]);
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
    const tmp2 = channel.ownerId !== AuthenticationStore.getId();
    obj.isNew = tmp2;
    obj.hasUnreads = tmp2;
    this.readStateSnapshots[channel.id] = obj;
  }
};
const forumPostAnalyticsManager = new ForumPostAnalyticsManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/tracking/ForumPostAnalyticsManager.tsx");

export default forumPostAnalyticsManager;