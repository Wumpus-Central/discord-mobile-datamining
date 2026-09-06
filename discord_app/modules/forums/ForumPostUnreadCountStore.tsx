// discord_app/modules/forums/ForumPostUnreadCountStore.tsx
import _modDef38 from "../../../_runtime/metro/00038__.js";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import ActiveThreadsStore from "../threads/ActiveThreadsStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import ReadStateStore from "../../stores/ReadStateStore.tsx";

const dependencyMap = {};
let set = new Set();
const Store = initializeDefault.Store;
class ForumPostUnreadCountStore extends Store {}
const prototype = ForumPostUnreadCountStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ActiveThreadsStore, ChannelStore, ReadStateStore);
};
prototype["getCount"] = function getCount(arg0) {
  return dependencyMap[arg0];
};
prototype["getThreadIdsMissingCounts"] = function getThreadIdsMissingCounts(guild_id, threadIds) {
  _modDef38(ActiveThreadsStore.hasLoaded(guild_id), "must wait for THREAD_LIST_SYNC before calling this");
  return threadIds.filter((item) => {
    let tmp = !(item in dependencyMap);
    if (tmp) {
      tmp = !set.has(item);
    }
    return tmp;
  });
};
ForumPostUnreadCountStore.displayName = "ForumPostUnreadCountStore";
const forumPostUnreadCountStore = new ForumPostUnreadCountStore(DispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen() {
    closure_5 = {};
    set = new Set();
  },
  THREAD_CREATE: function handleThreadCreate(channel) {
    channel = channel.channel;
    let isNewlyCreated = channel.isNewlyCreated;
    if (isNewlyCreated) {
      const hasLoadedResult = ActiveThreadsStore.hasLoaded(channel.guild_id);
      if (hasLoadedResult) {
        closure_5[channel.id] = 0;
      }
      isNewlyCreated = hasLoadedResult;
    }
    return isNewlyCreated;
  },
  MESSAGE_CREATE: function handleMessageCreate(isPushNotification) {
    ({ channelId, optimistic } = isPushNotification);
    let tmp = !optimistic;
    if (!optimistic) {
      tmp = !isPushNotification.isPushNotification;
    }
    if (tmp) {
      if (channelId in dependencyMap) {
        dependencyMap[channelId] = +dependencyMap[channelId] + 1;
      }
      tmp = tmp3;
    }
    return tmp;
  },
  FORUM_UNREADS: function handleForumUnreads(threads) {
    threads = threads.threads;
    const item = threads.forEach((count) => {
      if (null != count.count) {
        dependencyMap[count.threadId] = count.count;
      }
    });
  },
  MESSAGE_ACK: function handleMessageAck(channelId) {
    channelId = channelId.channelId;
    if (!(channelId in closure_5)) {
      const channel = ChannelStore.getChannel(channelId);
      let parent_id;
      if (channel != null) {
        parent_id = channel.parent_id;
      }
      const channel1 = ChannelStore.getChannel(parent_id);
      let isForumLikeChannelResult;
      if (channel1 != null) {
        isForumLikeChannelResult = channel1.isForumLikeChannel();
      }
      if (!isForumLikeChannelResult) {
        return false;
      }
    }
    closure_5[channelId] = ReadStateStore.getUnreadCount(channelId);
  },
  REQUEST_FORUM_UNREADS: function handleRequestForumUnreads(threads) {
    threads = threads.threads;
    const item = threads.forEach((threadId) => set.add(threadId.threadId));
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/ForumPostUnreadCountStore.tsx");

export default forumPostUnreadCountStore;
