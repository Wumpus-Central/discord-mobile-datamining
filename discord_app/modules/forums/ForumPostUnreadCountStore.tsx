// === Module 7639: set ===

// Module 7639 (set)
import _modDef38 from "module_38" /* 38 */;
import initializeDefault from "initialize" /* 586 */;
import dispatcherDefault from "dispatcher" /* 706 */;
import closure_2 from "handleThreadCreateOrUpdate" /* 5457 */;
import closure_3 from "ensureGuildLoaded" /* 1386 */;
import closure_4 from "generateOldThreadCutoff" /* 4493 */;
import set from "set" /* 2 */;

let closure_5 = {};
let set = new Set();
const Store = initializeDefault.Store;
class ForumPostUnreadCountStore extends Store {
}
const prototype = ForumPostUnreadCountStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_2, closure_3, closure_4);
};
prototype["getCount"] = function getCount(arg0) {
  return dependencyMap[arg0];
};
prototype["getThreadIdsMissingCounts"] = function getThreadIdsMissingCounts(guild_id, threadIds) {
  _modDef38(closure_2.hasLoaded(guild_id), "must wait for THREAD_LIST_SYNC before calling this");
  return threadIds.filter((arg0) => {
    let tmp = !(arg0 in closure_5);
    if (tmp) {
      tmp = !set.has(arg0);
    }
    return tmp;
  });
};
ForumPostUnreadCountStore.displayName = "ForumPostUnreadCountStore";
const forumPostUnreadCountStore = new ForumPostUnreadCountStore(dispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen() {
    closure_5 = {};
    set = new Set();
  },
  THREAD_CREATE: function handleThreadCreate(channel) {
    channel = channel.channel;
    let isNewlyCreated = channel.isNewlyCreated;
    if (isNewlyCreated) {
      const hasLoadedResult = closure_2.hasLoaded(channel.guild_id);
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
        closure_5[count.threadId] = count.count;
      }
    });
  },
  MESSAGE_ACK: function handleMessageAck(channelId) {
    channelId = channelId.channelId;
    if (!(channelId in closure_5)) {
      const channel = store.getChannel(channelId);
      let parent_id;
      if (channel != null) {
        parent_id = channel.parent_id;
      }
      const channel1 = store.getChannel(parent_id);
      let isForumLikeChannelResult;
      if (channel1 != null) {
        isForumLikeChannelResult = channel1.isForumLikeChannel();
      }
      if (!isForumLikeChannelResult) {
        return false;
      }
    }
    closure_5[channelId] = unreadCount.getUnreadCount(channelId);
  },
  REQUEST_FORUM_UNREADS: function handleRequestForumUnreads(threads) {
    threads = threads.threads;
    const item = threads.forEach((threadId) => set.add(threadId.threadId));
  }
});
const result = set.fileFinishedImporting("modules/forums/ForumPostUnreadCountStore.tsx");

export default forumPostUnreadCountStore;