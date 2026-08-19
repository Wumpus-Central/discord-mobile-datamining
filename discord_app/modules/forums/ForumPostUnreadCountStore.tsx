// === Module 8514: set ===

// Module 8514 (set)
import _modDef38 from "module_38" /* 38 */;
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import handleThreadCreateOrUpdate from "handleThreadCreateOrUpdate" /* 4969 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import generateOldThreadCutoff from "generateOldThreadCutoff" /* 4772 */;

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
  return threadIds.filter((item, index) => {
    let tmp = !(item in closure_5);
    if (tmp) {
      tmp = !set.has(item);
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
    const item = threads.forEach((item, index) => {
      if (null != item.count) {
        closure_5[item.threadId] = item.count;
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
    const item = threads.forEach((item, index) => set.add(item.threadId));
  }
});
const result = require("obj132").fileFinishedImporting("modules/forums/ForumPostUnreadCountStore.tsx");

export default forumPostUnreadCountStore;