// discord_app/modules/forums/tracking/ForumPostAnalyticsManager.tsx
import SnowflakeUtilsDefault from "../../../utils/SnowflakeUtils.tsx";
import ForumUtils from "../ForumUtils.tsx";
import ActiveThreadsStore from "../../threads/ActiveThreadsStore.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";
import size from "../../../../_runtime/metro/00002__.js";

class ForumPostAnalyticsManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.readStateSnapshots = {};
    applyArgumentsResult.actions = {
      CHANNEL_SELECT(arg0) {
        return require.handleChannelSelect(arg0);
      },
      THREAD_CREATE(arg0) {
        return require.handleThreadCreate(arg0);
      },
    };
    applyArgumentsResult.handleChannelSelect = function handleChannelSelect(channelId) {
      channelId = channelId.channelId;
      if (null != channelId) {
        const channel = ChannelStore.getChannel(channelId);
        const tmp2 = null != channel && channel.isForumLikeChannel();
        if (tmp2) {
          require.readStateSnapshots = {};
          require.processForumChannel(channel.guild_id, channelId);
        }
      }
    };
    applyArgumentsResult.processForumChannel = function processForumChannel(guild_id, channelId) {
      let readStateSnapshots;
      const threadsForParent = ActiveThreadsStore.getThreadsForParent(guild_id, channelId);
      let obj = SnowflakeUtilsDefault;
      const keys = obj.keys(threadsForParent);
      const item = keys.forEach((item) => {
        const obj = ForumUtils;
        const forumPostReadStatesById = obj.getForumPostReadStatesById(item);
        if (null != forumPostReadStatesById) {
          readStateSnapshots.readStateSnapshots[item] = forumPostReadStatesById;
        }
      });
    };
    applyArgumentsResult.getReadStateSnapshotAnalytics = function getReadStateSnapshotAnalytics(id) {
      return require.readStateSnapshots[id];
    };
    return applyArgumentsResult;
  }
  handleThreadCreate(channel) {
    let tmp2;
    channel = channel.channel;
    if (channel.isForumPost()) {
      const self = this;
      const obj = { isNew: tmp2, hasUnreads: tmp2 };
      tmp2 = channel.ownerId !== AuthenticationStore.getId();
      this.readStateSnapshots[channel.id] = obj;
    }
  }
}
const prototype = ForumPostAnalyticsManager.prototype;
const forumPostAnalyticsManager = new ForumPostAnalyticsManager();
const result = size.fileFinishedImporting("modules/forums/tracking/ForumPostAnalyticsManager.tsx");

export default forumPostAnalyticsManager;
